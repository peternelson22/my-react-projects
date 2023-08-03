import { useState } from 'react';
import Form from './Form';
import Items from './Items';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';

const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items));
};

// const getLocalStorage = () => {
//   let list = localStorage.getItem('list');
//   if (list) {
//     list = JSON.parse(localStorage.getItem('list'));
//   } else {
//     list = [];
//   }
//   return list;
// };

const defaultList = JSON.parse(localStorage.getItem('list') || '[]'); //this is similar to the getLocalStorage fn

function App() {
  const [items, setItems] = useState(defaultList);

  const addItem = (itemName) => {
    const newItem = { id: uuidv4(), name: itemName, completed: false };
    setItems([...items, newItem]);
    setLocalStorage([...items, newItem]);
    toast.success('successfully added');
  };

  const removeItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
    setLocalStorage(newItems);
    toast.warn('successfully remove');
  };

  const editItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
  };
  return (
    <section className='section-center'>
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
      <ToastContainer position='top-center' />
    </section>
  );
}

export default App;
