import React from 'react';
import { ProjectCard, SkillsContainer, ProjectCardContainer, GitHub } from '../styles';
import wrd from '../assets/wrd.jpg';
import highQ from '../assets/High-Q.gif';
import raheem from '../assets/Raheem.gif';
import artxblm from '../assets/artxblmdark.gif';
import github from '../assets/icons/contact/github.png'

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


function Projects(){
    return(
        <SkillsContainer>
            <h2>
                Projects
            </h2>
            <ProjectCardContainer>
            <Accordion
                style={{
                    backgroundColor: '#d6d6d6',
                }}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography>
                    <h3
                    style={{
                        textAlign: 'left',
                        padding: '0 1rem',
                        margin: '0'
                    }}>
                        Art x BLM</h3>
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <ProjectCard>
                <img className="project" src={artxblm} alt="art x blm logo"/>
                <h4>
                HTML | CSS | JavaScript | React | NodeJS | Strapi | Heroku | Stripe
                </h4>
                <h5>
                Role: Fullstack Developer
                </h5>
                <p>
                App to facilitate a collaborative exchange of art to raise money for anti-racist action
                </p>

                <div>
                <div className="bullets">
                <p className="bulletpoints">
                • Remotely collaborated with an international team of 2 developers, 1 UX designer, and additional product managers
                </p>
                <p className="bulletpoints">
                • Released presentation-ready website for clients to share in 9 weeks
                </p>
                <p className="bulletpoints">
                • Developed a rich, client-side routed React application with a Node.js SQL database that supports high-resolution image uploads
                </p>
                </div>
                <div className="github">
                    <a href="https://github.com/KParrish193/blm-art-exchange" target="blank">
                    <GitHub src={github} alt="github logo" />
                    </a>
                </div>
                </div>
            </ProjectCard>
            </AccordionDetails>
            </Accordion>

            <Accordion
            style={{
                backgroundColor: '#d6d6d6',
            }}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel1a-header"
                >
                <Typography>      
                    <a 
                        href="https://master.d2qsd1m3f8a69k.amplifyapp.com/" target="blank"
                        style={{
                            textDecoration: 'none',
                            color: '#292C34'
                        }}>
                    <h3 
                    style={{
                        textAlign: 'left',
                        padding: '0 1rem',
                        margin: '0'
                    }}>
                        Raheem.ai</h3>
                    </a>
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <ProjectCard>
                <img className="project" src={raheem} alt="raheem logo"/>
                <h4>
                HTML | CSS | JavaScript | React | NodeJS | Victory | Google Firebase | AWS
                </h4>
                <h5>
                Role: Frontend Developer
                </h5>
                <p>
                A mobile-forward, independent, online service to help people take action against police violence
                </p>
                
                <div>
                <div className="bullets">
                <p className="bulletpoints">
                • Collaborated with a remote, cross-functional team of 5 developers and 2 UX designers from across the United States
                </p>
                <p className="bulletpoints">
                • Released presentation-ready website for clients to share in 8 weeks
                </p>
                <p className="bulletpoints">
                • Conducted primary user research and information collection working directly with UX and stakeholders
                </p>
                <p className="bulletpoints">
                • Led majority of stakeholder presentations
                </p>
                <p className="bulletpoints">
                • Developed lightweight, client-side routed React application with a Firebase NoSQL database
                </p>
                </div>
                <div className="github">
                    <a href="https://github.com/Lambda-School-Labs/raheem.org--fe" target="blank">
                    <GitHub src={github} alt="github logo" />
                    </a>
                </div>
                </div>
            </ProjectCard>
            </AccordionDetails>
            </Accordion>

            <Accordion
            style={{
                backgroundColor: '#d6d6d6',
            }}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel1a-header"
                >
                <Typography> 
                <h3
                style={{
                    textAlign: 'left',
                    padding: '0 1rem',
                    margin: '0'
                }}>
                    Wasatch Roller Derby Web Store</h3>
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <ProjectCard>
                <img className="project" src={wrd} alt="wasatch roller derby logo"/>
                <h4>
                HTML | CSS | JavaScript | React | NextJS | NodeJS | Strapi | AWS | Stripe
                </h4>
                <h5>
                Role: Lead Developer
                </h5>
                <p>
                A nonprofit organization that strives to promote the sport of roller derby in Salt Lake City, Utah, showcasing the dedication and athleticism of all involved
                </p>

                <div>
                <div className="bullets">
                <p className="bulletpoints">
                • Designed first iteration of web store to provide Wasatch Roller Derby with alternative income and brand promotion streams
                </p>
                <p className="bulletpoints">
                • Optimized SEO functionality with NextJS, providing 100% improvement into web traffic insight and analysis
                </p>
                </div>
                <div className="github">
                <a href="https://github.com/KParrish193/wrd-store" target="blank">
                    <GitHub src={github} alt="github logo" />
                </a>
                </div>
                </div>
            </ProjectCard>
            </AccordionDetails>
            </Accordion>

            <Accordion
            style={{
                backgroundColor: '#d6d6d6',
            }}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4a-content"
                id="panel1a-header"
                >
                <Typography>
                <a 
                    href="https://high-q.netlify.app/" 
                    target="blank"
                    style={{
                        textDecoration: 'none',
                        color: '#292C34'
                    }}>
                <h3
                style={{
                    textAlign: 'left',
                    padding: '0 1rem',
                    margin: '0'
                }}>
                    High-Q</h3>
                </a>
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
            <ProjectCard>
                <img className="project"src={highQ} alt="high-Q logo"/>
                <h4>
                HTML | CSS | JavaScript | React | NodeJS | Strapi | Heroku | Stripe
                </h4>
                <h5>
                Role: React II Developer
                </h5>
                <p>
                A web app that recommends best-matched cannabis strains to users looking to move away from their dependency on pharmaceuticals
                </p>

                <div>
                <div className="bullets">
                <p className="bulletpoints">
                • Supervised and assigned daily actionable items to 2 junior devs
                </p>
                <p className="bulletpoints">
                • Collaborated with a remote, international, cross-functional team of 5 developers and 4 data scientists
                </p>
                <p className="bulletpoints">
                • Released presentation-ready website in 1 week
                </p>
                </div>
                <div className="github">
                    <a href="https://github.com/med-cabinet-5" target="blank">
                    <GitHub src={github} alt="github logo" />
                    </a>
                </div>
                </div>

                <p>
                <a href="https://www.mikioharman.com/2020-02-07-budAPI/" target="blank">
                Blog about the project by data scientist Mikio Harman
                </a>
                </p>

            </ProjectCard>
            </AccordionDetails>
            </Accordion>

            </ProjectCardContainer>
        </SkillsContainer>
    )
}

export default Projects