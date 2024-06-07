// src/components/AddItem.js
import React, { useState } from 'react';

const AddItem = () => {
    const [name, setName] = useState('');

    const addItemToList = async () => {
        try {
            const response = await fetch('http://localhost:3002/add-language', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name }), // Send the item as JSON
            });

            if (response.ok) {
                console.log('Item added successfully');
            } else {
                console.error('Error adding item:', response.statusText);
            }
        } catch (error) {
            console.error('Network error:', error.message);
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter item"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={addItemToList}>Add Item</button>
        </div>
    );
};

export default AddItem;
