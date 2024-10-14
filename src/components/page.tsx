'use client'

import { useState } from 'react'
import { Search, User, Clock, MapPin, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

// Updated mock student data
const students = [
  { id: '1001', group: 'A', coordinator: { number: 1, name: 'Dr. Emily Parker', phone: '+1234567890' }, time: '10:00 AM', place: 'Main Hall' },
  { id: '1002', group: 'B', coordinator: { number: 2, name: 'Prof. Michael Chen', phone: '+1987654321' }, time: '11:30 AM', place: 'Auditorium' },
  { id: '1003', group: 'C', coordinator: { number: 3, name: 'Dr. Sarah Johnson', phone: '+1122334455' }, time: '2:00 PM', place: 'Student Center' },
]

export function Page() {
  const [studentId, setStudentId] = useState('')
  const [currentStudent, setCurrentStudent] = useState(null)

  const handleSearch = (e) => {
    e.preventDefault()
    const student = students.find(s => s.id === studentId)
    if (student) {
      setCurrentStudent(student)
    } else {
      setCurrentStudent(null)
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-4 md:p-8 flex flex-col">
      <main className="flex-grow">
        <h1 className="text-3xl font-bold mb-8 text-center">Student Orientation Information</h1>
        
        <div className="max-w-md mx-auto mb-8">
          <form onSubmit={handleSearch} className="flex items-center bg-gray-800 rounded-full p-2 shadow-lg">
            <input
              type="text"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
              placeholder="Search id or type a student number"
              className="flex-grow bg-transparent text-white placeholder-gray-400 focus:outline-none px-4"
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors">
              <Search size={24} />
            </button>
          </form>
        </div>

        <AnimatePresence>
          {currentStudent && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-md mx-auto mb-8 bg-gray-800 rounded-xl p-6 shadow-lg"
            >
              <h2 className="text-xl font-semibold mb-4">Student Information</h2>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-400">ID</p>
                    <p className="font-medium">{currentStudent.id}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Group</p>
                    <p className="font-medium">{currentStudent.group}</p>
                  </div>
                </div>
                <div className="border-t border-gray-700 pt-4">
                  <h3 className="text-lg font-semibold mb-2">Orientation Details</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-400 flex items-center">
                        <Clock size={16} className="mr-2" />
                        Time
                      </p>
                      <p className="font-medium">{currentStudent.time}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 flex items-center">
                        <MapPin size={16} className="mr-2" />
                        Place
                      </p>
                      <p className="font-medium">{currentStudent.place}</p>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-700 pt-4">
                  <h3 className="text-lg font-semibold mb-2">Coordinator Information</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-400">Coordinator Number</p>
                      <p className="font-medium">{currentStudent.coordinator.number}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Coordinator Name</p>
                      <p className="font-medium">{currentStudent.coordinator.name}</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-gray-400 flex items-center">
                        <Phone size={16} className="mr-2" />
                        Phone
                      </p>
                      <p className="font-medium">{currentStudent.coordinator.phone}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="mt-8 text-center text-sm text-gray-500">
        Developed and powered by AASTU SaaS Founders
      </footer>
    </div>
  )
}