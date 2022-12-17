import { NavProps } from '../../types/index';
import { Hamburger, Logo } from '../icons/icons';

const NavClosed = ({ handleToggle }: NavProps) => {
  return (
    <div className="nav">
      <button type="button" onClick={handleToggle}>
        <Hamburger />
      </button>
      <Logo styles="mx-auto" />
    </div>
  );
};

export default NavClosed;
