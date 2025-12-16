# import time
# import json
# import os
# from bs4 import BeautifulSoup
# from selenium import webdriver
# from selenium.webdriver.chrome.service import Service
# from webdriver_manager.chrome import ChromeDriverManager
# from selenium.webdriver.chrome.options import Options

# # --- CONFIGURATION ---
# TARGET_STATE_SLUG = "tx"  # We are testing with Texas first

# def setup_driver():
#     options = Options()
#     options.add_argument("--disable-blink-features=AutomationControlled") 
#     options.add_argument("user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36")
#     driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)
#     return driver

# def scrape_cities_for_state(state_slug):
#     # 1. Setup
#     driver = setup_driver()
#     url = f"https://www.searshomeservices.com/locations/{state_slug}"
    
#     cities_data = []

#     try:
#         print(f"🤠 Visiting Texas page: {url}")
#         driver.get(url)
        
#         # 2. Wait for page load
#         print("⏳ Waiting for page to load...")
#         time.sleep(5)
        
#         # 3. Parse HTML
#         soup = BeautifulSoup(driver.page_source, 'html.parser')
#         links = soup.find_all('a')
        
#         print(f"🔎 Scanning for cities in {state_slug.upper()}...")
        
#         # 4. Filter for City Links
#         # Pattern: /locations/tx/austin
#         prefix = f"/locations/{state_slug}/"
        
#         for link in links:
#             href = link.get('href')
#             text = link.get_text().strip()
            
#             if href and href.startswith(prefix):
#                 # Clean up the slug
#                 parts = href.split("/")
#                 # Standard link is ['', 'locations', 'tx', 'austin'] -> len 4
#                 if len(parts) == 4:
#                     city_slug = parts[3]
                    
#                     # Avoid duplicates or empty text
#                     if city_slug and text:
#                         # Check if we already added this city (sometimes links repeat)
#                         if not any(c['slug'] == city_slug for c in cities_data):
#                             print(f"   🏙️  Found City: {text} ({city_slug})")
#                             cities_data.append({
#                                 "name": text,
#                                 "slug": city_slug,
#                                 "description": f"Appliance repair services in {text}."
#                             })

#         # 5. Save Results
#         filename = f"scraped_cities_{state_slug}.json"
#         with open(filename, "w") as f:
#             json.dump(cities_data, f, indent=4)
            
#         print(f"\n🎉 Success! Found {len(cities_data)} cities in {state_slug.upper()}.")
#         print(f"📁 Saved to: {os.path.abspath(filename)}")

#     except Exception as e:
#         print(f"❌ Error: {e}")
        
#     finally:
#         driver.quit()

# if __name__ == "__main__":
#     scrape_cities_for_state(TARGET_STATE_SLUG)

import time
import json
import os
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.options import Options

# --- CONFIGURATION ---
TARGET_STATE_SLUG = "tx" 
TARGET_STATE_NAME = "Texas" # Helpful for creating the state if it's missing

# --- VAULT CONFIGURATION ---
DATA_DIR = os.path.join("src", "data")
DATA_FILE = os.path.join(DATA_DIR, "locations.json")

def setup_driver():
    options = Options()
    options.add_argument("--disable-blink-features=AutomationControlled") 
    options.add_argument("user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36")
    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)
    return driver

# --- DATABASE HELPERS ---
def load_database():
    if not os.path.exists(DATA_FILE):
        return []
    try:
        with open(DATA_FILE, "r") as f:
            data = json.load(f)
            if isinstance(data, dict) and "default" in data: return data["default"]
            return data
    except:
        return []

def save_database(data):
    os.makedirs(DATA_DIR, exist_ok=True)
    with open(DATA_FILE, "w") as f:
        json.dump(data, f, indent=4)
    print(f"✅ Vault Updated: {os.path.abspath(DATA_FILE)}")

def scrape_cities_for_state(state_slug, state_name):
    driver = setup_driver()
    url = f"https://www.searshomeservices.com/locations/{state_slug}"
    
    new_cities = []

    try:
        print(f"🤠 Visiting {state_name} page: {url}")
        driver.get(url)
        print("⏳ Waiting for page to load...")
        time.sleep(5)
        
        soup = BeautifulSoup(driver.page_source, 'html.parser')
        links = soup.find_all('a')
        
        print(f"🔎 Scanning for cities in {state_slug.upper()}...")
        
        prefix = f"/locations/{state_slug}/"
        
        for link in links:
            href = link.get('href')
            text = link.get_text().strip()
            
            if href and href.startswith(prefix):
                parts = href.split("/")
                if len(parts) == 4:
                    city_slug = parts[3]
                    
                    if city_slug and text:
                        # Add to our temporary list if it's not already there
                        if not any(c['slug'] == city_slug for c in new_cities):
                            print(f"   🏙️  Found City: {text}")
                            new_cities.append({
                                "name": text,
                                "slug": city_slug,
                                "description": f"Appliance repair services in {text}.",
                                "branches": [] # Initialize empty, branches added later
                            })

        # --- MERGE WITH VAULT ---
        if new_cities:
            print(f"🔄 Merging {len(new_cities)} cities into the Vault...")
            db = load_database()
            
            # 1. Find or Create State
            state_obj = next((s for s in db if s["slug"] == state_slug), None)
            if not state_obj:
                print(f"   + Creating new state entry: {state_name}")
                state_obj = {
                    "name": state_name, 
                    "slug": state_slug, 
                    "abbr": state_slug.upper(), 
                    "cities": []
                }
                db.append(state_obj)
            
            # 2. Merge Cities (Don't overwrite existing cities with branches!)
            count_added = 0
            for new_city in new_cities:
                # Check if this city already exists in the DB
                existing_city = next((c for c in state_obj["cities"] if c["slug"] == new_city["slug"]), None)
                
                if not existing_city:
                    # Only add if it DOES NOT exist
                    state_obj["cities"].append(new_city)
                    count_added += 1
            
            save_database(db)
            print(f"🎉 Added {count_added} new cities to {state_name}.")
            
        else:
            print("⚠️ No cities found.")

    except Exception as e:
        print(f"❌ Error: {e}")
        
    finally:
        driver.quit()

if __name__ == "__main__":
    scrape_cities_for_state(TARGET_STATE_SLUG, TARGET_STATE_NAME)