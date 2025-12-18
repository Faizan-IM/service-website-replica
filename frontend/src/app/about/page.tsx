import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-gray-900 text-white py-24 px-4 overflow-hidden">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 z-0"></div>
        
        {/* Background Image */}
        <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center -z-10"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6">
          <span className="inline-block bg-red-600 text-white px-4 py-1 text-sm font-bold uppercase tracking-wider rounded-full mb-4">
            Since 1995
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            We are <span className="text-red-500">ServicePro.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            The nation's largest product repair service provider. We fix it, no matter where you bought it.
          </p>
        </div>
      </section>

      {/* 2. STATS GRID */}
      <section className="py-16 px-4 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Repairs Annually", value: "4 Million+" },
            { label: "5-Star Ratings", value: "1.3 Million" },
            { label: "Expert Techs", value: "2,500+" },
            { label: "Years Experience", value: "30+" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl font-extrabold text-gray-900">
                {stat.value}
              </div>
              <div className="text-red-600 font-bold uppercase tracking-widest text-xs mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. MISSION & STORY */}
      <section className="max-w-7xl mx-auto py-24 px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Who We Are & Why We're Different
          </h2>
          <div className="w-24 h-1.5 bg-red-600 rounded-full"></div>
          <div className="prose prose-lg text-gray-600 space-y-6">
            <p>
              For generations, people have relied on us for their appliance purchases, service, protection, and parts. 
              <strong> ServicePro</strong> is the #1 appliance repair service in the country, delivering guaranteed quality and workmanship.
            </p>
            <p>
              To ensure we have the right parts to fix your appliance, we use technology to diagnose problems before we arrive at your home. 
              Whether you purchased your appliance at Sears, Home Depot, or Best Buy, a ServicePro Expert can help.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            {/* FIXED BUTTON: Standard Colors & Round Shape */}
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 text-lg rounded-full shadow-lg transition transform hover:scale-105">
              Schedule Service
            </button>
            <button className="bg-white border-2 border-gray-200 text-gray-700 hover:border-gray-900 hover:text-gray-900 font-bold px-8 py-4 text-lg rounded-full transition">
              View Our Reviews
            </button>
          </div>
        </div>
        
        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-4">
           <div className="space-y-4 mt-8">
             <div className="h-48 bg-gray-200 rounded-2xl bg-[url('https://images.unsplash.com/photo-1581092921461-eab62e97a782?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center shadow-lg hover:shadow-xl transition"></div>
             <div className="h-64 bg-gray-200 rounded-2xl bg-[url('https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center shadow-lg hover:shadow-xl transition"></div>
           </div>
           <div className="space-y-4">
             <div className="h-64 bg-gray-200 rounded-2xl bg-[url('https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center shadow-lg hover:shadow-xl transition"></div>
             <div className="h-48 bg-gray-200 rounded-2xl bg-[url('https://plus.unsplash.com/premium_photo-1663040543387-cb7c78c47251?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center shadow-lg hover:shadow-xl transition"></div>
           </div>
        </div>
      </section>

      {/* 4. VALUES SECTION */}
      <section className="bg-gray-100 py-24">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-12 text-gray-900">Our Promise to You</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:border-red-200 transition">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Satisfaction Guarantee</h3>
                <p className="text-gray-600 text-sm">We repair it at no cost if the issue returns within 90 days.</p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:border-red-200 transition">
                <div className="text-4xl mb-4">📍</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Local Experts</h3>
                <p className="text-gray-600 text-sm">National resources, local touch. 2,500+ techs in your area.</p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:border-red-200 transition">
                <div className="text-4xl mb-4">💲</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Upfront Pricing</h3>
                <p className="text-gray-600 text-sm">Complete estimates with no hidden fees before we start.</p>
              </div>

            </div>
         </div>
      </section>

      {/* 5. CTA FOOTER */}
      <section className="bg-gray-900 text-white py-20 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to get started?</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg">
          Join millions of satisfied customers who trust ServicePro.
        </p>
        <Link href="/">
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-12 py-5 rounded-full shadow-xl hover:shadow-2xl transition transform hover:-translate-y-1">
            Find a Technician
          </button>
        </Link>
      </section>

    </main>
  );
}