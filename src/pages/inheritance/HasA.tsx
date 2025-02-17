import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { School, GraduationCap, Users, Plus, X, ArrowRight, Code } from 'lucide-react';

interface Teacher {
  id: number;
  name: string;
  subject: string;
  isAssigned: boolean;
}

function HasA() {
  const [teachers, setTeachers] = useState<Teacher[]>([
    { id: 1, name: 'Mr. Sharma', subject: 'Mathematics', isAssigned: true },
    { id: 2, name: 'Mrs. Verma', subject: 'Science', isAssigned: true },
    { id: 3, name: 'Mr. Patel', subject: 'History', isAssigned: false },
    { id: 4, name: 'Ms. Singh', subject: 'English', isAssigned: false },
  ]);

  const assignedTeachers = teachers.filter(t => t.isAssigned);
  const availableTeachers = teachers.filter(t => !t.isAssigned);

  const toggleTeacherAssignment = (teacherId: number) => {
    setTeachers(teachers.map(teacher => 
      teacher.id === teacherId 
        ? { ...teacher, isAssigned: !teacher.isAssigned }
        : teacher
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <div className="flex items-center gap-4 mb-6">
            <School className="w-12 h-12 text-indigo-600" />
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Kodnest High School</h1>
              <p className="text-gray-600">Demonstrating Aggregation: School-Teacher Relationship</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* School Section */}
            <motion.div
              layout
              className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-xl"
            >
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-6 h-6 text-indigo-600" />
                <h2 className="text-xl font-semibold text-gray-800">Assigned Teachers</h2>
              </div>
              
              <div className="space-y-4">
                <AnimatePresence>
                  {assignedTeachers.map((teacher) => (
                    <motion.div
                      key={teacher.id}
                      layout
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      whileHover={{ scale: 1.02 }}
                      className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <div className="bg-indigo-100 p-2 rounded-lg">
                          <GraduationCap className="w-5 h-5 text-indigo-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800">{teacher.name}</h3>
                          <p className="text-sm text-gray-600">{teacher.subject}</p>
                        </div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => toggleTeacherAssignment(teacher.id)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-full"
                      >
                        <X className="w-5 h-5" />
                      </motion.button>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Available Teachers Pool */}
            <motion.div
              layout
              className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl"
            >
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-6 h-6 text-emerald-600" />
                <h2 className="text-xl font-semibold text-gray-800">Available Teachers</h2>
              </div>

              <div className="space-y-4">
                <AnimatePresence>
                  {availableTeachers.map((teacher) => (
                    <motion.div
                      key={teacher.id}
                      layout
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      whileHover={{ scale: 1.02 }}
                      className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <div className="bg-emerald-100 p-2 rounded-lg">
                          <GraduationCap className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-800">{teacher.name}</h3>
                          <p className="text-sm text-gray-600">{teacher.subject}</p>
                        </div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => toggleTeacherAssignment(teacher.id)}
                        className="p-2 text-emerald-500 hover:bg-emerald-50 rounded-full"
                      >
                        <Plus className="w-5 h-5" />
                      </motion.button>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-white p-6 rounded-xl shadow-lg"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Understanding Aggregation</h3>
          <p className="text-gray-600 leading-relaxed">
            This example demonstrates aggregation in object-oriented programming. The school "has" teachers, 
            but teachers can exist independently and can be assigned to or removed from the school. 
            Try moving teachers between the pools to see how they maintain their properties while changing their association.
          </p>
        </motion.div>

        {/* Java Code Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="bg-gray-900 p-6 rounded-xl shadow-lg"
        >
          <div className="flex items-center gap-2 mb-4">
            <Code className="w-6 h-6 text-blue-400" />
            <h2 className="text-xl font-semibold text-white">Java Implementation</h2>
          </div>
          <pre className="text-sm text-gray-300 overflow-x-auto">
            <code>{`// Teacher class (Independent)
class Teacher {
    String name;
    
    Teacher(String name) {
        this.name = name;
    }
}

// School class (Has teachers but does not own them permanently)
class School {
    String schoolName;
    Teacher[] teachers;  // Aggregation: School has multiple teachers

    School(String schoolName, Teacher[] teachers) {
        this.schoolName = schoolName;
        this.teachers = teachers;
    }

    void displayInfo() {
        System.out.println("School Name: " + schoolName);
        for (Teacher teacher : teachers) {
            System.out.println("Teacher: " + teacher.name);
        }
    }
}

public class AggregationExample {
    public static void main(String[] args) {
        // Creating teachers
        Teacher t1 = new Teacher("Mr. Sharma");
        Teacher t2 = new Teacher("Mrs. Verma");

        // Creating school with teachers
        School school = new School("Kodnest High School", 
            new Teacher[]{t1, t2});
        
        // Displaying school details
        school.displayInfo();
    }
}`}</code>
          </pre>
        </motion.div>
      </div>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="relative w-full max-w-4xl">
        {/* Boxes */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-16 sm:gap-20">
          {/* Aggregate Box */}
          <div className="w-full sm:w-48 h-40 border-2 border-gray-300 bg-white rounded-lg p-4 flex flex-col relative z-10">
            <span className="text-lg font-semibold mb-2">Charge</span>
            <span className="text-green-500">Aggregate</span>
            <span className="text-green-500">Object</span>
          </div>

          {/* Lightship Box */}
          <div className="w-full sm:w-48 h-40 border-2 border-gray-300 bg-white rounded-lg p-4 flex flex-col relative z-10">
            <span className="text-lg font-semibold mb-2">LapTop</span>
            <span className="text-black">OS os = new OS</span>
            <span className="text-black">void HasA(Charge ch)</span>
            <span className="text-black"> {`{`} ---------</span>
            <span className="text-black">       ---------{`}`}</span>
            {/* <span className="text-black">       ---------</span> */}
          </div>

          {/* OS Box */}
          <div className="w-full sm:w-48 h-40 border-2 border-gray-300 bg-white rounded-lg p-4 flex flex-col relative z-10">
            <span className="text-lg font-semibold mb-2">OS</span>
            <span className="text-green-500">Composite</span>
            <span className="text-green-500">Object</span>
          </div>
        </div>

        {/* Connecting Lines and Labels - Show on both mobile and tablet */}
        <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 pointer-events-none">
          {/* Mobile Vertical Connections */}
          <div className="block sm:hidden">
            {/* First Connection */}
            <div className="absolute -bottom-10 left-1 w-px h-8 bg-black">
              <div className="absolute top-8 -left-24 text-red-500 whitespace-nowrap">Aggregation</div>
              <div className="absolute top-8 left-6 text-black whitespace-nowrap">has a</div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1 w-2 h-2 bg-white border border-black rotate-45"></div>
            </div>
            
            {/* Second Connection */}
            <div className="absolute -bottom-16 left-1/2 w-px h-8 bg-black translate-y-[12rem]">
              <div className="absolute top-8 -left-24 text-black whitespace-nowrap">Composition</div>
              <div className="absolute top-8 left-6 text-black whitespace-nowrap">has a</div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1 w-2 h-2 bg-black rotate-45"></div>
            </div>
          </div>

          {/* Tablet/Desktop Horizontal Connections */}
          <div className="hidden sm:block">
            {/* Left Connection */}
            <div className="absolute left-[11.1rem] right-[11.5rem] h-px bg-black">
              <div className="absolute -top-8 left-4 text-red-500 whitespace-nowrap">Aggregation</div>
              <div className="absolute -bottom-8 left-4 text-black whitespace-nowrap">has a</div>
              <div className="absolute left-12 -translate-y-1 translate-x-12 w-2 h-2 bg-white border border-black rotate-45"></div>
            </div>

            {/* Right Connection */}
            <div className="absolute left-[28.8rem] right-[11.5rem] h-px bg-black">
              <div className="absolute -top-8 right-2 text-black whitespace-nowrap">Composition</div>
              <div className="absolute -bottom-8 right-4 text-black whitespace-nowrap">has a</div>
              <div className="absolute right-11 -translate-y-1 -translate-x-12 w-2 h-2 bg-black rotate-45"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default HasA;