import React from 'react';
import { ProjectCard, GitHub } from '../styles';
import wrd from '../assets/wrd.jpg';
import highQ from '../assets/High-Q.jpg';
import raheem from '../assets/Raheem.png';
import artxblm from '../assets/artxblm.png';

import github from '../assets/icons/contact/github.png'

function Projects(){
    return(
        <div>
            <ProjectCard>
                <h3>Art x BLM</h3>
                <img className="project" src={artxblm} alt="art x blm logo"/>
                <p> 
                    <a href="https://github.com/KParrish193/blm-art-exchange" target="blank">
                    <GitHub src={github} alt="github logo" />
                    </a>

                </p>
                <p>

                </p>
            </ProjectCard>
            <ProjectCard>
                <a href="https://master.d2qsd1m3f8a69k.amplifyapp.com/" target="blank">
                <h3>Raheem.ai</h3>
                <img className="project" src={raheem} alt="raheem logo"/>
                </a>
                <p> 
                    <a href="https://github.com/Lambda-School-Labs/raheem.org--fe" target="blank">
                    <GitHub src={github} alt="github logo" />
                    </a>

            </p>
            <p>

            </p>
            </ProjectCard>
            <ProjectCard>
                <h3>Wasatch Roller Derby Web Store</h3>
                <img className="project" src={wrd} alt="wasatch roller derby logo"/>
                <p> 
                    <a href="https://github.com/KParrish193/wrd-store" target="blank">
                    <GitHub src={github} alt="github logo" />
                    </a>

            </p>
            <p>

            </p>
            </ProjectCard>
            <ProjectCard>
                <h3>High-Q</h3>
                <img className="project"src={highQ} alt="high-Q logo"/>
                <p> 
                    <a href="https://github.com/med-cabinet-5" target="blank">
                    <GitHub src={github} alt="github logo" />
                    </a>

            </p>
            <p>

            </p>
            </ProjectCard>
        </div>
    )
}

export default Projects