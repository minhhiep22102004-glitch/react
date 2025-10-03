import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">🏠 Home</Link>
      <Link to="/about">ℹ️ About</Link>
      <Link to="/users">👥 Users</Link>
    </nav>
  );
}

export default Navbar;
