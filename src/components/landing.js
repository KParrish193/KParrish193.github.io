import React from 'react'

import slices from '../assets/pizzaslices.png';

import { HeroContainer } from '../styles/index' 

function Landing() {
    return (
        <div>
        
        <HeroContainer>
            <img src={slices} alt =""/>
        </HeroContainer>
        </div>
    )

}


export default Landing