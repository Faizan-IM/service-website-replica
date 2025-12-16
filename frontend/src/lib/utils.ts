import fs from 'fs';
import path from 'path';

// Define the shape of our data (Typescript helps us not make mistakes)
export type Branch = {
    name: string;
    slug: string;
    address: string;
    phone: string;
    zip_code: string;
};

export type City = {
    name: string;
    slug: string;
    description: string;
    branches: Branch[];
};

export type State = {
    name: string;
    slug: string;
    abbr: string;
    cities: City[];
};

// Function to read the data
export function getLocations(): State[] {
    // We look for locations.json inside src/app/data
    const filePath = path.join(process.cwd(), 'src', 'data', 'locations.json');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents);
}

// Helper to find specific data based on URL parameters
export function getLocationData(stateSlug: string, citySlug: string, branchSlug: string) {
    const data = getLocations();
    const state = data.find((s) => s.slug === stateSlug);
    if (!state) return null;

    const city = state.cities.find((c) => c.slug === citySlug);
    if (!city) return null;

    const branch = city.branches.find((b) => b.slug === branchSlug);
    if (!branch) return null;

    return { state, city, branch };
}