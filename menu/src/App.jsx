import { useState } from 'react';
import menu from './data';
import Menu from './Menu';
import Categories from './Categories';
import Title from './Title';

const categoryArr = ['all', ...new Set(menu.map((item) => item.category))];
function App() {
  const [items, setItems] = useState(menu);

  // eslint-disable-next-line no-unused-vars
  const [categories, setCategories] = useState(categoryArr);

  const filterCategory = (category) => {
    if (category == 'all') {
      setItems(menu);
      return;
    }
    setItems(menu.filter((item) => item.category === category));
  };

  return (
    <main>
      <section className='menu'>
        <Title title='our menu' />
        <Categories categories={categories} filterCategory={filterCategory} />
        <Menu items={items} />
      </section>
    </main>
  );
}

export default App;
