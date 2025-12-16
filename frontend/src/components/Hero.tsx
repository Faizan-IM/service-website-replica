// import Link from 'next/link';

// export default function Hero() {
//   return (
//     <div className="relative overflow-hidden bg-white">
//       <div className="max-w-7xl mx-auto">
//         <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 lg:rounded-br-[4rem]">
          
//           <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
//             <div className="sm:text-center lg:text-left">
//               <h1 className="text-4xl tracking-tight font-extrabold text-brand-dark sm:text-5xl md:text-6xl">
//                 <span className="block xl:inline">Home repairs made</span>{' '}
//                 <span className="block text-brand-red">beautifully simple.</span>
//               </h1>
//               <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
//                 Expert technicians for your appliances, HVAC, and home systems. 
//                 Fast booking, transparent pricing, and 100% happiness guaranteed.
//               </p>
              
//               {/* Buttons */}
//               <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start gap-3">
//                 <div className="rounded-md shadow">
//                   <Link href="/locations" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-full text-white bg-brand-red hover:bg-red-700 md:py-4 md:text-lg md:px-10 transition-all shadow-lg shadow-red-200">
//                     Schedule Now
//                   </Link>
//                 </div>
//                 <div className="mt-3 sm:mt-0">
//                   <Link href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-full text-brand-red bg-red-50 hover:bg-red-100 md:py-4 md:text-lg md:px-10 transition-colors">
//                     View Services
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </main>
//         </div>
//       </div>
      
//       {/* THE IMAGE AREA (Placeholder for Kukla Kit) */}
//       <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-gray-50">
//         <div className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 text-gray-400">
//            {/* Replace this span with <img src="/your-image.png" /> later */}
//            <span className="text-center p-10 font-bold text-2xl opacity-40 -rotate-6 select-none">
//              [ 3D Illustration Goes Here ]
//            </span>
//         </div>
//       </div>
//     </div>
//   );
// }

import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 lg:rounded-br-[4rem]">
          
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-brand-dark sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Home repairs made</span>{' '}
                <span className="block text-brand-red">beautifully simple.</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Expert technicians for your appliances, HVAC, and home systems. 
                Fast booking, transparent pricing, and 100% happiness guaranteed.
              </p>
              
              {/* Buttons */}
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start gap-3">
                {/* FIX: Removed 'rounded-md shadow' from this div */}
                <div> 
                  <Link href="/locations" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-full text-white bg-brand-red hover:bg-red-700 md:py-4 md:text-lg md:px-10 transition-all shadow-lg shadow-red-200">
                    Schedule Now
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0">
                  <Link href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-full text-brand-red bg-red-50 hover:bg-red-100 md:py-4 md:text-lg md:px-10 transition-colors">
                    View Services
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      
      {/* THE IMAGE AREA (Placeholder for Kukla Kit) */}
      {/* THE IMAGE AREA */}
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="/hero-3d.jpg"
          alt="Modern Home Services Abstract 3D Art"
        />
      </div>
    </div>
  );
}