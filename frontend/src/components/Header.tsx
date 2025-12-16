import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo Section */}
        <Link href="/locations" className="flex items-center gap-2 group">
          {/* Logo Icon */}
          <div className="w-10 h-10 bg-brand-red rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-red-200 group-hover:scale-110 transition-transform">
            S
          </div>
          {/* Logo Text */}
          <span className="text-2xl font-extrabold text-brand-dark tracking-tight">
            Service<span className="text-brand-red">Pro</span>
          </span>
        </Link>

        {/* Desktop Navigation (Pill-shaped links) */}
        <nav className="hidden md:flex gap-2 text-sm font-bold text-gray-600">
          {['Repairs', 'Installations', 'Maintenance', 'DIY Parts'].map((item) => (
             <Link key={item} href="#" className="px-4 py-2 rounded-full hover:bg-gray-100 hover:text-brand-red transition-all">
               {item}
             </Link>
          ))}
        </nav>

        {/* Call to Action Button */}
        <div>
          <button className="bg-brand-red text-white px-6 py-2.5 rounded-full font-bold hover:bg-red-700 transition-colors shadow-md hover:shadow-lg text-sm">
            Book Online
          </button>
        </div>
      </div>
    </header>
  );
}