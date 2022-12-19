import { SlideProps } from '../../types/index';
import { AngleLeft, AngleRight } from '../icons/icons';

const SlideImage = ({
  currentSlide,
  slides,
  prevSlide,
  nextSlide,
}: SlideProps) => {
  return (
    <section className="relative">
      <picture>
        <source
          media="(min-width:768px)"
          srcSet={slides[currentSlide].imgDesktop}
        />
        <img
          src={slides[currentSlide].imgMobile}
          alt={slides[currentSlide].title}
          className="h-full w-full object-cover"
        />
      </picture>
      <div className="absolute bottom-0 right-0 lg:-right-28 xl:-right-40">
        <button type="button" onClick={prevSlide} className="sliderBtn">
          <AngleLeft />
        </button>
        <button type="button" onClick={nextSlide} className="sliderBtn">
          <AngleRight />
        </button>
      </div>
    </section>
  );
};

export default SlideImage;
