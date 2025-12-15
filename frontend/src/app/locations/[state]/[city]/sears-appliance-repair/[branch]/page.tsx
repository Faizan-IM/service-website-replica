import { getLocationData } from '@/lib/utils';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{
    state: string;
    city: string;
    branch: string;
  }>;
};

export default async function BranchPage({ params }: Props) {
  // 1. Await the params (New Requirement in Next.js 15)
  const { state, city, branch } = await params;

  console.log("--- DEBUGGING ---");
  console.log("Looking for State:", state);
  console.log("Looking for City:", city);
  console.log("Looking for Branch:", branch);

  // 2. Get the specific data
  const data = getLocationData(state, city, branch);

  // 3. Check if we found it
  if (!data) {
    console.log("❌ Data NOT found in locations.json");
    return notFound();
  }
  console.log("✅ Data FOUND!");

  const dataState = data.state;
  const dataCity = data.city;
  const dataBranch = data.branch;

  return (
    <div className="min-h-screen font-sans text-gray-800">
      {/* --- HEADER --- */}
      <header className="border-b border-gray-200 sticky top-0 bg-white z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-900">Sears <span className="font-light text-blue-600">Home Services</span></div>
          <a href={`tel:${dataBranch.phone}`} className="bg-blue-600 text-white px-6 py-2 rounded font-bold hover:bg-blue-700">
            Schedule Now
          </a>
        </div>
      </header>

      {/* --- HERO SECTION --- */}
      <div className="relative bg-gray-100 py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Appliance Repair in {dataCity.name}, {dataState.abbr}
          </h1>
          <p className="text-xl text-gray-600 mb-8">{dataCity.description}</p>
          
          <div className="bg-white p-6 rounded-lg shadow-lg inline-block text-left">
            <h2 className="text-lg font-bold text-gray-900 mb-2">Service Location</h2>
            <p className="text-lg text-gray-700">{dataBranch.address}</p>
            <p className="text-lg text-gray-700">{dataCity.name}, {dataState.abbr} {dataBranch.zip_code}</p>
            <div className="mt-4">
               <a href={`tel:${dataBranch.phone}`} className="text-blue-600 font-bold text-xl block">
                 Call: {dataBranch.phone}
               </a>
            </div>
          </div>
        </div>
      </div>

      {/* --- TECHNICIAN QUOTE SECTION --- */}
      <div className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/3">
             <div className="w-48 h-48 bg-gray-300 rounded-full mx-auto flex items-center justify-center text-gray-500">
               Technician Photo
             </div>
          </div>
          <div className="w-full md:w-2/3">
            <h3 className="text-2xl font-bold mb-4">A Word from Our Local {dataCity.name} Technician</h3>
            <p className="italic text-gray-600 text-lg leading-relaxed">
              "As a local technician with experience in {dataCity.name}, I've seen firsthand how vital reliable appliance repair is to our community. 
              My team and I take pride in keeping your homes running smoothly. Whether it's fixing a fridge or a washer, we're here to help at our {dataBranch.address} location."
            </p>
          </div>
        </div>
      </div>

       {/* --- WHY CHOOSE US --- */}
       <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Sears Appliance Repair?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded shadow">
              <h4 className="font-bold text-xl mb-2">Expert Technicians</h4>
              <p>Our experts are factory-trained and average 10+ years of experience.</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h4 className="font-bold text-xl mb-2">Flexible Scheduling</h4>
              <p>Book online in less than a minute with same-day appointments available.</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h4 className="font-bold text-xl mb-2">Satisfaction Guaranteed</h4>
              <p>We stand behind our work with a 90-day guarantee on parts and labor.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}