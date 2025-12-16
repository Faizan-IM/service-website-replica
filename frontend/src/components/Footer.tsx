export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Top Section: Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-bold mb-4 uppercase text-sm tracking-wider text-gray-400">Company</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white hover:underline">About Us</a></li>
              <li><a href="#" className="hover:text-white hover:underline">Careers</a></li>
              <li><a href="#" className="hover:text-white hover:underline">Our Techs</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 uppercase text-sm tracking-wider text-gray-400">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white hover:underline">Appliance Repair</a></li>
              <li><a href="#" className="hover:text-white hover:underline">HVAC</a></li>
              <li><a href="#" className="hover:text-white hover:underline">Home Warranty</a></li>
            </ul>
          </div>
          <div>
             <h4 className="font-bold mb-4 uppercase text-sm tracking-wider text-gray-400">Support</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white hover:underline">Track Your Order</a></li>
              <li><a href="#" className="hover:text-white hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:text-white hover:underline">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 uppercase text-sm tracking-wider text-gray-400">Stay Connected</h4>
            <p className="text-sm text-gray-300 mb-4">
              Get the latest updates and offers.
            </p>
            <div className="flex gap-2">
              <input type="email" placeholder="Enter email" className="px-4 py-2 rounded-full text-gray-900 w-full text-sm focus:outline-none focus:ring-2 focus:ring-brand-red" />
              <button className="bg-brand-red px-6 py-2 rounded-full font-bold text-sm hover:bg-red-600 transition-colors">GO</button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>&copy; 2025 ServicePro LLC. All Rights Reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}