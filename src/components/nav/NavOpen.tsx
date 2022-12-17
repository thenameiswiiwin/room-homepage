import { NavProps } from '../../types/index';
import { Close } from '../icons/icons';
import NavLinks from './NavLinks';

const NavOpen = ({ handleToggle }: NavProps) => {
  return (
    <div className="nav justify-between bg-primary-300">
      <button type="button" onClick={handleToggle}>
        <Close />
      </button>
      <NavLinks />
    </div>
  );
};

export default NavOpen;
