import { useState } from 'react';
import NavClosed from './NavClosed';
import NavOpen from './NavOpen';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);
  return (
    <nav>
      {isOpen ? (
        <NavClosed handleToggle={handleToggle} />
      ) : (
        <NavOpen handleToggle={handleToggle} />
      )}
    </nav>
  );
};

export default NavBar;
