interface Item {
    id: number;
    name: string;
    value: number;
  }
  
  interface ItemListProps {
    items: Item[];
  }
  
  const ItemList: React.FC<ItemListProps> = ({ items }) => {
    return (
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.value}
          </li>
        ))}
      </ul>
    );
  };
  
  export default ItemList;