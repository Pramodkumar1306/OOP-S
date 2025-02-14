import React, { useState, useEffect, useRef } from 'react';
import { Code2, ChevronDown, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8 ml-auto">
            {/* Home Link */}
            <Link 
              to="/" 
              className="flex items-center space-x-2 hover:text-blue-400 transition-colors duration-200"
            >
              <Code2 className="w-6 h-6 text-blue-400" />
              <span className="font-semibold text-lg">OOP Concepts</span>
            </Link>

            {/* Dropdown */}
            <div className="relative group" ref={dropdownRef}>
              <button
                className="flex items-center space-x-2 py-2 hover:text-blue-400 transition-colors duration-200"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <ChevronDown className={`w-5 h-5 transform transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                <span className="font-medium">Concepts</span>
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white text-gray-800 rounded-lg shadow-xl py-2 transform opacity-100 scale-100 transition-all duration-200 ease-out z-50 border border-gray-100">
                  <Link 
                    to="/inheritance" 
                    className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150 flex items-center space-x-2"
                  >
                    <span className="w-2 h-2 rounded-full bg-red-400"></span>
                    <span>Inheritance</span>
                  </Link>
                  <Link 
                    to="/abstraction" 
                    className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150 flex items-center space-x-2"
                  >
                    <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                    <span>Abstraction</span>
                  </Link>
                  <Link 
                    to="/encapsulation" 
                    className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150 flex items-center space-x-2"
                  >
                    <span className="w-2 h-2 rounded-full bg-green-400"></span>
                    <span>Encapsulation</span>
                  </Link>
                  <Link 
                    to="/polymorphism" 
                    className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150 flex items-center space-x-2"
                  >
                    <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                    <span>Polymorphism</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Static Link */}
            <Link 
              to="/static" 
              className="flex items-center space-x-2 hover:text-blue-400 transition-colors duration-200"
            >
              <Database className="w-5 h-5 text-blue-400" />
              <span className="font-medium">Static</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;