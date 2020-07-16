import React from 'react';
import { ProjectCard } from '../styles';
import wrd from '../assets/wrd.jpg';
import highQ from '../assets/High-Q.jpg';
import raheem from '../assets/Raheem.png';
import artxblm from '../assets/artxblm.png';
import cheese from '../assets/cheese.png'

function Projects(){
    return(
        <div>
            <ProjectCard>
                <h3>Art x BLM</h3>
                <img src={artxblm} />
            </ProjectCard>
            <ProjectCard>
                <h3>Raheem.ai</h3>
                <img src={raheem} />
            </ProjectCard>
            <ProjectCard>
                <h3>Wasatch Roller Derby Web Store</h3>
                <img src={wrd} />
            </ProjectCard>
            <ProjectCard>
                <h3>High-Q</h3>
                <img src={highQ} />
            </ProjectCard>
        </div>
    )
}

export default Projects