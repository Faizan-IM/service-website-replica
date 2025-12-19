import Link from 'next/link';
import { 
  Refrigerator, WashingMachine, ThermometerSun, UtensilsCrossed, Flame, 
  Snowflake, Zap, Droplets, Waves, ChefHat, Wrench, ShieldCheck, 
  CalendarCheck, Clock, Users, Award, CheckCircle2, Search
} from 'lucide-react';
import { COMPANIES } from '@/lib/repair-data';

export default function RepairHubPage() {
  
  const APPLIANCE_GRID = [
    { label: 'Refrigerator', icon: <Refrigerator className="w-8 h-8"/>, slug: 'refrigerator' },
    { label: 'Washer', icon: <WashingMachine className="w-8 h-8"/>, slug: 'washer' },
    { label: 'Dryer', icon: <ThermometerSun className="w-8 h-8"/>, slug: 'dryer' },
    { label: 'Dishwasher', icon: <UtensilsCrossed className="w-8 h-8"/>, slug: 'dishwasher' },
    { label: 'Range', icon: <Flame className="w-8 h-8"/>, slug: 'range' },
    { label: 'HVAC', icon: <Snowflake className="w-8 h-8"/>, slug: 'hvac' },
    { label: 'Water Heater', icon: <Droplets className="w-8 h-8"/>, slug: 'water-heater' },
    { label: 'Cooktop', icon: <Waves className="w-8 h-8"/>, slug: 'cooktop' },
  ];

  const TEXT_LINKS = {
    'Kitchen Appliances': ['Refrigerator', 'Dishwasher', 'Freezer', 'Ice Maker', 'Oven', 'Range', 'Cooktop', 'Trash Compactor'],
    'Laundry': ['Washing Machine', 'Dryer', 'Dryer Vent Cleaning'],
    'Home Systems': ['Central Air', 'Furnace', 'Boiler', 'Water Heater', 'Water Softener', 'Humidifier'],
    'Outdoor & Garden': ['Riding Mower', 'Snow Blower', 'Grill', 'Patio Heater']
  };

  return (
    <main className="min-h-screen bg-white font-sans text-[#0f172a]">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#002B5C] text-white py-16 md:py-24">
         <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 space-y-6">
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                    Trust the Appliance Repair Experts.
                </h1>
                <p className="text-xl text-blue-100 font-medium">
                    Need us fast? Schedule now for same/next day service.
                </p>
            </div>
            
            {/* Action Widget */}
            <div className="w-full md:w-[400px] bg-white rounded-xl shadow-2xl p-6 text-gray-900">
                <h3 className="text-xl font-bold mb-4">Schedule Service</h3>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-semibold text-gray-600 mb-1">Select Appliance</label>
                        <select className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-600 outline-none">
                            <option>Refrigerator</option>
                            <option>Washer</option>
                            <option>Dryer</option>
                            <option>Dishwasher</option>
                            <option>Oven/Range</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-600 mb-1">Zip Code</label>
                        <input type="text" placeholder="e.g. 90210" className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-600 outline-none"/>
                    </div>
                    <button className="w-full bg-[#dc2626] hover:bg-red-700 text-white font-bold py-3 rounded-lg text-lg transition-colors">
                        Check Availability
                    </button>
                </div>
            </div>
         </div>
      </section>

      {/* 2. INTRO SEO TEXT */}
      <section className="py-16 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#0f172a] uppercase tracking-tight">Expert Appliance Repair For Your Home</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
             ServicePro Home Services is the leading appliance repair service in the nation. We repair all major appliance brands, makes, and models—no matter where you bought them. Our factory-trained technicians are experts you can trust to extend the useful life of your household appliances.
          </p>
      </section>

      {/* 3. KEY BENEFITS */}
      <section className="bg-blue-50 py-12">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                  <div className="bg-white p-3 rounded-full shadow-sm mb-3 text-blue-600"><Award className="w-8 h-8"/></div>
                  <h3 className="font-bold text-lg">Certified & Insured Techs</h3>
              </div>
              <div className="flex flex-col items-center">
                  <div className="bg-white p-3 rounded-full shadow-sm mb-3 text-blue-600"><ShieldCheck className="w-8 h-8"/></div>
                  <h3 className="font-bold text-lg">Satisfaction Guarantee</h3>
              </div>
              <div className="flex flex-col items-center">
                  <div className="bg-white p-3 rounded-full shadow-sm mb-3 text-blue-600"><Users className="w-8 h-8"/></div>
                  <h3 className="font-bold text-lg">National Reach, Local Techs</h3>
              </div>
          </div>
      </section>

      {/* 4. VISUAL SERVICE GRID */}
      <section className="py-20 max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-10">Repair Services Near You</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {APPLIANCE_GRID.map((item) => (
                <Link 
                  key={item.slug} 
                  href={`/repair/${item.slug}`}
                  className="flex flex-col items-center justify-center p-4 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-lg hover:border-blue-200 hover:-translate-y-1 transition-all group h-32"
                >
                    <div className="text-gray-400 group-hover:text-blue-600 transition-colors mb-2">
                        {item.icon}
                    </div>
                    <span className="font-semibold text-sm text-gray-700 text-center group-hover:text-[#0f172a]">{item.label}</span>
                </Link>
            ))}
        </div>
      </section>

      {/* 5. TEXT LINK LIST (Learn More) */}
      <section className="bg-gray-50 py-16 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-2xl font-bold mb-10 text-center">Comprehensive Service List</h2>
              <div className="grid md:grid-cols-4 gap-8">
                  {Object.entries(TEXT_LINKS).map(([category, items]) => (
                      <div key={category}>
                          <h3 className="font-bold text-[#0f172a] mb-4 uppercase text-sm tracking-wider border-b border-gray-300 pb-2">{category}</h3>
                          <ul className="space-y-2">
                              {items.map((item) => (
                                  <li key={item}>
                                      <Link href={`/repair/${item.toLowerCase().replace(/ /g, '-')}`} className="text-gray-600 hover:text-red-600 hover:underline text-sm block py-1">
                                          {item}
                                      </Link>
                                  </li>
                              ))}
                          </ul>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* 6. PROCESS STEPS */}
      <section className="py-20 max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center">
                  <div className="bg-red-50 w-20 h-20 rounded-full flex items-center justify-center text-red-600 mb-6 font-bold text-2xl">1</div>
                  <h3 className="font-bold text-xl mb-2">Easy Scheduling</h3>
                  <p className="text-gray-500">Book online in less than 2 minutes.</p>
              </div>
              <div className="flex flex-col items-center">
                   <div className="bg-red-50 w-20 h-20 rounded-full flex items-center justify-center text-red-600 mb-6 font-bold text-2xl">2</div>
                  <h3 className="font-bold text-xl mb-2">Diagnostic & Quote</h3>
                  <p className="text-gray-500">Expert diagnosis and upfront pricing.</p>
              </div>
              <div className="flex flex-col items-center">
                   <div className="bg-red-50 w-20 h-20 rounded-full flex items-center justify-center text-red-600 mb-6 font-bold text-2xl">3</div>
                  <h3 className="font-bold text-xl mb-2">Reliable Repair</h3>
                  <p className="text-gray-500">Backed by our 90-day guarantee.</p>
              </div>
          </div>
      </section>

      {/* 7. BRANDS STRIP */}
      <section className="py-12 border-y border-gray-100">
         <div className="max-w-7xl mx-auto px-4">
             <p className="text-center text-gray-400 font-bold uppercase tracking-widest text-sm mb-8">Brands We Repair</p>
             <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                 {COMPANIES.map(brand => (
                     <Link key={brand.slug} href={`/repair/${brand.slug}`} className="text-2xl font-black text-gray-800 uppercase hover:text-blue-900">
                         {brand.name}
                     </Link>
                 ))}
             </div>
         </div>
      </section>

      {/* 8. STATS / WHY US */}
      <section className="bg-[#0f172a] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-16">Why ServicePro Home Services?</h2>
              <div className="grid md:grid-cols-4 gap-8">
                  <div className="p-6 border border-gray-700 rounded-xl">
                      <div className="text-yellow-400 mb-4 flex justify-center"><Users className="w-10 h-10"/></div>
                      <div className="text-4xl font-bold mb-2">4M+</div>
                      <div className="text-gray-400 text-sm">Happy Customers</div>
                  </div>
                  <div className="p-6 border border-gray-700 rounded-xl">
                      <div className="text-yellow-400 mb-4 flex justify-center"><CalendarCheck className="w-10 h-10"/></div>
                      <div className="text-4xl font-bold mb-2">Flexible</div>
                      <div className="text-gray-400 text-sm">Scheduling Options</div>
                  </div>
                  <div className="p-6 border border-gray-700 rounded-xl">
                      <div className="text-yellow-400 mb-4 flex justify-center"><Wrench className="w-10 h-10"/></div>
                      <div className="text-4xl font-bold mb-2">2,500+</div>
                      <div className="text-gray-400 text-sm">Expert Technicians</div>
                  </div>
                  <div className="p-6 border border-gray-700 rounded-xl">
                      <div className="text-yellow-400 mb-4 flex justify-center"><Award className="w-10 h-10"/></div>
                      <div className="text-4xl font-bold mb-2">OEM</div>
                      <div className="text-gray-400 text-sm">Quality Parts</div>
                  </div>
              </div>
          </div>
      </section>

    </main>
  );
}