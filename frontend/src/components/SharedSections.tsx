import Link from 'next/link';

// --- 1. HOW IT WORKS ---
export function HowItWorks() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-extrabold text-brand-dark mb-12 uppercase tracking-wide">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { step: '1', title: 'Schedule Online', desc: 'Book your appointment in less than a minute. Pick a time that works for you.' },
            { step: '2', title: 'We Diagnose', desc: 'Our expert tech arrives, diagnoses the issue, and gives you a clear quote.' },
            { step: '3', title: 'We Fix It', desc: 'We carry most parts on the truck. If we fix it, the diagnostic fee is waived.' },
          ].map((item) => (
            <div key={item.step} className="relative p-8 rounded-3xl bg-gray-50 border border-gray-100">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-brand-red text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                {item.step}
              </div>
              <h3 className="mt-6 text-xl font-bold text-brand-dark mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- 2. BRANDS WE REPAIR ---
export function BrandsWeRepair() {
  const brands = ['Kenmore', 'GE', 'Samsung', 'LG', 'Whirlpool', 'Maytag', 'Bosch', 'Frigidaire'];
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-brand-dark mb-8 uppercase tracking-wide">Brands We Repair</h2>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 opacity-70">
          {brands.map((brand) => (
            <span key={brand} className="px-6 py-3 bg-white rounded-full shadow-sm text-gray-600 font-bold border border-gray-200">
              {brand}
            </span>
          ))}
        </div>
        <p className="mt-6 text-sm text-gray-400">And many more...</p>
      </div>
    </section>
  );
}

// --- 3. WHY CHOOSE US ---
export function WhyChooseUs() {
  return (
    <section className="py-16 bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold mb-12 text-center uppercase tracking-wide">Why ServicePro?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 border border-gray-700 rounded-2xl bg-gray-800/50">
            <h3 className="text-xl font-bold text-brand-red mb-3">Expert Technicians</h3>
            <p className="text-gray-300">Background checked, fully trained, and averaged 10+ years of experience.</p>
          </div>
          <div className="text-center p-6 border border-gray-700 rounded-2xl bg-gray-800/50">
            <h3 className="text-xl font-bold text-brand-red mb-3">90-Day Guarantee</h3>
            <p className="text-gray-300">We stand by our work. If the part fails within 90 days, we fix it for free.</p>
          </div>
          <div className="text-center p-6 border border-gray-700 rounded-2xl bg-gray-800/50">
            <h3 className="text-xl font-bold text-brand-red mb-3">Flexible Scheduling</h3>
            <p className="text-gray-300">Morning, afternoon, and Saturday appointments available to fit your life.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- 4. FAQ SECTION ---
export function FAQ({ city }: { city: string }) {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-brand-dark mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <details className="group bg-gray-50 p-6 rounded-2xl cursor-pointer open:ring-2 open:ring-brand-red/20">
            <summary className="font-bold text-lg text-gray-900 list-none flex justify-between items-center">
              Do you service my area in {city}?
              <span className="text-brand-red group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-4 text-gray-600">Yes! We have local technicians stationed directly in {city} and the surrounding neighborhoods.</p>
          </details>
          <details className="group bg-gray-50 p-6 rounded-2xl cursor-pointer open:ring-2 open:ring-brand-red/20">
            <summary className="font-bold text-lg text-gray-900 list-none flex justify-between items-center">
              Is there a warranty on repairs?
              <span className="text-brand-red group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-4 text-gray-600">Absolutely. We offer a 90-day satisfaction guarantee on all parts and labor.</p>
          </details>
          <details className="group bg-gray-50 p-6 rounded-2xl cursor-pointer open:ring-2 open:ring-brand-red/20">
            <summary className="font-bold text-lg text-gray-900 list-none flex justify-between items-center">
              How much does the diagnostic cost?
              <span className="text-brand-red group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <p className="mt-4 text-gray-600">Our diagnostic fee varies by appliance, but we waive it completely if you proceed with the repair!</p>
          </details>
        </div>
      </div>
    </section>
  );
}