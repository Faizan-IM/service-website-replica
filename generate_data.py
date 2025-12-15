import json
import os

# --- PARENT CLASS ---
class LocationBase:
    """
    The Parent Class. 
    It holds the basic info that every location (State, City, or Branch) must have.
    """
    def __init__(self, name, slug):
        self.name = name
        self.slug = slug  # The part of the URL (e.g., 'tx', 'austin')

# --- CHILD CLASSES ---

class State(LocationBase):
    """
    Child Class for a State (e.g., Texas).
    It contains a list of Cities.
    """
    def __init__(self, name, slug, abbreviation):
        super().__init__(name, slug)
        self.abbreviation = abbreviation
        self.cities = [] # List to hold City objects

    def add_city(self, city):
        self.cities.append(city)

    def to_dict(self):
        return {
            "name": self.name,
            "slug": self.slug,
            "abbr": self.abbreviation,
            "cities": [city.to_dict() for city in self.cities]
        }

class City(LocationBase):
    """
    Child Class for a City (e.g., Austin).
    It contains a list of Branches/Addresses.
    """
    def __init__(self, name, slug, description):
        super().__init__(name, slug)
        self.description = description
        self.branches = [] # List to hold Branch objects

    def add_branch(self, branch):
        self.branches.append(branch)

    def to_dict(self):
        return {
            "name": self.name,
            "slug": self.slug,
            "description": self.description,
            "branches": [branch.to_dict() for branch in self.branches]
        }

class Branch(LocationBase):
    """
    Child Class for a specific physical branch/address.
    """
    def __init__(self, name, slug, address, phone, zip_code):
        super().__init__(name, slug)
        self.address = address
        self.phone = phone
        self.zip_code = zip_code

    def to_dict(self):
        return {
            "name": self.name,
            "slug": self.slug,
            "address": self.address,
            "phone": self.phone,
            "zip_code": self.zip_code
        }

# --- DATA GENERATION ---

def generate_database():
    # 1. Create the State (Texas)
    texas = State(name="Texas", slug="tx", abbreviation="TX")
    
    # 2. Create the City (Austin)
    austin = City(
        name="Austin", 
        slug="austin", 
        description="Proudly serving the Austin community with a variety of services."
    )

    # 3. Create Specific Branches for Austin
    # Note: The slug is the last part of the URL
    branch1 = Branch(
        name="Sears Appliance Repair",
        slug="2901-s-capitol-of-texas-highway",
        address="2901 S Capitol of Texas Highway",
        phone="(512) 337-4522",
        zip_code="78746"
    )

    branch2 = Branch(
        name="Sears Appliance Repair",
        slug="12625-n-i-h-35",
        address="12625 N I-H 35",
        phone="(512) 595-7278",
        zip_code="78753"
    )

    # 4. Connect them together
    austin.add_branch(branch1)
    austin.add_branch(branch2)
    texas.add_city(austin)

    # --- ADDING ANOTHER STATE (North Dakota) TO PROVE IT WORKS ---
    nd = State(name="North Dakota", slug="nd", abbreviation="ND")
    bismarck = City(name="Bismarck", slug="bismarck", description="Expert technicians in Bismarck.")
    branch_nd = Branch(
        name="Sears Appliance Repair", 
        slug="2700-state-st", 
        address="2700 State St", 
        phone="(701) 555-0199", 
        zip_code="58503"
    )
    bismarck.add_branch(branch_nd)
    nd.add_city(bismarck)

    # 5. Compile the final list
    all_data = [texas.to_dict(), nd.to_dict()]

    # 6. Save to a JSON file (This is our 'Local Database')
    file_path = "locations.json"
    with open(file_path, "w") as f:
        json.dump(all_data, f, indent=4)
    
    print(f"✅ Database generated successfully at: {os.path.abspath(file_path)}")

# Run the generator
if __name__ == "__main__":
    generate_database()