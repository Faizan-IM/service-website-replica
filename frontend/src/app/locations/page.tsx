// // import { getLocations } from '@/lib/utils';
// // import Link from 'next/link';

// // export default function AllLocationsPage() {
// //   // 1. Get all data (States)
// //   const states = getLocations();

// //   return (
// //     <div className="min-h-screen font-sans text-gray-800">
// //       {/* --- HEADER --- */}
// //       <header className="border-b border-gray-200 sticky top-0 bg-white z-50">
// //         <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
// //           <div className="text-2xl font-bold text-blue-900">Sears <span className="font-light text-blue-600">Home Services</span></div>
// //           <button className="bg-blue-600 text-white px-6 py-2 rounded font-bold hover:bg-blue-700">
// //             Schedule Now
// //           </button>
// //         </div>
// //       </header>

// //       {/* --- HERO SECTION --- */}
// //       <div className="bg-white py-16 text-center border-b">
// //         <h1 className="text-4xl font-bold text-gray-900 mb-4">
// //           Techs Ready to Help in All Locations
// //         </h1>
// //         <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
// //           We serve all major cities and more with thousands of technicians and consultants in the field every day.
// //         </p>
// //       </div>

// //       {/* --- STATE LIST --- */}
// //       <div className="max-w-7xl mx-auto px-4 py-16">
// //         <h2 className="text-2xl font-bold mb-8">Select Your State</h2>
        
// //         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
// //           {states.map((state) => (
// //             <Link 
// //               key={state.slug}
// //               href={`/locations/${state.slug}`}
// //               className="text-blue-600 hover:underline text-lg"
// //             >
// //               {state.name}
// //             </Link>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// import { getLocations } from '@/lib/utils';
// import Link from 'next/link';
// import Hero from '@/components/Hero'; // <--- Import the Hero

// export default function AllLocationsPage() {
//   const states = getLocations();

//   return (
//     <div className="font-sans">
      
//       {/* 1. PLACE HERO HERE (Right under the top of the page) */}
//       <Hero />

//       {/* 2. The existing content continues below */}
//       <div className="bg-white py-16 text-center border-b">
//         <h2 className="text-3xl font-extrabold text-brand-dark mb-4">
//           Techs Ready to Help in All Locations
//         </h2>
//         <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-8">
//           We serve all major cities and more with thousands of technicians and consultants in the field every day.
//         </p>
//       </div>

//       {/* 3. STATE LIST */}
//       <div className="max-w-7xl mx-auto px-4 py-16">
//         <h2 className="text-2xl font-bold mb-8 text-brand-dark">Select Your State</h2>
        
//         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
//           {states.map((state) => (
//             <Link 
//               key={state.slug}
//               href={`/locations/${state.slug}`}
//               className="text-brand-dark hover:text-brand-red hover:underline text-lg font-medium transition-colors"
//             >
//               {state.name}
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// import React from 'react';
// import Link from 'next/link';
// import { getLocations } from '@/lib/utils';

// export default function LocationsIndexPage() {
//   // 1. Get Real Data from The Vault
//   const locations = getLocations();
  
//   // Sort states alphabetically
//   const sortedLocations = locations.sort((a: any, b: any) => 
//     a.name.localeCompare(b.name)
//   );

//   // Constants for "Bulletproof" Styling
//   const BRAND_RED = '#DC2626';
//   const BRAND_DARK = '#111827';

//   return (
//     <main className="min-h-screen bg-gray-50 font-sans">
      
//       {/* 1. HERO SECTION */}
//       <section className="bg-white border-b border-gray-200 py-20 px-4 text-center">
//         <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
//           Find a <span style={{ color: BRAND_RED }}>ServicePro</span> Near You
//         </h1>
//         <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-10">
//           We have 2,500+ technicians across the country. Select your state to see local branches and schedule your repair.
//         </p>
        
