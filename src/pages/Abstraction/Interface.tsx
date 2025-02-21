    import React, { useState } from 'react';
    import { motion, AnimatePresence } from 'framer-motion';
    import { CodeBlock } from "../../components/CodeBlock";
    import { X, Contact as Contract, Car, Bike, FileCode, PlayCircle, Code2, Layers, Lock, GitBranch } from 'lucide-react';

    const interfaceCode = `
    interface Vehicle {
        // public abstract by default
        void start();
        void stop();
        
        // public static final by default
        String VEHICLE_TYPE = "ROAD_VEHICLE";
        
        // concrete method using default
        default void displayInfo() {
            System.out.println("This is a vehicle");
        }
        
        // concrete method using static
        static void showVehicleCount() {
            System.out.println("Counting vehicles...");
        }
    }

    // Example of interface extending another interface
    interface ElectricVehicle extends Vehicle {
        void charge();
    }

    // Abstract class partially implementing interface
    abstract class PartialVehicle implements Vehicle {
        public void start() {
            System.out.println("Vehicle starts");
        }
        // stop() is not implemented, so class must be abstract
    }

    // Class implementing interface while extending another class
    class ElectricCar extends PartialVehicle implements ElectricVehicle {
        public void stop() {
            System.out.println("Electric car stops");
        }
        
        public void charge() {
            System.out.println("Electric car is charging");
        }
    }
    `;

    const keyPoints = [
    {
        title: "Default Method Modifiers",
        description: "All interface methods are by default public abstract. No need to explicitly declare them!",
        icon: <Code2 />,
        code: "void start(); // Automatically public abstract",
        detailedExample: `
    interface Playable {
        // These are equivalent:
        void play();  // Implicitly public abstract
        public abstract void stop();  // Explicitly declared
    }`,
        explanation: "When you declare a method in an interface without any modifiers, Java automatically makes it public and abstract. This helps keep interface definitions clean and concise."
    },
    {
        title: "Partial Implementation",
        description: "If a class doesn't implement all interface methods, it must be declared abstract.",
        icon: <Layers />,
        code: "abstract class PartialCar implements Vehicle { ... }",
        detailedExample: `
    interface Vehicle {
        void start();
        void stop();
        void accelerate();
    }

    abstract class PartialVehicle implements Vehicle {
        public void start() {
            System.out.println("Starting...");
        }
        // stop() and accelerate() not implemented
        // so class must be abstract
    }`,
        explanation: "Abstract classes can implement some methods while leaving others for concrete subclasses to implement. This is useful for sharing common implementation details while enforcing method contracts."
    },
    {
        title: "No Instantiation",
        description: "Interfaces cannot be instantiated - you can't create objects of an interface.",
        icon: <Lock />,
        code: "// NOT allowed:\nVehicle v = new Vehicle();",
        detailedExample: `
    interface Drawable {
        void draw();
    }

    // WRONG:
    Drawable d = new Drawable(); // Compilation error!

    // CORRECT:
    class Circle implements Drawable {
        public void draw() {
            System.out.println("Drawing a circle");
        }
    }
    Drawable d = new Circle(); // This works!`,
        explanation: "Interfaces are contracts, not concrete implementations. They define what methods a class must have, but don't provide the actual implementation."
    },
    {
        title: "Interface Inheritance",
        description: "An interface can extend another interface but cannot implement interfaces.",
        icon: <GitBranch />,
        code: "interface ElectricVehicle extends Vehicle { ... }",
        detailedExample: `
    interface Animal {
        void eat();
    }

    interface Mammal extends Animal {
        void giveBirth();
    }

    // Multiple interface inheritance
    interface Pet extends Animal, Identifiable {
        void play();
    }`,
        explanation: "Interfaces can extend multiple other interfaces, creating a hierarchy of contracts. This allows for flexible type hierarchies without the limitations of class inheritance."
    },
    {
        title: "Interface Variables",
        description: "All variables in interfaces are automatically public static final.",
        icon: <Lock />,
        code: 'String TYPE = "CAR"; // public static final',
        detailedExample: `
    interface Constants {
        // These are equivalent:
        int MAX_SPEED = 120;  // Implicitly public static final
        public static final int MIN_SPEED = 0;  // Explicitly declared
        
        // They're constants, so they must be initialized
        String STATUS = "ACTIVE";
    }`,
        explanation: "Interface variables are always constants. They're automatically public (accessible everywhere), static (shared across all implementations), and final (cannot be changed)."
    },
    {
        title: "Concrete Methods",
        description: "Interfaces can have concrete methods using default, static, or private modifiers.",
        icon: <Code2 />,
        code: "default void info() { ... }",
        detailedExample: `
    interface Modern {
        // Default method - all implementing classes get this implementation
        default void log() {
            System.out.println("Logging...");
        }
        
        // Static method - called on the interface itself
        static void utility() {
            System.out.println("Utility method");
        }
        
        // Private method - internal helper method
        private void helper() {
            System.out.println("Helper method");
        }
    }`,
        explanation: "Modern Java interfaces can include implemented methods. Default methods provide default behavior, static methods provide utility functions, and private methods help with code organization."
    },
    {
        title: "Multiple Inheritance",
        description: "Java supports multiple inheritance through interfaces - a class can implement many interfaces!",
        icon: <Layers />,
        code: "class Car implements Driveable, Maintainable { ... }",
        detailedExample: `
    interface Swimmable {
        void swim();
    }

    interface Flyable {
        void fly();
    }

    // A class can implement multiple interfaces
    class Duck implements Swimmable, Flyable {
        public void swim() {
            System.out.println("Duck is swimming");
        }
        
        public void fly() {
            System.out.println("Duck is flying");
        }
    }`,
        explanation: "While Java doesn't support multiple class inheritance, a class can implement any number of interfaces. This provides a flexible way to share behavior across different class hierarchies."
    },
    {
        title: "Class Extension & Implementation",
        description: "A class can extend another class while implementing interfaces simultaneously.",
        icon: <GitBranch />,
        code: "class ElectricCar extends Vehicle implements Chargeable { ... }",
        detailedExample: `
    class Vehicle {
        void move() {
            System.out.println("Moving...");
        }
    }

    interface Electric {
        void charge();
    }

    interface Autonomous {
        void selfDrive();
    }

    // Extending a class and implementing multiple interfaces
    class Tesla extends Vehicle implements Electric, Autonomous {
        public void charge() {
            System.out.println("Charging...");
        }
        
        public void selfDrive() {
            System.out.println("Self-driving mode activated");
        }
    }`,
        explanation: "Java allows a class to extend one class and implement any number of interfaces. This combines the benefits of class inheritance with interface-based behavior sharing."
    }
    ];

    function Interface() {
    const [selectedPoint, setSelectedPoint] = useState<number | null>(null);

    return (
        <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto px-4 py-12">
            {/* Header */}
            <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
            >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Understanding Java Interfaces
            </h1>
            <p className="text-xl text-gray-600">
                Master the key concepts of Java Interfaces! 📝
            </p>
            </motion.div>

            {/* Key Points Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 relative">
            {keyPoints.map((point, index) => (
                <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedPoint(index)}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer transform hover:scale-105 transition-transform"
                >
                <div className="flex items-center gap-4 mb-4">
                    <div className="text-blue-500 text-2xl">{point.icon}</div>
                    <h3 className="text-lg font-semibold text-gray-800">{point.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{point.description}</p>
                <div className="bg-gray-50 p-3 rounded-lg">
                    <code className="text-sm text-blue-600">{point.code}</code>
                </div>
                </motion.div>
            ))}
            </div>

            {/* Detailed View Modal */}
            <AnimatePresence>
            {selectedPoint !== null && (
                <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
                onClick={() => setSelectedPoint(null)}
                >
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="bg-white rounded-xl p-6 max-w-3xl w-full max-h-[80vh] overflow-y-auto"
                    onClick={e => e.stopPropagation()}
                >
                    <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold text-gray-900">
                        {keyPoints[selectedPoint].title}
                    </h2>
                    <button
                        onClick={() => setSelectedPoint(null)}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        <X size={24} />
                    </button>
                    </div>
                    <div className="space-y-6">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Explanation</h3>
                        <p className="text-gray-600">{keyPoints[selectedPoint].explanation}</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Detailed Example</h3>
                        <div className="bg-gray-800 rounded-lg p-4">
                        <CodeBlock code={keyPoints[selectedPoint].detailedExample} />
                        </div>
                    </div>
                    </div>
                </motion.div>
                </motion.div>
            )}
            </AnimatePresence>

            {/* Comprehensive Code Example */}
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg mb-12"
            >
            <h3 className="text-xl font-semibold text-white mb-4">
                Complete Interface Example
            </h3>
            <CodeBlock code={interfaceCode} />
            </motion.div>

            {/* Interactive Demo */}
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="bg-white p-6 rounded-xl shadow-lg"
            >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Interface Implementation Example
            </h3>
            <div className="flex gap-6 justify-center">
                <div className="text-center">
                <Car className="w-16 h-16 text-blue-500 mx-auto" />
                <p className="mt-2 text-gray-600">Car implements Vehicle</p>
                </div>
                <div className="text-center">
                <Bike className="w-16 h-16 text-green-500 mx-auto" />
                <p className="mt-2 text-gray-600">Bike implements Vehicle</p>
                </div>
            </div>
            </motion.div>
        </div>
        </div>
    );
    }

    export default Interface;