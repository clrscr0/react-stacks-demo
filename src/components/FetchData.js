import { useState, useEffect } from 'react';

const FetchData = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/languages')
      .then((res) => res.json())
      .then((data) => {
        // Assuming the data is in the format shown above
        const itemsArray = data.data;
        setItems(itemsArray);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Programming Languages</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Programming Language</th>
          </tr>
        </thead>
        <tbody>
        {items.map((item) => (
          <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default FetchData;