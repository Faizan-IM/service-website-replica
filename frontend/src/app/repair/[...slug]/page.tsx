import Link from 'next/link';
import { notFound } from 'next/navigation';
import { applianceData, COMPANIES, ApplianceInfo, Company } from '@/lib/repair-data';
import { ArrowRight, Wrench, Calendar, CheckCircle, Phone } from 'lucide-react';

// --- COMPONENTS ---

// LEVEL 2: COMPANY PAGE (Brand Landing)
const CompanyPage = ({ company }: { company: Company }) => (
  <main className="min-h-screen bg-gray-50">
    <div className={`bg-slate-900 text-white py-24 text-center relative overflow-hidden`}>
       <div className={`absolute inset-0 opacity-20 ${company.bgImage} bg-cover`}></div>
       <div className="relative z-10 max-w-4xl mx-auto px-4">
         <span className="text-red-500 font-bold tracking-widest uppercase text-sm mb-4 block">Certified Repair Service</span>
         <h1 className="text-5xl md:text-6xl font-extrabold mb-6 capitalize">{company.name} Repair</h1>
         <p className="text-xl text-gray-300 max-w-2xl mx-auto">{company.description}</p>
       </div>
    </div>

    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Select Your {company.name} Appliance</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {company.products.map(productSlug => {
            const productInfo = applianceData[productSlug];
            if (!productInfo) return null;
            
            return (
                <Link 
                  key={productSlug} 
                  href={`/repair/${company.slug}/${productSlug}`}
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all border border-gray-100 group"
                >
                   <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-800 group-hover:text-red-600 transition-colors">{productInfo.title}</h3>
                      <ArrowRight className="text-gray-400 group-hover:text-red-600" />
                   </div>
                   <p className="text-gray-500 line-clamp-2">{productInfo.desc}</p>
                </Link>
            )
        })}
      </div>
    </div>
  </main>
);

// LEVEL 3: PRODUCT PAGE (Specific Service Page)
// Also used for Generic Appliance Pages (where company is undefined)
const ProductPage = ({ 
    company, 
    info 
}: { 
    company?: Company, 
    info: ApplianceInfo 
}) => (
    <main className="min-h-screen bg-white font-sans">
        <div className="grid lg:grid-cols-2 min-h-[600px]">
            {/* Left Content */}
            <div className="bg-slate-900 text-white p-12 lg:p-24 flex flex-col justify-center">
                {company && (
                    <Link href={`/repair/${company.slug}`} className="text-gray-400 hover:text-white mb-8 flex items-center text-sm font-bold uppercase tracking-wider">
                        <ArrowRight className="w-4 h-4 mr-2 rotate-180"/> Back to {company.name}
                    </Link>
                )}
                {!company && (
                    <Link href={`/repair`} className="text-gray-400 hover:text-white mb-8 flex items-center text-sm font-bold uppercase tracking-wider">
                        <ArrowRight className="w-4 h-4 mr-2 rotate-180"/> Back to All Services
                    </Link>
                )}
                
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                    {company && <span className="text-red-500 block text-2xl mb-2 capitalize">{company.name}</span>}
                    {info.title}
                </h1>
                <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                    {info.desc} {company ? `We provide authorized service for all ${company.name} models, ensuring your warranty is protected.` : 'We repair all major brands and models.'}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/schedule" className="bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-center hover:bg-red-700 transition-colors shadow-lg hover:shadow-red-900/50 flex items-center justify-center gap-2">
                        <Calendar className="w-5 h-5" /> Schedule Now
                    </Link>
                    <a href="tel:8006652127" className="border border-white/20 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-bold text-center transition-colors flex items-center justify-center gap-2">
                        <Phone className="w-5 h-5" /> Call for Quote
                    </a>
                </div>
            </div>
            
            {/* Right Content */}
            <div className="bg-gray-50 p-12 lg:p-24 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Common {company ? company.name : ''} Issues We Fix</h2>
                <div className="space-y-4">
                    {info.issues.map((issue, idx) => (
                        <div key={idx} className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                            <CheckCircle className="w-6 h-6 text-green-500 mr-4 flex-shrink-0" />
                            <span className="font-semibold text-gray-700">{issue}</span>
                        </div>
                    ))}
                </div>
                
                <div className="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-100">
                    <h3 className="font-bold text-blue-900 mb-2">Why Choose Us?</h3>
                    <ul className="text-blue-800 text-sm space-y-2 list-disc pl-4">
                        {company && <li>Official {company.name} replacement parts</li>}
                        <li>90-Day Satisfaction Guarantee</li>
                        <li>Local, background-checked pros</li>
                        <li>Upfront pricing</li>
                    </ul>
                </div>
            </div>
        </div>
    </main>
);

// --- MAIN PAGE HANDLER ---

export default async function RepairDynamicPage({ 
  params 
}: { 
  params: Promise<{ slug: string[] }> 
}) {
  const { slug } = await params;
  
  if (!slug || slug.length === 0) return notFound();

  // 1. Try to find a COMPANY match first
  const brandSlug = slug[0].toLowerCase();
  const company = COMPANIES.find(c => c.slug === brandSlug);

  // LEVEL 2: /repair/[brand] (Company exists)
  if (company && slug.length === 1) {
      return <CompanyPage company={company} />;
  }

  // LEVEL 3: /repair/[brand]/[product] (Company exists + Product)
  if (company && slug.length === 2) {
      const productSlug = slug[1].toLowerCase();
      const productInfo = applianceData[productSlug];
      if (!productInfo) return notFound(); 
      return <ProductPage company={company} info={productInfo} />;
  }

  // FALLBACK / GENERIC: /repair/[appliance] 
  // If no company matched, check if it's a generic appliance route
  // e.g. /repair/refrigerator OR /repair/refrigerator-repair-service
  if (!company && slug.length === 1) {
      // Remove '-repair-service' suffix if present
      const cleanSlug = brandSlug.replace('-repair-service', '');
      const applianceInfo = applianceData[cleanSlug];
      
      if (applianceInfo) {
          return <ProductPage info={applianceInfo} />;
      }
  }

  return notFound();
}