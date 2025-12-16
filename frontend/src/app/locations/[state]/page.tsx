// import { getLocations } from '@/lib/utils';
// import { notFound } from 'next/navigation';
// import Link from 'next/link';

// type Props = {
//   params: Promise<{
//     state: string;
//   }>;
// };

// export default async function StatePage({ params }: Props) {
//   const { state: stateSlug } = await params;

//   // 1. Find the State Data
//   const allData = getLocations();
//   const stateData = allData.find((s) => s.slug === stateSlug);

//   if (!stateData) {
//     return notFound();
//   }

//   return (
//     <div className="min-h-screen font-sans text-gray-800">
//       {/* --- HEADER --- */}
//       <header className="border-b border-gray-200 sticky top-0 bg-white z-50">
//         <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
//           <div className="text-2xl font-bold text-blue-900">Sears <span className="font-light text-blue-600">Home Services</span></div>
//           <button className="bg-blue-600 text-white px-6 py-2 rounded font-bold hover:bg-blue-700">
//             Schedule Now
//           </button>
//         </div>
//       </header>

//       {/* --- HERO SECTION --- */}
//       <div className="bg-gray-100 py-16 text-center">
//         <h1 className="text-4xl font-bold text-gray-900 mb-4">
//           Appliance Repair & HVAC Services in {stateData.name}
//         </h1>
//         <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//           We serve all major cities in {stateData.name} with thousands of technicians in the field every day.
//         </p>
//       </div>

//       {/* --- CITIES GRID --- */}
//       <div className="max-w-7xl mx-auto px-4 py-16">
//         <h2 className="text-2xl font-bold mb-8 border-b pb-2">Cities We Serve in {stateData.name}</h2>
        
//         {/* List of Cities */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//           {stateData.cities.map((city) => (
//             <Link 
//               key={city.slug}
//               href={`/locations/${stateData.slug}/${city.slug}`}
//               className="block p-4 bg-white border border-gray-200 rounded hover:shadow-md hover:border-blue-500 transition-all text-blue-800 font-semibold text-center"
//             >
//               {city.name}
//             </Link>
//           ))}
//         </div>
//       </div>

//       {/* --- SEO TEXT BLOCK (Static) --- */}
//       <div className="bg-white py-12 border-t">
//          <div className="max-w-5xl mx-auto px-4 text-gray-600 text-sm leading-relaxed">
//            <p className="mb-4">
//              We provide home appliance repair and HVAC system services throughout all of the top cities in {stateData.name}! 
//              Whether you're looking for expert appliance repair, need to have your HVAC system fixed, or simply scheduling a maintenance call, 
//              Sears Home Services has expert technicians in your city.
//            </p>
//          </div>
//       </div>
//     </div>
//   );
// }

import { getLocations } from '@/lib/utils';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function StatePage({
  params,
}: {
  params: Promise<{ state: string }>;
}) {
  const { state: stateSlug } = await params;
  const stateData = getLocations().find((s) => s.slug === stateSlug);

  if (!stateData) {
    return notFound();
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 1. State Hero Section */}
      <div className="bg-brand-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-brand-red font-bold uppercase tracking-wider text-sm mb-2">
            Service Areas
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Appliance Repair in {stateData.name}
          </h1>
          <p className="text-gray-300 mt-4 max-w-2xl text-lg">
            Our certified local technicians are ready to help in {stateData.cities.length} cities across {stateData.name}. 
            Select your city to get started.
          </p>
        </div>
      </div>

      {/* 2. City Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stateData.cities.map((city) => (
            <Link
              key={city.slug}
              href={`/locations/${stateData.slug}/${city.slug}`}
              className="group block bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 hover:border-brand-red/30"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-red transition-colors">
                    {city.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    See Local Techs &rarr;
                  </p>
                </div>
                {/* Small Arrow Icon */}
                <div className="h-10 w-10 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-red-50 text-gray-400 group-hover:text-brand-red transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* 3. Empty State Handling */}
        {stateData.cities.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-300">
            <h3 className="text-lg font-medium text-gray-500">No cities listed yet.</h3>
            <p className="text-gray-400 text-sm">Our coverage is expanding!</p>
          </div>
        )}
      </div>
    </div>
  );
}