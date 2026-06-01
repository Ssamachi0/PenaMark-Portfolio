"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleCloseMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <a href="#home" className="logo" onClick={handleCloseMenu}>
        MKP
      </a>

      <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={handleCloseMenu}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="nav-actions">
        <ThemeToggle />

        <button
          type="button"
          className="menu-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

export default Navbar;