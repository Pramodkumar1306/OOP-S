import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Shield, Code, GitBranch } from 'lucide-react';

import { CarAbstraction } from './pagessssssss/CarAbstraction';
import Aclass from './Abstraction/Aclass';
import Method from './Abstraction/Method';

const Abstraction = () => {
  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 bg-white shadow-lg">
        <div className="p-4">
          <div className="flex items-center mb-6">
            <GitBranch className="text-blue-500" />
            <h2 className="text-xl font-bold text-gray-800">Abstraction Types</h2>
          </div>

          {/* Navigation Links */}
          <div className="space-y-2">
            <Link
              to="Aclass"
              className={`block p-2 rounded-md ${
                location.pathname.includes('Aclass')
                  ? 'bg-red-50 text-red-700'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Abstraction Class
            </Link>
            <Link
              to="Method"
              className={`block p-2 rounded-md ${
                location.pathname.includes('Method')
                  ? 'bg-red-50 text-red-700'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              Abstraction Method
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<CarAbstraction />} />
          <Route path="Aclass" element={<Aclass />} />
          <Route path="Method" element={<Method />} />
        </Routes>
      </div>
    </div>
  );
};

export default Abstraction;