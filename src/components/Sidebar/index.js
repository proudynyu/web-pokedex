import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ className }) => {
  return (
    <nav className={className}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/types">Pokemon types</Link></li>
        <li><Link to="/locations">Locations</Link></li>
      </ul>
    </nav>
  )
}

export default Sidebar;