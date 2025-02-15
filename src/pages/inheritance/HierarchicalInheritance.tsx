import React from 'react';
import { motion } from 'framer-motion';
import { Beaker, Music, Trophy, GraduationCap, Code, ArrowDown } from 'lucide-react';

function HierarchicalInheritance  () {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-8"
        >
          {/* Title */}
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="text-4xl font-bold text-indigo-800 mb-4">
              Hierarchical Inheritance
            </h1>
            <p className="text-lg text-gray-600">
              One parent class inherited by multiple child classes
            </p>
          </motion.div>

          {/* Parent Class */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-lg p-6 shadow-lg border border-indigo-100"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-indigo-100 p-3 rounded-full">
                <GraduationCap className="w-8 h-8 text-indigo-600" />
              </div>
              <h2 className="text-2xl font-semibold text-indigo-800">Teacher (Parent Class)</h2>
            </div>
            <p className="text-gray-600">
              Base class that contains common properties and methods shared by all students
            </p>
          </motion.div>

          {/* Arrow Down */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <ArrowDown className="w-8 h-8 text-indigo-400" />
          </motion.div>

          {/* Child Classes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Science Student */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-lg p-6 shadow-lg border border-green-100 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Beaker className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-green-800">Science Student</h3>
              </div>
              <p className="text-gray-600">Inherits teaching ability + performs experiments</p>
            </motion.div>

            {/* Music Student */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-lg p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Music className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-purple-800">Music Student</h3>
              </div>
              <p className="text-gray-600">Inherits teaching ability + plays instruments</p>
            </motion.div>

            {/* Sports Student */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-lg p-6 shadow-lg border border-orange-100 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-orange-100 p-3 rounded-full">
                  <Trophy className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-orange-800">Sports Student</h3>
              </div>
              <p className="text-gray-600">Inherits teaching ability + excels in sports</p>
            </motion.div>
          </div>

          {/* Explanation */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-lg p-6 shadow-lg border border-indigo-100 mt-8"
          >
            <h3 className="text-xl font-semibold text-indigo-800 mb-4">How It Works</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>The Teacher class serves as the parent class with common teaching methods</li>
              <li>Multiple student classes inherit from the Teacher class</li>
              <li>Each student class adds its own specialized methods while maintaining the base functionality</li>
              <li>This creates a tree-like structure where one parent has many children</li>
              <li>All child classes can access and use the parent class's methods</li>
              <li>Each child class can override parent methods to customize behavior</li>
            </ul>
          </motion.div>

          {/* Code Example */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-lg p-6 shadow-lg border border-indigo-100"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-gray-100 p-3 rounded-full">
                <Code className="w-6 h-6 text-gray-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">TypeScript Example</h3>
            </div>
            <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
              <code className="text-sm text-gray-800">
{`// Parent class (Teacher)
class Teacher {
  protected name: string;
  
  constructor(name: string) {
    this.name = name;
  }

  teach(): string {
    return \`\${this.name} is teaching a class\`;
  }
}

// Child class (Science Student)
class ScienceStudent extends Teacher {
  private experiment: string;

  constructor(name: string, experiment: string) {
    super(name);
    this.experiment = experiment;
  }

  conductExperiment(): string {
    return \`\${this.name} is conducting \${this.experiment}\`;
  }
}

// Child class (Music Student)
class MusicStudent extends Teacher {
  private instrument: string;

  constructor(name: string, instrument: string) {
    super(name);
    this.instrument = instrument;
  }

  playMusic(): string {
    return \`\${this.name} is playing \${this.instrument}\`;
  }
}

// Usage example
const scienceStudent = new ScienceStudent("Alice", "chemical reaction");
console.log(scienceStudent.teach());          // "Alice is teaching a class"
console.log(scienceStudent.conductExperiment()); // "Alice is conducting chemical reaction"

const musicStudent = new MusicStudent("Bob", "piano");
console.log(musicStudent.teach());            // "Bob is teaching a class"
console.log(musicStudent.playMusic());        // "Bob is playing piano"`}
              </code>
            </pre>
          </motion.div>

          {/* Additional Explanation */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-lg p-6 shadow-lg border border-indigo-100"
          >
            <h3 className="text-xl font-semibold text-indigo-800 mb-4">Key Benefits</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Code Reusability: Common functionality is defined once in the parent class</li>
              <li>Maintainability: Changes to shared behavior only need to be made in one place</li>
              <li>Extensibility: New types of students can be added without modifying existing code</li>
              <li>Polymorphism: Each student type can have its own implementation of shared methods</li>
              <li>Organization: Creates a clear and logical class hierarchy</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}



export default HierarchicalInheritance;