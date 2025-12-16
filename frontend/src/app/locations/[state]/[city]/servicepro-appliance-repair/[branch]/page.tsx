import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';

// --- Interfaces ---
interface Branch {
  name: string;
  slug: string;
  address: string;
  phone: string;
  zip_code: string;
}
interface City {
  name: string;
  slug: string;
  branches: Branch[];
}
interface State {
  name: string;
  slug: string;
  cities: City[];
}

async function getBranchData(stateSlug: string, citySlug: string, branchSlug: string) {
  // 1. Point to the NEW Vault Location: src/data/locations.json
  const filePath = path.join(process.cwd(), 'src', 'data', 'locations.json');
  
  // 2. Safety Check
  if (!fs.existsSync(filePath)) {
    console.error(`❌ CRITICAL: File missing at ${filePath}`);
    return null;
  }

  // 3. Read & Parse
  let states: State[] = [];
  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const rawData = JSON.parse(fileContent);
    
    // Handle "default" export artifact if present, or direct array
    if (Array.isArray(rawData)) states = rawData;
    else if (rawData.default && Array.isArray(rawData.default)) states = rawData.default;
    else if (rawData.states && Array.isArray(rawData.states)) states = rawData.states;
    
  } catch (error) {
    console.error("Error reading JSON:", error);
    return null;
  }

  // 4. Find Data
  const stateData = states.find(s => s.slug.toLowerCase() === stateSlug.toLowerCase());
  if (!stateData) return { error: "STATE_NOT_FOUND", availableStates: states.map(s => s.slug) };

  const cityData = stateData.cities.find(c => c.slug.toLowerCase() === citySlug.toLowerCase());
  if (!cityData) return { error: "CITY_NOT_FOUND", availableCities: stateData.cities.map(c => c.slug) };

  const branchData = cityData.branches.find(b => 
      b.slug === branchSlug || b.slug.endsWith(branchSlug) || b.slug.includes(branchSlug)
  );
  if (!branchData) return { error: "BRANCH_NOT_FOUND", availableBranches: cityData.branches.map(b => b.slug) };

  return { success: true, data: branchData, city: cityData.name, state: stateData.name };
}

export default async function Page({ 
  params 
}: { 
  params: { state: string; city: string; branch: string } 
}) {
  const { state, city, branch } = await params;
  
  const result = await getBranchData(state, city, branch);

  if (!result || result.error) {
    return notFound(); // Or show the debug view if you prefer
  }

  const data = result.data as Branch;
  const cleanAddress = data.address ? data.address.replace(/([a-z])(ServicePro)/, '$1 $2') : "";
  const displayName = data.name ? data.name.replace(/Sears/gi, "ServicePro") : "ServicePro Appliance Repair";

  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="bg-gray-900 text-white pt-16 pb-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block bg-red-600 text-white text-xs font-bold px-2 py-1 mb-4 uppercase tracking-wider rounded">
            Official Service Center
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            Appliance Repair in <span className="text-red-500">{result.city}, {result.state}</span>
          </h1>
          <h2 className="text-xl text-gray-400 font-medium">{displayName}</h2>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 -mt-10 mb-20">
        <div className="bg-white rounded-xl shadow-2xl border border-gray-100 p-8 md:p-12 flex flex-col md:flex-row gap-10">
           <div className="flex-1 space-y-6">
             <div>
               <h3 className="text-gray-900 font-bold text-lg uppercase tracking-wide mb-2">Service Location</h3>
               <p className="text-2xl text-gray-800 font-light leading-snug">{cleanAddress || data.address}</p>
             </div>
             <div className="flex items-center space-x-2 text-green-600 font-medium">
                <span>●</span> <span>Open Now • Accepting New Appointments</span>
             </div>
           </div>
           <div className="flex-1 flex flex-col justify-center space-y-4">
             <a href={`tel:${data.phone}`} className="w-full flex justify-center py-4 px-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition">
               📞 Call {data.phone}
             </a>
           </div>
        </div>
      </div>
    </div>
  );
}