import { getLocations } from '@/lib/utils';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function CityPage({
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
    <div className="bg-gray-50 min-h-screen font-sans">
      
      {/* 1. Header Breadcrumb Area */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="text-sm text-gray-500 font-medium">
            <Link href="/locations" className="hover:text-brand-red">Locations</Link>
            <span className="mx-2">/</span>
            <Link href={`/locations/${stateSlug}`} className="hover:text-brand-red">{stateData.name}</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{cityData.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* 2. Left Column: Main Content */}
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-extrabold text-brand-dark mb-6">
            Appliance Repair in <span className="text-brand-red">{cityData.name}, {stateData.abbr}</span>
          </h1>

          {/* MAIN TEXT */}
          <div className="prose prose-lg text-gray-600 mb-10">
            <p className="mb-4">
              ServicePro is the leading appliance repair service in the nation. We repair most major appliance brands, makes and models, no matter where you bought them. Our goal is to provide quality repairs to help you extend the useful life of your household appliances.
            </p>
            <p className="mb-4">
              Our technicians are local to your neighborhood and you can easily schedule your appointment online or over the phone. ServicePro is the only nationally authorized appliance repair service for Kenmore products.
            </p>
            <p className="mb-6">
              We have performed millions of repairs on refrigerators, washers, dryers, ranges and more. Our technicians are appliance repair experts who you can trust for repairs on top appliance brands like Samsung, Maytag, Bosch and LG.
            </p>
            
            <p className="font-bold text-brand-dark">
              Are you in need of appliance repair in {cityData.name}, {stateData.abbr}?
            </p>
            <p>
              Call the <Link href={`/locations/${stateSlug}/${citySlug}/servicepro-appliance-repair`} className="text-brand-red font-bold hover:underline">ServicePro Appliance Repair</Link> experts in {cityData.name} or schedule your appointment online.
            </p>
          </div>

          {/* --- NEW REVIEWS SECTION --- */}
          <div className="mb-12 bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl font-extrabold text-brand-dark uppercase tracking-wide">4.8/5 Star Service</h2>
              <div className="flex text-yellow-400">
                {'★★★★★'.split('').map((star, i) => (
                  <span key={i} className="text-2xl">{star}</span>
                ))}
              </div>
              <span className="text-sm text-gray-400 font-medium">(24,000+ Reviews)</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Review 1 */}
              <div className="bg-gray-50 p-4 rounded-2xl">
                <div className="text-yellow-400 text-sm mb-2">★★★★★</div>
                <h4 className="font-bold text-gray-900 text-sm mb-1">Excellent Job</h4>
                <p className="text-xs text-gray-600 mb-3">
                  "Technician was on time, very polite and knowledgeable. Fixed my dryer in under an hour."
                </p>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">— Sarah M.</div>
              </div>

              {/* Review 2 */}
              <div className="bg-gray-50 p-4 rounded-2xl">
                <div className="text-yellow-400 text-sm mb-2">★★★★★</div>
                <h4 className="font-bold text-gray-900 text-sm mb-1">Life Saver!</h4>
                <p className="text-xs text-gray-600 mb-3">
                  "Our fridge died right before the holidays. ServicePro came out the same day and saved our food!"
                </p>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">— James R.</div>
              </div>

              {/* Review 3 */}
              <div className="bg-gray-50 p-4 rounded-2xl">
                <div className="text-yellow-400 text-sm mb-2">★★★★★</div>
                <h4 className="font-bold text-gray-900 text-sm mb-1">Professional</h4>
                <p className="text-xs text-gray-600 mb-3">
                  "Transparent pricing and no hidden fees. I appreciate the honesty and quick work."
                </p>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider">— Mike T.</div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <Link href="#" className="text-brand-red text-sm font-bold hover:underline">
                Read all {cityData.name} reviews &rarr;
              </Link>
            </div>
          </div>
          {/* --- END REVIEWS SECTION --- */}

          <h2 className="text-2xl font-bold text-brand-dark mb-6 border-t pt-8">Local Service Centers</h2>
          <div className="space-y-4">
            {cityData.branches.map((branch) => (
              <div key={branch.slug} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-brand-red/30 transition-colors">
                <div>
                  <h3 className="font-bold text-lg text-gray-900">{branch.address}</h3>
                  <p className="text-gray-500 text-sm">ServicePro Appliance Repair • {cityData.name}</p>
                </div>
                <Link 
                  href={`/locations/${stateSlug}/${citySlug}/servicepro-appliance-repair/${branch.slug}`}
                  className="bg-gray-100 text-brand-dark px-6 py-2 rounded-full text-sm font-bold hover:bg-brand-red hover:text-white transition-all text-center shadow-sm"
                >
                  View Details
                </Link>
              </div>
            ))}
             {cityData.branches.length === 0 && (
              <div className="p-6 bg-white rounded-2xl text-gray-500 italic border border-dashed border-gray-300">
                Central dispatch serving all {cityData.name} zip codes.
              </div>
            )}
          </div>
        </div>

        {/* 3. Right Column: Sticky Booking Card */}
        <div className="lg:col-span-1">
          <div className="bg-white p-8 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 sticky top-24">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-md">
              Available Today
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Schedule Service</h3>
            <p className="text-gray-500 text-sm mb-6 text-center">Same-day appointments available in {cityData.name}.</p>
            
            <button className="w-full bg-brand-red text-white font-bold py-4 rounded-full shadow-lg hover:bg-red-700 hover:shadow-xl transition-all mb-4 transform active:scale-[0.98]">
              Book Appointment Now
            </button>
            <button className="w-full bg-white border-2 border-gray-200 text-gray-700 font-bold py-3 rounded-full hover:border-brand-dark hover:text-brand-dark transition-colors">
              Call (800) 665-2127
            </button>
            
            <div className="mt-6 pt-6 border-t border-gray-100 text-center text-xs text-gray-400">
               100% Satisfaction Guaranteed
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}