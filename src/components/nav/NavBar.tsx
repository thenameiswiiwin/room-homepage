import { useState } from 'react';
import { Hamburger, Close, Logo } from '../icons/icons';
import NavLinks from './NavLinks';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <nav className="flex items-center justify-between px-6 py-12">
      <button type="button" onClick={handleToggle}>
        {isOpen ? <Hamburger /> : <Close />}
      </button>
      {isOpen ? <Logo styles="mx-auto" /> : <NavLinks />}
    </nav>
  );
};

export default NavBar;
