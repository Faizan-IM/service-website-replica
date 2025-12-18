import React from 'react';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import { redirect } from 'next/navigation';

// --- 1. DATA LOADING (Server Side) ---
// We load your "Vault" so the search bar knows real cities.
function getAllCities() {
  try {
    const filePath = path.join(process.cwd(), 'src', 'data', 'locations.json');
    if (!fs.existsSync(filePath)) return [];
    
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(fileContent);
    const states = Array.isArray(data) ? data : (data.default || []);

    // Flatten into a simple list: { label: "Austin, TX", url: "/locations/tx/austin" }
    let cityList = [];
    states.forEach((state: any) => {
      if (state.cities) {
        state.cities.forEach((city: any) => {
          cityList.push({
            label: `${city.name}, ${state.abbr}`,
            url: `/locations/${state.slug}/${city.slug}`,
            searchTerms: `${city.name} ${state.name} ${state.abbr}`.toLowerCase()
          });
        });
      }
    });
    return cityList;
  } catch (error) {
    console.error("Error loading cities:", error);
    return [];
  }
}

const allCities = getAllCities();

// --- 2. CLIENT COMPONENTS (Search Logic) ---
// We put this small interactive part inside the Server Component via a trick,
// or we just use a simple form action for now to keep it one file.
// For simplicity in this "Copy/Paste" solution, we will use a Client Component for the Hero.
// BUT since we are in a Server Component file, we'll extract the Search to a separate small component below.

import { SearchHero } from '@/components/SearchHero'; // We will create this next.

// --- 3. MAIN PAGE COMPONENT ---
export default function HomePage() {
  return (
    <main className="min-h-screen bg-white font-sans text-gray-900">
      
      {/* SECTION 1: HERO & SEARCH */}
      {/* We pass the city data to the client component */}
      <div className="relative bg-gray-900 text-white overflow-hidden">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-32 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 space-y-6">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight shadow-black drop-shadow-lg">
              Get in-home repair, <span className="text-red-600">quick.</span>
            </h1>
            <p className="text-xl md:text-2xl font-light text-gray-200 drop-shadow-md max-w-lg">
              Need us fast? We're in your neighborhood and we'll fix it, no matter where you bought it.
            </p>
          </div>

          {/* The "Schedule/Search" Card */}
          <div className="md:w-1/2 w-full flex justify-center md:justify-end">
             <SearchHero cities={allCities} />
          </div>
        </div>
      </div>

      {/* SECTION 2: AUTHORITY STATEMENT */}
      <div className="bg-gray-50 py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">Expert Appliance Repair & Home Services</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We're the nation's largest appliance repair service provider. Our technicians repair and maintain most major appliance brands, makes and models, no matter where you bought them. 
            <strong> ServicePro</strong> also provides HVAC repair, replacement, and maintenance services across the country.
          </p>
        </div>
      </div>

      {/* SECTION 3: THREE PILLARS (Services) */}
      <div className="max-w-7xl mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Column 1 */}
        <div className="space-y-4">
          <div className="h-48 bg-gray-200 rounded-lg bg-[url('https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
          <h3 className="text-2xl font-bold text-gray-900">Appliance Repair</h3>
          <p className="text-gray-600">
            ServicePro technicians perform millions of repairs annually. We're the #1 appliance repair service in the country, delivering guaranteed quality.
          </p>
          <ul className="grid grid-cols-2 gap-2 text-sm text-red-700 font-medium mt-2">
            <li>Refrigerators</li><li>Washers & Dryers</li>
            <li>Dishwashers</li><li>Ranges & Ovens</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="space-y-4">
          <div className="h-48 bg-gray-200 rounded-lg bg-[url('https://images.unsplash.com/photo-1504384308090-c54be05323bd?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
          <h3 className="text-2xl font-bold text-gray-900">HVAC Repair</h3>
          <p className="text-gray-600">
            ServicePro is the best solution for home HVAC repair, providing top-quality expertise for all your heating and cooling needs. Keep your home comfortable year-round.
          </p>
        </div>

        {/* Column 3 */}
        <div className="space-y-4">
          <div className="h-48 bg-gray-200 rounded-lg bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
          <h3 className="text-2xl font-bold text-gray-900">Home Warranty</h3>
          <p className="text-gray-600">
            With one of our affordable home warranty plans, you'll worry less about the cost of unexpected repairs. ServicePro Protect is the only nationwide provider with its own experts.
          </p>
        </div>
      </div>

      {/* SECTION 4: HOW IT WORKS */}
      <div className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How it works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-5xl mb-4">📅</div>
              <h4 className="text-xl font-bold mb-2">1. Book Online</h4>
              <p className="text-gray-600">Tell us the problem, and we'll schedule a local ServicePro technician to fix it ASAP.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-5xl mb-4">🚚</div>
              <h4 className="text-xl font-bold mb-2">2. Tech Arrives</h4>
              <p className="text-gray-600">We send alerts so you know exactly when our expert repair technician will be at your door.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-5xl mb-4">🔧</div>
              <h4 className="text-xl font-bold mb-2">3. Diagnosis & Fix</h4>
              <p className="text-gray-600">The technician assesses the issue and provides a complete estimate including parts and labor.</p>
            </div>

          </div>
        </div>
      </div>

      {/* SECTION 5: WHY CHOOSE US (Stats) */}
      <div className="bg-white py-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
           <h2 className="text-3xl font-bold text-center mb-10">Why Choose ServicePro?</h2>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
             <div>
               <div className="text-4xl font-extrabold text-red-600 mb-2">4M+</div>
               <div className="text-sm font-bold uppercase tracking-wide text-gray-500">Homes Serviced/Year</div>
             </div>
             <div>
               <div className="text-4xl font-extrabold text-red-600 mb-2">1M+</div>
               <div className="text-sm font-bold uppercase tracking-wide text-gray-500">5-Star Ratings</div>
             </div>
             <div>
               <div className="text-4xl font-extrabold text-red-600 mb-2">2,500+</div>
               <div className="text-sm font-bold uppercase tracking-wide text-gray-500">Expert Technicians</div>
             </div>
             <div>
               <div className="text-4xl font-extrabold text-red-600 mb-2">10+</div>
               <div className="text-sm font-bold uppercase tracking-wide text-gray-500">Years Experience Avg</div>
             </div>
           </div>
        </div>
      </div>

      {/* SECTION 6: FOOTER CTA */}
      <div className="bg-gray-900 text-white py-12 text-center">
        <h2 className="text-2xl font-bold mb-6">Ready to get your appliance working perfectly again?</h2>
        <button className="bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition shadow-lg">
          Schedule Repair Now
        </button>
        <p className="mt-4 text-gray-400">or call 1-800-SERVICE-PRO</p>
      </div>

    </main>
  );
}