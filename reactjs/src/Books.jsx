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
    { title: 'Harry Potter ', author: 'J.K. Rowling', dueDate: generateRandomDate(), status: 'Checked Out' },
    { title: 'The Shining', author: 'Stephen King', dueDate: generateRandomDate(), status: 'Checked Out' },
    { title: 'Murder on the Orient Express, And Then There Were None', author: 'Agatha Christie', dueDate: generateRandomDate(), status: 'Checked Out' },
    { title: 'Pride and Prejudice, Sense and Sensibility', author: 'Jane Austen', dueDate: generateRandomDate(), status: 'Checked Out' },
    { title: 'The Da Vinci Code, Angels & Demons', author: 'Dan Brown', dueDate: generateRandomDate(), status: 'Checked Out' },
    { title: 'The Old Man and the Sea, A Farewell to Arms', author: 'Ernest Hemingway', dueDate: generateRandomDate(), status: 'Checked Out' },
    { title: 'Norwegian Wood, Kafka on the Shore', author: 'Haruki Murakami', status: 'Available' },
    { title: 'he Lord of the Rings series, The Hobbit', author: 'J.R.R. Tolkien', status: 'Available' },
    { title: 'The Handmaids Tale, Oryx and Crake', author: 'Margaret Atwood', status: 'Available' },
    { title: 'A Song of Ice and Fire series (Game of Thrones)', author: 'George R.R. Martin', status: 'Available' }
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
