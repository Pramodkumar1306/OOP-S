import React from 'react';
import { GitFork } from 'lucide-react';

const HierarchicalInheritance = () => {
  return (
    <div className="p-6">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center mb-6">
          <GitFork className="w-8 h-8 text-orange-600 mr-3" />
          <h1 className="text-3xl font-bold text-gray-800">Hierarchical Inheritance</h1>
        </div>

        <p className="text-gray-600 mb-6">
          Hierarchical inheritance occurs when multiple classes inherit from a single base class, creating a hierarchy of classes.
        </p>

        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Example:</h2>
          <div className="bg-gray-800 rounded-lg p-4">
            <pre className="text-green-400">
              <code>{`class Animal {
  name: string;
  
  constructor(name: string) {
    this.name = name;
  }
}

class Dog extends Animal {
  bark(): void {
    console.log("Woof!");
  }
}

class Cat extends Animal {
  meow(): void {
    console.log("Meow!");
  }
}

class Bird extends Animal {
  fly(): void {
    console.log("Flying!");
  }
}`}</code>
            </pre>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-orange-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-orange-800 mb-3">Advantages</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Code reusability</li>
              <li>Clean structure</li>
              <li>Easy maintenance</li>
              <li>Specialized behavior</li>
            </ul>
          </div>

          <div className="bg-amber-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-amber-800 mb-3">Use Cases</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Shape hierarchies</li>
              <li>UI components</li>
              <li>Vehicle types</li>
              <li>Employee categories</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HierarchicalInheritance;