import React, { useState } from 'react';
import { GitBranch, ChevronDown } from 'lucide-react';
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import SingleInheritance from './inheritance/SingleInheritance';
import MultipleInheritance from './inheritance/MultipleInheritance';
import MultilevelInheritance from './inheritance/MultilevelInheritance';
import HierarchicalInheritance from './inheritance/HierarchicalInheritance';
import HybridInheritance from './inheritance/HybridInheritance';
import Upcasting from './inheritance/Upcasting';
import Downcasting from './inheritance/Downcasting';
import Final from './inheritance/Final';

const Inheritance = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 bg-white shadow-lg">
        <div className="p-4">
          <div className="flex items-center mb-6">
            <GitBranch className="w-6 h-6 text-red-600 mr-2" />
            <h2 className="text-xl font-bold text-gray-800">Inheritance Types</h2>
          </div>

          {/* Dropdown Menu */}
          <div className="mb-4">
            <button
              className="w-full flex items-center justify-between p-2 text-gray-700 hover:bg-gray-100 rounded-md"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span className="font-medium">Types of Inheritance</span>
              <ChevronDown className={`w-5 h-5 transform transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isDropdownOpen && (
              <div className="ml-4 mt-2 space-y-2">
                <Link
                  to="/inheritance/single"
                  className={`block p-2 rounded-md ${location.pathname === '/inheritance/single' ? 'bg-red-50 text-red-700' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                  Single Inheritance
                </Link>
                <Link
                  to="/inheritance/multiple"
                  className={`block p-2 rounded-md ${location.pathname === '/inheritance/multiple' ? 'bg-red-50 text-red-700' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                  Multiple Inheritance
                </Link>
                <Link
                  to="/inheritance/multilevel"
                  className={`block p-2 rounded-md ${location.pathname === '/inheritance/multilevel' ? 'bg-red-50 text-red-700' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                  Multilevel Inheritance
                </Link>
                <Link
                  to="/inheritance/hierarchical"
                  className={`block p-2 rounded-md ${location.pathname === '/inheritance/hierarchical' ? 'bg-red-50 text-red-700' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                  Hierarchical Inheritance
                </Link>
                <Link
                  to="/inheritance/hybrid"
                  className={`block p-2 rounded-md ${location.pathname === '/inheritance/hybrid' ? 'bg-red-50 text-red-700' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                  Hybrid Inheritance
                </Link>
              </div>
            )}
          </div>

          {/* Additional Links */}
          <div className="space-y-2">
            <Link
              to="/inheritance/upcasting"
              className={`block p-2 rounded-md ${location.pathname === '/inheritance/upcasting' ? 'bg-red-50 text-red-700' : 'text-gray-600 hover:bg-gray-50'}`}
            >
              Upcasting
            </Link>
            <Link
              to="/inheritance/downcasting"
              className={`block p-2 rounded-md ${location.pathname === '/inheritance/downcasting' ? 'bg-red-50 text-red-700' : 'text-gray-600 hover:bg-gray-50'}`}
            >
              Downcasting
            </Link>
            <Link
              to="/inheritance/final"
              className={`block p-2 rounded-md ${location.pathname === '/inheritance/final' ? 'bg-red-50 text-red-700' : 'text-gray-600 hover:bg-gray-50'}`}
            >
              Final
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <Routes>
          <Route path="single" element={<SingleInheritance />} />
          <Route path="multiple" element={<MultipleInheritance />} />
          <Route path="multilevel" element={<MultilevelInheritance />} />
          <Route path="hierarchical" element={<HierarchicalInheritance />} />
          <Route path="hybrid" element={<HybridInheritance />} />
          <Route path="upcasting" element={<Upcasting />} />
          <Route path="downcasting" element={<Downcasting />} />
          <Route path="final" element={<Final />} />
          <Route path="/" element={
            <div className="p-6">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Understanding Inheritance</h1>
                <p className="text-gray-600">
                  Select a type of inheritance from the sidebar to learn more about its concepts, implementation, and best practices.
                </p>
              </div>
            </div>
          } />
        </Routes>
      </div>
    </div>
  );
};

export default Inheritance;