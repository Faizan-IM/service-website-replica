import { getLocations } from '@/lib/utils';
import { notFound } from 'next/navigation';
import Link from 'next/link';

type Props = {
  params: Promise<{
    state: string;
    city: string;
  }>;
};

export default async function ServiceLandingPage({ params }: Props) {
  const { state: stateSlug, city: citySlug } = await params;

  // 1. Find Data
  const allData = getLocations();
  const stateData = allData.find((s) => s.slug === stateSlug);
  const cityData = stateData?.cities.find((c) => c.slug === citySlug);

  if (!stateData || !cityData) {
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

      {/* --- HERO --- */}
      <div className="relative bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Expert Appliance Repair in {cityData.name}, {stateData.abbr}
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              We have local technicians ready to fix your refrigerator, washer, dryer, oven, and more.
            </p>
            <div className="flex gap-4">
               <button className="bg-blue-600 text-white px-8 py-3 rounded font-bold hover:bg-blue-700 text-lg">
                 Schedule Repair
               </button>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="font-bold text-xl mb-4 text-center">Select Your Local Branch</h3>
            <ul className="space-y-3">
              {cityData.branches.map(branch => (
                <li key={branch.slug}>
                  <Link 
                    href={`/locations/${stateData.slug}/${cityData.slug}/sears-appliance-repair/${branch.slug}`}
                    className="block border border-gray-200 p-3 rounded hover:border-blue-500 hover:bg-blue-50 transition-colors"
                  >
                    <span className="font-bold text-blue-800 block">{branch.address}</span>
                    <span className="text-sm text-gray-500">{cityData.name}, {stateData.abbr}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* --- SERVICES LIST --- */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
           <h2 className="text-3xl font-bold text-center mb-12">What We Repair in {cityData.name}</h2>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {['Refrigerators', 'Washers', 'Dryers', 'Dishwashers', 'Ovens', 'Ranges', 'Freezers', 'Ice Makers'].map(item => (
                <div key={item} className="p-4 border rounded hover:shadow-md transition-shadow">
                   <div className="font-bold text-gray-700">{item}</div>
                </div>
              ))}
           </div>
        </div>
      </div>

    </div>
  );
}