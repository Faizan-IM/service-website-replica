// import { getLocations } from '@/lib/utils';
// import Link from 'next/link';
// import { notFound } from 'next/navigation';
// import { HowItWorks, BrandsWeRepair, WhyChooseUs, FAQ } from '@/components/SharedSections';

// export default async function ServiceTypePage({
//   params,
// }: {
//   params: Promise<{ state: string; city: string }>;
// }) {
//   const { state: stateSlug, city: citySlug } = await params;
//   const stateData = getLocations().find((s) => s.slug === stateSlug);
//   const cityData = stateData?.cities.find((c) => c.slug === citySlug);

//   if (!stateData || !cityData) {
//     return notFound();
//   }

//   return (
//     <div className="bg-white min-h-screen font-sans">
      
//       {/* 1. BREADCRUMBS */}
//       <div className="bg-white border-b border-gray-200">
//         <div className="max-w-7xl mx-auto px-4 py-4 text-sm text-gray-500">
//             <Link href="/locations" className="hover:text-brand-red">Locations</Link> / 
//             <Link href={`/locations/${stateSlug}`} className="hover:text-brand-red px-1">{stateData.name}</Link> / 
//             <Link href={`/locations/${stateSlug}/${citySlug}`} className="hover:text-brand-red px-1">{cityData.name}</Link> /
//             <span className="text-gray-900 font-bold px-1">Appliance Repair</span>
//         </div>
//       </div>

//       {/* 2. HERO SECTION */}
//       <div className="relative bg-brand-dark text-white overflow-hidden">
//         <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
//           <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
//             Premier Appliance Repair in <span className="text-brand-red">{cityData.name}</span>
//           </h1>
//           <p className="text-xl text-gray-300 max-w-2xl mb-8">
//             Expert technicians in your neighborhood. We fix refrigerators, washers, dryers, and more. 
//             Trusted by thousands of {cityData.name} residents.
//           </p>
//           <div className="flex gap-4">
//             <button className="bg-brand-red text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-red-600 transition-all">
//               Schedule Service Now
//             </button>
//           </div>
//         </div>
//         {/* Abstract Background Decoration */}
//         <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-800 to-transparent opacity-50"></div>
//       </div>

//       {/* 3. MAIN CONTENT (Locations & Description) */}
//       <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
//         <div className="lg:col-span-2">
//             <h2 className="text-2xl font-bold text-brand-dark mb-4">Local ServicePro Centers</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
//                 {cityData.branches.map(branch => (
//                     <Link key={branch.slug} href={`/locations/${stateSlug}/${citySlug}/sears-appliance-repair/${branch.slug}`}
//                         className="p-6 border border-gray-200 rounded-xl hover:border-brand-red hover:shadow-md transition-all group">
//                         <h3 className="font-bold text-lg group-hover:text-brand-red">{branch.address}</h3>
//                         <p className="text-sm text-gray-500">View Branch Details &rarr;</p>
//                     </Link>
//                 ))}
//             </div>

//             <div className="prose prose-lg text-gray-600">
//                 <h3 className="text-brand-dark font-bold">Comprehensive Repair Services</h3>
//                 <p>
//                     ServicePro is {cityData.name}'s leading provider for home appliance care. Whether your refrigerator isn't cooling or your dryer isn't heating, our local team is ready to help. We offer same-day and next-day appointments to get your home running smoothly again.
//                 </p>
//             </div>
//         </div>
        
//         {/* Sticky Sidebar */}
//         <div className="lg:col-span-1">
//              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 sticky top-24">
//                 <h3 className="font-bold text-xl mb-4">Why Wait?</h3>
//                 <p className="text-sm text-gray-500 mb-6">Our trucks are fully stocked and in your area right now.</p>
//                 <button className="w-full bg-brand-dark text-white font-bold py-3 rounded-full mb-3 hover:bg-black">
//                     Check Availability
//                 </button>
//              </div>
//         </div>
//       </div>

//       {/* 4. SHARED SECTIONS */}
//       <HowItWorks />
//       <BrandsWeRepair />
//       <WhyChooseUs />
      
//       {/* 5. REVIEWS (Five Star Service) */}
//       <section className="py-16 bg-white text-center">
//         <h2 className="text-3xl font-extrabold text-brand-dark mb-4 uppercase tracking-wide">Five Star Service</h2>
//         <p className="text-gray-500 mb-8">With thousands of 5-star reviews, you don't have to take our word for it.</p>
//         <div className="flex justify-center gap-2 text-yellow-400 text-3xl mb-8">★★★★★</div>
//         <button className="text-brand-red font-bold underline">Read Local Reviews</button>
//       </section>

//       <FAQ city={cityData.name} />

