# import json
# import time
# import os
# from bs4 import BeautifulSoup
# from selenium import webdriver
# from selenium.webdriver.chrome.service import Service
# from webdriver_manager.chrome import ChromeDriverManager
# from selenium.webdriver.chrome.options import Options

# # --- CONFIGURATION ---
# OUTPUT_FILE = "frontend/src/app/locations.json"
# # 🔴 LIMITS REMOVED FOR FULL SCALE RUN
# LIMIT_STATES = None 
# LIMIT_CITIES = None 

# def setup_driver():
#     options = Options()
#     # options.add_argument("--headless") # Keep visible so you can monitor progress
#     options.add_argument("--disable-blink-features=AutomationControlled") 
#     options.add_argument("user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36")
#     driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)
#     return driver

# def save_progress(data):
#     """Helper to save data immediately so we don't lose progress"""
#     with open(OUTPUT_FILE, "w") as f:
#         json.dump(data, f, indent=4)
#     print(f"   💾 Progress saved to {OUTPUT_FILE}")

# def scrape_states(driver):
#     print("🌎 Phase 1: Fetching State List...")
#     driver.get("https://www.searshomeservices.com/locations")
#     time.sleep(3)
    
#     soup = BeautifulSoup(driver.page_source, 'html.parser')
#     states = []
    
#     for link in soup.find_all('a'):
#         href = link.get('href')
#         text = link.get_text().strip()
#         if href and href.startswith("/locations/") and len(href.split("/")) == 3:
#             slug = href.split("/")[-1]
#             if len(slug) == 2:
#                 states.append({
#                     "name": text, 
#                     "slug": slug, 
#                     "abbr": slug.upper(), 
#                     "cities": []
#                 })
    
#     # Remove limit logic
#     return states

# def scrape_cities(driver, state):
#     print(f"   📍 Scraping Cities for {state['name']}...")
#     try:
#         driver.get(f"https://www.searshomeservices.com/locations/{state['slug']}")
#         time.sleep(2) # Short delay
        
#         soup = BeautifulSoup(driver.page_source, 'html.parser')
#         cities = []
#         prefix = f"/locations/{state['slug']}/"
        
#         for link in soup.find_all('a'):
#             href = link.get('href')
#             text = link.get_text().strip()
#             if href and href.startswith(prefix):
#                 parts = href.split("/")
#                 if len(parts) == 4:
#                     city_slug = parts[3]
#                     if city_slug and text and not any(c['slug'] == city_slug for c in cities):
#                          cities.append({
#                              "name": text, 
#                              "slug": city_slug, 
#                              "description": f"Appliance repair services in {text}.",
#                              "branches": []
#                          })
#         return cities
#     except Exception as e:
#         print(f"   ❌ Failed to scrape cities for {state['name']}: {e}")
#         return []

# def scrape_branches(driver, state, city):
#     # print(f"      🏠 Getting branches for {city['name']}...") # Commented out to reduce noise
#     try:
#         driver.get(f"https://www.searshomeservices.com/locations/{state['slug']}/{city['slug']}/sears-appliance-repair")
#         # No sleep here to speed it up, assuming page load is fast enough or driver waits
        
#         soup = BeautifulSoup(driver.page_source, 'html.parser')
#         branches = []
#         prefix = f"/locations/{state['slug']}/{city['slug']}/sears-appliance-repair/"
        
#         for link in soup.find_all('a'):
#             href = link.get('href')
#             text = link.get_text().strip()
#             if href and href.startswith(prefix):
#                 slug = href.split("/")[-1]
#                 if not any(b['slug'] == slug for b in branches):
#                     branches.append({
#                         "name": "Sears Appliance Repair",
#                         "slug": slug,
#                         "address": text,
#                         "phone": "(800) 665-2127",
#                         "zip_code": "" 
#                     })
#         return branches
#     except Exception as e:
#         return []

# def main():
#     driver = setup_driver()
#     all_data = []
    
#     try:
#         # 1. Get List of States
#         states_list = scrape_states(driver)
#         print(f"✅ Found {len(states_list)} states to process.")
        
