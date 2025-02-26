import React, { useState, useEffect, useCallback, memo } from 'react';
import { Notebook as Robot, Presentation, Code, PlayCircle, RotateCcw } from 'lucide-react';

interface RobotType {
  name: string;
  color: string;
  powerLevel: number;
}

// Memoize scene components to prevent unnecessary re-renders
const SceneContent = memo(({ content }: { content: React.ReactNode }) => (
  <div className="min-h-[300px] flex items-center justify-center p-8 bg-gray-50 rounded-lg">
    {content}
  </div>
));

SceneContent.displayName = 'SceneContent';

// Memoize robot component
const RobotCard = memo(({ robot }: { robot: RobotType }) => (
  <div className="flex flex-col items-center space-y-4">
  <div className={`w-32 h-32 rounded-full flex items-center justify-center`} style={{ backgroundColor: robot.color }}>
    <Robot className="w-16 h-16 text-white" />
  </div>
  <div className="text-center">
    <h3 className="font-bold">{robot.name}</h3>
    <p>Color: {robot.color}</p>
    <p>Power Level: {robot.powerLevel}</p>
  </div>
</div>
));

RobotCard.displayName = 'RobotCard';

function ConstructorHome() {
const [step, setStep] = useState(0);
const [robots, setRobots] = useState<RobotType[]>([]);
const [isTyping, setIsTyping] = useState(false);
const [codeVisible, setCodeVisible] = useState(false);

const createRobot = useCallback((name: string, color: string, powerLevel: number) => {
  setRobots(prev => [...prev, { name, color, powerLevel }]);
}, []);

const resetAnimation = useCallback(() => {
  setStep(0);
  setRobots([]);
  setCodeVisible(false);
  setIsTyping(false);
}, []);

// Update code visibility when step changes
const [robotCount, setRobotCount] = useState(0);
const colors = ["red", "yellow", "blue", "green"];

useEffect(() => {
  setCodeVisible(step === 1);
}, [step]);

useEffect(() => {
  let timer: NodeJS.Timeout;

  if (step === 2 && robotCount < 4) {
    setIsTyping(true);
    timer = setTimeout(() => {
      setIsTyping(false);
      createRobot(`Robot-${robotCount + 1}`, colors[robotCount], 100 + robotCount * 10);
      setRobotCount((prev) => prev + 1);
    }, robotCount * 2000); // 3 sec delay for each new robot
  }

  return () => {
    clearTimeout(timer);
    if (step !== 2) {
      setIsTyping(false);
    }
  };
}, [step, createRobot, robotCount]);


const scenes = [
  {
    title: "Introduction",
    content: (
      <div className="flex items-center gap-8">
        <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center">
          <Presentation className="w-12 h-12 text-white" />
        </div>
        <p className="text-lg">
          "Imagine you are designing a blueprint for a robot. Every time you make a new robot using this blueprint, 
          you need to initialize its name, color, and power level before it starts working. 
          In Java, we do the same using a constructor!"
        </p>
      </div>
    )
  },
  {
    title: "Code Representation",
    content: (
      <div className="space-y-4">
        <div className={`transition-all duration-300 ease-in-out ${codeVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        <pre className="bg-gray-800 text-white p-6 rounded-lg overflow-x-auto">
              <code className="font-mono text-sm">
{`class Robot {
    String name;
    String color;
    int powerLevel;

    // Constructor
    Robot(String n, String c, int p) {
        name = n;
        color = c;
        powerLevel = p;
        System.out.println(name + " Robot is Ready!");
    }
}`}
              </code>
            </pre>
          </div>
          {isTyping && (
            <div className="text-green-500 font-mono animate-pulse">
              {'>'} Compiling code...
              </div>
          )}
        </div>
      )
    },
    {
      title: "Visual Representation",
      content: (
        <div className="grid grid-cols-2 gap-8">
          {robots.map((robot, index) => (
            <RobotCard key={index} robot={robot} />
          ))}
        </div>
      )
    },
    {
      title: "Summary",
      content: (
        <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold">Key Points to Remember:</h2>
          <ul className="text-left list-disc pl-6 space-y-2">
            <li>A constructor runs automatically when we create an object</li>
            <li>It initializes object properties</li>
            <li>Without a constructor, the robot would be empty!</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Understanding Constructors in Java</h1>
            <button
              onClick={resetAnimation}
              className="flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
            >
               <RotateCcw className="w-4 h-4" />
              Reset
            </button>
          </div>

          <div className="space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Scene {step + 1}: {scenes[step].title}</h2>
              <div className="flex gap-4">
                <button
                  onClick={() => setStep(Math.max(0, step - 1))}
                  disabled={step === 0}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600 transition-colors"
                >
                  Previous
                </button>
                <button
                  onClick={() => setStep(Math.min(scenes.length - 1, step + 1))}
                  disabled={step === scenes.length - 1}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600 transition-colors"
                >
                    Next
                  <PlayCircle className="w-4 h-4" />
                </button>
              </div>
            </div>

            <SceneContent content={scenes[step].content} />

            <div className="flex justify-center gap-2">
              {scenes.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full ${index === step ? 'bg-blue-500' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConstructorHome;
