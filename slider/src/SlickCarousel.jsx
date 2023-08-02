import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

import { longList as data } from './data';
import { FaQuoteRight } from 'react-icons/fa';

const SlickCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <section className='slick-container'>
      <div>
        <Slider {...settings}>
          {data.map((list) => (
            <article key={list.id}>
              <img src={list.image} alt={list.name} className='person-img' />
              <h5 className='name'>{list.name}</h5>
              <p className='title'>{list.title}</p>
              <p className='text'>{list.quote}</p>
              <FaQuoteRight className='icon' />
            </article>
          ))}
        </Slider>
      </div>
    </section>
  );
};
export default SlickCarousel;
