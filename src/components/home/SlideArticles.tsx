import { SlideProps } from '../../types/index';
import { Arrow } from '../icons/icons';

const SlideArticles = ({ currentSlide, slides }: SlideProps) => {
  return (
    <section className="px-8 pt-hero-top pb-hero-bottom">
      <h1 className="pb-[15px]">{slides[currentSlide].title}</h1>
      <p className="pb-[41px]">{slides[currentSlide].description}</p>
      <a
        href="/"
        className="flex gap-nav-link text-link text-primary-200 hover:text-primary-100"
      >
        SHOP NOW
        <Arrow />
      </a>
    </section>
  );
};

export default SlideArticles;
