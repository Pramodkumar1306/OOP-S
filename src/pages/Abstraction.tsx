import React from 'react';
import { Shield, Code } from 'lucide-react';

const Abstraction = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center mb-6">
          <Shield className="w-8 h-8 text-blue-600 mr-3" />
          <h1 className="text-3xl font-bold text-gray-800">Abstraction</h1>
        </div>
      </div>
    </div>
  );
};

export default Abstraction;