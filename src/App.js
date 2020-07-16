import React from 'react';

import gif from './assets/blue.gif';

import { Nav, Gif } from './styles/index' 
import { Route, Link, NavLink } from 'react-router-dom';
import Landing from './components/landing';
import Projects from './components/projects';
import Skills from './components/skills';
import Contact from './components/contact';
import './App.css';

function App() {
    return (
    <div className="App">
            <header className="App-header">
            <Nav>

                <Link className="home-mobile" to="/">
                    <Gif src={gif} alt="logo" />
                </Link>

                <NavLink 
                    to="/projects" 
                    className="left"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "#FA8B37",
                    }}
                    > 
                        Projects 
                </NavLink>

                <NavLink 
                    to="skills" 
                    className="left"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "#FA8B37",}}> 
                    Skills 
                </NavLink>
                <Link className="home" to="/">
                    <Gif src={gif} alt="logo" />
                </Link>
                <NavLink 
                    to="/about" 
                    className="right"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "#FA8B37",}}> 
                    About 
                </NavLink>
                
                <NavLink 
                    to="/contact" 
                    className="right"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "#FA8B37",}}> 
                    Contact 
                </NavLink>
        
            </Nav>
        </header>

      <div>
        <Route exact path="/" component={Landing} />
        <Route path="/projects" component={Projects} />
        <Route path="/skills" component={Skills} />
        <Route path="/contact" component={Contact} />
      </div>
    </div>
  );
}

export default App;
