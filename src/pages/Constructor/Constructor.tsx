    import React from 'react';
    import { Routes, Route, Link, useLocation } from 'react-router-dom';
    import { Shield, Code, GitBranch } from 'lucide-react';

    import DefaultConstructor from './DefaultConstructor';
    import ParameterizedConstructor from './ParameterizedConstructor';
    import CopyConstructor from './CopyConstructor';

  

    const Constructor = () => {
    const location = useLocation();

    return (
        <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar */}
        <div className="w-1/4 bg-white shadow-lg">
            <div className="p-4">
            <div className="flex items-center mb-6">
                <GitBranch className="text-blue-500" />
                <h2 className="text-xl font-bold text-gray-800">Constructor Types</h2>
            </div>

            {/* Navigation Links */}
            <div className="space-y-2">
                <Link
                to="DefaultConstructor"
                className={`block p-2 rounded-md ${
                    location.pathname.includes('Aclass')
                    ? 'bg-red-50 text-red-700'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
                >
                Default Constructor
                </Link>
                <Link
                to="ParameterizedConstructor"
                className={`block p-2 rounded-md ${
                    location.pathname.includes('Method')
                    ? 'bg-red-50 text-red-700'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
                >
                Parameterized Constructor
                </Link>
                <Link
                to="CopyConstructor"
                className={`block p-2 rounded-md ${
                    location.pathname.includes('Interface')
                    ? 'bg-red-50 text-red-700'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
                >
                Copy Constructor 
                </Link>
            </div>
            </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
            <Routes>
            <Route path="/" element= {<DefaultConstructor/>}/>
            <Route path="ParameterizedConstructor" element= {<ParameterizedConstructor/>}/>
            <Route path="CopyConstructor" element= {<CopyConstructor/>}/>
            </Routes>
        </div>
        </div>
    );
    };

    export default Constructor;