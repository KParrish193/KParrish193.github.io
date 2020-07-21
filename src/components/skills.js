import React from 'react';

import { SkillsCard, SkillsContainer, SkillsImgContainer } from '../styles/index';

import css from '../assets/icons/skills/css.png'
import html from '../assets/icons/skills/html-5.png'
import js from '../assets/icons/skills/js.png'
import react from '../assets/icons/skills/react.png'
import python from '../assets/icons/skills/python.png'
import slack from '../assets/icons/skills/slack.png'
import zoom from '../assets/icons/skills/zoom.png'

function Skills(){
    return(
        <SkillsContainer>
            <SkillsCard>
                <h3>HTML</h3>
                <SkillsImgContainer>
                <img src={html} alt="html logo" />
                </SkillsImgContainer>
                <div className="text">
                <p>HTML</p>
                </div>
            </SkillsCard>
            
            <SkillsCard>
                <h3>CSS</h3>
                <SkillsImgContainer>
                <img src={css} alt="css logo"/>
                </SkillsImgContainer>
                <div className="text">
                <p>HTML</p>
                </div>
            </SkillsCard>
            
            <SkillsCard>
                <h3>Javascript</h3>
                <SkillsImgContainer>
                <img src={js} alt="javascript logo" />
                </SkillsImgContainer>
                <div className="text">
                <p>HTML</p>
                </div>
            </SkillsCard>
            
            <SkillsCard>
                <h3>React</h3>
                <SkillsImgContainer>
                <img src={react} alt="react logo" />
                </SkillsImgContainer>
                <div className="text">
                <p>HTML</p>
                </div>
            </SkillsCard>

            <SkillsCard>
                <h3>Python</h3>
                <SkillsImgContainer>
                    <img src={python} alt="python logo"/>
                </SkillsImgContainer>
                <div className="text">
                <p>HTML</p>
                </div>
            </SkillsCard>

            <SkillsCard>
                <h3>Remote Work</h3>
                <SkillsImgContainer>
                    <img src={slack} alt="slack logo"/>
                    <img src={zoom} alt="zoom logo"/>
                </SkillsImgContainer>
                <div className="text">
                <p>lorem lorem lorem</p>
                </div>
            </SkillsCard>
        </SkillsContainer>
    )
}

export default Skills