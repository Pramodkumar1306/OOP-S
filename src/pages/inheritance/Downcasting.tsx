import { motion } from "framer-motion";
import { useState } from "react";
import { AlertTriangle } from "lucide-react";

export default function Downcasting() {
  const [stage, setStage] = useState(1);

  return (
    <div className="flex flex-col items-center p-6 space-y-6">
      <motion.h1
        className="text-2xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Understanding Downcasting in Java! 🚀
      </motion.h1>

      {/* Animation - Upcasting & Downcasting */}
      <div className="relative w-64 h-32 flex items-center justify-center">
        {stage === 1 && (
          <motion.div
            className="text-5xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.5 }}
          >
            🐾
          </motion.div>
        )}
        {stage === 2 && (
          <motion.div
            className="text-5xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, scale: 1.2 }}
            transition={{ duration: 0.5 }}
          >
            🐶
          </motion.div>
        )}
        {stage === 3 && (
          <motion.div
            className="text-5xl text-red-600"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.5, 0] }}
            transition={{ duration: 0.5 }}
          >
            🐱❌🐶
          </motion.div>
        )}
      </div>

      {/* Code Example */}
      <div className="w-96 p-4 font-mono bg-gray-900 text-white rounded-lg">
        {stage === 1 && (
          <pre>
            {`class Animal {
  void makeSound() {
    System.out.println("Animal makes a sound");
  }
}
class Dog extends Animal {
  void bark() {
    System.out.println("Dog barks");
  }
}
public class Main {
  public static void main(String[] args) {
    Animal myAnimal = new Dog(); // ✅ Upcasting
  }
}`}
          </pre>
        )}
        {stage === 2 && (
          <pre>
            {`Dog myDog = (Dog) myAnimal; // ✅ Downcasting
myDog.bark(); // 🐶 Works fine!`}
          </pre>
        )}
        {stage === 3 && (
          <pre className="text-red-400">
            {`Animal myAnimal = new Cat(); // 🚨 Actually a Cat!
Dog myDog = (Dog) myAnimal; // ❌ ERROR! Cat is not a Dog!`}
          </pre>
        )}
      </div>

      {/* Buttons */}
      <div className="flex space-x-4">
        <button onClick={() => setStage(1)} className="px-4 py-2 bg-blue-500 text-white rounded">
          Upcasting ✅
        </button>
        <button onClick={() => setStage(2)} className="px-4 py-2 bg-green-500 text-white rounded">
          Downcasting ✅
        </button>
        <button onClick={() => setStage(3)} className="px-4 py-2 bg-red-500 text-white rounded">
          Wrong Downcasting ❌
        </button>
      </div>

      {/* Warning */}
      {stage === 3 && (
        <motion.div
          className="flex items-center text-red-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <AlertTriangle className="mr-2" /> Oops! You can only downcast if it's really that type!
        </motion.div>
      )}
    </div>
  );
}
