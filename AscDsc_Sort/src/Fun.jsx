
import React, { useState, useCallback } from 'react';
import './SortableList.css';

function Fun() {
  const [items , setItems] = useState([]);
  const [data , setInputData] = useState('');
  const [sort , setSort] = useState(null);


  const handleAddItem = () => {
        if(!data.trim()) return;
        const newItem = `item-${items.length}`;
        setItems(prev => [...prev, { id: newItem, value: data.trim()}]);
        setInputData('');
  }

  const sortItems = useCallback(
     (itemsToSort) => {
        if(sort === 'asc') {
            return [...itemsToSort].sort((a, b) => a.value.localeCompare(b.value));
        }
        else if (sort === 'desc') {
            return [...itemsToSort].sort((a, b) => b.value.localeCompare(a.value));
        }
        return itemsToSort;
     },[sort]
  );

  const sortedItems = sortItems(items);

  const list = sortedItems.map(item => (
      <li key={item.id}>{item.value}</li>
   ))

  return (
    <div className="container">
       <h2> Storable List </h2>
       <div>
          <input
              placeholder='Add a new Item'
              value = {data}
              onChange={(e) => setInputData(e.target.value)}
              className="input"
          />
          <button className="add-btn" onClick={handleAddItem}>Add Item</button>
          <div className="sort-buttons">
            <button onClick={() => setSort('asc')}>Sort Ascending</button>
            <button onClick={() => setSort('desc')}>Sort Descending</button>
        </div>
        <ul className="item-list">
           {list}
        </ul>
       </div>
    </div>
  )
}

export default Fun