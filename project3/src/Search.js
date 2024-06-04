// src/Search.js
import React, { useState } from 'react';
import data from './data';

const Search = () => {
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  const handleInputChange = (e) => {
    const query = e.target.value;
    setQuery(query);

    const filtered = data.filter(item => 
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
      />
      <ul>
        {filteredData.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
