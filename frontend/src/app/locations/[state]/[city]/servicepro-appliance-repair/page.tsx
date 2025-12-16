import { getLocations } from '@/lib/utils';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { HowItWorks, BrandsWeRepair, WhyChooseUs, FAQ } from '@/components/SharedSections';

export default async function ServiceTypePage({
  params,
}: {
  params: Promise<{ state: string; city: string }>;
}) {
  const { state: stateSlug, city: citySlug } = await params;
  const stateData = getLocations().find((s) => s.slug === stateSlug);
  const cityData = stateData?.cities.find((c) => c.slug === citySlug);

  if (!stateData || !cityData) {
    return notFound();
  }

  return (
    <div className="bg-white min-h-screen font-sans">
      
      {/* 1. BREADCRUMBS */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 text-sm text-gray-500">
            <Link href="/locations" className="hover:text-brand-red">Locations</Link> / 
            <Link href={`/locations/${stateSlug}`} className="hover:text-brand-red px-1">{stateData.name}</Link> / 
            <Link href={`/locations/${stateSlug}/${citySlug}`} className="hover:text-brand-red px-1">{cityData.name}</Link> /
            <span className="text-gray-900 font-bold px-1">Appliance Repair</span>
        </div>
      </div>

      {/* 2. HERO SECTION */}
      <div className="relative bg-brand-dark text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Premier Appliance Repair in <span className="text-brand-red">{cityData.name}</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mb-8">
            Expert technicians in your neighborhood. We fix refrigerators, washers, dryers, and more. 
            Trusted by thousands of {cityData.name} residents.
          </p>
          <div className="flex gap-4">
            <button className="bg-brand-red text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-red-600 transition-all">
              Schedule Service Now
            </button>
          </div>
        </div>
        {/* Abstract Background Decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-800 to-transparent opacity-50"></div>
      </div>

      {/* 3. MAIN CONTENT (Locations & Description) */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Local ServicePro Centers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {cityData.branches.map(branch => (
                    <Link key={branch.slug} href={`/locations/${stateSlug}/${citySlug}/sears-appliance-repair/${branch.slug}`}
                        className="p-6 border border-gray-200 rounded-xl hover:border-brand-red hover:shadow-md transition-all group">
                        <h3 className="font-bold text-lg group-hover:text-brand-red">{branch.address}</h3>
                        <p className="text-sm text-gray-500">View Branch Details &rarr;</p>
                    </Link>
                ))}
            </div>

            <div className="prose prose-lg text-gray-600">
                <h3 className="text-brand-dark font-bold">Comprehensive Repair Services</h3>
                <p>
                    ServicePro is {cityData.name}'s leading provider for home appliance care. Whether your refrigerator isn't cooling or your dryer isn't heating, our local team is ready to help. We offer same-day and next-day appointments to get your home running smoothly again.
                </p>
            </div>
        </div>
        
        {/* Sticky Sidebar */}
        <div className="lg:col-span-1">
             <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 sticky top-24">
                <h3 className="font-bold text-xl mb-4">Why Wait?</h3>
                <p className="text-sm text-gray-500 mb-6">Our trucks are fully stocked and in your area right now.</p>
                <button className="w-full bg-brand-dark text-white font-bold py-3 rounded-full mb-3 hover:bg-black">
                    Check Availability
                </button>
             </div>
        </div>
      </div>

      {/* 4. SHARED SECTIONS */}
      <HowItWorks />
      <BrandsWeRepair />
      <WhyChooseUs />
      
      {/* 5. REVIEWS (Five Star Service) */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-extrabold text-brand-dark mb-4 uppercase tracking-wide">Five Star Service</h2>
        <p className="text-gray-500 mb-8">With thousands of 5-star reviews, you don't have to take our word for it.</p>
        <div className="flex justify-center gap-2 text-yellow-400 text-3xl mb-8">★★★★★</div>
        <button className="text-brand-red font-bold underline">Read Local Reviews</button>
      </section>

      <FAQ city={cityData.name} />

      {/* 6. BOTTOM CTA */}
      <div className="bg-brand-red py-12 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">Need a Repair in {cityData.name}?</h2>
        <button className="bg-white text-brand-red px-8 py-3 rounded-full font-bold hover:bg-gray-100">
            Get Started
        </button>
      </div>
    </div>
  );
}