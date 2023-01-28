import React from "react";
import ReactDOM from "react-dom";
import { hotjar } from 'react-hotjar';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'assets/css/style.css';

import Sidebar from "./components/Sidebar";

import Home from "pages/Home";
import About from "pages/About";
import Experience from "pages/Experience";
import Education from "pages/Education";
import Projects from "pages/Projects";
import Skills from "pages/Skills";
import Misc from "pages/Misc";
import Contact from "pages/Contact";


const App = () => (
  <Router>
  <div className="container-fluid">
    <div className="row min-vh-100 flex-column flex-md-row">
      <Sidebar />
      <main className="col bg-faded">
        <Routes>
          <Route path="/" exact element={ <Home/> } />
          <Route path="/about" element={ <About/> } />
          <Route path="/experience" element={ <Experience/> } />
          <Route path="/education" element={ <Education/> } />
          <Route path="/projects" element={ <Projects/> } />
          <Route path="/skills" element={ <Skills/> } />
          <Route path="/misc" element={ <Misc/> } />
          <Route path="/contact" element={ <Contact/> } />
        </Routes>
      </main>
    </div>
  </div>
  </Router>
);

hotjar.initialize(2346498);
ReactDOM.render(<App />, document.getElementById("root"));
