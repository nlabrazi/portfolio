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
    <div id="sidebar" className="side-nav fixed section table-of-contents">
      <ul>
        <li><Link className="logo" to="/">Nabil Labrazi</Link></li>
        <li><Link to="/about"><AccountCircleIcon color="#008073" /> About</Link></li>
        <li><Link to="/experience"><TrendingUpIcon color="#008073" /> Experience</Link></li>
        <li><Link to="/projects"><WebIcon color="#008073" /> Projects</Link></li>
        <li><Link to="/skills"><EqualizerIcon color="#008073" /> Skills</Link></li>
        <li><Link to="/education"><SchoolIcon color="#008073" /> Education</Link></li>
        <li><Link to="/misc"><ControllerClassicIcon color="#008073" /> Misc</Link></li>
        <li><Link to="/contact"><EmailIcon color="#008073" /> Contact</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
