import { useState } from 'react';
import data from './data';
import List from './components/List';

function App() {
  const [birthdays, setBirthdays] = useState(data);
  return (
    <main>
      <section className='container'>
        <h3>{birthdays.length} Birthdays today</h3>
        <List birthdays={birthdays} />
        <button onClick={() => setBirthdays([])} className='btn btn-block'>
          clear
        </button>
      </section>
    </main>
  );
}

export default App;
