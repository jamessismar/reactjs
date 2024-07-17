// src/Student.jsx
import React from 'react';

const Student = ({ index, student }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{student.name}</td>
      <td>{student.department}</td>
      <td>{student.status === 'Pass' ? student.finalGrade : 'N/A'}</td>
      <td>{student.status}</td>
    </tr>
  );
};

export default Student;
