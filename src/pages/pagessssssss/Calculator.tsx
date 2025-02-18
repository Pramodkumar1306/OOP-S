import React, { useState } from 'react';
import { Calculator as CalculatorIcon, Plus, Percent } from 'lucide-react';

// Function overload signatures
function calculate(a: number, b: number): number;
function calculate(a: number, b: number, operation: 'add'): number;
function calculate(a: number, b: number, operation: 'percentage'): number;

// Implementation
function calculate(a: number, b: number, operation?: 'add' | 'percentage'): number {
  if (!operation) return a + b;
  if (operation === 'add') return a + b;
  if (operation === 'percentage') return (a * b) / 100;
  return 0;
}

export function Calculator() {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-2 mb-6">
            <CalculatorIcon className="w-6 h-6 text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-800">
              Function Overloading Demo
            </h1>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Number
                </label>
                <input
                  type="number"
                  value={num1}
                  onChange={(e) => setNum1(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Second Number
                </label>
                <input
                  type="number"
                  value={num2}
                  onChange={(e) => setNum2(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Plus className="w-5 h-5 text-indigo-600" />
                  <h3 className="font-semibold">Basic Addition</h3>
                </div>
                <p className="text-gray-600 mb-2">
                  Using: calculate(num1, num2)
                </p>
                <div className="bg-white p-3 rounded border">
                  Result: {calculate(num1, num2)}
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Plus className="w-5 h-5 text-indigo-600" />
                  <h3 className="font-semibold">Explicit Addition</h3>
                </div>
                <p className="text-gray-600 mb-2">
                  Using: calculate(num1, num2, 'add')
                </p>
                <div className="bg-white p-3 rounded border">
                  Result: {calculate(num1, num2, 'add')}
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Percent className="w-5 h-5 text-indigo-600" />
                  <h3 className="font-semibold">Percentage Calculation</h3>
                </div>
                <p className="text-gray-600 mb-2">
                  Using: calculate(num1, num2, 'percentage')
                </p>
                <div className="bg-white p-3 rounded border">
                  Result: {calculate(num1, num2, 'percentage')}
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">
                Understanding Function Overloading
              </h3>
              <p className="text-blue-700 text-sm">
                Function overloading lets us use the same function name with different
                parameters. TypeScript checks at compile-time which version of the
                function to use based on the parameters we provide. In this example,
                the calculate function can be called in three different ways, each
                producing a different result!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}