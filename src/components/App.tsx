import { useState } from 'react';
import { Hamburger, Close, Logo } from './icons/icons';

const Links = [
  { name: 'home', path: '/' },
  { name: 'shop', path: '/shop' },
  { name: 'about', path: '/about' },
  { name: 'contact', path: '/contact' },
];

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <div className="bg-red-200">
      <header>
        <nav className="flex items-center justify-between px-6 py-12">
          <section>
            <button type="button" onClick={handleToggle}>
              {isOpen ? <Hamburger /> : <Close />}
            </button>
          </section>
          <section className={isOpen ? 'mx-auto block' : 'hidden'}>
            <Logo />
          </section>
          <section className={isOpen ? 'hidden' : 'block'}>
            <ul className="flex gap-nav-link">
              {Links.map((link) => (
                <li key={link.name} className="navLink">
                  <a href={link.path}>{link.name}</a>
                </li>
              ))}
            </ul>
          </section>
        </nav>
      </header>
    </div>
  );
};

export default App;