//         {/* FIXED BUTTONS (Inline Styles to guarantee visibility) */}
//         <div className="flex justify-center gap-4">
//           <Link href="/">
//             <button 
//               className="px-8 py-4 font-bold text-lg text-white shadow-lg hover:opacity-90 transition transform hover:-translate-y-1"
//               style={{ 
//                 backgroundColor: BRAND_RED, 
//                 borderRadius: '50px' 
//               }}
//             >
//               Schedule Service
//             </button>
//           </Link>
//           <a href="tel:8006652127">
//             <button 
//               className="px-8 py-4 font-bold text-lg bg-white border-2 hover:bg-gray-50 transition"
//               style={{ 
//                 color: BRAND_DARK, 
//                 borderColor: BRAND_DARK,
//                 borderRadius: '50px' 
//               }}
//             >
//               Call (800) 665-2127
//             </button>
//           </a>
//         </div>
//       </section>

//       {/* 2. STATE GRID */}
//       <section className="max-w-7xl mx-auto py-16 px-4">
//         <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b border-gray-200 pb-4">
//           Available Service Areas
//         </h2>
        
//         {sortedLocations.length > 0 ? (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {sortedLocations.map((state: any) => (
//               <Link 
//                 key={state.slug} 
//                 href={`/locations/${state.slug}`}
//                 className="group block bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition"
//               >
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition">
//                       {state.name}
//                     </h3>
//                     <p className="text-sm text-gray-500 mt-1">
//                       {state.cities ? state.cities.length : 0} Cities Available
//                     </p>
//                   </div>
//                   <div 
//                     className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-red-50 group-hover:text-red-600 transition"
//                   >
//                     →
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         ) : (
//           <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
//             <p className="text-gray-500 text-lg">No locations found in database.</p>
//             <p className="text-sm text-gray-400">Try running the scraper to populate 'src/data/locations.json'</p>
//           </div>
//         )}
//       </section>

//       {/* 3. SEO TEXT */}
//       <section className="max-w-4xl mx-auto py-12 px-4 text-center text-gray-500 text-sm">
//         <p>
//           ServicePro provides expert appliance repair, HVAC service, and home maintenance in major metropolitan areas across the United States. 
//           All technicians are background-checked, insured, and manufacturer-certified.
//         </p>
//       </section>

//     </main>
//   );
// }

// import React from 'react';
// import Link from 'next/link';
// import { getLocations } from '@/lib/utils';

// export default function LocationsIndexPage() {
//   // 1. Get Real Data from The Vault
//   const locations = getLocations();
  
//   // Sort states alphabetically
//   const sortedLocations = locations.sort((a: any, b: any) => 
//     a.name.localeCompare(b.name)
//   );

//   // Constants for "Bulletproof" Styling
//   const BRAND_RED = '#DC2626';
//   // const BRAND_DARK = '#111827'; // Unused in new white-text hero

//   return (
//     <main className="min-h-screen bg-gray-50 font-sans">
      
//       {/* 1. HERO SECTION WITH IMAGE */}
//       <section className="relative py-24 px-4 text-center text-white overflow-hidden">
//         {/* Dark Overlay for readability */}
//         <div 
//           className="absolute inset-0 z-0" 
//           style={{ backgroundColor: 'rgba(17, 24, 39, 0.75)' }} // Dark overlay
//         ></div>
        
//         {/* Background Image */}
//         <div 
//           className="absolute inset-0 z-[-1] bg-cover bg-center"
//           style={{ 
//             backgroundImage: "url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop')" 
//           }}
//         ></div>
        
//         {/* Content Container (z-10 puts it above overlay) */}
//         <div className="relative z-10 max-w-4xl mx-auto space-y-6">
//           <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight shadow-sm">
//             Find a <span style={{ color: BRAND_RED }}>ServicePro</span> Near You
//           </h1>
//           <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
//             We have 2,500+ expert technicians across the country ready to help. Select your state below to schedule fast, reliable repair service.
//           </p>
          
//           {/* FIXED BUTTONS */}
//           <div className="flex flex-col sm:flex-row justify-center gap-4">
//             <Link href="/">
//               <button 
//                 className="w-full sm:w-auto px-10 py-5 font-bold text-lg text-white shadow-xl hover:opacity-90 transition transform hover:-translate-y-1 hover:shadow-2xl"
//                 style={{ 
//                   backgroundColor: BRAND_RED, 
//                   borderRadius: '50px',
//                   border: `2px solid ${BRAND_RED}`
//                 }}
//               >
//                 Schedule Service Now
//               </button>
//             </Link>
//             <a href="tel:8006652127">
//               <button 
//                 className="w-full sm:w-auto px-10 py-5 font-bold text-lg transition hover:bg-white/10"
//                 style={{ 
//                   color: 'white',
//                   border: '2px solid white',
//                   borderRadius: '50px' 
//                 }}
//               >
//                 Call (800) 665-2127
//               </button>
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* 2. STATE GRID */}
//       <section className="max-w-7xl mx-auto py-20 px-4">
//         <div className="flex items-center justify-between mb-10 border-b border-gray-200 pb-4">
//            <h2 className="text-3xl font-bold text-gray-900">
//              Available Service Areas
//            </h2>
//            <span className="text-gray-500 font-medium">{sortedLocations.length} States</span>
//         </div>
        
        
//         {sortedLocations.length > 0 ? (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {sortedLocations.map((state: any) => (
//               <Link 
//                 key={state.slug} 
//                 href={`/locations/${state.slug}`}
//                 className="group block bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md hover:border-red-300 transition"
//               >
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition flex items-center gap-2">
//                       <span className="text-2xl">🇺🇸</span> {state.name}
//                     </h3>
//                     <p className="text-sm text-gray-500 mt-2 font-medium pl-8">
//                       {state.cities ? state.cities.length : 0} Cities Available
//                     </p>
//                   </div>
//                   <div 
//                     className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-red-600 group-hover:text-white transition shadow-sm"
//                     style={{ transition: 'all 0.3s ease' }}
//                   >
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
//                       <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
//                     </svg>
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         ) : (
//           <div className="text-center py-24 bg-white rounded-2xl border-2 border-dashed border-gray-300">
//             <p className="text-gray-500 text-2xl font-bold mb-2">Database Empty</p>
//             <p className="text-gray-400 mb-6">No locations found in 'src/data/locations.json'</p>
//             <p className="text-sm bg-gray-100 inline-block px-4 py-2 rounded font-mono text-gray-600">Run: python scraper.py</p>
//           </div>
//         )}
//       </section>

//       {/* 3. SEO TEXT */}
//       <section className="bg-white py-16 px-4 border-t border-gray-200">
//         <div className="max-w-4xl mx-auto text-center text-gray-500 text-sm leading-relaxed space-y-4">
//           <p>
//             <strong>ServicePro Nationwide Network:</strong> We provide expert appliance repair, HVAC service, and home maintenance in major metropolitan areas across the United States. Our localized approach ensures fast response times.
//           </p>
//           <p>
//             All technicians are background-checked, insured, and manufacturer-certified to work on all major brands including Samsung, LG, Whirlpool, GE, and Kenmore.
//           </p>
//         </div>
//       </section>

//     </main>
//   );
// }

// import React from 'react';
// import Link from 'next/link';
// import { getLocations } from '@/lib/utils';

// export default function LocationsIndexPage() {
//   // 1. Get Real Data
//   const locations = getLocations();
  
//   // Sort states alphabetically
//   const sortedLocations = locations.sort((a: any, b: any) => 
//     a.name.localeCompare(b.name)
//   );

//   const BRAND_RED = '#DC2626';

//   return (
//     <main className="min-h-screen bg-gray-50 font-sans">
      
//       {/* 1. HERO SECTION (With Image) */}
//       <section className="relative py-28 px-4 text-center text-white overflow-hidden">
//         {/* Dark Overlay */}
//         <div 
//           className="absolute inset-0 z-0" 
//           style={{ backgroundColor: 'rgba(17, 24, 39, 0.8)' }} // Darker overlay for better contrast
//         ></div>
        
//         {/* Hero Image */}
//         <div 
//           className="absolute inset-0 z-[-1] bg-cover bg-center"
//           style={{ 
//             backgroundImage: "url('locations-hero.jpg')" 
//           }}
//         ></div>
        
//         <div className="relative z-10 max-w-4xl mx-auto space-y-6">
//           <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
//             Find Your Local <span style={{ color: BRAND_RED }}>ServicePro</span>
//           </h1>
//           <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-10 font-medium drop-shadow-md">
//             Expert technicians in 2,500+ neighborhoods. Select your state to book instantly.
//           </p>
          
//           <div className="flex justify-center gap-4">
//             <Link href="/">
//               <button 
//                 className="px-8 py-4 font-bold text-lg text-white shadow-xl hover:scale-105 transition transform"
//                 style={{ 
//                   backgroundColor: BRAND_RED, 
//                   borderRadius: '50px',
//                   border: `2px solid ${BRAND_RED}`
//                 }}
//               >
//                 Schedule Now
//               </button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* 2. STATE GRID */}
//       <section className="max-w-7xl mx-auto py-16 px-4">
//         <div className="flex items-center justify-between mb-8 border-b border-gray-200 pb-4">
//            <h2 className="text-3xl font-bold text-gray-900">
//              Service Areas
//            </h2>
//            <span className="text-gray-500 font-bold">{sortedLocations.length} States</span>
//         </div>
        
//         {sortedLocations.length > 0 ? (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {sortedLocations.map((state: any) => (
//               <Link 
//                 key={state.slug} 
//                 href={`/locations/${state.slug}`}
//                 className="group block bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg hover:border-red-500 transition duration-300"
//               >
//                 <div className="flex items-center justify-between">
//                   <div>
//                     {/* STATE NAME IN RED (As Requested) */}
//                     <h3 
//                       className="text-2xl font-extrabold transition group-hover:scale-105 origin-left"
//                       style={{ color: BRAND_RED }}
//                     >
//                       {state.name}
//                     </h3>
//                     <p className="text-sm text-gray-500 mt-1 font-bold">
//                       {state.cities ? state.cities.length : 0} Cities Available
//                     </p>
//                   </div>
                  
//                   {/* Arrow Icon */}
//                   <div 
//                     className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-600 transition group-hover:bg-red-600 group-hover:text-white"
//                   >
//                     ➜
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         ) : (
//           <div className="text-center py-20 bg-white rounded-xl border-2 border-dashed border-gray-300">
//             <p className="text-gray-400 text-lg">No locations found.</p>
//             <p className="text-sm text-gray-400">Please run the scraper to populate data.</p>
//           </div>
//         )}
//       </section>

//     </main>
//   );
// }

// import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image'; // 1. Import Image Component
// import { getLocations } from '@/lib/utils';

// export default function LocationsIndexPage() {
//   const locations = getLocations();
  
//   const sortedLocations = locations.sort((a: any, b: any) => 
//     a.name.localeCompare(b.name)
//   );

//   const BRAND_RED = '#DC2626';

//   return (
//     <main className="min-h-screen bg-gray-50 font-sans">
      
//       {/* 1. HERO SECTION */}
//       <section className="relative py-28 px-4 text-center text-white overflow-hidden">
        
//         {/* Dark Overlay */}
//         <div 
//           className="absolute inset-0 z-0 bg-gray-900/80" 
//         ></div>
        
//         {/* 2. THE IMAGE (Using Next.js Image Component) */}
//         {/* If this fails, check frontend/public/locations-hero.jpg */}
//         <div className="absolute inset-0 z-[-1]">
//             <Image 
//                 src="/locations-hero.jpg" 
//                 alt="ServicePro Service Area Map"
//                 fill
//                 className="object-cover"
//                 priority
//             />
//         </div>
        
//         <div className="relative z-10 max-w-4xl mx-auto space-y-6">
//           <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
//             Find Your Local <span style={{ color: BRAND_RED }}>ServicePro</span>
//           </h1>
//           <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-10 font-medium drop-shadow-md">
//             Expert technicians in 2,500+ neighborhoods. Select your state to book instantly.
//           </p>
          
//           <div className="flex justify-center gap-4">
//             <Link href="/">
//               <button 
//                 className="px-8 py-4 font-bold text-lg text-white shadow-xl hover:scale-105 transition transform"
//                 style={{ 
//                   backgroundColor: BRAND_RED, 
//                   borderRadius: '50px',
//                   border: `2px solid ${BRAND_RED}`
//                 }}
//               >
//                 Schedule Now
//               </button>
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* 2. STATE GRID */}
//       <section className="max-w-7xl mx-auto py-16 px-4">
//         <div className="flex items-center justify-between mb-8 border-b border-gray-200 pb-4">
//            <h2 className="text-3xl font-bold text-gray-900">
//              Service Areas
//            </h2>
//            <span className="text-gray-500 font-bold">{sortedLocations.length} States</span>
//         </div>
        
