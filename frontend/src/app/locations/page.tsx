import { getLocations } from '@/lib/utils';
import Link from 'next/link';

export default function AllLocationsPage() {
  // 1. Get all data (States)
  const states = getLocations();

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
      <div className="bg-white py-16 text-center border-b">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Techs Ready to Help in All Locations
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          We serve all major cities and more with thousands of technicians and consultants in the field every day.
        </p>
      </div>

      {/* --- STATE LIST --- */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-8">Select Your State</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {states.map((state) => (
            <Link 
              key={state.slug}
              href={`/locations/${state.slug}`}
              className="text-blue-600 hover:underline text-lg"
            >
              {state.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}