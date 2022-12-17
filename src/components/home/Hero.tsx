import { useState } from 'react';
import { Slides } from '../../data/data';
import SlideImage from './SlideImage';
import SlideArticles from './SlideArticles';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? Slides.length - 1 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === Slides.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div>
      <SlideImage
        currentSlide={currentSlide}
        slides={Slides}
        prevSlide={prevSlide}
        nextSlide={nextSlide}
      />
      <SlideArticles currentSlide={currentSlide} slides={Slides} />
    </div>
  );
};

export default Hero;
