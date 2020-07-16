import React from 'react'

import { Link } from 'react-router-dom';
import gif from '../assets/blue.gif'

import { HeroContainer, Gif, Nav } from '../styles/index' 

function Landing() {
    return (
        <div>
        <header className="App-header">
            <Nav>
                <Link className="home-mobile" to="/">
                    <Gif src={gif} alt="logo" />
                </Link>
                <Link to="/projects">Projects</Link>
                <Link className="home" to="/">
                    <Gif src={gif} alt="logo" />
                </Link>
                <Link to=""> About</Link>
            </Nav>
        </header>
        <HeroContainer>
            
        </HeroContainer>
        </div>
    )

}


export default Landing