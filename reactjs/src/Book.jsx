// src/Book.jsx
import React from 'react';

const Book = ({ index, book, toggleStatus }) => {
  return (
    <li>
      <span>No. {index + 1} | Title: {book.title} | Author: {book.author} | Status: {book.status}</span>
      {book.status === 'Checked Out' && <span> | Due Date: {book.dueDate}</span>}
      <button onClick={() => toggleStatus(index)}>Toggle Status</button>
    </li>
  );
};

export default Book;
