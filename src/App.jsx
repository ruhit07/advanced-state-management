import { useState, useEffect } from 'react';
import data from './dataset.json'; // Replace with your dataset file
import Pagination from './Pagination';

function App() {
  const [items, setItems] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(50);
  const [searchQuery, setSearchQuery] = useState('');

  // Calculate pagination
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);

  // Handle search with debounce
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const filteredItems = data.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setItems(filteredItems);
    }, 500); // Adjust debounce delay as needed

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <input 
        type="text" 
        value={searchQuery} 
        onChange={(e) => setSearchQuery(e.target.value)} 
        placeholder="Search..."
      />
      <ul>
        {currentItems.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(items.length / itemsPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default App;
