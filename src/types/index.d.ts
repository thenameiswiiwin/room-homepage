type SlideProps = {
  currentSlide: number;
  slides: {
    id: number;
    title: string;
    description: string;
    imgMobile: string;
    imgDesktop: string;
  }[];
  prevSlide?: React.MouseEventHandler<HTMLButtonElement>;
  nextSlide?: React.MouseEventHandler<HTMLButtonElement>;
};

type NavProps = {
  handleToggle: React.MouseEventHandler<HTMLButtonElement>;
};

export { SlideProps, NavProps };
