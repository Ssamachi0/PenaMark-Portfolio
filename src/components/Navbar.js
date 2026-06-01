"use client";

import ThemeToggle from "./ThemeToggle";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">MKP</div>

      <ThemeToggle />
    </nav>
  );
}

export default Navbar;

