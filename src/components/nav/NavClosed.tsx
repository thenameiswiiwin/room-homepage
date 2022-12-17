import { Hamburger, Logo } from '../icons/icons';

type NavClosedProps = {
  handleToggle: React.MouseEventHandler<HTMLButtonElement>;
};

const NavClosed = ({ handleToggle }: NavClosedProps) => {
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
