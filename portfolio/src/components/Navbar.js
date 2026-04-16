import React, { useState } from 'react';

const links = [
  { label: 'Home', href: '#Introduction' },
  { label: 'About Me', href: '#About-Me' },
  { label: 'Education', href: '#Education' },
  { label: 'Experience', href: '#Experience' },
  { label: 'Skills', href: '#Skills' },
  { label: 'My Projects', href: '#Projects' },
  { label: 'Contact', href: '#Contact' },
];

const PS_SYMBOLS = ['✕', '○', '□', '△'];

const Navbar = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 flex flex-wrap gap-6 px-6 py-4 shadow-lg"
      style={{
        background: '#0d6efd', // ✅ BLUE NAVBAR
        borderBottom: '1px solid rgba(255,255,255,0.2)',
        fontFamily: "'Orbitron', sans-serif",
      }}
    >
      

      {links.map((link, idx) => {
        const symbol = PS_SYMBOLS[idx % 4];
        const isHovered = hovered === link.href;

        return (
          <a
            key={link.href}
            href={link.href}
            onMouseEnter={() => setHovered(link.href)}
            onMouseLeave={() => setHovered(null)}
            className="font-bold text-sm transition-all duration-300 inline-flex items-center gap-1"
            style={{
              color: '#fff',
              transform: isHovered ? 'translateY(-2px)' : 'none',
              textShadow: isHovered ? '0 0 10px rgba(255,255,255,0.8)' : 'none',
              fontFamily: "'Orbitron', sans-serif",
            }}
          >
            <span
              style={{
                color: '#fff',
                fontSize: '10px',
                opacity: isHovered ? 1 : 0.7,
              }}
            >
              {symbol}
            </span>
            {link.label}
          </a>
        );
      })}
    </nav>
  );
};

export default Navbar;