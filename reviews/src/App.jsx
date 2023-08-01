import { useState } from 'react';
import people from './data';
import { FaChevronRight, FaChevronLeft, FaQuoteRight } from 'react-icons/fa';

function App() {
  const [index, setIndex] = useState(0);
  const { name, job, text, image } = people[index];

  const currentIndex = (id) => {
    if (id > people.length - 1) {
      return 0;
    }
    if (id < 0) {
      return people.length - 1;
    }
    return id;
  };

  const handleRandomPerson = () => {
    let randomPerson = Math.floor(Math.random() * people.length);
    if (index === randomPerson) {
      randomPerson = index + 1;
    }
    setIndex(currentIndex(randomPerson));
  };

  const handleLeftClick = () => {
    setIndex((index) => currentIndex(index - 1));
  };
  const handleRightClick = () => {
    setIndex((index) => currentIndex(index + 1));
  };
  return (
    <main>
      <article className='review'>
        <div className='img-container'>
          <img src={image} alt={name} className='person-img' />
          <span className='quote-icon'>
            <FaQuoteRight />
          </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className='btn-container'>
          <button className='prev-btn' onClick={handleLeftClick}>
            <FaChevronLeft />
          </button>
          <button className='next-btn'>
            <FaChevronRight onClick={handleRightClick} />
          </button>
        </div>
        <button onClick={handleRandomPerson} className='btn btn-hipster'>
          random qoute
        </button>
      </article>
    </main>
  );
}

export default App;
