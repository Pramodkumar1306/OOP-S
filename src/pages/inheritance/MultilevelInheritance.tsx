import React, { useState } from 'react';
import { User, ArrowDown, Heart, Brain, Briefcase, Code } from 'lucide-react';

interface InheritanceItem {
  title: string;
  traits: { icon: React.ReactNode; text: string }[];
  code: string;
}

function MultilevelInheritance() {
  const [activeLevel, setActiveLevel] = useState<number>(0);

  const familyLevels: InheritanceItem[] = [
    {
      title: "Grandfather",
      traits: [
        { icon: <Heart className="text-red-500" />, text: "Kindness" },
        { icon: <Briefcase className="text-brown-500" />, text: "Work Ethic" }
      ],
      code: `class Grandfather {
  showKindness() {
    return "Always be kind to others";
  }
  
  workEthic() {
    return "Work hard every day";
  }
}`
    },
    {
      title: "Father",
      traits: [
        { icon: <Heart className="text-red-500" />, text: "Kindness" },
        { icon: <Briefcase className="text-brown-500" />, text: "Work Ethic" },
        { icon: <Brain className="text-blue-500" />, text: "Wisdom" }
      ],
      code: `class Father extends Grandfather {
  shareWisdom() {
    return "Learn from experience";
  }
  
// Inherits showKindness() and workEthic()
}`
    },
    {
      title: "Child",
      traits: [
        { icon: <Heart className="text-red-500" />, text: "Kindness" },
        { icon: <Briefcase className="text-brown-500" />, text: "Work Ethic" },
        { icon: <Brain className="text-blue-500" />, text: "Wisdom" },
        { icon: <User className="text-green-500" />, text: "Innovation" }
      ],
      code: `class Child extends Father {
  innovate() {
    return "Create something new";
  }
  
//Inherits all methods 
// from Father and Grandfather
}`
    }
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveLevel((prev) => (prev + 1) % familyLevels.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Multi-level Inheritance Visualization
        </h1>
        
        <div className="space-y-8">
          {familyLevels.map((level, index) => (
            <div key={level.title} className="relative">
              <div className={`
                transform transition-all duration-500
                ${index === activeLevel ? 'scale-110 opacity-100' : 'scale-100 opacity-60'}
              `}>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg shadow-xl p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100 to-transparent opacity-50 rounded-bl-full" />
                    
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                      {level.title}
                    </h2>
                    
                    <div className="grid grid-cols-2 gap-4">
                      {level.traits.map((trait, i) => (
                        <div key={i} className={`
                          flex items-center space-x-2 p-3 rounded-lg
                          ${index === activeLevel ? 'animate-fadeIn' : ''}
                          ${i < (index === 0 ? 2 : index === 1 ? 3 : 4) ? 'bg-gray-50' : 'bg-green-50'}
                        `}>
                          {trait.icon}
                          <span className="text-gray-700">{trait.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={`bg-gray-900 rounded-lg shadow-xl p-6 relative overflow-hidden ${
                    index === activeLevel ? 'animate-fadeIn' : ''
                  }`}>
                    <div className="flex items-center space-x-2 mb-3">
                      <Code className="text-purple-400" />
                      <span className="text-purple-400 font-semibold">Code Implementation</span>
                    </div>
                    <pre className="text-green-400 font-mono text-sm overflow-x-auto">
                      {level.code}
                    </pre>
                  </div>
                </div>
              </div>
              
              {index < familyLevels.length - 1 && (
                <div className="flex justify-center my-4">
                  <ArrowDown className={`
                    text-purple-500 transform transition-all duration-500
                    ${index === activeLevel ? 'scale-125 opacity-100' : 'scale-100 opacity-60'}
                  `} />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">How It Works</h3>
          <p className="text-gray-600 leading-relaxed">
            Just like in a family where traits and values are passed down through generations,
            multi-level inheritance in programming allows classes to inherit properties and methods
            from multiple levels of parent classes. Each level can add its own unique features
            while maintaining what was inherited from above. The code example shows how each class
            extends the previous one, gaining access to all its methods while adding new capabilities.
          </p>
        </div>
      </div>
    </div>
  );
}


export default MultilevelInheritance;