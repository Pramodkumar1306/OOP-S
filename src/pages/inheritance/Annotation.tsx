import React from 'react';
import { Code2, CheckCircle2, BookOpen, Cog } from 'lucide-react';

const Annotation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-indigo-800 mb-4">
            Java Annotations Explained
          </h1>
          <p className="text-lg text-gray-600">
            Understanding the Power of Metadata in Java
          </p>
        </div>

        {/* Main content card */}
        <div className="bg-white rounded-xl shadow-xl p-8 mb-8 transform hover:scale-[1.02] transition-transform">
          <div className="flex items-center mb-6">
            <Code2 className="w-8 h-8 text-indigo-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-800">What are Annotations?</h2>
          </div>
          <p className="text-gray-600 leading-relaxed mb-6">
            Annotations are special labels or metadata in Java that provide additional information
            to the compiler, tools, or runtime. They're always prefixed with @ and don't directly
            affect your program's logic.
          </p>
          
          {/* Code example */}
          <div className="bg-gray-900 rounded-lg p-4 mb-8 overflow-x-auto">
            <pre className="text-green-400">
              <code>{`@Override
public void method() {
    // This annotation tells the compiler this method overrides a superclass method
}

@Deprecated
public void oldMethod() {
    // This annotation indicates this method is deprecated
}

@SuppressWarnings("unused")
private int field;
// This annotation tells the compiler to suppress "unused" warnings`}</code>
            </pre>
          </div>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {[
            {
              icon: <CheckCircle2 className="w-6 h-6 text-green-500" />,
              title: "Reduce Boilerplate",
              description: "Minimize repetitive code and improve maintainability"
            },
            {
              icon: <BookOpen className="w-6 h-6 text-blue-500" />,
              title: "Documentation",
              description: "Provide clear metadata about code behavior and requirements"
            },
            {
              icon: <Cog className="w-6 h-6 text-purple-500" />,
              title: "Framework Integration",
              description: "Essential for modern frameworks like Spring and Hibernate"
            },
            {
              icon: <Code2 className="w-6 h-6 text-indigo-500" />,
              title: "Compile-time Checks",
              description: "Enable better error detection during compilation"
            }
          ].map((benefit, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                {benefit.icon}
                <h3 className="ml-3 text-lg font-semibold text-gray-800">{benefit.title}</h3>
              </div>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Common annotations section */}
        <div className="bg-white rounded-xl shadow-xl p-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Common Built-in Annotations
          </h3>
          <ul className="space-y-4">
            {[
              { name: "@Override", desc: "Indicates that a method overrides a superclass method" },
              { name: "@Deprecated", desc: "Marks code as deprecated and not recommended for use" },
              { name: "@SuppressWarnings", desc: "Tells compiler to suppress specific warnings" },
              { name: "@FunctionalInterface", desc: "Indicates that an interface is functional (has exactly one abstract method)" }
            ].map((annotation, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-md font-mono mr-3">
                  {annotation.name}
                </span>
                <span className="text-gray-600">{annotation.desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};


export default Annotation
// export default Final;