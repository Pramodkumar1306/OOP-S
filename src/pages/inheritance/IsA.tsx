import { motion } from 'framer-motion'
import { Code, List } from 'lucide-react'
import React from 'react'

export default function IsA() {
  return (
    <div>
        <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="bg-white p-6 rounded-xl shadow-lg"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">is-a Relationship in Java</h3>
                  <p className="text-gray-600 leading-relaxed">
                
                    The is-a relationship represents inheritance in Java, where one class is a specialized type of another class.

                <br/>Key Features:<br/>
                <ol>
            <pre>
                    <li >Achieved using extends (for class inheritance) and implements (for interfaces).</li>
                    <li>The subclass inherits fields and methods from the superclass.</li>
                    <li>Supports code reusability and polymorphism.</li>
            </pre>
            </ol>
                Types of is-a Relationship:<br/>
                Class Inheritance (extends) → One class extends another.
                Interface Inheritance (implements) → A class implements an interface.
            </p>
                </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-gray-900 p-6 rounded-xl shadow-lg"
        >
        <div className="flex items-center gap-2 mb-4">
            <Code className="w-6 h-6 text-blue-400" />
            <h2 className="text-xl font-semibold text-white">Java Implementation</h2>
          </div>
      <pre className="text-sm text-gray-300 overflow-x-auto">
            <code>{`
// Superclass
class Animal {
    void eat() {
        System.out.println("This animal eats food.");
    }
}

// Subclass
class Dog extends Animal {
    void bark() {
        System.out.println("Dog barks.");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.eat();  // Inherited from Animal (is-a relationship)
        d.bark();
    }
}
`}</code>
          </pre>
          </motion.div>
    </div>
  )
}



