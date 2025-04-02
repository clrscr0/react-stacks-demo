// frontend/pages/index.tsx
import { useState, useEffect } from 'react';
import ItemList from '../components/ItemList';

export default function Home() {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState('');
  const [itemValue, setItemValue] = useState(0);

  useEffect(() => {
    fetch('http://localhost:3001/items')
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const addItem = () => {
    fetch('http://localhost:3001/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: itemName, value: itemValue }),
    }).then(() => {
      fetch('http://localhost:3001/items')
        .then((res) => res.json())
        .then((data) => setItems(data));
    });
    setItemName("");
    setItemValue(0);
  };

  return (
    <div>
      <h1>Items</h1>
      <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} placeholder="Item Name"/>
      <input type="number" value={itemValue} onChange={(e) => setItemValue(parseInt(e.target.value))} placeholder="Item Value"/>
      <button onClick={addItem}>Add Item</button>
      <ItemList items={items} />
    </div>
  );
}