//         {sortedLocations.length > 0 ? (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {sortedLocations.map((state: any) => (
//               <Link 
//                 key={state.slug} 
//                 href={`/locations/${state.slug}`}
//                 className="group block bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg hover:border-red-500 transition duration-300"
//               >
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <h3 
//                       className="text-2xl font-extrabold transition group-hover:scale-105 origin-left"
//                       style={{ color: BRAND_RED }}
//                     >
//                       {state.name}
//                     </h3>
//                     <p className="text-sm text-gray-500 mt-1 font-bold">
//                       {state.cities ? state.cities.length : 0} Cities Available
//                     </p>
//                   </div>
//                   <div 
//                     className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-600 transition group-hover:bg-red-600 group-hover:text-white"
//                   >
//                     ➜
//                   </div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         ) : (
//           <div className="text-center py-20 bg-white rounded-xl border-2 border-dashed border-gray-300">
//             <p className="text-gray-400 text-lg">No locations found.</p>
//             <p className="text-sm text-gray-400">Please run the scraper to populate data.</p>
//           </div>
//         )}
//       </section>

//     </main>
//   );
// }

import React from 'react';
import Link from 'next/link';
import { getLocations } from '@/lib/utils';

export default function LocationsIndexPage() {
  const locations = getLocations();
  const sortedLocations = locations.sort((a: any, b: any) => 
    a.name.localeCompare(b.name)
  );

  const BRAND_RED = '#DC2626';

  return (
    <main className="min-h-screen bg-gray-50 font-sans">
      
      {/* 1. HERO SECTION */}
      {/* relative: creates a container for the absolute layers inside */}
      <section className="relative py-28 px-4 text-center text-white overflow-hidden h-[500px] flex flex-col justify-center">
        
        {/* LAYER 1: The Image (Renamed to map.jpg) */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: "url('/map.jpg')",
          }}
        ></div>

        {/* LAYER 2: The Dark Overlay */}
        <div className="absolute inset-0 bg-gray-900/80"></div>
        
        {/* LAYER 3: The Content (z-10 puts it on top) */}
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Find Your Local <span style={{ color: BRAND_RED }}>ServicePro</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-10 font-medium drop-shadow-md">
            Expert technicians in 2,500+ neighborhoods. Select your state to book instantly.
          </p>
          
          <div className="flex justify-center gap-4">
            <Link href="/">
              <button 
                className="px-8 py-4 font-bold text-lg text-white shadow-xl hover:scale-105 transition transform"
                style={{ 
                  backgroundColor: BRAND_RED, 
                  borderRadius: '50px',
                  border: `2px solid ${BRAND_RED}`
                }}
              >
                Schedule Now
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. STATE GRID */}
      <section className="max-w-7xl mx-auto py-16 px-4">
        <div className="flex items-center justify-between mb-8 border-b border-gray-200 pb-4">
           <h2 className="text-3xl font-bold text-gray-900">
             Service Areas
           </h2>
           <span className="text-gray-500 font-bold">{sortedLocations.length} States</span>
        </div>
        
        {sortedLocations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedLocations.map((state: any) => (
              <Link 
                key={state.slug} 
                href={`/locations/${state.slug}`}
                className="group block bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg hover:border-red-500 transition duration-300"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 
                      className="text-2xl font-extrabold transition group-hover:scale-105 origin-left"
                      style={{ color: BRAND_RED }}
                    >
                      {state.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 font-bold">
                      {state.cities ? state.cities.length : 0} Cities Available
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-600 transition group-hover:bg-red-600 group-hover:text-white">
                    ➜
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-xl border-2 border-dashed border-gray-300">
            <p className="text-gray-400 text-lg">No locations found.</p>
          </div>
        )}
      </section>

    </main>
  );
}