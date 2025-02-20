import React, { useState } from 'react';
import { Code, BookOpen, Key, Construction, Coffee, Box, CheckCircle2, XCircle, Lightbulb, Terminal, Play, RefreshCcw, Zap, ArrowRight, MessageCircle, PlusCircle, MinusCircle } from 'lucide-react';
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';

interface Example {
  name: string;
  code: string;
  output: string;
  explanation: string;
  hints: string[];
}

interface Examples {
  [key: string]: Example;
}

interface Feature {
  title: string;
  icon: React.ElementType;
  description: string;
  example: string;
}

function CodeBlock({ code }: { code: string }) {
  return (
    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
      <code>{code}</code>
    </pre>
  );
}

function InteractiveFeatureCard({ title, icon: Icon, children, isActive, onClick }: { 
  title: string; 
  icon: React.ElementType; 
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`bg-white p-6 rounded-xl shadow-lg cursor-pointer transition-all
        ${isActive ? 'ring-2 ring-indigo-500 shadow-xl' : 'hover:shadow-xl'}`}
    >
      <div className="flex items-center gap-3 mb-4">
        <Icon className={`${isActive ? 'text-indigo-600' : 'text-gray-600'}`} size={24} />
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
      <div className="text-gray-600">{children}</div>
      {isActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 flex items-center gap-2 text-indigo-600"
        >
          <span className="text-sm">View Example</span>
          <ArrowRight size={16} />
        </motion.div>
      )}
    </motion.div>
  );
}

