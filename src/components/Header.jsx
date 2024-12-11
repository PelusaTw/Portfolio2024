import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <nav className="navigation">
        <Link className="nav-link" to="/">Inicio</Link>
        <Link className="nav-link" to="/projects">Proyectos</Link>
        <Link className="nav-link" to="/contact">Contacto</Link>
        <Link className="nav-link" to="/newsletter">Newsletter</Link>
      </nav>
    </header>
  );
}
