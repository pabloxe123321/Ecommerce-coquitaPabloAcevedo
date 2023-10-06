import React from 'react';
import './style.css';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">Que rica cola!!</a>
      </div>
      <ul className="nav-links">
        <li><a href="/">Inicio</a></li>
        <li><a href="/productos">Productos</a></li>
        <li><a href="/contacto">Contacto</a></li>
        
      </ul>
    </nav>
  );
}

export default NavBar;
