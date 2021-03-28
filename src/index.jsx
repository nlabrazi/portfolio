import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
    <Sidebar />
    <main className="col bg-faded py-3 flex-grow-1">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/experience" component={Experience} />
        <Route path="/education" component={Education} />
        <Route path="/projects" component={Projects} />
        <Route path="/skills" component={Skills} />
        <Route path="/misc" component={Misc} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </main>
  </Router>
);


ReactDOM.render(<App />, document.getElementById("root"));