#         # 2. Loop through every state
#         for index, state in enumerate(states_list):
#             print(f"\n[{index+1}/{len(states_list)}] Processing State: {state['name']}")
            
#             # Get Cities for this state
#             cities = scrape_cities(driver, state)
#             state['cities'] = cities
            
#             # Get Branches for every city in this state
#             for city in cities:
#                 branches = scrape_branches(driver, state, city)
#                 city['branches'] = branches
#                 print(f"      -> {city['name']}: Found {len(branches)} branches")
            
#             # Add completed state to our master list
#             all_data.append(state)
            
#             # SAVE IMMEDIATELY after every state
#             save_progress(all_data)
            
#         print(f"\n🎉 FULL SCRAPE COMPLETE! Saved to {OUTPUT_FILE}")
        
#     except Exception as e:
#         print(f"❌ CRITICAL ERROR: {e}")
#         print("⚠️ Progress saved up to the last successful state.")
#     finally:
#         driver.quit()

# if __name__ == "__main__":
#     main()

# import json
# import time
# import os
# from bs4 import BeautifulSoup
# from selenium import webdriver
# from selenium.webdriver.chrome.service import Service
# from webdriver_manager.chrome import ChromeDriverManager
# from selenium.webdriver.chrome.options import Options

# # --- CONFIGURATION ---
# # Make sure this matches the path you used before!
# OUTPUT_FILE = "frontend/src/app/locations.json"

# def setup_driver():
#     options = Options()
#     options.add_argument("--disable-blink-features=AutomationControlled") 
#     options.add_argument("user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36")
#     driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)
#     return driver

# def load_existing_data():
#     """Reads the JSON file to see what we already finished."""
#     if os.path.exists(OUTPUT_FILE):
#         try:
#             with open(OUTPUT_FILE, "r") as f:
#                 data = json.load(f)
#                 print(f"📂 Loaded {len(data)} states from previous run.")
#                 return data
#         except:
#             print("⚠️ File exists but is empty or unreadable. Starting fresh.")
#             return []
#     return []

# def save_progress(data):
#     with open(OUTPUT_FILE, "w") as f:
#         json.dump(data, f, indent=4)
#     print(f"   💾 Progress saved.")

# def scrape_states(driver):
#     print("🌎 Fetching Master State List...")
#     driver.get("https://www.searshomeservices.com/locations")
#     time.sleep(3)
    
#     soup = BeautifulSoup(driver.page_source, 'html.parser')
#     states = []
    
#     for link in soup.find_all('a'):
#         href = link.get('href')
#         text = link.get_text().strip()
#         if href and href.startswith("/locations/") and len(href.split("/")) == 3:
#             slug = href.split("/")[-1]
#             if len(slug) == 2:
#                 states.append({
#                     "name": text, 
#                     "slug": slug, 
#                     "abbr": slug.upper(), 
#                     "cities": []
#                 })
#     return states

# def scrape_cities(driver, state):
#     print(f"   📍 Scraping Cities for {state['name']}...")
#     try:
#         driver.get(f"https://www.searshomeservices.com/locations/{state['slug']}")
#         time.sleep(2)
        
#         soup = BeautifulSoup(driver.page_source, 'html.parser')
#         cities = []
#         prefix = f"/locations/{state['slug']}/"
        
#         for link in soup.find_all('a'):
#             href = link.get('href')
#             text = link.get_text().strip()
#             if href and href.startswith(prefix):
#                 parts = href.split("/")
#                 if len(parts) == 4:
#                     city_slug = parts[3]
#                     if city_slug and text and not any(c['slug'] == city_slug for c in cities):
#                          cities.append({
#                              "name": text, 
#                              "slug": city_slug, 
#                              "description": f"Appliance repair services in {text}.",
#                              "branches": []
#                          })
#         return cities
#     except Exception as e:
#         print(f"   ❌ Failed to scrape cities for {state['name']}: {e}")
#         return []

# def scrape_branches(driver, state, city):
#     try:
#         driver.get(f"https://www.searshomeservices.com/locations/{state['slug']}/{city['slug']}/sears-appliance-repair")
#         # No sleep here to keep it moving fast
        
