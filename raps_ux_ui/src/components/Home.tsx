import React from 'react';
import Header from './Header';
import CarouselItem from './CarouselItem';
import Footer from './ContactForm';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <CarouselItem />
      <Footer />
    </div>
  );
};

export default Home;
