import React from 'react'
import Student from './components/Student'
import './App.css'

function App() {
  const students = [
    {
      name: "Rahul Sharma",
      course: "Computer Science",
      marks: 85
    },
    {
      name: "Anita Verma",
      course: "Information Technology",
      marks: 92
    },
    {
      name: "Rohan Gupta",
      course: "Electronics",
      marks: 78
    }
  ];

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Student Information</h1>
      </header>
      
      <main className="cards-grid">
        {students.map((student, index) => (
          <Student 
            key={index}
            name={student.name}
            course={student.course}
            marks={student.marks}
          />
        ))}
      </main>
    </div>
  )
}

export default App
