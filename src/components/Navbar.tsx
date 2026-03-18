const Navbar = () => {
  const links = [
    "about",
    "skills",
    "experience",
    "achievements",
    "projects",
    "education",
    "services",
    "contact"
  ];

  return (
    <nav className="navbar">
      {/* Logo placeholder - can be replaced with an image */}
      <div className="logo">
        <img
          src="/logo-placeholder.png"
          alt="Logo"
          className="logo-img"
        />
        {/* Fallback text */}
        <span className="logo-text">AI One Stop Solutions</span>
      </div>

      <div className="nav-links">
        {links.map((link) => (
          <a key={link} href={`#${link}`} className="nav-link">
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;