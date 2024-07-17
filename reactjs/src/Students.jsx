// src/Students.jsx
import React from 'react';
import Student from './Student';

const Students = () => {
  const students = [
    { name: 'James', department: 'Science', finalGrade: 85, status: 'Pass' },
    { name: 'Artjoy', department: 'Arts', finalGrade: 90, status: 'Pass' },
    { name: 'Diana', department: 'Commerce', finalGrade: 75, status: 'Pass' },
    { name: 'Jane', department: 'Science', finalGrade: 95, status: 'Pass' },
    { name: 'Irene', department: 'Arts', finalGrade: 65, status: 'Pass' },
    { name: 'Carl', department: 'Commerce', finalGrade: 80, status: 'Pass' },
    { name: 'Eldwin', department: 'Science', finalGrade: 70, status: 'Pass' },
    { name: 'Marcus', department: 'Arts', finalGrade: 60, status: 'Pass' },
    { name: 'Earl', department: 'Commerce', status: 'Fail' },
    { name: 'Mark', department: 'Science', status: 'Fail' }
  ];

  return (
    <div>
      <h1>Student Grades</h1>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Student Names</th>
            <th>Department</th>
            <th>Final Grade</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <Student key={index} index={index} student={student} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Students;
