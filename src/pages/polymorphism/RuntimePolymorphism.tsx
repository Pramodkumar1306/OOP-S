import React, { useState } from 'react';
  import { Car, Bike, Truck } from 'lucide-react';
  
  // Parent class Vehicle
  class Vehicle {
    name: string;
    icon: React.ElementType;
    
    constructor(name: string, icon: React.ElementType) {
      this.name = name;
      this.icon = icon;
    }
    
    getSpeed(): string {
      return "Vehicle speed: Generic speed";
    }
  }
  
  // Child classes
  class GenericVehicle extends Vehicle {
    constructor() {
      super("Generic Vehicle", Car);
    }
    
    getSpeed(): string {
      return "Vehicle speed: Generic speed 🚗";
    }
  }
  
  class SimpleCar extends Vehicle {
    constructor() {
      super("Car", Car);
    }
    
    getSpeed(): string {
      return "Car speed: 100 km/h 🏎️";
    }
  }
  
  class SimpleBike extends Vehicle {
    constructor() {
      super("Bike", Bike);
    }
    
    getSpeed(): string {
      return "Bike speed: 60 km/h 🚲";
    }
  }
  
  function RuntimePolymorphism() {
    const [currentVehicle, setCurrentVehicle] = useState<Vehicle>(new GenericVehicle());
    const vehicles: Vehicle[] = [new GenericVehicle(), new SimpleCar(), new SimpleBike()];
    
    const [showExplanation, setShowExplanation] = useState(false);
    const [showJavaCode, setShowJavaCode] = useState(false);
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-indigo-800 mb-8">
            Understanding Runtime Polymorphism 🚗
          </h1>
          
          <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
            <div className="text-center mb-8">
              <div className="text-8xl mb-4 flex justify-center">
                {React.createElement(currentVehicle.icon, {
                  className: "text-indigo-600 transition-all duration-500 hover:scale-110"
                })}
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {currentVehicle.name}
              </h2>
              <p className="text-xl text-indigo-600 font-medium animate-bounce">
                {currentVehicle.getSpeed()}
              </p>
            </div>
  
            <div className="flex justify-center gap-4 mb-8">
              {vehicles.map((vehicle, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentVehicle(vehicle)}
                  className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                    currentVehicle.name === vehicle.name
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                  }`}
                >
                  {vehicle.name}
                </button>
              ))}
            </div>
  
            <div className="flex gap-4 mb-8">
              <button
                onClick={() => setShowExplanation(!showExplanation)}
                className="flex-1 px-6 py-3 bg-indigo-100 hover:bg-indigo-200 text-indigo-800 rounded-lg transition-colors duration-300"
              >
                {showExplanation ? "Hide Explanation" : "Show Explanation"}
              </button>
              <button
                onClick={() => setShowJavaCode(!showJavaCode)}
                className="flex-1 px-6 py-3 bg-green-100 hover:bg-green-200 text-green-800 rounded-lg transition-colors duration-300"
              >
                {showJavaCode ? "Hide Java Code" : "Show Java Code"}
              </button>
            </div>
  
            {showExplanation && (
              <div className="mt-6 p-6 bg-indigo-50 rounded-lg">
                <h3 className="text-xl font-semibold text-indigo-800 mb-4">
                  How Runtime Polymorphism Works Here:
                </h3>
                <ol className="list-decimal list-inside space-y-3 text-gray-700">
                  <li>We have a parent class <code className="bg-white px-2 py-1 rounded">Vehicle</code> with a <code className="bg-white px-2 py-1 rounded">getSpeed()</code> method</li>
                  <li>Different vehicles (Generic Vehicle, Car, Bike) inherit from Vehicle</li>
                  <li>Each vehicle type overrides the <code className="bg-white px-2 py-1 rounded">getSpeed()</code> method with its own behavior</li>
                  <li>At runtime, when you click different buttons, the correct <code className="bg-white px-2 py-1 rounded">getSpeed()</code> method is called based on the actual vehicle type</li>
                  <li>This is runtime polymorphism - the same method name produces different results based on the actual object type!</li>
                  <li>Upcasting in runtime polymorphism means using a parent class reference to call a child class method, allowing the program to decide at runtime which version of the method to run.</li>
                </ol>
              </div>
            )}
  
            {showJavaCode && (
              <div className="mt-6 p-6 bg-green-50 rounded-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-4">
                  Java Implementation:
                </h3>
                <pre className="bg-white p-4 rounded-lg overflow-x-auto text-sm">
  {`// Parent class: Vehicle
  class Vehicle {
      void speed() {
          System.out.println("Vehicle speed: Generic speed");
      }
  }
  
  // Child class: Car (Overrides speed() method)
  class Car extends Vehicle {
      @Override
      void speed() {
          System.out.println("Car speed: 100 km/h");
      }
  }
  
  // Child class: Bike (Overrides speed() method)
  class Bike extends Vehicle {
      @Override
      void speed() {
          System.out.println("Bike speed: 60 km/h");
      }
  }
  
  // Main class
  public class RuntimePolymorphismExample {
      public static void main(String[] args) {
          // Parent class reference holding a parent object
          Vehicle v = new Vehicle();
          v.speed(); // Calls Vehicle's speed method
  
          // Parent class reference holding a Car object
          v = new Car();
          v.speed(); // Calls Car's speed method
  
          // Parent class reference holding a Bike object
          v = new Bike();
          v.speed(); // Calls Bike's speed method
      }
  }`}
                </pre>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
  
  export default RuntimePolymorphism;