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
  <div className="container-fluid">
    <div className="row min-vh-100 flex-column flex-md-row">
      <Sidebar />
      <main className="col bg-faded">
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
    </div>
  </div>

// Hotjar Tracking Code for nabil.labrazi.com
<script>
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:2346482,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
</script>

  </Router>
);




ReactDOM.render(<App />, document.getElementById("root"));
