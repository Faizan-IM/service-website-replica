# import time
# import json
# import os
# from bs4 import BeautifulSoup
# from selenium import webdriver
# from selenium.webdriver.chrome.service import Service
# from webdriver_manager.chrome import ChromeDriverManager
# from selenium.webdriver.chrome.options import Options

# # --- CONFIGURATION ---
# STATE_SLUG = "tx"
# CITY_SLUG = "austin"

# def setup_driver():
#     options = Options()
#     options.add_argument("--disable-blink-features=AutomationControlled") 
#     options.add_argument("user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36")
#     driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)
#     return driver

# def scrape_branches_for_city(state, city):
#     driver = setup_driver()
#     # We go to the "Appliance Repair" specific page for the best list of branches
#     url = f"https://www.searshomeservices.com/locations/{state}/{city}/sears-appliance-repair"
    
#     branches_data = []

#     try:
#         print(f"🕵️  Visiting Branch Page: {url}")
#         driver.get(url)
#         print("⏳ Waiting for page to load...")
#         time.sleep(5)
        
#         soup = BeautifulSoup(driver.page_source, 'html.parser')
#         links = soup.find_all('a')
        
#         print(f"🔎 Scanning for physical branches in {city.capitalize()}...")
        
#         # Pattern: /locations/tx/austin/sears-appliance-repair/2901-s-capitol...
#         prefix = f"/locations/{state}/{city}/sears-appliance-repair/"
        
#         for link in links:
#             href = link.get('href')
#             text = link.get_text().strip() # This is usually the address (e.g. "2901 S Capitol...")
            
#             if href and href.startswith(prefix):
#                 slug = href.split("/")[-1]
                
#                 # Check if we already have this branch
#                 if not any(b['slug'] == slug for b in branches_data):
#                     print(f"   🏠 Found Branch: {text}")
                    
#                     # We can try to guess the zip code from the text if it's there, 
#                     # otherwise we'll leave it generic for now.
#                     # Usually the text on the page is just the street address.
                    
#                     branches_data.append({
#                         "name": "Sears Appliance Repair",
#                         "slug": slug,
#                         "address": text, # The link text is usually the address
#                         "phone": "(555) 123-4567", # Placeholder (Requires deeper scraping to get real phone)
#                         "zip_code": "00000" # Placeholder
#                     })

#         # Save Results
#         filename = f"scraped_branches_{city}.json"
#         with open(filename, "w") as f:
#             json.dump(branches_data, f, indent=4)
            
#         print(f"\n🎉 Success! Found {len(branches_data)} branches.")
#         print(f"📁 Saved to: {os.path.abspath(filename)}")

#     except Exception as e:
#         print(f"❌ Error: {e}")
        
#     finally:
#         driver.quit()

# if __name__ == "__main__":
#     scrape_branches_for_city(STATE_SLUG, CITY_SLUG)

import time
import json
import os
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.options import Options

# --- CONFIGURATION ---
STATE_SLUG = "tx"
CITY_SLUG = "austin"

# --- VAULT CONFIGURATION ---
# We define exactly where the data lives so the website and scraper share one brain.
DATA_DIR = os.path.join("src", "data")
DATA_FILE = os.path.join(DATA_DIR, "locations.json")

def setup_driver():
    options = Options()
    options.add_argument("--disable-blink-features=AutomationControlled") 
    options.add_argument("user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36")
    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)
    return driver

# --- HELPER: DATABASE MANAGEMENT ---
def load_database():
    """Reads the existing Vault file so we don't delete other cities."""
    if not os.path.exists(DATA_FILE):
        return []  # Start fresh if file doesn't exist
    try:
        with open(DATA_FILE, "r") as f:
            data = json.load(f)
            # Handle the 'default' export artifact if it exists
            if isinstance(data, dict) and "default" in data:
                return data["default"]
            return data
    except Exception as e:
        print(f"⚠️ Warning: Could not read existing DB ({e}). Starting fresh.")
        return []

def save_database(data):
    """Writes safely to the Vault."""
    os.makedirs(DATA_DIR, exist_ok=True)
    with open(DATA_FILE, "w") as f:
        json.dump(data, f, indent=4)
    print(f"✅ Vault Updated: {os.path.abspath(DATA_FILE)}")

def scrape_branches_for_city(state, city):
    driver = setup_driver()
    # We still scrape the Sears URL because that's where the data IS
    url = f"https://www.searshomeservices.com/locations/{state}/{city}/sears-appliance-repair"
    
    new_branches = []

    try:
        print(f"🕵️  Visiting Branch Page: {url}")
        driver.get(url)
        print("⏳ Waiting for page to load...")
        time.sleep(5)
        
        soup = BeautifulSoup(driver.page_source, 'html.parser')
        links = soup.find_all('a')
        
        print(f"🔎 Scanning for physical branches in {city.capitalize()}...")
        
        # We look for Sears links, but we will SAVE them as ServicePro
        prefix = f"/locations/{state}/{city}/sears-appliance-repair/"
        
        for link in links:
            href = link.get('href')
            raw_text = link.get_text().strip()
            
            if href and href.startswith(prefix):
                slug = href.split("/")[-1]
                
                # SANITIZATION: Remove "Sears" from the address/text immediately
                clean_address = raw_text.replace("Sears", "ServicePro").replace("sears", "servicepro")
                
                # Check for duplicates in our current session list
                if not any(b['slug'] == slug for b in new_branches):
                    print(f"   🏠 Found Branch: {clean_address}")
                    
                    new_branches.append({
                        "name": "ServicePro Appliance Repair",  # <--- FORCE CORRECT NAME
                        "slug": slug,
                        "address": clean_address,
                        "phone": "(800) 665-2127", # Using your official number
                        "zip_code": "" 
                    })

        # --- MERGE WITH DATABASE ---
        if new_branches:
            print(f"🔄 Merging {len(new_branches)} branches into the Vault...")
            db = load_database()
            
            # 1. Find or Create State
            state_obj = next((s for s in db if s["slug"] == state), None)
            if not state_obj:
                state_obj = {"name": state.upper(), "slug": state, "cities": []}
                db.append(state_obj)
            
            # 2. Find or Create City
            city_obj = next((c for c in state_obj["cities"] if c["slug"] == city), None)
            if not city_obj:
                city_obj = {"name": city.title().replace("-", " "), "slug": city, "branches": []}
                state_obj["cities"].append(city_obj)
            
            # 3. Update Branches (Overwrite old data for this city)
            city_obj["branches"] = new_branches
            
            save_database(db)
            
        else:
            print("⚠️ No branches found. Database not updated.")

    except Exception as e:
        print(f"❌ Error: {e}")
        
    finally:
        driver.quit()

if __name__ == "__main__":
    scrape_branches_for_city(STATE_SLUG, CITY_SLUG)