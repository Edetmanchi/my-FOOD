"use client"
import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center max-w-full rounded-full h-16 text-center border-4 py-2 px-6 bg-slate-50  focus:ring-2">
          <Search className='text-slate-600'/>
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Search for anything..."
            className="appearance-none bg-transparent border-none w-full h-full text-gray-700 py-1 px-2 leading-tight focus:outline-none placeholder-custom text-lg"
          />
    
        </div>
      </form>
    </>
  );
};

export default SearchBar;