'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface CityOption {
  label: string;
  url: string;
  searchTerms: string;
}

export function SearchHero({ cities }: { cities: any[] }) {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<CityOption[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    
    if (val.length > 1) {
      const filtered = cities.filter(c => c.searchTerms.includes(val.toLowerCase()));
      setResults(filtered.slice(0, 5)); // Limit to 5 results
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  const handleSelect = (url: string) => {
    router.push(url);
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">
      <h3 className="text-gray-900 text-xl font-bold mb-4 border-b border-gray-100 pb-2">
        Schedule Service
      </h3>
      
      <div className="relative">
        <label className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1 block">
          Find your location
        </label>
        <input 
          type="text" 
          placeholder="Enter Zip or City (e.g. Austin)" 
          className="w-full p-4 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 font-medium focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
          value={query}
          onChange={handleSearch}
        />
        
        {/* Dropdown Results */}
        {isOpen && results.length > 0 && (
          <div className="absolute z-10 w-full bg-white mt-1 rounded-lg shadow-xl border border-gray-200 max-h-60 overflow-auto">
            {results.map((city, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(city.url)}
                className="w-full text-left px-4 py-3 hover:bg-gray-50 text-gray-800 border-b border-gray-100 last:border-0 flex justify-between items-center group"
              >
                <span>{city.label}</span>
                <span className="text-gray-400 group-hover:text-red-500">→</span>
              </button>
            ))}
          </div>
        )}
        
        {isOpen && results.length === 0 && (
          <div className="absolute z-10 w-full bg-white mt-1 p-4 text-gray-500 text-sm shadow-xl rounded-lg border border-gray-200">
            No cities found. Try "Austin" or "Dallas".
          </div>
        )}
      </div>

      <button className="w-full mt-6 bg-red-600 text-white font-bold py-4 rounded-lg hover:bg-red-700 transition shadow-lg transform hover:-translate-y-0.5">
        Schedule Now
      </button>

      <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
        <span>📞 (800) 665-2127</span>
        <span className="text-red-600 font-medium cursor-pointer">Live Chat</span>
      </div>
    </div>
  );
}