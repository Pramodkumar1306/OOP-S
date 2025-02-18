import React, { useState } from 'react'
import { Calculator } from '../pagessssssss/Calculator'
import { AnimatePresence, motion } from 'framer-motion';
import { CodeBracketIcon } from '@heroicons/react/16/solid';

export default function CompileTimePolymorphism() {
  const [showCode, setShowCode] = useState(true);
  
  const animalCode = `public class CompileTimePolymorphism {
    
    // Method to add two integers
    public int add(int a, int b) {
        return a + b;
    }
    
    // Overloaded method to add three integers
    public int add(int a, int b, int c) {
        return a + b + c;
    }
    
    // Overloaded method to add two double values
    public double add(double a, double b) {
        return a + b;
    }
    
    public static void main(String[] args) {
        CompileTimePolymorphism obj = new CompileTimePolymorphism();
        
        // Calling add method with two integers
        System.out.println("Sum of two integers: " + obj.add(10, 20));
        
        // Calling add method with three integers
        System.out.println("Sum of three integers: " + obj.add(10, 20, 30));
        
        // Calling add method with two doubles
        System.out.println("Sum of two doubles: " + obj.add(10.5, 20.5));
    }
}
`;
  return (
    <div>
      <div className="p-6">
                    <div className="bg-white mb-5 rounded-lg shadow-lg p-8">
                      <h1 className="text-3xl font-bold text-gray-800 mb-6">Compile Time Polymorphism</h1>
                      <p className="text-gray-600">
                      **Compile-time polymorphism**, also known as **method overloading**, happens when a class has multiple methods with the same name, but they differ in the number or type of parameters. The key idea is that the compiler decides which method to use based on the method signature before the program even runs. This means the decision of which method to call is made during the compilation process, not while the program is running. It helps make the code more flexible and readable because you can use the same method name for different tasks, as long as the inputs (parameters) are different. For example, you can have a method that adds two numbers and another one that adds three numbers, both using the same name but with different parameter counts. Since the decision is made at compile time, this leads to faster execution at runtime.
                      </p>
                  </div>
            {/* </div> */}

      {/* <div className="max-w-4xl mx-auto"> */}

            {/* Code Toggle Button */}
            <motion.button
                className="mb-4 flex items-center m-px gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700"
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
        </div>
        <Calculator />
    </div>
  )
}
