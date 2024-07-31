// src/Books.jsx
import React, { useState } from 'react';
import Book from './Book';
import SearchFilter from './SearchFilter';

const Books = () => {
  const generateRandomDate = () => {
    const today = new Date();
    const randomDays = Math.floor(Math.random() * 30);
    const randomDate = new Date(today);
    randomDate.setDate(today.getDate() + randomDays);
    return randomDate.toLocaleDateString();
  };

  const initialBooks = [
    { title: 'Book 1', author: 'John', dueDate: generateRandomDate(), status: 'Checked Out' },
    { title: 'Book 2', author: 'Jane', dueDate: generateRandomDate(), status: 'Checked Out' },
    { title: 'Book 3', author: 'Mike', dueDate: generateRandomDate(), status: 'Checked Out' },
    { title: 'Book 4', author: 'Lisa', dueDate: generateRandomDate(), status: 'Checked Out' },
    { title: 'Book 5', author: 'John', dueDate: generateRandomDate(), status: 'Checked Out' },
    { title: 'Book 6', author: 'Jane', dueDate: generateRandomDate(), status: 'Checked Out' },
    { title: 'Book 7', author: 'Mike', status: 'Available' },
    { title: 'Book 8', author: 'Lisa', status: 'Available' },
    { title: 'Book 9', author: 'John', status: 'Available' },
    { title: 'Book 10', author: 'Jane', status: 'Available' }
  ];

  const [books, setBooks] = useState(initialBooks);
  const [filteredBooks, setFilteredBooks] = useState(initialBooks);

  const toggleStatus = (index) => {
    const updatedBooks = books.map((book, i) => {
      if (i === index) {
        return {
          ...book,
          status: book.status === 'Checked Out' ? 'Available' : 'Checked Out',
          dueDate: book.status === 'Checked Out' ? undefined : generateRandomDate()
        };
      }
      return book;
    });
    setBooks(updatedBooks);
    setFilteredBooks(updatedBooks);
  };

  return (
    <div>
      <SearchFilter books={books} setFilteredBooks={setFilteredBooks} />
      <h1>Library Books</h1>
      <ul>
        {filteredBooks.map((book, index) => (
          <Book key={index} index={index} book={book} toggleStatus={toggleStatus} />
        ))}
      </ul>
    </div>
  );
};

export default Books;
