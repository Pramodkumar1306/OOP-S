import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BeakerIcon, ArrowUpIcon, CodeBracketIcon } from '@heroicons/react/24/solid';

function Upcasting() {
  const [step, setStep] = useState(0);
  const [showCode, setShowCode] = useState(true);
  const [selectedExample, setSelectedExample] = useState(0);
  const [showAnimalDemo, setShowAnimalDemo] = useState(false);

  const realLifeExamples = [
    {
      title: "Zoo Management",
      superclass: "Animal",
      subclass: "Lion",
      explanation: "A zookeeper can treat all animals (feeding, health checks) without knowing their specific species. A Lion object can be handled as an Animal.",
      methods: {
        common: ["feed()", "checkHealth()"],
        specific: ["roar()", "hunt()"]
      }
    },
    {
      title: "Banking System",
      superclass: "Account",
      subclass: "SavingsAccount",
      explanation: "Bank systems can process any account type for basic operations. A SavingsAccount can be handled as a generic Account.",
      methods: {
        common: ["deposit()", "withdraw()"],
        specific: ["addInterest()", "calculateBonus()"]
      }
    },
    {
      title: "Restaurant Order",
      superclass: "MenuItem",
      subclass: "Pizza",
      explanation: "Restaurant systems handle all menu items similarly for basic operations. A Pizza object can be processed as a MenuItem.",
      methods: {
        common: ["getPrice()", "getName()"],
        specific: ["addToppings()", "setSize()"]
      }
    }
  ];

  const steps = [
    "Creating a Car object",
    "Upcasting to Vehicle reference",
    "Accessing methods"
  ];

  const nextStep = () => {
    setStep((prev) => (prev + 1) % steps.length);
  };

  const animalCode = `class Animal {  
    void makeSound() {  
        System.out.println("Some generic animal sound");  
    }  
}  

class Dog extends Animal {  
    void bark() {  
        System.out.println("Dog is barking: Woof Woof!");  
    }  
}  

public class Main {  
    public static void main(String[] args) {  
        Animal myPet = new Dog();  // Upcasting
        myPet.makeSound();  // This works
        // myPet.bark();  // This won't work!
    }  
}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold text-center text-purple-800 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Understanding Upcasting in Java
        </motion.h1>

        {/* Animal Demo Section */}
        <motion.div 
          className="bg-white rounded-lg shadow-lg p-6 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">The Animal Kingdom Example</h2>
          <p className="text-gray-700 mb-4">
            Think of it this way: Every dog is an animal, but not every animal is a dog. 
            This is exactly how upcasting works in Java!
          </p>
          
          <button
            onClick={() => setShowAnimalDemo(!showAnimalDemo)}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors mb-4"
          >
            {showAnimalDemo ? "Hide Animation" : "Show Animation"}
          </button>

          <AnimatePresence>
            {showAnimalDemo && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex justify-center space-x-8 mb-8">
                    <motion.div
                      className="bg-purple-100 p-4 rounded-lg text-center"
                      initial={{ x: -50 }}
                      animate={{ x: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <h3 className="text-xl font-bold text-purple-800 mb-2">Animal Class</h3>
                      <p className="text-purple-600">makeSound()</p>
                    </motion.div>
                    <motion.div
                      className="flex items-center text-purple-500"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                    >
                      <ArrowUpIcon className="h-8 w-8 transform rotate-90" />
                      <span className="ml-2">extends</span>
                    </motion.div>
                    <motion.div
                      className="bg-blue-100 p-4 rounded-lg text-center"
                      initial={{ x: 50 }}
                      animate={{ x: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <h3 className="text-xl font-bold text-blue-800 mb-2">Dog Class</h3>
                      <p className="text-blue-600">bark()</p>
                    </motion.div>
                  </div>
                  
                  <motion.div
                    className="bg-green-100 p-4 rounded-lg mb-4"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.5 }}
                  >
                    <h4 className="text-lg font-semibold text-green-800 mb-2">Upcasting in Action</h4>
                    <code className="block bg-white p-2 rounded">Animal myPet = new Dog();</code>
                    <div className="mt-4 grid grid-cols-2 gap-4">
                      <div className="bg-white p-3 rounded border-2 border-green-500">
                        <p className="text-green-700">✅ myPet.makeSound()</p>
                        <p className="text-sm text-gray-600">Works! (Animal method)</p>
                      </div>
                      <div className="bg-white p-3 rounded border-2 border-red-500">
                        <p className="text-red-700">❌ myPet.bark()</p>
                        <p className="text-sm text-gray-600">Won't work! (Dog method)</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Main concept explanation */}
        <motion.div 
          className="bg-white rounded-lg shadow-lg p-6 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">What is Upcasting?</h2>
          <p className="text-gray-700 leading-relaxed">
            Upcasting is when you treat a subclass object as if it were an instance of its superclass.
            It's like saying "every Car is a Vehicle" - you can refer to a Car object using a Vehicle reference.
          </p>
        </motion.div>

        {/* Real-life Examples Carousel */}
        <motion.div 
          className="bg-white rounded-lg shadow-lg p-6 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold text-purple-700 mb-4">Real-life Examples</h2>
          <div className="flex space-x-4 mb-4">
            {realLifeExamples.map((example, index) => (
              <button
                key={index}
                onClick={() => setSelectedExample(index)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedExample === index
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-200 hover:bg-gray-300'
                }`}
              >
                {example.title}
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedExample}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-gray-50 rounded-lg p-4"
            >
              <h3 className="text-xl font-semibold text-purple-600 mb-2">
                {realLifeExamples[selectedExample].title}
              </h3>
              <p className="text-gray-700 mb-4">
                {realLifeExamples[selectedExample].explanation}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-purple-100 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-700 mb-2">
                    {realLifeExamples[selectedExample].superclass} Methods (Available after upcasting)
                  </h4>
                  <ul className="list-disc list-inside text-purple-600">
                    {realLifeExamples[selectedExample].methods.common.map((method, index) => (
                      <li key={index}>{method}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-blue-100 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-700 mb-2">
                    {realLifeExamples[selectedExample].subclass} Specific Methods (Hidden after upcasting)
                  </h4>
                  <ul className="list-disc list-inside text-blue-600">
                    {realLifeExamples[selectedExample].methods.specific.map((method, index) => (
                      <li key={index}>{method}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Interactive Animation */}
        <div className="grid grid-cols-1 gap-8 mb-8">
          <motion.div 
            className="bg-white rounded-lg shadow-lg p-6 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex flex-col items-center">
              {/* Animation Stage */}
              <div className="relative h-64 w-full mb-8">
                <AnimatePresence mode="wait">
                  {step === 0 && (
                    <motion.div
                      key="car"
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                    >
                      <div className="bg-blue-500 text-white p-6 rounded-lg">
                        <h3 className="font-bold text-xl">Car Object</h3>
                        <p>Methods: start(), drive()</p>
                      </div>
                    </motion.div>
                  )}
                  
                  {step === 1 && (
                    <motion.div
                      key="upcast"
                      className="absolute inset-0 flex flex-col items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="bg-purple-500 text-white p-6 rounded-lg mb-4">
                        <h3 className="font-bold text-xl">Vehicle Reference</h3>
                        <p>Type: Vehicle</p>
                      </div>
                      <ArrowUpIcon className="h-8 w-8 text-purple-500 animate-bounce" />
                      <div className="bg-blue-500 text-white p-6 rounded-lg mt-4">
                        <h3 className="font-bold text-xl">Car Object</h3>
                        <p>Actual type: Car</p>
                      </div>
                    </motion.div>
                  )}
                  
                  {step === 2 && (
                    <motion.div
                      key="methods"
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="text-center">
                        <div className="bg-green-500 text-white p-4 rounded-lg mb-4">
                          <p>✅ vehicle.start()</p>
                        </div>
                        <div className="bg-red-500 text-white p-4 rounded-lg">
                          <p>❌ vehicle.drive()</p>
                          <p className="text-sm">Not accessible after upcasting</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Step Navigation */}
              <div className="text-center">
                <p className="text-lg font-semibold text-purple-700 mb-4">{steps[step]}</p>
                <button
                  onClick={nextStep}
                  className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Next Step
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Code Toggle Button */}
        <motion.button
          className="mb-4 flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
          onClick={() => setShowCode(!showCode)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <CodeBracketIcon className="h-5 w-5" />
          {showCode ? 'Hide Code' : 'Show Code'}
        </motion.button>

        {/* Code example */}
        <AnimatePresence>
          {showCode && (
            <motion.div 
              className="bg-gray-900 rounded-lg shadow-lg p-6 text-white"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-purple-300">Code Example:</h3>
              <pre className="font-mono text-sm overflow-x-auto">
                <code>{animalCode}</code>
              </pre>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Key points */}
        <motion.div 
          className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h4 className="text-lg font-semibold text-purple-700 mb-2">Benefits of Upcasting</h4>
            <ul className="list-disc list-inside text-gray-700">
              <li>Polymorphic behavior</li>
              <li>Flexible method parameters</li>
              <li>Collection handling</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h4 className="text-lg font-semibold text-purple-700 mb-2">Important Notes</h4>
            <ul className="list-disc list-inside text-gray-700">
              <li>Access only superclass methods</li>
              <li>Automatic process</li>
              <li>Type safety maintained</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}


export default Upcasting;