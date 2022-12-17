const Links = [
  { name: 'home', path: '/' },
  { name: 'shop', path: '/shop' },
  { name: 'about', path: '/about' },
  { name: 'contact', path: '/contact' },
];

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
