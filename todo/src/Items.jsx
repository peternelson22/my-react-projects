import Item from './Item';

const Items = ({ items, removeItem, editItem }) => {
  return (
    <div className='items'>
      {items.map((item) => (
        <Item
          key={item.id}
          {...item}
          removeItem={removeItem}
          editItem={editItem}
        />
      ))}
    </div>
  );
};
export default Items;
