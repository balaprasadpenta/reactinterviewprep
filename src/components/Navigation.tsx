'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          React Interview Prep
        </Link>
        
        <div className="flex space-x-4">
          <Link 
            href="/interview/react/hookques"
            className={`px-4 py-2 rounded-lg transition-colors ${
              pathname === '/interview/react/hookques' 
                ? 'bg-purple-600' 
                : 'hover:bg-gray-800'
            }`}
          >
            React Hooks
          </Link>
          <Link 
            href="/interview/react/hookques"
            className={`px-4 py-2 rounded-lg transition-colors ${
              pathname === '/interview/react/router' 
                ? 'bg-purple-600' 
                : 'hover:bg-gray-800'
            }`}
          >
            React Router
          </Link>
          <Link 
            href="/interview/react/hookques"
            className={`px-4 py-2 rounded-lg transition-colors ${
              pathname === '/interview/react/state' 
                ? 'bg-purple-600' 
                : 'hover:bg-gray-800'
            }`}
          >
            State Management
          </Link>
        </div>
      </div>
    </nav>
  );
} 