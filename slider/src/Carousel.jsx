import { useCallback, useEffect, useState } from 'react';
import { longList as data } from './data';
import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// eslint-disable-next-line react/prop-types
const Carousel = () => {
  // eslint-disable-next-line no-unused-vars
  const [shortList, setShortList] = useState(data);
  const [currentPerson, setCurrentPerson] = useState(0);

  const prevSlide = () => {
    setCurrentPerson((prevPerson) => {
      const result = (prevPerson - 1 + shortList.length) % shortList.length;
      return result;
    });
  };
  const nextSlide = useCallback(() => {
    setCurrentPerson((prevPerson) => {
      const result = (prevPerson + 1) % shortList.length;
      return result;
    });
  }, [shortList.length]);
  useEffect(() => {
    let sliderId = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => {
      clearInterval(sliderId);
    };
  }, [currentPerson, nextSlide]);

  return (
    <section className='slider-container '>
      {shortList.map((list, index) => (
        <article
          key={list.id}
          className='slide '
          style={{
            transform: `translateX(${100 * (index - currentPerson)}%)`,
            opacity: index === currentPerson ? '1' : '0',
            visibility: index === currentPerson ? 'visible' : 'hidden',
          }}
        >
          <img src={list.image} alt={list.name} className='person-img' />
          <h5 className='name'>{list.name}</h5>
          <p className='title'>{list.title}</p>
          <p className='text'>{list.quote}</p>
          <FaQuoteRight className='icon' />
        </article>
      ))}
      <button onClick={prevSlide} className='prev'>
        <FiChevronLeft />
      </button>
      <button onClick={nextSlide} className='next'>
        <FiChevronRight />
      </button>
    </section>
  );
};
export default Carousel;