function ComparisonTable() {
  const features = [
    { name: 'Can have normal methods?', abstractClass: true, interface: false },
    { name: 'Can have instance variables?', abstractClass: true, interface: false },
    { name: 'Supports multiple inheritance?', abstractClass: false, interface: true },
    { name: 'Can have constructors?', abstractClass: true, interface: false },
    { name: 'Can implement interfaces?', abstractClass: true, interface: true },
    { name: 'Can be instantiated?', abstractClass: false, interface: false },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-indigo-600 text-white">
            <th className="p-4 text-left">Feature</th>
            <th className="p-4 text-center">Abstract Class</th>
            <th className="p-4 text-center">Interface</th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
              <td className="p-4 border-b">{feature.name}</td>
              <td className="p-4 border-b text-center">
                {feature.abstractClass ? (
                  <CheckCircle2 className="inline text-green-500" size={20} />
                ) : (
                  <XCircle className="inline text-red-500" size={20} />
                )}
              </td>
              <td className="p-4 border-b text-center">
                {feature.interface ? (
                  <CheckCircle2 className="inline text-green-500" size={20} />
                ) : (
                  <XCircle className="inline text-red-500" size={20} />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function LiveExample({ example, onRun }: { example: Example; onRun: (output: string) => void }) {
  const [isRunning, setIsRunning] = useState(false);
  const [showHints, setShowHints] = useState(false);

  const runCode = () => {
    setIsRunning(true);
    setTimeout(() => {
      onRun(example.output);
      setIsRunning(false);
    }, 1000);
  };

  return (
    <div className="space-y-4">
      <div className="relative">
        <CodeBlock code={example.code} />
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setShowHints(!showHints)}
          className="absolute top-2 right-2 text-gray-400 hover:text-white"
        >
          {showHints ? <MinusCircle size={20} /> : <PlusCircle size={20} />}
        </motion.button>
      </div>

      {showHints && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-indigo-50 p-4 rounded-lg"
        >
          <h4 className="font-semibold text-indigo-900 mb-2 flex items-center gap-2">
            <MessageCircle size={16} />
            Code Hints
          </h4>
          <ul className="list-disc list-inside text-indigo-700 space-y-1">
            {example.hints.map((hint, index) => (
              <li key={index}>{hint}</li>
            ))}
          </ul>
        </motion.div>
      )}

      <div className="flex gap-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={runCode}
          disabled={isRunning}
          className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 
            transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
        >
          {isRunning ? (
            <RefreshCcw className="animate-spin" />
          ) : (
            <Zap className="animate-pulse" />
          )}
          {isRunning ? 'Running...' : 'Run Code'}
        </motion.button>
      </div>
    </div>
  );
}

function Aclass() {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentExample, setCurrentExample] = useState('dog');
  const [output, setOutput] = useState<string | null>(null);
  const [activeFeature, setActiveFeature] = useState<string | null>(null);
  const [selectedTab, setSelectedTab] = useState(activeTab);

  const examples: Examples = {
    dog: {
      name: 'Dog Example',
      code: `abstract class Animal {
    abstract void makeSound();  // Abstract method
    
    void sleep() {  // Normal method
        System.out.println("Animal is sleeping... 😴");
    }
}

class Dog extends Animal {
    void makeSound() {
        System.out.println("Woof Woof! 🐕");
    }
}

Dog dog = new Dog();
dog.makeSound();
dog.sleep();`,
      output: "Woof Woof! 🐕\nAnimal is sleeping... 😴",
      explanation: "This example shows how a Dog class implements the abstract makeSound() method while inheriting the concrete sleep() method.",
      hints: [
        "The Animal class defines the basic structure",
        "makeSound() must be implemented by child classes",
        "sleep() is inherited by all child classes"
      ]
    },
    shape: {
      name: 'Shape Calculator',
      code: `abstract class Shape {
    abstract double calculateArea();
    
    void display() {
        System.out.println("Area: " + calculateArea());
    }
}

class Circle extends Shape {
    double radius = 5.0;
    
    double calculateArea() {
        return Math.PI * radius * radius;
    }
}

Circle circle = new Circle();
circle.display();`,
      output: "Area: 78.54",
      explanation: "The Shape example demonstrates how abstract classes can enforce implementation of specific methods while providing shared functionality.",
      hints: [
        "calculateArea() is abstract and must be implemented",
        "display() method uses the implemented calculateArea()",
        "Circle provides specific area calculation"
      ]
    },
    vehicle: {
      name: 'Vehicle System',
      code: `abstract class Vehicle {
    abstract void startEngine();
    abstract void stopEngine();
    
    void honk() {
        System.out.println("Beep! 📢");
    }
}

class Car extends Vehicle {
    void startEngine() {
        System.out.println("Car engine started! 🚗");
    }
    
    void stopEngine() {
        System.out.println("Car engine stopped!");
    }
}

Car car = new Car();
car.startEngine();
car.honk();`,
      output: "Car engine started! 🚗\nBeep! 📢",
      explanation: "This example shows how vehicles can share common behavior while implementing specific engine operations.",
      hints: [
        "Vehicle defines common behavior with honk()",
        "startEngine and stopEngine must be implemented",
        "Car provides specific engine operations"
      ]
    }
  };

  const features: Feature[] = [
    {
      title: "Abstract Methods",
      icon: Code,
      description: "Methods without implementation that must be defined in child classes.",
      example: `abstract class Example {
    abstract void mustImplement();  // No implementation!
}`
    },
    {
      title: "Normal Methods",
      icon: Coffee,
      description: "Regular methods with implementation that all child classes inherit.",
      example: `abstract class Example {
    void normalMethod() {
        System.out.println("I work normally!");
    }
}`
    },
    {
      title: "Constructor Support",
      icon: Box,
      description: "Can have constructors to initialize fields.",
      example: `abstract class Example {
    String name;
    Example(String name) {
        this.name = name;
    }
}`
    },
    {
      title: "Instance Variables",
      icon: Lightbulb,
      description: "Can declare fields that child classes will inherit.",
      example: `abstract class Example {
    protected int value = 42;  // Child classes can access this
}`
    }
  ];

  const handleTabChange = (id: string) => {
    setSelectedTab(id);
    setTimeout(() => setActiveTab(id), 300);
  };

  return (
    <MotionConfig transition={{ duration: 0.3 }}>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Understanding Abstract Classes in Java</h1>
            <p className="text-xl opacity-90">A comprehensive guide to one of Java's most powerful OOP concepts</p>
          </div>
        </div>

        {/* Updated Navigation */}
        <nav className="bg-white shadow-lg sticky top-0 z-10">
          <div className="container mx-auto px-4">
            <div className="flex space-x-4 overflow-x-auto py-4">
              {[
                { id: 'overview', label: 'Overview', icon: BookOpen },
                { id: 'features', label: 'Key Features', icon: Key },
                { id: 'examples', label: 'Examples', icon: Code },
                { id: 'comparison', label: 'Comparison', icon: Construction },
              ].map(({ id, label, icon: Icon }) => (
                <motion.button
                  key={id}
                  onClick={() => handleTabChange(id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors ${
                    activeTab === id
                      ? 'bg-indigo-600 text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Icon size={20} />
                  {label}
                </motion.button>
              ))}
            </div>
          </div>
        </nav>

        {/* Main Content with Animations */}
        <AnimatePresence mode="wait">
          <motion.main
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="container mx-auto px-4 py-12"
          >
            {activeTab === 'overview' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">What is an Abstract Class?</h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                  An abstract class in Java is like an incomplete template for other classes. You cannot create objects from it directly. Instead, it acts as a blueprint, where some parts are already defined, but other parts must be completed by the child classes. It helps ensure that all related classes follow a common structure. 🚀
                  </p>
                </div>
              </motion.div>
            )}

            {activeTab === 'features' && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {features.map((feature) => (
                    <InteractiveFeatureCard
                      key={feature.title}
                      title={feature.title}
                      icon={feature.icon}
                      isActive={activeFeature === feature.title}
                      onClick={() => setActiveFeature(feature.title)}
                    >
                      {feature.description}
                    </InteractiveFeatureCard>
                  ))}
                </div>
                <AnimatePresence>
                  {activeFeature && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="bg-white p-6 rounded-xl shadow-lg"
                    >
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-semibold">{activeFeature}</h3>
                        <button
                          onClick={() => setActiveFeature(null)}
                          className="text-gray-500 hover:text-gray-700"
                        >
                          ✕
                        </button>
                      </div>
                      <CodeBlock 
                        code={features.find(f => f.title === activeFeature)?.example || ''} 
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}

            {activeTab === 'examples' && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-8"
              >
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
                    {Object.entries(examples).map(([key, value]) => (
                      <button
                        key={key}
                        onClick={() => {
                          setCurrentExample(key);
                          setOutput(null);
                        }}
                        className={`px-4 py-2 rounded-lg transition-colors whitespace-nowrap ${
                          currentExample === key
                            ? 'bg-indigo-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {value.name}
                      </button>
                    ))}
                  </div>

                  <LiveExample 
                    example={examples[currentExample]} 
                    onRun={setOutput} 
                  />

                  <AnimatePresence>
                    {output && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="mt-6 space-y-4"
                      >
                        <div className="p-4 bg-gray-900 text-gray-100 rounded-lg">
                          <h4 className="text-sm font-semibold text-gray-400 mb-2">Output:</h4>
                          <pre>{output}</pre>
                        </div>
                        <div className="p-4 bg-blue-50 text-blue-800 rounded-lg">
                          <h4 className="font-semibold mb-2">Explanation:</h4>
                          <p>{examples[currentExample].explanation}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )}

            {activeTab === 'comparison' && (
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Abstract Class vs Interface</h2>
                <ComparisonTable />
              </div>
            )}
          </motion.main>
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
}

export default Aclass;