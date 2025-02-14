import React from 'react';
import { Network } from 'lucide-react';

const HybridInheritance = () => {
  return (
    <div className="p-6">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center mb-6">
          <Network className="w-8 h-8 text-red-600 mr-3" />
          <h1 className="text-3xl font-bold text-gray-800">Hybrid Inheritance</h1>
        </div>

        <p className="text-gray-600 mb-6">
          Hybrid inheritance is a combination of multiple inheritance types, such as single and hierarchical inheritance, creating complex inheritance patterns.
        </p>

        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Example:</h2>
          <div className="bg-gray-800 rounded-lg p-4">
            <pre className="text-green-400">
              <code>{`interface Animal {
  eat(): void;
}

interface Bird {
  fly(): void;
}

class LivingBeing {
  breathe(): void {
    console.log("Breathing...");
  }
}

class Eagle extends LivingBeing implements Animal, Bird {
  eat(): void {
    console.log("Eagle eating...");
  }
  
  fly(): void {
    console.log("Eagle flying...");
  }
}`}</code>
            </pre>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-red-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-red-800 mb-3">Characteristics</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Complex relationships</li>
              <li>Multiple inheritance paths</li>
              <li>Interface combinations</li>
              <li>Flexible structure</li>
            </ul>
          </div>

          <div className="bg-rose-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-rose-800 mb-3">Challenges</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Complexity management</li>
              <li>Ambiguity resolution</li>
              <li>Maintenance overhead</li>
              <li>Design clarity</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HybridInheritance;