//       {/* 6. BOTTOM CTA */}
//       <div className="bg-brand-red py-12 text-center text-white">
//         <h2 className="text-2xl font-bold mb-4">Need a Repair in {cityData.name}?</h2>
//         <button className="bg-white text-brand-red px-8 py-3 rounded-full font-bold hover:bg-gray-100">
//             Get Started
//         </button>
//       </div>
//     </div>
//   );
// }

import { getLocations } from '@/lib/utils';
import { notFound } from 'next/navigation';
import Link from 'next/link';

type Props = {
  params: Promise<{
    state: string;
    city: string;
  }>;
};

export default async function CityServicePage({ params }: Props) {
  const { state: stateSlug, city: citySlug } = await params;

  // 1. Fetch Data
  const stateData = getLocations().find((s) => s.slug === stateSlug);
  const cityData = stateData?.cities.find((c) => c.slug === citySlug);

  if (!stateData || !cityData) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      
      {/* --- 1. HERO SECTION (Dark Branding) --- */}
      <div className="bg-[#111] text-white pt-20 pb-24 relative overflow-hidden">
        {/* Optional: Add a subtle background image overlay here if you have one */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-80 z-0" />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-red-600 font-bold uppercase tracking-wider text-sm">
              Local Service
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-2 mb-6 leading-tight">
              Appliance Repair in <span className="text-red-600">{cityData.name}</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-lg">
              Expert technicians in your neighborhood. We fix refrigerators, washers, dryers, and more. 
              Trusted by thousands of {cityData.name} residents.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-red-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-all shadow-lg shadow-red-900/20">
                Book Online Now
              </button>
              <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all border border-gray-200">
                Call (800) 665-2127
              </button>
            </div>
          </div>
          
          {/* Hero Decoration/Placeholder for Tech Image */}
          <div className="hidden md:block relative h-full min-h-[300px] bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden">
             {/* Replace with actual image <Image src="..." /> */}
             <div className="absolute inset-0 flex items-center justify-center text-gray-600 font-bold text-xl">
                Technician Image
             </div>
          </div>
        </div>
      </div>

      {/* --- 2. LOCAL INFO BAR --- */}
      <div className="bg-gray-50 border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-3 text-sm text-gray-600">
            <Link href={`/locations/${stateData.slug}`} className="hover:text-red-600 transition-colors">
              {stateData.name}
            </Link>
            <span>/</span>
            <span className="font-semibold text-gray-900">{cityData.name}</span>
        </div>
      </div>

      {/* --- 3. HOW IT WORKS --- */}
      <div className="py-20 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            { title: 'Schedule Online', desc: 'Book your appointment in less than a minute.', icon: '📅' },
            { title: 'We Diagnose', desc: 'Our expert techs arrive, diagnose the issue, and quote.', icon: '🔍' },
            { title: 'We Fix It', desc: 'We carry most parts on the truck for fast repairs.', icon: '🔧' }
          ].map((step, idx) => (
            <div key={idx} className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
              <p className="text-gray-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* --- 4. FEATURES (Dark Cards) --- */}
      <div className="bg-[#111] text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Expert Technicians', desc: 'Background-checked, fully trained, and average 10+ years exp.' },
              { title: '90-Day Guarantee', desc: 'We stand by our work. If the part fails within 90 days, we fix it free.' },
              { title: 'Flexible Scheduling', desc: 'Morning, afternoon, and Saturday appointments available.' }
            ].map((feature, idx) => (
              <div key={idx} className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-red-600 transition-colors group">
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-red-500 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- 5. BRANDS WE REPAIR --- */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-10 text-gray-900">Brands We Repair in {cityData.name}</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['Kenmore', 'GE', 'Samsung', 'LG', 'Whirlpool', 'Maytag', 'Bosch', 'Frigidaire'].map((brand) => (
              <span 
                key={brand} 
                className="bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200 text-gray-600 font-medium hover:text-red-600 hover:border-red-200 transition-all cursor-default"
              >
                {brand}
              </span>
            ))}
          </div>
          <p className="mt-8 text-sm text-gray-500">And many more...</p>
        </div>
      </div>

      {/* --- 6. FAQ SECTION --- */}
      <div className="py-20 max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            `Do you service my area in ${cityData.name}?`,
            'Is there a warranty on repairs?',
            'How much does the diagnostic cost?'
          ].map((question, idx) => (
            <details key={idx} className="group bg-white rounded-lg border border-gray-200 overflow-hidden">
              <summary className="flex justify-between items-center p-6 cursor-pointer font-semibold text-gray-800 hover:bg-gray-50 transition-colors list-none">
                {question}
                <span className="text-red-600 transform group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                Yes! We have local technicians covering all neighborhoods in {cityData.name}. 
                Our standard warranty covers parts and labor for 90 days.
              </div>
            </details>
          ))}
        </div>
      </div>

    </div>
  );
}