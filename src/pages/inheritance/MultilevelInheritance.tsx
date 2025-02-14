import React from 'react';
import { GitCommit } from 'lucide-react';

const MultilevelInheritance = () => {
  return (
    <div className="p-6">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center mb-6">
          <GitCommit className="w-8 h-8 text-green-600 mr-3" />
          <h1 className="text-3xl font-bold text-gray-800">Multilevel Inheritance</h1>
        </div>

        <p className="text-gray-600 mb-6">
          Multilevel inheritance involves creating a chain of inheritance where a class inherits from another class, which in turn inherits from another class.
        </p>

        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Example:</h2>
          <div className="bg-gray-800 rounded-lg p-4">
            <pre className="text-green-400">
              <code>{`class Animal {
  eat(): void {
    console.log("Eating...");
  }
}

class Mammal extends Animal {
  breathe(): void {
    console.log("Breathing...");
  }
}

class Dog extends Mammal {
  bark(): void {
    console.log("Barking...");
  }
}`}</code>
            </pre>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-800 mb-3">Benefits</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Natural hierarchy</li>
              <li>Method inheritance</li>
              <li>Code organization</li>
              <li>Specialization</li>
            </ul>
          </div>

          <div className="bg-emerald-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-emerald-800 mb-3">Considerations</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Inheritance depth</li>
              <li>Complexity management</li>
              <li>Method overriding</li>
              <li>Constructor chaining</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultilevelInheritance;