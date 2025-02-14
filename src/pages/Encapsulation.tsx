import React from 'react';
import { Lock, Key } from 'lucide-react';

const Encapsulation = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center mb-6">
          <Lock className="w-8 h-8 text-green-600 mr-3" />
          <h1 className="text-3xl font-bold text-gray-800">Encapsulation</h1>
        </div>

        <p className="text-gray-600 mb-6">
          Encapsulation is the bundling of data and the methods that operate on that data within a single unit or object, restricting direct access to some of an object's components.
        </p>

    
      </div>
    </div>
  );
};

export default Encapsulation;