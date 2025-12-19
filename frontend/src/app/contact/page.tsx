import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | ServicePro',
  description: 'Get in touch with our expert appliance repair technicians.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      
      {/* --- 1. HERO SECTION (Dark Brand) --- */}
      <div className="bg-[#111] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-red-600 font-bold uppercase tracking-wider text-sm mb-2">
            We're Here to Help
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have a question or need to schedule a repair? Reach out to our team 24/7.
          </p>
        </div>
      </div>

      {/* --- 2. MAIN CONTENT GRID --- */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* LEFT COLUMN: Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Whether you need an emergency repair or just have a question about our services, 
              our support team is ready to assist you.
            </p>

            <div className="space-y-8">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-red-600 text-xl flex-shrink-0">
                  📞
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Phone Support</h3>
                  <p className="text-gray-500 text-sm mb-1">Available 24/7 for scheduling</p>
                  <a href="tel:8006652127" className="text-xl font-bold text-red-600 hover:text-red-700">
                    (800) 665-2127
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-red-600 text-xl flex-shrink-0">
                  ✉️
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Email Us</h3>
                  <p className="text-gray-500 text-sm mb-1">For general inquiries</p>
                  <a href="mailto:support@servicepro.com" className="text-lg font-medium text-gray-900 hover:text-red-600 transition-colors">
                    support@servicepro.com
                  </a>
                </div>
              </div>

              {/* Corporate Office */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-red-600 text-xl flex-shrink-0">
                  🏢
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">Corporate Office</h3>
                  <p className="text-gray-600">
                    123 Repair Street, Suite 100<br />
                    Tech City, TX 75001
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
            
            <form className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-red-600 text-white font-bold py-4 rounded-lg hover:bg-red-700 transition-colors shadow-lg shadow-red-900/10"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
      
      {/* --- 3. CTA STRIP --- */}
      <div className="bg-gray-900 py-12 text-center">
         <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-white mb-4">Ideally, you should just book online.</h2>
            <p className="text-gray-400 mb-8">It's the fastest way to get a technician to your door.</p>
            <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
              Schedule Service Now
            </button>
         </div>
      </div>

    </div>
  );
}