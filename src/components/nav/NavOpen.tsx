import { Close } from '../icons/icons';
import NavLinks from './NavLinks';

type NavOpenProps = {
  handleToggle: React.MouseEventHandler<HTMLButtonElement>;
};

const NavOpen = ({ handleToggle }: NavOpenProps) => {
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
