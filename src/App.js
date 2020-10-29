import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Blog from "./components/Blog/Blog";
import Projects from "./components/Projects/Projects";
import NotFound from "./components/NotFound/NotFound";
import Resume from "./components/Resume/Resume";
import About from "./components/About/About";
import ContactMe from "./components/ContactMe/ContactMe";



function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <ContactMe />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
