import { useState, useEffect } from 'react';
import data from './dataset.json';  
import Pagination from './components/Pagination';
import { useItems } from './components/ItemsProvider';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(50);
  const [searchQuery, setSearchQuery] = useState('');
  const { items, setItems } = useItems();

  useEffect(() => {
    setItems(data);
  }, [setItems]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const filteredItems = data.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setItems(filteredItems);
    }, 500);  

    return () => clearTimeout(timeoutId);
  }, [searchQuery, setItems]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);

  const loadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search" 
        value={searchQuery} 
        onChange={(e) => setSearchQuery(e.target.value)} 
      />
      <ul>
        {currentItems.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        pages={Math.ceil(items.length / itemsPerPage)}
        pageChange={setCurrentPage}
      />
      <button onClick={loadMore}>Load More</button>
    </div>
  );
}

export default App;
