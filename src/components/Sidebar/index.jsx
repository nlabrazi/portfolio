import React from 'react';
import { Link } from 'react-router-dom'

import AccountCircleIcon from 'mdi-react/AccountCircleIcon';
import TrendingUpIcon from 'mdi-react/TrendingUpIcon';
import WebIcon from 'mdi-react/WebIcon';
import EqualizerIcon from 'mdi-react/EqualizerIcon';
import SchoolIcon from 'mdi-react/SchoolIcon';
import ControllerClassicIcon from 'mdi-react/ControllerClassicIcon';
import EmailIcon from 'mdi-react/EmailIcon';

const Sidebar = () => {
  return (
    <aside id="sidebar" className="col-12 col-md-2 p-0 flex-shrink-1 section">
    <nav className="navbar navbar-expand flex-md-column flex-row align-items-start py-2">
      <ul className="sidebar-list">
        <li><Link className="logo" to="/">Nabil Labrazi</Link></li>
        <li><Link to="/about"><AccountCircleIcon color="#008073" /><span> About</span></Link></li>
        <li><Link to="/experience"><TrendingUpIcon color="#008073" /><span> Experience</span></Link></li>
        <li><Link to="/projects"><WebIcon color="#008073" /><span> Projects</span></Link></li>
        <li><Link to="/skills"><EqualizerIcon color="#008073" /><span> Skills</span></Link></li>
        <li><Link to="/education"><SchoolIcon color="#008073" /><span> Education</span></Link></li>
        <li><Link to="/misc"><ControllerClassicIcon color="#008073" /><span> Hobbies</span></Link></li>
        <li><Link to="/contact"><EmailIcon color="#008073" /><span> Contact</span></Link></li>
      </ul>
    </nav>
    </aside>
  );
};

export default Sidebar;
