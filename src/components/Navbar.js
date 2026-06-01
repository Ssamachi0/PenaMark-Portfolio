"use client";

import ThemeToggle from "./ThemeToggle";

function Navbar() {
  return (
    <header className="navbar">
      <a href="#home" className="logo">
        MKP
      </a>

      <div className="nav-actions">
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Navbar;