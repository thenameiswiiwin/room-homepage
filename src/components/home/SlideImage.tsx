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
      <img
        src={slides[currentSlide].imgMobile}
        alt={slides[currentSlide].title}
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
  );
};

export default SlideImage;
