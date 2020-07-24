import React from 'react';

import gif from './assets/neon.gif';

import { Nav, Gif, AppContainer } from './styles/index' 
import { Route, Link, NavLink } from 'react-router-dom';
import About from './components/about';
import Projects from './components/projects';
import Skills from './components/skills';
import './App.css';

function App() {
    return (
    <AppContainer className="App">
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
                        color: "#C0A887",
                        borderBottom: "2px solid #d9d9d9"
                    }}
                    > 
                        Projects 
                </NavLink>

                <Link className="home" to="/">
                    <Gif src={gif} alt="logo" />
                </Link>  

                <NavLink 
                    to="/skills" 
                    className="right"
                    activeStyle={{
                        fontWeight: "bold",
                        color: "#C0A887",
                        borderBottom: "2px solid #d9d9d9"
                    }}> 
                    Skills 
                </NavLink>
            </Nav>
        </header>

    <div>
        <Route exact path="/" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/skills" component={Skills} />
    </div>
    </AppContainer>
);
}

export default App;
