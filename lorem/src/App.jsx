import { useState } from 'react';
import data from './data';

function App() {
  const [text, setText] = useState([]);
  const [input, setInput] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputNum = parseInt(input);
    setText(data.slice(0, inputNum));
  };
  return (
    <section className='section-center'>
      <h4>lorem ipsum generator</h4>
      <form onSubmit={handleSubmit} className='lorem-form'>
        <label htmlFor='iput'>Paragraps</label>
        <input
          type='number'
          name='input'
          id='input'
          min={1}
          max={8}
          step={1}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className='btn' type='submit'>
          generate
        </button>
      </form>
      <article className='lorem-text'>
        {text.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </article>
    </section>
  );
}

export default App;
