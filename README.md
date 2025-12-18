# 🛠️ ServicePro: The Intelligent Repair Network

> *"Data is the soil in which the wisdom of the application grows."*

**ServicePro** is a high-performance, full-stack web application designed to replicate and improve upon national service directory architectures. Built with **Next.js 16 (Turbopack)** for a lightning-fast frontend and powered by a robust **Python/Selenium** scraping pipeline, it serves as a masterclass in dynamic routing, data sanitization, and automated information retrieval.

---

## 🏛️ The Architecture: "The Vault"

At the heart of ServicePro lies **The Vault** (`src/data/locations.json`). 

Unlike traditional architectures that scatter data across components or rely on fragile external APIs, ServicePro uses a "Single Source of Truth" philosophy. 
1.  **Centralized:** All geographical data (States ➝ Cities ➝ Branches) lives in one optimized JSON structure.
2.  **Type-Safe:** The frontend reads strictly from this Vault, preventing "undefined" runtime errors.
3.  **Sanitized:** The ingestion pipeline automatically cleans branding (converting "Sears" to "ServicePro") before data ever touches the UI.

---

## ⚡ Tech Stack

### **Frontend (The Face)**
* ![Next JS](https://img.shields.io/badge/Next-black?style=flat&logo=next.js&logoColor=white) **Next.js 16** - Server Side Rendering & Dynamic Routing.
* ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white) **TypeScript** - Strict typing for robust logic.
* ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white) **Tailwind CSS** - Modern, responsive styling.

### **Backend & Automation (The Brain)**
* ![Python](https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white) **Python 3.10+** - Data processing and automation.
* ![Selenium](https://img.shields.io/badge/-Selenium-43B02A?style=flat&logo=selenium&logoColor=white) **Selenium** - Browser automation for scraping.
* ![BeautifulSoup](https://img.shields.io/badge/BeautifulSoup-000000?style=flat&logo=python&logoColor=white) **BeautifulSoup4** - HTML parsing and data extraction.

---

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have the following installed:
* Node.js (v18+)
* Python (v3.10+)
* Google Chrome (for scraping)

### 2. Installation

Clone the repository and install dependencies:

# Clone the repo
git clone [https://github.com/YOUR_USERNAME/servicepro.git](https://github.com/YOUR_USERNAME/servicepro.git)
cd servicepro

# Install Frontend Dependencies
cd frontend
npm install

# Setup Python Environment (Root folder)
cd ..
python -m venv venv
# Windows
.\venv\Scripts\activate
# Mac/Linux
source venv/bin/activate

# Install Python Requirements
pip install selenium beautifulsoup4 webdriver-manager



---

##🧬 The Data PipelineServicePro features a multi-stage autonomous pipeline to populate The Vault.

| Script | Function |
| --- | --- |
| **`scraper.py`** | **The Surveyor.** Scrapes the master list of 50 US States and initializes the database structure. |
| **`scrape_cities.py`** | **The Explorer.** Digs into a specific state (e.g., Texas) and catalogs every city available. |
| **`scrape_branches.py`** | **The Miner.** Visits specific cities, extracts physical branch metadata, cleans the data, and saves it to The Vault. |
| **`build_database.py`** | **The Architect.** An automated loop that orchestrates the scraping of missing states to ensure 100% coverage. |

###How to Run the Pipeline**1. Initialize the Database (Fetch States)**

python scraper.py



**2. Populate Cities (e.g., for Texas)**
*Edit `scrape_cities.py` to set target state.*


python scrape_cities.py


**3. Extract & Sanitize Branches**
*Edit `scrape_branches.py` to set target city.*


python scrape_branches.py


---
```
##📂 Project Structure
servicepro/
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   └── locations/
│   │   │       └── [state]/[city]/[branch]/  # Dynamic Routing
│   │   ├── data/
│   │   │   └── locations.json                # 🔒 THE VAULT (Data Core)
│   │   └── lib/
│   │       └── utils.ts                      # Helper functions
│   ├── public/
│   └── package.json
├── venv/                                     # Python Virtual Env (Ignored)
├── scraper.py                                # Master State Scraper
├── scrape_cities.py                          # City Scraper
├── scrape_branches.py                        # Branch Scraper
├── build_database.py                         # Automation Script
└── README.md
```

##🛡️ The Philosophy of "ServicePro"This project is an exercise in **Data Sovereignty**. By scraping, cleaning, and hosting our own dataset, we decouple the application from third-party reliance.

* **Sanitization:** We do not just copy; we transform. "Sears" becomes "ServicePro".
* **Resilience:** If the source website goes down, ServicePro remains operational using cached Vault data.
* **Scalability:** The folder-based routing (`[state]/[city]`) allows for infinite SEO-friendly pages without bloating the codebase.

---

##🤝 ContributingContributions are welcome. Please ensure that any data-fetching logic writes strictly to `src/data/locations.json` and preserves the nested structure.

**Author:** Faizan

**License:** MIT

```

```