#         soup = BeautifulSoup(driver.page_source, 'html.parser')
#         branches = []
#         prefix = f"/locations/{state['slug']}/{city['slug']}/sears-appliance-repair/"
        
#         for link in soup.find_all('a'):
#             href = link.get('href')
#             text = link.get_text().strip()
#             if href and href.startswith(prefix):
#                 slug = href.split("/")[-1]
#                 if not any(b['slug'] == slug for b in branches):
#                     branches.append({
#                         "name": "Sears Appliance Repair",
#                         "slug": slug,
#                         "address": text,
#                         "phone": "(800) 665-2127",
#                         "zip_code": "" 
#                     })
#         return branches
#     except:
#         return []

# def main():
#     driver = setup_driver()
    
#     try:
#         # 1. Load what we already have
#         all_data = load_existing_data()
#         existing_slugs = [s['slug'] for s in all_data]
        
#         # 2. Get the full list from the web
#         all_possible_states = scrape_states(driver)
        
#         # 3. Filter: Only keep states we haven't done yet
#         states_to_do = [s for s in all_possible_states if s['slug'] not in existing_slugs]
        
#         print(f"🚀 Resuming: Found {len(states_to_do)} new states to process.")
        
#         # 4. Loop through the remaining states
#         for index, state in enumerate(states_to_do):
#             print(f"\n[{index+1}/{len(states_to_do)}] Processing State: {state['name']}")
            
#             # Scrape Cities
#             cities = scrape_cities(driver, state)
#             state['cities'] = cities
            
#             # Scrape Branches
#             for city in cities:
#                 branches = scrape_branches(driver, state, city)
#                 city['branches'] = branches
#                 print(f"      -> {city['name']}: Found {len(branches)} branches")
            
#             # Add to master list and SAVE
#             all_data.append(state)
#             save_progress(all_data)
            
#         print(f"\n🎉 FULL SCRAPE COMPLETE! All states saved to {OUTPUT_FILE}")
        
#     except Exception as e:
#         print(f"❌ Error: {e}")
#     finally:
#         driver.quit()

# if __name__ == "__main__":
#     main()

import json
import time
import os
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.options import Options

# --- CONFIGURATION ---
# FIX 1: Point to the new VAULT location
# We use os.path.join for safety across Windows/Mac
OUTPUT_DIR = os.path.join("frontend", "src", "data")
OUTPUT_FILE = os.path.join(OUTPUT_DIR, "locations.json")

def setup_driver():
    print("🔧 Setting up Chrome Driver...")
    options = Options()
    options.add_argument("--disable-blink-features=AutomationControlled") 
    options.add_argument("user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36")
    
    # --- STABILITY FIXES ---
    options.add_argument("--no-sandbox")
    options.add_argument("--disable-dev-shm-usage")
    options.add_argument("--disable-gpu")
    options.add_argument("--window-size=1920,1080")
    # Uncomment the next line if you want it to run invisibly (faster/more stable)
    # options.add_argument("--headless=new") 
    
    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)
    
    # Increase timeout to 3 minutes (default is often too short for heavy pages)
    driver.set_page_load_timeout(180)
    
    return driver

def load_existing_data():
    """Reads the JSON file to see what we already finished."""
    if os.path.exists(OUTPUT_FILE):
        try:
            with open(OUTPUT_FILE, "r") as f:
                data = json.load(f)
                # Handle 'default' wrapper if present
                if isinstance(data, dict) and "default" in data:
                    data = data["default"]
                print(f"📂 Loaded {len(data)} states from previous run.")
                return data
        except:
            print("⚠️ File exists but is empty or unreadable. Starting fresh.")
            return []
    return []

def save_progress(data):
    # FIX 2: Ensure the directory exists
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    
    with open(OUTPUT_FILE, "w") as f:
        json.dump(data, f, indent=4)
    print(f"   💾 Progress saved to {OUTPUT_FILE}")

