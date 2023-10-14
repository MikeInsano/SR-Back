import React from 'react'
import { Link } from 'react-router-dom'
import './Dash.css'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/" className="nav-link" id="home-link">Pagina principal</Link>
      <Link to="/Comments" className="nav-link">Comentarios</Link>
      <Link to="/Dash" className="nav-link" id="users-link">Usuarios</Link>
      <Link className="nav-link" id="login-link">Iniciar Sesión</Link>
    </div>
  );
};
export default Sidebar;