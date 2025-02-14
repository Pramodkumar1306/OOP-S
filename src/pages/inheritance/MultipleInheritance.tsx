import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Code Block Component
const CodeBlock: React.FC<{ code: string; title?: string }> = ({ code, title }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-lg overflow-hidden shadow-lg"
    >
      {title && (
        <div className="bg-gray-800 text-white px-4 py-2 text-sm font-mono">
          {title}
        </div>
      )}
      <SyntaxHighlighter
        language="java"
        style={oneDark}
        className="text-sm"
        showLineNumbers
      >
        {code}
      </SyntaxHighlighter>
    </motion.div>
  );
};

// Diamond Problem Component
const DiamondProblem: React.FC = () => {
  const diamondCode = `class A {
    void show() {
        System.out.println("Hello from A");
    }
}

class B extends A {
    void show() {
        System.out.println("Hello from B");
    }
}

class C extends A {
    void show() {
        System.out.println("Hello from C");
    }
}

// ❌ Error! Java does not allow this!
class D extends B, C {
    public static void main(String[] args) {
        D obj = new D();
        obj.show(); // Java doesn't know which 'show()' to use!
    }
}`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-6"
    >
      <motion.div
        initial={{ x: -50 }}
        animate={{ x: 0 }}
        className="bg-white rounded-lg p-6 shadow-lg"
      >
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          ❌ The Diamond Problem
        </h2>
        <p className="text-gray-700 mb-4">
          When a class tries to inherit from two parent classes that have the same method,
          Java gets confused! 🤔 This is called the Diamond Problem.
        </p>
        
        <div className="flex justify-center mb-6">
          <motion.div
            className="relative w-64 h-64"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white rounded-lg p-2">
              Class A
            </div>
            <div className="absolute top-1/3 left-1/4 bg-green-500 text-white rounded-lg p-2">
              Class B
            </div>
            <div className="absolute top-1/3 right-1/4 bg-green-500 text-white rounded-lg p-2">
              Class C
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-red-500 text-white rounded-lg p-2">
              Class D ❓
            </div>
          </motion.div>
        </div>

        <CodeBlock code={diamondCode} title="Diamond Problem Example" />
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 bg-red-100 border-l-4 border-red-500 p-4"
        >
          <p className="text-red-700">
            🚨 Java prevents this problem by not allowing multiple inheritance with classes!
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// Interface Solution Component
const InterfaceSolution: React.FC = () => {
  const interfaceCode = `interface B {
    void show();
}

interface C {
    void show();
}

// ✅ No problem! Class D defines its own 'show()' method.
class D implements B, C {
    public void show() {
        System.out.println("Hello from D");
    }

    public static void main(String[] args) {
        D obj = new D();
        obj.show(); // Works perfectly!
    }
}`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-6"
    >
      <motion.div
        initial={{ x: 50 }}
        animate={{ x: 0 }}
        className="bg-white rounded-lg p-6 shadow-lg"
      >
        <h2 className="text-2xl font-bold text-green-600 mb-4">
          ✅ The Interface Solution
        </h2>
        <p className="text-gray-700 mb-4">
          Interfaces to the rescue! 🦸‍♂️ With interfaces, Java knows exactly what to do
          because the class must provide its own implementation.
        </p>

        <div className="flex justify-center mb-6">
          <motion.div
            className="relative w-64 h-64"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute top-1/3 left-1/4 bg-blue-500 text-white rounded-lg p-2">
              Interface B
            </div>
            <div className="absolute top-1/3 right-1/4 bg-blue-500 text-white rounded-lg p-2">
              Interface C
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-green-500 text-white rounded-lg p-2">
              Class D ✅
            </div>
          </motion.div>
        </div>

        <CodeBlock code={interfaceCode} title="Interface Solution Example" />
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 bg-green-100 border-l-4 border-green-500 p-4"
        >
          <p className="text-green-700">
            🎉 With interfaces, multiple inheritance works perfectly because the class
            provides its own implementation of the methods!
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// Main App Component
function MultipleInheritance() {
  const [showDiamond, setShowDiamond] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
          Understanding Multiple Inheritance in Java! 🚀
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Let's learn why Java doesn't allow multiple inheritance with classes,
          but allows it with interfaces! 🤓
        </p>

        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              onClick={() => setShowDiamond(true)}
              className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                showDiamond
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              ❌ Classes (Problem)
            </button>
            <button
              onClick={() => setShowDiamond(false)}
              className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                !showDiamond
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              ✅ Interfaces (Solution)
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {showDiamond ? <DiamondProblem /> : <InterfaceSolution />}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-8 text-center"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            🎯 Key Takeaways
          </h2>
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <ul className="space-y-2 text-left max-w-md mx-auto">
              <li className="flex items-center">
                <span className="text-red-500 mr-2">❌</span>
                Multiple inheritance with classes can cause the Diamond Problem
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✅</span>
                Interfaces solve this by requiring classes to provide their own implementations
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">💡</span>
                This is why Java uses interfaces for multiple inheritance
              </li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}


export default MultipleInheritance;