def scrape_states(driver):
    print("🌎 Fetching Master State List...")
    driver.get("https://www.searshomeservices.com/locations")
    time.sleep(3)
    
    soup = BeautifulSoup(driver.page_source, 'html.parser')
    states = []
    
    for link in soup.find_all('a'):
        href = link.get('href')
        text = link.get_text().strip()
        if href and href.startswith("/locations/") and len(href.split("/")) == 3:
            slug = href.split("/")[-1]
            if len(slug) == 2:
                states.append({
                    "name": text, 
                    "slug": slug, 
                    "abbr": slug.upper(), 
                    "cities": []
                })
    return states

def scrape_cities(driver, state):
    print(f"   📍 Scraping Cities for {state['name']}...")
    try:
        driver.get(f"https://www.searshomeservices.com/locations/{state['slug']}")
        time.sleep(2)
        
        soup = BeautifulSoup(driver.page_source, 'html.parser')
        cities = []
        prefix = f"/locations/{state['slug']}/"
        
        for link in soup.find_all('a'):
            href = link.get('href')
            text = link.get_text().strip()
            if href and href.startswith(prefix):
                parts = href.split("/")
                if len(parts) == 4:
                    city_slug = parts[3]
                    if city_slug and text and not any(c['slug'] == city_slug for c in cities):
                         cities.append({
                             "name": text, 
                             "slug": city_slug, 
                             "description": f"Appliance repair services in {text}.",
                             "branches": []
                         })
        return cities
    except Exception as e:
        print(f"   ❌ Failed to scrape cities for {state['name']}: {e}")
        return []

def scrape_branches(driver, state, city):
    try:
        # We scrape the Sears URL because that is where the data is
        driver.get(f"https://www.searshomeservices.com/locations/{state['slug']}/{city['slug']}/sears-appliance-repair")
        # No sleep here to keep it moving fast
        
        soup = BeautifulSoup(driver.page_source, 'html.parser')
        branches = []
        prefix = f"/locations/{state['slug']}/{city['slug']}/sears-appliance-repair/"
        
        for link in soup.find_all('a'):
            href = link.get('href')
            raw_text = link.get_text().strip()
            
            if href and href.startswith(prefix):
                slug = href.split("/")[-1]
                
                # FIX 3: SANITIZE DATA ON THE FLY
                # Remove "Sears" from the address if it appears there
                clean_address = raw_text.replace("Sears", "ServicePro").replace("sears", "servicepro")
                
                if not any(b['slug'] == slug for b in branches):
                    branches.append({
                        "name": "ServicePro Appliance Repair", # <--- FORCE NEW NAME
                        "slug": slug,
                        "address": clean_address,
                        "phone": "(800) 665-2127",
                        "zip_code": "" 
                    })
        return branches
    except:
        return []

def main():
    driver = setup_driver()
    
    try:
        # 1. Load what we already have
        all_data = load_existing_data()
        existing_slugs = [s['slug'] for s in all_data]
        
        # 2. Get the full list from the web
        all_possible_states = scrape_states(driver)
        
        # 3. Filter: Only keep states we haven't done yet
        states_to_do = [s for s in all_possible_states if s['slug'] not in existing_slugs]
        
        print(f"🚀 Resuming: Found {len(states_to_do)} new states to process.")
        
        # 4. Loop through the remaining states
        for index, state in enumerate(states_to_do):
            print(f"\n[{index+1}/{len(states_to_do)}] Processing State: {state['name']}")
            
            # Scrape Cities
            cities = scrape_cities(driver, state)
            state['cities'] = cities
            
            # Scrape Branches
            for city in cities:
                branches = scrape_branches(driver, state, city)
                state['branches'] = branches # Note: In your JSON structure, branches usually live inside cities, but your code here adds them to state too. Assuming city['branches'] is what matters.
                city['branches'] = branches # Ensuring they are inside the city object
                print(f"      -> {city['name']}: Found {len(branches)} branches")
            
            # Add to master list and SAVE
            all_data.append(state)
            save_progress(all_data)
            
        print(f"\n🎉 FULL SCRAPE COMPLETE! All states saved to {OUTPUT_FILE}")
        
    except Exception as e:
        print(f"❌ Error: {e}")
    finally:
        driver.quit()

if __name__ == "__main__":
    main()