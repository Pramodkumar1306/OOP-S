import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Final = () => {
  const [showVariableError, setShowVariableError] = useState(false);
  const [showMethodError, setShowMethodError] = useState(false); 
  const [showClassError, setShowClassError] = useState(false);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">Understanding final in Java! 🔒</h1>
        <p className="text-xl">final means something cannot be changed in Java!</p>
      </motion.div>

      {/* Final Variable Section */}
      <motion.div 
        className="bg-blue-100 p-6 rounded-lg mb-8"
        whileHover={{ scale: 1.02 }}
      >
        <h2 className="text-2xl font-bold mb-4">Final Variable</h2>
        <div className="relative">
          <pre className="bg-gray-800 text-white p-4 rounded">
            final int x = 10;
            x = 20; // Error!
          </pre>
          
          <button
            onClick={() => setShowVariableError(true)}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          >
            Try to Change Value
          </button>

          {showVariableError && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-red-500 text-white p-2 rounded mt-2"
            >
              🚫 Error: Cannot change a final variable!
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Final Method Section */}
      <motion.div 
        className="bg-green-100 p-6 rounded-lg mb-8"
        whileHover={{ scale: 1.02 }}
      >
        <h2 className="text-2xl font-bold mb-4">Final Method</h2>
        <div className="relative">
          <pre className="bg-gray-800 text-white p-4 rounded">
{`class Animal {
    final void makeSound() {
        System.out.println("Animal makes a sound");
    }
}

class Dog extends Animal {
    void makeSound() { // Error!
        System.out.println("Dog barks");
    }
}`}
          </pre>

          <button
            onClick={() => setShowMethodError(true)}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
          >
            Try to Override Method
          </button>

          {showMethodError && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-red-500 text-white p-2 rounded mt-2"
            >
              🚫 Error: Cannot override final method!
            </motion.div>
          )}
        </div>
      </motion.div>

      {/* Final Class Section */}
      <motion.div 
        className="bg-purple-100 p-6 rounded-lg mb-8"
        whileHover={{ scale: 1.02 }}
      >
        <h2 className="text-2xl font-bold mb-4">Final Class</h2>
        <div className="relative">
          <pre className="bg-gray-800 text-white p-4 rounded">
{`final class Car {
    void drive() {
        System.out.println("Driving...");
    }
}

class SportsCar extends Car { // Error!
}`}
          </pre>

          <button
            onClick={() => setShowClassError(true)}
            className="mt-4 bg-purple-500 text-white px-4 py-2 rounded"
          >
            Try to Extend Class
          </button>

          {showClassError && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-red-500 text-white p-2 rounded mt-2"
            >
              🚫 Error: Cannot inherit from final class!
            </motion.div>
          )}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center bg-yellow-100 p-6 rounded-lg"
      >
        <h2 className="text-2xl font-bold mb-4">Summary</h2>
        <ul className="text-left list-none">
          <li>✅ Final Variable = Cannot change value</li>
          <li>✅ Final Method = Cannot be overridden</li>
          <li>✅ Final Class = Cannot be inherited</li>
        </ul>
        <p className="mt-4 text-xl">Now you know how final works in Java! 🎉</p>
      </motion.div>
    </div>
  );
};

export default Final
// export default Final;