// import React from 'react';
// import { GitMerge } from 'lucide-react';
import React from 'react';
import { motion } from 'framer-motion';
import { BeakerIcon, LightBulbIcon, ArrowDownIcon } from '@heroicons/react/24/solid';

function SingleInheritance() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold text-center text-indigo-800 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Understanding Single Inheritance
        </motion.h1>

        {/* Main concept explanation */}
        <motion.div 
          className="bg-white rounded-lg shadow-lg p-6 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold text-indigo-700 mb-4">What is Single Inheritance?</h2>
          <p className="text-gray-700 leading-relaxed">
            Single inheritance is a concept in object-oriented programming where a class can inherit properties 
            and methods from only one parent class. Think of it like a family tree where each child has exactly one parent.
          </p>
        </motion.div>

        {/* Animated example */}
        <div className="grid grid-cols-1 gap-8 mb-8">
          <motion.div 
            className="bg-white rounded-lg shadow-lg p-6 relative overflow-hidden"
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", duration: 1, delay: 0.5 }}
          >
            <div className="flex flex-col items-center">
              {/* Parent Class */}
              <motion.div 
                className="bg-indigo-500 text-white p-4 rounded-lg w-64 text-center"
                whileHover={{ scale: 1.05 }}
              >
                <BeakerIcon className="h-8 w-8 mx-auto mb-2" />
                <h3 className="font-bold">Parent Class</h3>
                <p className="text-sm">Base properties & methods</p>
              </motion.div>

              {/* Arrow Animation */}
              <motion.div 
                className="my-4"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowDownIcon className="h-8 w-8 text-indigo-500" />
              </motion.div>

              {/* Child Class */}
              <motion.div 
                className="bg-purple-500 text-white p-4 rounded-lg w-64 text-center"
                whileHover={{ scale: 1.05 }}
              >
                <LightBulbIcon className="h-8 w-8 mx-auto mb-2" />
                <h3 className="font-bold">Child Class</h3>
                <p className="text-sm">Inherited + New features</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Code example */}
        <motion.div 
          className="bg-gray-900 rounded-lg shadow-lg p-6 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-purple-300">Code Example:</h3>
          <pre className="font-mono text-sm">
            <code>{`class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    return \`\${this.name} makes a sound\`;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  
  speak() {
    return \`\${this.name} barks!\`;
  }
}`}</code>
          </pre>
        </motion.div>

        {/* Key points */}
        <motion.div 
          className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h4 className="text-lg font-semibold text-indigo-700 mb-2">Benefits</h4>
            <ul className="list-disc list-inside text-gray-700">
              <li>Code reusability</li>
              <li>Clean hierarchical structure</li>
              <li>Easier maintenance</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h4 className="text-lg font-semibold text-indigo-700 mb-2">Limitations</h4>
            <ul className="list-disc list-inside text-gray-700">
              <li>Can inherit from only one class</li>
              <li>Tight coupling between classes</li>
              <li>Limited flexibility</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default SingleInheritance;

// xxxxxxxxxxxxxxxxxxxxxxxxxx
// const SingleInheritance = () => {
//   return (
//     <div className="p-6">
//       <div className="bg-white rounded-lg shadow-lg p-8">
//         <div className="flex items-center mb-6">
//           <GitMerge className="w-8 h-8 text-blue-600 mr-3" />
//           <h1 className="text-3xl font-bold text-gray-800">Single Inheritance</h1>
//         </div>

//         <p className="text-gray-600 mb-6">
//           Single inheritance is when a class inherits from only one parent class. This is the most common and straightforward type of inheritance.
//         </p>

//         <div className="bg-gray-50 rounded-lg p-6 mb-6">
//           <h2 className="text-xl font-semibold text-gray-800 mb-4">Example:</h2>
//           <div className="bg-gray-800 rounded-lg p-4">
//             <pre className="text-green-400">
//               <code>{`class Animal {
//   name: string;
  
//   constructor(name: string) {
//     this.name = name;
//   }
  
//   makeSound(): void {
//     console.log("Some sound");
//   }
// }

// class Dog extends Animal {
//   breed: string;
  
//   constructor(name: string, breed: string) {
//     super(name);
//     this.breed = breed;
//   }
  
//   makeSound(): void {
//     console.log("Woof!");
//   }
// }`}</code>
//             </pre>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div className="bg-blue-50 rounded-lg p-6">
//             <h3 className="text-lg font-semibold text-blue-800 mb-3">Advantages</h3>
//             <ul className="list-disc list-inside text-gray-700 space-y-2">
//               <li>Simple and straightforward</li>
//               <li>Clear hierarchy</li>
//               <li>Easy to maintain</li>
//               <li>No ambiguity</li>
//             </ul>
//           </div>

//           <div className="bg-indigo-50 rounded-lg p-6">
//             <h3 className="text-lg font-semibold text-indigo-800 mb-3">Use Cases</h3>
//             <ul className="list-disc list-inside text-gray-700 space-y-2">
//               <li>Basic class extensions</li>
//               <li>Simple hierarchies</li>
//               <li>Framework development</li>
//               <li>Component systems</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SingleInheritance;