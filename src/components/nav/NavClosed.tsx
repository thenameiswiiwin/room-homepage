import { NavProps } from '../../types/index';
import { Hamburger, Logo } from '../icons/icons';
import NavLinks from './NavLinks';

const NavClosed = ({ handleToggle }: NavProps) => {
  return (
    <div className="nav">
      <button type="button" onClick={handleToggle} className="lg:hidden">
        <Hamburger />
      </button>
      <Logo styles="mx-auto lg:mx-0" />
      <div className="hidden lg:block lg:pl-[56.28px] lg:text-white">
        <NavLinks />
      </div>
    </div>
  );
};

export default NavClosed;
