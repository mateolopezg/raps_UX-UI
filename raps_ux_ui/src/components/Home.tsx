import React from 'react';
import CarouselItem from './CarouselItem';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <section>
      <CarouselItem />
      <Link to="/contact">Go to Contact Form</Link>
    </section>
  );
};

export default Home;
