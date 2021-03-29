import React from 'react';

import AccountCircleIcon from 'mdi-react/AccountCircleIcon';
import TrendingUpIcon from 'mdi-react/TrendingUpIcon';
import WebIcon from 'mdi-react/WebIcon';
import EqualizerIcon from 'mdi-react/EqualizerIcon';
import SchoolIcon from 'mdi-react/SchoolIcon';
import ControllerClassicIcon from 'mdi-react/ControllerClassicIcon';
import EmailIcon from 'mdi-react/EmailIcon';

import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div id="sidebar">
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: 'inherit' }}
          >
            Nabil Labrazi
          </a>
        </CDBSidebarHeader>
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/about" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">About</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/experience" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Experience</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/projects" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Projects</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/skills" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Skills</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/education" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Education</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/misc" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Misc</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/contact" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Contact</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;



        // <li><Link className="logo" to="/">Nabil Labrazi</Link></li>
        // <li><Link to="/about"><AccountCircleIcon color="#008073" /> About</Link></li>
        // <li><Link to="/experience"><TrendingUpIcon color="#008073" /> Experience</Link></li>
        // <li><Link to="/projects"><WebIcon color="#008073" /> Projects</Link></li>
        // <li><Link to="/skills"><EqualizerIcon color="#008073" /> Skills</Link></li>
        // <li><Link to="/education"><SchoolIcon color="#008073" /> Education</Link></li>
        // <li><Link to="/misc"><ControllerClassicIcon color="#008073" /> Misc</Link></li>
        // <li><Link to="/contact"><EmailIcon color="#008073" /> Contact</Link></li>
