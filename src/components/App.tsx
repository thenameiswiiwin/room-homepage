import NavBar from './nav/NavBar';
import { Slides } from '../data/data';
import { AngleLeft, AngleRight, Arrow } from './icons/icons';
import { useState } from 'react';

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? Slides.length - 1 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === Slides.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div>
      <div className="absolute z-50 w-full">
        <NavBar />
      </div>
      <div>
        <header>
          <section className="relative">
            <img
              src={Slides[currentSlide].imgMobile}
              alt={Slides[currentSlide].title}
            />
            <div className="absolute bottom-0 right-0">
              <button type="button" onClick={prevSlide} className="sliderBtn">
                <AngleLeft />
              </button>
              <button type="button" onClick={nextSlide} className="sliderBtn">
                <AngleRight />
              </button>
            </div>
          </section>
          <section className="px-8 py-hero">
            <h1 className="pb-[15px]">{Slides[currentSlide].title}</h1>
            <p className="pb-[41px]">{Slides[currentSlide].description}</p>
            <a
              href="/"
              className="flex gap-nav-link text-link text-primary-200 hover:text-primary-100"
            >
              SHOP NOW
              <Arrow />
            </a>
          </section>
        </header>
        <main>About</main>
      </div>
    </div>
  );
};

export default App;
