import { Cat, ChevronRight, Code, Dog, Volume2 } from 'lucide-react';
import React, { useState } from 'react';

function Method() {
  const [activeAnimal, setActiveAnimal] = useState<'dog' | 'cat' | null>(null);
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-4xl font-bold text-indigo-800 mb-4">Understanding Abstract Methods</h1>
          <p className="text-lg text-gray-700">
            Think of it as a musical concert where each performer follows the same sheet music but plays it their own way! 🎵
          </p>
        </header>

        {/* Main Concept Card */}
        <div className="bg-white rounded-lg shadow-xl p-6 transform hover:scale-[1.02] transition-transform">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">What is an Abstract Method?</h2>
          <div className="prose text-gray-700">
            <p>An abstract method is like a blueprint that defines <strong>what</strong> must be done, but not <strong>how</strong> it should be done.</p>
            <ul className="list-disc list-inside space-y-2">
              <li>It has a name but no implementation</li>
              <li>Lives in an abstract class</li>
              <li>Must be completed by child classes</li>
              <li>Ensures consistent behavior patterns</li>
            </ul>
          </div>
        </div>

        {/* Interactive Demo */}
        <div className="bg-white rounded-lg shadow-xl p-6">
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">Interactive Example</h2>
          <div className="flex flex-col items-center space-y-6">
            {/* Abstract Class Visualization */}
            <div className="w-full p-4 bg-gray-100 rounded-lg">
              <div className="flex items-center space-x-2 text-gray-700">
                <Volume2 className="text-indigo-600" />
                <code className="font-mono">abstract void makeSound()</code>
              </div>
            </div>

            {/* Implementation Examples */}
            <div className="grid grid-cols-2 gap-6 w-full">
              <button
                onClick={() => setActiveAnimal('dog')}
                className={`p-4 rounded-lg border-2 transition-all ${
                  activeAnimal === 'dog'
                    ? 'border-indigo-500 bg-indigo-50'
                    : 'border-gray-200 hover:border-indigo-300'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Dog className="text-indigo-600" />
                  <span className="font-semibold">Dog's Implementation</span>
                </div>
                {activeAnimal === 'dog' && (
                  <div className="mt-4 text-indigo-600 animate-bounce">
                    Woof! Woof! 🐕
                  </div>
                )}
              </button>

              <button
                onClick={() => setActiveAnimal('cat')}
                className={`p-4 rounded-lg border-2 transition-all ${
                  activeAnimal === 'cat'
                    ? 'border-indigo-500 bg-indigo-50'
                    : 'border-gray-200 hover:border-indigo-300'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <Cat className="text-indigo-600" />
                  <span className="font-semibold">Cat's Implementation</span>
                </div>
                {activeAnimal === 'cat' && (
                  <div className="mt-4 text-indigo-600 animate-bounce">
                    Meow! Meow! 😺
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Code Example */}
        <div className="bg-white rounded-lg shadow-xl p-6">
          <button
            onClick={() => setShowCode(!showCode)}
            className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-700"
          >
            <Code size={20} />
            <span>{showCode ? 'Hide Code Example' : 'Show Code Example'}</span>
            <ChevronRight
              className={`transform transition-transform ${
                showCode ? 'rotate-90' : ''
              }`}
            />
          </button>

          {showCode && (
            <pre className="mt-4 p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto">
              <code>{`abstract class Animal {
    abstract void makeSound(); // Abstract method (no body)
}

class Dog extends Animal {
    void makeSound() {
        System.out.println("Woof! Woof!");
    }
}

class Cat extends Animal {
    void makeSound() {
        System.out.println("Meow! Meow!");
    }
}`}</code>
            </pre>
          )}
        </div>

        {/* Key Takeaways */}
        <div className="bg-indigo-600 text-white rounded-lg shadow-xl p-6">
          <h2 className="text-2xl font-semibold mb-4">Key Takeaways</h2>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <ChevronRight size={20} />
              <span>Abstract methods define a contract that child classes must fulfill</span>
            </li>
            <li className="flex items-center space-x-2">
              <ChevronRight size={20} />
              <span>They promote code reusability and maintainability</span>
            </li>
            <li className="flex items-center space-x-2">
              <ChevronRight size={20} />
              <span>Each implementation can be unique while following the same interface</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Method;