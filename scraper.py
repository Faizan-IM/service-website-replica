# import time
# import json
# import os
# from bs4 import BeautifulSoup
# from selenium import webdriver
# from selenium.webdriver.chrome.service import Service
# from webdriver_manager.chrome import ChromeDriverManager
# from selenium.webdriver.chrome.options import Options

# # 1. Setup Chrome
# def setup_driver():
#     print("🔧 Setting up Chrome Driver...")
#     options = Options()
#     # options.add_argument("--headless") # Keep this commented out so you can see it working
#     options.add_argument("--disable-blink-features=AutomationControlled") 
#     options.add_argument("user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36")
    
#     driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)
#     return driver

# def scrape_states():
#     driver = setup_driver()
#     url = "https://www.searshomeservices.com/locations"
    
#     try:
#         print(f"🕵️  Opening Browser to: {url}")
#         driver.get(url)
        
#         # 2. Wait for the page to load (Wait 5 seconds to be safe)
#         print("⏳ Waiting for page to load...")
#         time.sleep(5)
        
#         # 3. Get the HTML from the browser
#         page_source = driver.page_source
#         soup = BeautifulSoup(page_source, 'html.parser')
        
#         # 4. Find the links (Same logic as before)
#         states_data = []
#         links = soup.find_all('a')
        
#         print("🔎 Scanning page for States...")
        
#         for link in links:
#             href = link.get('href')
#             text = link.get_text().strip()
            
#             if href and href.startswith("/locations/") and len(href.split("/")) == 3:
#                 slug = href.split("/")[-1]
                
#                 if len(slug) == 2:
#                     print(f"   ✅ Found State: {text} ({slug})")
#                     states_data.append({
#                         "name": text,
#                         "slug": slug,
#                         "abbr": slug.upper()
#                     })

#         # 5. Save the data
#         if states_data:
#             with open("scraped_states.json", "w") as f:
#                 json.dump(states_data, f, indent=4)
#             print(f"\n🎉 Success! Found {len(states_data)} states.")
#             print(f"📁 Saved to: {os.path.abspath('scraped_states.json')}")
#         else:
#             print("⚠️ No states found. The page might have changed structure.")

#     except Exception as e:
#         print(f"❌ Error: {e}")
        
#     finally:
#         # Close the browser when done
#         driver.quit()

# if __name__ == "__main__":
#     scrape_states()

import time
import json
import os
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.options import Options

# --- VAULT CONFIGURATION ---
DATA_DIR = os.path.join("src", "data")
DATA_FILE = os.path.join(DATA_DIR, "locations.json")

def setup_driver():
    print("🔧 Setting up Chrome Driver...")
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

def scrape_states():
    driver = setup_driver()
    url = "https://www.searshomeservices.com/locations"
    
    new_states = []

    try:
        print(f"🕵️  Opening Browser to: {url}")
        driver.get(url)
        print("⏳ Waiting for page to load...")
        time.sleep(5)
        
        soup = BeautifulSoup(driver.page_source, 'html.parser')
        links = soup.find_all('a')
        
        print("🔎 Scanning page for States...")
        
        for link in links:
            href = link.get('href')
            text = link.get_text().strip()
            
            if href and href.startswith("/locations/") and len(href.split("/")) == 3:
                slug = href.split("/")[-1]
                
                if len(slug) == 2:
                    # Create the state object structure
                    state_obj = {
                        "name": text,
                        "slug": slug,
                        "abbr": slug.upper(),
                        "cities": [] # Initialize with empty cities list
                    }
                    new_states.append(state_obj)
                    print(f"   ✅ Found State: {text} ({slug})")

        # --- MERGE WITH VAULT ---
        if new_states:
            print(f"\n🔄 Merging {len(new_states)} states into the Vault...")
            db = load_database()
            
            count_new = 0
            for new_state in new_states:
                # Check if this state is already in the DB
                existing = next((s for s in db if s["slug"] == new_state["slug"]), None)
                
                if not existing:
                    db.append(new_state)
                    count_new += 1
                # If it exists, we skip it to preserve any cities/branches inside it
            
            save_database(db)
            print(f"🎉 Success! Added {count_new} new states to the database.")
            
        else:
            print("⚠️ No states found. The page might have changed structure.")

    except Exception as e:
        print(f"❌ Error: {e}")
        
    finally:
        driver.quit()

if __name__ == "__main__":
    scrape_states()