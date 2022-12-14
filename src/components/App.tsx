import { AngleLeft, AngleRight, Arrow } from './icons';

const App = () => {
  return (
    <div>
      <h1>Discover innovative ways to decorate</h1>
      <h2>ABOUT OUR FURNITURE</h2>
      <p>
        We provide unmatched quality, comfort, and style for property owners
        across the country. Our experts combine form and function in bringing
        your vision to life. Create a room in your own style with our collection
        and make your property a reflection of you and what you love.
      </p>
      <p>
        Our multifunctional collection blends design and function to suit your
        individual taste. Make each room unique, or pick a cohesive theme that
        best express your interests and what inspires you. Find the furniture
        pieces you need, from traditional to contemporary styles or anything in
        between. Product specialists are available to help you create your dream
        space.
      </p>
      <nav>
        <ul className="flex gap-nav">
          <li>home</li>
          <li>shop</li>
          <li>about</li>
          <li>contact</li>
        </ul>
      </nav>
      <div className="flex items-center justify-center">
        <button type="button" className="bg-primary-200">
          <AngleLeft />
        </button>
        <button type="button" className="bg-primary-200">
          <AngleRight />
        </button>
      </div>
      <a href="/" className="flex items-center justify-center gap-link">
        SHOP NOW
        <Arrow />
      </a>
    </div>
  );
};

export default App;
