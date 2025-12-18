import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import fs from 'fs';
import path from 'path';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getLocations() {
  try {
    // FIX: Pointing to the correct 'src/data' folder
    const filePath = path.join(process.cwd(), 'src', 'data', 'locations.json');

    if (!fs.existsSync(filePath)) {
      console.error(`❌ Vault missing at: ${filePath}`);
      return [];
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContent);

    if (Array.isArray(data)) return data;
    if (data.default) return data.default;
    return [];

  } catch (error) {
    console.error("Error reading locations:", error);
    return [];
  }
}