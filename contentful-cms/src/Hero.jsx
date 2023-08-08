import hero from './assets/hero.svg';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In
            repellendus laborum cumque, nisi adipisci perferendis maxime
            voluptatem ad eius totam illum quisquam delectus voluptas tenetur.
            Eveniet aut fugit laudantium culpa minus quisquam eos suscipit
            facilis architecto, ad dolorum error? In perspiciatis sit laborum,
          </p>
        </div>
        <div className='hero-container'>
          <img src={hero} alt='hero' className='img' />
        </div>
      </div>
    </section>
  );
};
export default Hero;
