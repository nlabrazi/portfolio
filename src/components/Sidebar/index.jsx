import React from 'react';
import { Link } from 'react-router-dom';

import AccountCircleIcon from 'mdi-react/AccountCircleIcon';
import TrendingUpIcon from 'mdi-react/TrendingUpIcon';
import WebIcon from 'mdi-react/WebIcon';
import EqualizerIcon from 'mdi-react/EqualizerIcon';
import SchoolIcon from 'mdi-react/SchoolIcon';
import ControllerClassicIcon from 'mdi-react/ControllerClassicIcon';
import EmailIcon from 'mdi-react/EmailIcon';

const Sidebar = () => {
  return (
        <aside id="sidebar" className="col-12 col-sm-2 p-0 flex-shrink-1">
          <nav className="navbar navbar-expand-sm align-items-start flex-sm-column flex-row">
            <Link className="logo navbar-brand" to="/">Nabil Labrazi</Link>
            <a href className="navbar-toggler" data-toggle="collapse" data-target=".sidebar">
              <span className="navbar-toggler-icon"></span>
            </a>
            <div className="navbar-collapse sidebar collapse show">
              <ul className="flex-column navbar-nav w-100 justify-content-between">
                <li className="nav-item">
                  <Link to="/about"><AccountCircleIcon color="#008073" /> About</Link>
                </li>
                <li className="nav-item">
                  <Link to="/experience"><TrendingUpIcon color="#008073" /> Experience</Link>
                </li>
                <li className="nav-item">
                  <Link to="/projects"><WebIcon color="#008073" /> Projects</Link>
                </li>
                <li className="nav-item">
                  <Link to="/skills"><EqualizerIcon color="#008073" /> Skills</Link>
                </li>
                <li className="nav-item">
                  <Link to="/education"><SchoolIcon color="#008073" /> Education</Link>
                </li>
                <li className="nav-item">
                  <Link to="/misc"><ControllerClassicIcon color="#008073" /> Misc</Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact"><EmailIcon color="#008073" /> Contact</Link>
                </li>
              </ul>
            </div>
          </nav>
        </aside>
  );
};

export default Sidebar;




