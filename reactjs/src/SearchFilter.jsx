// src/SearchFilter.jsx
import React, { useState } from 'react';

const SearchFilter = ({ books, setFilteredBooks }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filteredBooks = books.filter(book => 
      book.title.toLowerCase().includes(query) || 
      book.author.toLowerCase().includes(query)
    );
    setFilteredBooks(filteredBooks);
  };

  return (
    <div>
      <input 
        type="text"
        placeholder="Search by title or author..."
        value={searchQuery}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchFilter;
