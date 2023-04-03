import { useState } from 'react';
import axios from 'axios';

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/api/search?q=${searchQuery}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {searchResults.map((result) => (
        <div key={result.id}>
          <h2>{result.title}</h2>
          <p>{result.description}</p>
        </div>
      ))}
    </div>
  );
}
export default SearchBar;