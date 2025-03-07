import React, { useState } from 'react';
import { Code, Box, PlayCircle, RotateCcw, Cpu, MemoryStick, Variable, ArrowRight } from 'lucide-react';

interface ClassBlock {
  name: string;
  fields: { name: string; value: string }[];
  memoryAddress?: string;
  heapSize?: string;
}

function DefaultConstructor() {
  const [step, setStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = () => {
    setIsAnimating(true);
    setStep(0);
    const timer = setInterval(() => {
      setStep(prev => {
        if (prev >= 4) {
          clearInterval(timer);
          setIsAnimating(false);
          return prev;
        }
        return prev + 1;
      });
    }, 2000);
  };

  const resetAnimation = () => {
    setStep(0);
    setIsAnimating(false);
  };

  const getClassBlock = (): ClassBlock => {
    switch (step) {
      case 0:
        return {
          name: 'Memory Request',
          fields: [],
          memoryAddress: 'Requesting...',
          heapSize: '0 bytes'
        };
      case 1:
        return {
          name: 'Student',
          fields: [],
          memoryAddress: '0x7ff8c4d03af0',
          heapSize: '24 bytes'
        };
      case 2:
        return {
          name: 'Student',
          fields: [
            { name: 'name', value: 'allocating' },
            { name: 'age', value: 'allocating' }
          ],
          memoryAddress: '0x7ff8c4d03af0',
          heapSize: '24 bytes'
        };
      case 3:
        return {
          name: 'Student',
          fields: [
            { name: 'name', value: 'initializing' },
            { name: 'age', value: 'initializing' }
          ],
          memoryAddress: '0x7ff8c4d03af0',
          heapSize: '24 bytes'
        };
      case 4:
        return {
          name: 'Student',
          fields: [
            { name: 'name', value: 'null' },
            { name: 'age', value: '0' }
          ],
          memoryAddress: '0x7ff8c4d03af0',
          heapSize: '24 bytes'
        };
      default:
        return {
          name: 'Student',
          fields: [],
          memoryAddress: 'N/A',
          heapSize: '0 bytes'
        };
    }
  };

  const getExplanation = () => {
    switch (step) {
      case 0:
        return "1. JVM requests memory allocation from heap";
      case 1:
        return "2. Memory block allocated in heap with specific address";
      case 2:
        return "3. Memory space allocated for object fields";
      case 3:
        return "4. Default constructor triggered, initializing fields";
      case 4:
        return "5. Object ready in memory with default values";
      default:
        return "Click Play to start the memory allocation process";
    }
  };

  const classBlock = getClassBlock();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-indigo-900 mb-2">Java Memory Allocation Visualizer</h1>
          <p className="text-lg text-indigo-600">Watch the JVM allocate and initialize objects in memory</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-2xl p-8 mb-8 border border-indigo-100">
          <div className="flex justify-between mb-6">
            <button
              onClick={startAnimation}
              disabled={isAnimating}
              className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 transition-all duration-300 transform hover:scale-105"
            >
              <PlayCircle size={24} />
              Allocate Memory
            </button>
            <button
              onClick={resetAnimation}
              className="flex items-center gap-2 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
            >
              <RotateCcw size={24} />
              Reset
            </button>
          </div>

          <div className="relative mb-8 p-6 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <Cpu className="text-indigo-600 animate-pulse" size={24} />
              <p className="text-xl font-semibold text-indigo-900">{getExplanation()}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Stack Section */}
            <div className="border-3 border-purple-500 rounded-xl p-6 bg-gradient-to-br from-purple-50 to-pink-50 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <Box className="text-purple-600" size={24} />
                <h2 className="text-2xl font-bold text-purple-900">Stack Memory</h2>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-inner">
                <code className="text-sm font-mono text-purple-800">
                  student = {classBlock.memoryAddress}
                </code>
                <ArrowRight className={`text-purple-500 my-2 transform transition-all duration-500 ${step > 0 ? 'opacity-100' : 'opacity-0'}`} />
              </div>
            </div>

            {/* Heap Section */}
            <div className={`border-3 border-indigo-500 rounded-xl p-6 bg-gradient-to-br from-white to-blue-50 shadow-lg transition-all duration-700 ${isAnimating ? 'animate-pulse' : ''}`}>
              <div className="flex items-center gap-3 mb-6">
                <MemoryStick className="text-indigo-600" size={24} />
                <h2 className="text-2xl font-bold text-indigo-900">Heap Memory</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm font-mono text-indigo-600 mb-4">
                  <span>Address: {classBlock.memoryAddress}</span>
                  <span>Size: {classBlock.heapSize}</span>
                </div>

                <div className="space-y-3">
                  {classBlock.fields.map((field, index) => (
                    <div
                      key={field.name}
                      className={`flex items-center gap-3 p-3 rounded-lg bg-white shadow-sm transition-all duration-500`}
                    >
                      <Variable className="text-indigo-500" size={18} />
                      <span className="font-mono text-indigo-900">{field.name}:</span>
                      <span className={`font-mono ${
                        field.value === 'allocating' ? 'text-orange-600 animate-pulse' :
                        field.value === 'initializing' ? 'text-yellow-600 animate-pulse' :
                        'text-indigo-600 font-semibold'
                      }`}>
                        {field.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <Code className="text-purple-600" size={24} />
            <h2 className="text-2xl font-bold text-purple-900">Java Implementation</h2>
          </div>
          <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
            <code className="text-sm font-mono leading-relaxed">
{`public class Student {
    private String name;    // Default value: null
    private int age;        // Default value: 0
    
    // No constructor defined
    // Java provides default constructor:
    // public Student() {
    //     super();
    //     // Fields automatically initialized
    // }
}

public class Main {
    public static void main(String[] args) {
        // Creating object using default constructor
        Student student = new Student();
        
        // Fields have default values
        System.out.println(student.getName());  // Output: null
        System.out.println(student.getAge());   // Output: 0
    }
}`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}

export default DefaultConstructor;