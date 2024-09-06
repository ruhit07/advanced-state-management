/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from 'react';

const ItemsContext = createContext();

function ItemsProvider({ children }) {
  const [items, setItems] = useState([]);

  return (
    <ItemsContext.Provider value={{ items, setItems }}>
      {children}
    </ItemsContext.Provider>
  );
}

function useItems() {
  return useContext(ItemsContext);
}

// eslint-disable-next-line react-refresh/only-export-components
export { ItemsProvider, useItems };
