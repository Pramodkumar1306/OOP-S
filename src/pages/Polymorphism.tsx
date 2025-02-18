import React, {useEffect, useState } from 'react';
import { GitBranch, ChevronDown } from 'lucide-react';
import { Link, Routes, Route, useLocation } from 'react-router-dom';


interface NodeProps {
text: string;
delay: number;
isRoot?: boolean;
hasLine?: boolean;
}

const DiagramNode: React.FC<NodeProps> = ({ text, delay, isRoot, hasLine = true }) => {
const [show, setShow] = useState(false);

useEffect(() => {
const timer = setTimeout(() => setShow(true), delay);
return () => clearTimeout(timer);
}, [delay]);

return (
<div className="flex flex-col items-center">
<div
className={`
transform transition-all duration-700
${show ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}
${isRoot ? 'bg-emerald-400' : 'bg-emerald-300'}
rounded-lg px-4 py-2 shadow-lg
`}
>
<span className="text-gray-800 font-medium whitespace-nowrap">{text}</span>
</div>
{hasLine && show && (
<div className="h-8 w-0.5 bg-gray-400 my-2 animate-expandVertical" />
)}
</div>
);
};

import CompileTimePolymorphism from './polymorphism/CompileTimePolymorphism';
import ReactruntimePolymorphism from './polymorphism/RuntimePolymorphism';
import { div } from 'framer-motion/client';
const Polymorphism: React.FC = () => {
 
  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 bg-white shadow-lg">
        <div className="p-4">
          <div className="flex items-center mb-6">
            <GitBranch className="w-6 h-6 text-red-600 mr-2" />
            <h2 className="text-xl font-bold text-gray-800">Polymorphism  Types</h2>
          </div>

       

          {/* Additional Links */}
          <div className="space-y-2">
            <Link
              to="/polymorphism/CompileTimePolymorphism"
              className={`block p-2 rounded-md ${location.pathname === '/polymorphism/CompileTimePolymorphism' ? 'bg-red-50 text-red-700' : 'text-gray-600 hover:bg-gray-50'}`}
            >
              CompileTimePolymorphism
            </Link>
            <Link
              to="/polymorphism/ReactruntimePolymorphism"
              className={`block p-2 rounded-md ${location.pathname === '/polymorphism/ReactruntimePolymorphism' ? 'bg-red-50 text-red-700' : 'text-gray-600 hover:bg-gray-50'}`}
            >
              Runtime Polymorphism
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <Routes>         
          <Route path="CompileTimePolymorphism" element={<CompileTimePolymorphism />} />         
          <Route path="ReactruntimePolymorphism" element={<ReactruntimePolymorphism />} />         
          <Route path="/" element={
            <div className="p-6">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Understanding Polymorphism</h1>
                <p className="text-gray-600">
                Multiple forms are referred to as polymorphism. One entity has several forms, according to the opps piler.  The two categories of polymorphism are runtime and compile time polymorphism, which is also known as virtual polymorphism or falsh polymorphism, and runtime and compile time polymorphism, which is also known as real polymorphism.  Method overloading must be used to achieve compile-time polymorphism, while method overriding must be used to achieve run-time polymorphism on the other hand. and runtime polymorphism is real, while compiletime polymorphism is virtual.
                </p>
              
              {/* digram */}




              <div className="w-full max-w-4xl mx-auto p-8">
                <div className="flex flex-col items-center">
                  {/* Root Node */}
                  <DiagramNode 
                    text="Types of Polymorphism in Java" 
                    delay={0} 
                    isRoot 
                  />
                  
                  {/* First Level */}
                  <div className="flex justify-center gap-32 mt-2">
                    <div className="flex flex-col items-center">
                      <DiagramNode text="Compile-time" delay={1000} />
                      {/* Compile-time Children */}
                      <div className="flex gap-16">
                        <DiagramNode 
                          text="Operator overloading" 
                          delay={2000} 
                          hasLine={false} 
                        />
                        <DiagramNode 
                          text="Method overloading" 
                          delay={2500} 
                          hasLine={false} 
                        />
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <DiagramNode text="Runtime" delay={1500} />
                      <DiagramNode 
                        text="Method overriding" 
                        delay={3000} 
                        hasLine={false} 
                      />
                    </div>
                  </div>
                </div>
              </div>
            


              </div>
            </div>
          } />
        </Routes>
      </div>
    </div>
  );
};

export default Polymorphism;