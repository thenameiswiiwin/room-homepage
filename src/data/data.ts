import mobileHero1 from '../assets/images/mobile-image-hero-1.jpg';
import mobileHero2 from '../assets/images/mobile-image-hero-2.jpg';
import mobileHero3 from '../assets/images/mobile-image-hero-3.jpg';
import desktopHero1 from '../assets/images/desktop-image-hero-1.jpg';
import desktopHero2 from '../assets/images/desktop-image-hero-2.jpg';
import desktopHero3 from '../assets/images/desktop-image-hero-3.jpg';
import aboutDark from '../assets/images/image-about-dark.jpg';
import aboutLight from '../assets/images/image-about-light.jpg';

export const Links = [
  { name: 'home', path: '/' },
  { name: 'shop', path: '/shop' },
  { name: 'about', path: '/about' },
  { name: 'contact', path: '/contact' },
];

export const Slides = [
  {
    id: 1,
    title: 'Discover innovative ways to decorate',
    description:
      ' We provide unmatched quality comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
    imgMobile: mobileHero1,
    imgDesktop: desktopHero1,
  },
  {
    id: 2,
    title: 'We are available all across the globe',
    description:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    imgMobile: mobileHero2,
    imgDesktop: desktopHero2,
  },
  {
    id: 3,
    title: 'Manufactured with the best materials',
    description:
      'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office..',
    imgMobile: mobileHero3,
    imgDesktop: desktopHero3,
  },
];

export const About = {
  title: 'About our furniture',
  description:
    'Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.',
  imgDark: aboutDark,
  imgLight: aboutLight,
};
