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
    <div className="lg:grid lg:grid-cols-12 lg:grid-rows-1">
      <div className="lg:col-span-7">
        <SlideImage
          currentSlide={currentSlide}
          slides={Slides}
          prevSlide={prevSlide}
          nextSlide={nextSlide}
        />
      </div>
      <div className="flex items-center justify-center lg:col-span-5">
        <SlideArticles currentSlide={currentSlide} slides={Slides} />
      </div>
    </div>
  );
};

export default Hero;
