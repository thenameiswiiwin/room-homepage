const links = [
  { name: 'home', path: '/' },
  { name: 'shop', path: '/shop' },
  { name: 'about', path: '/about' },
  { name: 'contact', path: '/contact' },
];

const NavLink = () => {
  return (
    <div className="flex gap-[31px] font-semibold text-black lg:text-white">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.path}
          className="hover:border-b hover:border-black"
        >
          {link.name}
        </a>
      ))}
    </div>
  );
};

export default NavLink;
