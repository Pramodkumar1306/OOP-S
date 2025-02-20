import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Abstraction from './pages/Abstraction';
import Encapsulation from './pages/Encapsulation';
import Polymorphism from './pages/Polymorphism';
import Inheritance from './pages/Inheritance';
import Static from './pages/Static';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/abstraction/*" element={<Abstraction />} />
          <Route path="/encapsulation" element={<Encapsulation />} />
          <Route path="/polymorphism/*" element={<Polymorphism />} />
          <Route path="/inheritance/*" element={<Inheritance />} />
          <Route path="/static" element={<Static />} />
          <Route path="/" element={
            <div className="container mx-auto p-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome to OOP Concepts</h1>
              <p className="text-gray-600">
                Explore Object-Oriented Programming concepts through our interactive navigation.
                Click on any concept in the navigation bar to learn more.
              </p>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;