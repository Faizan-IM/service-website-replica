import { getLocations } from '@/lib/utils';
import { notFound } from 'next/navigation';
import Link from 'next/link';

type Props = {
  params: Promise<{
    state: string;
  }>;
};

export default async function StatePage({ params }: Props) {
  const { state: stateSlug } = await params;

  // 1. Find the State Data
  const allData = getLocations();
  const stateData = allData.find((s) => s.slug === stateSlug);

  if (!stateData) {
    return notFound();
  }

  return (
    <div className="min-h-screen font-sans text-gray-800">
      {/* --- HEADER --- */}
      <header className="border-b border-gray-200 sticky top-0 bg-white z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-900">Sears <span className="font-light text-blue-600">Home Services</span></div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded font-bold hover:bg-blue-700">
            Schedule Now
          </button>
        </div>
      </header>

      {/* --- HERO SECTION --- */}
      <div className="bg-gray-100 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Appliance Repair & HVAC Services in {stateData.name}
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          We serve all major cities in {stateData.name} with thousands of technicians in the field every day.
        </p>
      </div>

      {/* --- CITIES GRID --- */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-8 border-b pb-2">Cities We Serve in {stateData.name}</h2>
        
        {/* List of Cities */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stateData.cities.map((city) => (
            <Link 
              key={city.slug}
              href={`/locations/${stateData.slug}/${city.slug}`}
              className="block p-4 bg-white border border-gray-200 rounded hover:shadow-md hover:border-blue-500 transition-all text-blue-800 font-semibold text-center"
            >
              {city.name}
            </Link>
          ))}
        </div>
      </div>

      {/* --- SEO TEXT BLOCK (Static) --- */}
      <div className="bg-white py-12 border-t">
         <div className="max-w-5xl mx-auto px-4 text-gray-600 text-sm leading-relaxed">
           <p className="mb-4">
             We provide home appliance repair and HVAC system services throughout all of the top cities in {stateData.name}! 
             Whether you're looking for expert appliance repair, need to have your HVAC system fixed, or simply scheduling a maintenance call, 
             Sears Home Services has expert technicians in your city.
           </p>
         </div>
      </div>
    </div>
  );
}