import { Links } from '../../data/data';

const NavLinks = () => {
  return (
    <ul className="flex gap-nav-link">
      {Links.map((link) => (
        <li key={link.name} className="navLink">
          <a href={link.path}>{link.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
