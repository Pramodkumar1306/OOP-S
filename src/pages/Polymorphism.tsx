import React from 'react';
import { Layers, Code2 } from 'lucide-react';

const Polymorphism = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center mb-6">
          <Layers className="w-8 h-8 text-green-600 mr-3" />
          <h1 className="text-3xl font-bold text-gray-800">Polymorphism</h1>
        </div>
        <p className="text-gray-600 mb-6">
          Polymorphism allows objects to be treated as instances of their parent class rather than their actual class. It enables a single interface to represent different underlying forms (data types or classes).
        </p>
    
      </div>
    </div>
        
  );
};

export default Polymorphism;