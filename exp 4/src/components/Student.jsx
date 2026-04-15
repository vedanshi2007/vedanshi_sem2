import React from 'react';
import './Student.css';

const Student = ({ name, course, marks }) => {
    return (
        <div className="student-card">
            <h3 className="student-name">{name}</h3>
            <p className="student-info">Course: {course}</p>
            <p className="student-info">Marks: {marks}</p>
        </div>
    );
};

export default Student;
