import { useState } from 'react';
import { Hamburger, Close, Logo } from './icons';
import NavLink from './NavLink';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <nav
      className={`flex items-center justify-between py-12 px-6 ${
        isOpen ? 'bg-white' : 'bg-transparent'
      }`}
    >
      <button type="button" onClick={handleToggle}>
        {isOpen ? <Close /> : <Hamburger />}
      </button>
      <a href="/" className={isOpen ? 'hidden' : 'mx-auto'}>
        <Logo />
      </a>
      <div className={!isOpen ? 'hidden' : ''}>
        <NavLink />
      </div>
    </nav>
  );
};

export default NavBar;
