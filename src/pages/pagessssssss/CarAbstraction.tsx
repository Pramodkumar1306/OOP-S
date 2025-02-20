import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Car, Gauge, FerrisWheel as SteeringWheel, Battery, Zap } from 'lucide-react';

// Abstract base class
abstract class Vehicle {
  protected abstract engineType: string;
  
  abstract getEngineDetails(): string;
  
  startEngine(): string {
    return `${this.engineType} engine starting...`;
  }

  accelerate(): string {
    return "Accelerating...";
  }

  brake(): string {
    return "Braking...";
  }
}

// Concrete implementation
class ElectricCar extends Vehicle {
  protected engineType = "Electric";
  
  getEngineDetails(): string {
    return "Dual motor electric powertrain";
  }

  accelerate(): string {
    return "Silent electric acceleration";
  }

  brake(): string {
    return "Regenerative braking engaged";
  }
}

export const CarAbstraction = () => {
  const [speed, setSpeed] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [message, setMessage] = useState("Car is ready");
  const [batteryLevel, setBatteryLevel] = useState(100);
  const [efficiency, setEfficiency] = useState(100);
  const car = new ElectricCar();

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isStarted && speed > 0) {
      interval = setInterval(() => {
        setBatteryLevel(prev => Math.max(0, prev - (speed * 0.01)));
        setEfficiency(prev => Math.max(50, prev - (speed * 0.02)));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isStarted, speed]);

  const handleStart = () => {
    if (batteryLevel < 5) {
      setMessage("Battery too low! Please recharge.");
      return;
    }
    setIsStarted(!isStarted);
    setMessage(isStarted ? "Car stopped" : car.startEngine());
    if (!isStarted) {
      setSpeed(0);
    }
  };

  const handleAccelerate = () => {
    if (!isStarted) {
      setMessage("Start the car first!");
      return;
    }
    if (batteryLevel < 5) {
      setMessage("Low battery! Power reduced.");
      return;
    }
    const newSpeed = Math.min(speed + 20, 100);
    setSpeed(newSpeed);
    setMessage(car.accelerate());
  };

  const handleBrake = () => {
    if (!isStarted) return;
    const reduction = speed - Math.max(speed - 30, 0);
    setSpeed(Math.max(speed - 30, 0));
    setBatteryLevel(prev => Math.min(100, prev + (reduction * 0.1))); // Regenerative braking
    setMessage(car.brake());
  };

  const handleRecharge = () => {
    if (isStarted) {
      setMessage("Please stop the car before recharging!");
      return;
    }
    setBatteryLevel(100);
    setEfficiency(100);
    setMessage("Battery recharged!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Understanding Abstraction with Cars
        </h1>
        
        <div className="bg-gray-800 rounded-xl p-8 shadow-2xl mb-8">
          <div className="flex justify-between items-center mb-8">
            <div className="text-2xl font-semibold flex items-center gap-3">
              <SteeringWheel className="w-8 h-8" />
              Dashboard
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Battery className="w-6 h-6" />
                <span className="text-xl">{Math.round(batteryLevel)}%</span>
              </div>
              <div className="flex items-center gap-2">
                <Gauge className="w-6 h-6" />
                <span className="text-xl">{speed} mph</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-6 h-6" />
                <span className="text-xl">{Math.round(efficiency)}%</span>
              </div>
            </div>
          </div>

          <div className="relative h-32 bg-gray-700 rounded-lg overflow-hidden mb-8">
            <motion.div
              className="absolute inset-y-0 flex items-center"
              animate={{ 
                x: `${speed}%`,
                transition: { type: "spring", stiffness: 50 }
              }}
            >
              <Car className={`w-16 h-16 ${batteryLevel < 20 ? 'text-red-400' : 'text-blue-400'}`} />
            </motion.div>
            
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-gray-700/50" />
          </div>

          <p className="text-lg mb-6 text-center text-blue-300">{message}</p>

          <div className="grid grid-cols-4 gap-4">
            <button
              onClick={handleStart}
              disabled={batteryLevel < 5}
              className={`p-4 rounded-lg font-semibold transition-all ${
                isStarted
                  ? 'bg-red-500 hover:bg-red-600'
                  : 'bg-green-500 hover:bg-green-600'
              } disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              {isStarted ? 'Stop Engine' : 'Start Engine'}
            </button>
            
            <button
              onClick={handleAccelerate}
              className="p-4 bg-blue-500 rounded-lg font-semibold hover:bg-blue-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!isStarted || batteryLevel < 5}
            >
              Accelerate
            </button>
            
            <button
              onClick={handleBrake}
              className="p-4 bg-yellow-500 rounded-lg font-semibold hover:bg-yellow-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!isStarted}
            >
              Brake
            </button>

            <button
              onClick={handleRecharge}
              className="p-4 bg-purple-500 rounded-lg font-semibold hover:bg-purple-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isStarted}
            >
              Recharge
            </button>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl p-8 shadow-2xl">
          <h2 className="text-2xl font-semibold mb-4">What's Happening Behind the Scenes?</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              Just like how a real car hides its complex engine mechanics from the driver,
              our code uses <span className="text-blue-400">abstraction</span> to hide implementation details.
            </p>
            <p>
              The <span className="text-yellow-400">Vehicle</span> class defines what every vehicle can do,
              while the <span className="text-green-400">ElectricCar</span> class implements those actions
              in its own specific way.
            </p>
            <p>
              You don't need to know how the electric motors work to drive the car - 
              you just need to know how to use the controls!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};