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
                <img src={html} />
                </SkillsImgContainer>
                <div className="text">
                <p>HTML</p>
                </div>
            </SkillsCard>
            
            <SkillsCard>
                <h3>CSS</h3>
                <SkillsImgContainer>
                <img src={css} />
                </SkillsImgContainer>
                <div className="text">
                <p>HTML</p>
                </div>
            </SkillsCard>
            
            <SkillsCard>
                <h3>Javascript</h3>
                <SkillsImgContainer>
                <img src={js} />
                </SkillsImgContainer>
                <div className="text">
                <p>HTML</p>
                </div>
            </SkillsCard>
            
            <SkillsCard>
                <h3>React</h3>
                <SkillsImgContainer>
                <img src={react} />
                </SkillsImgContainer>
                <div className="text">
                <p>HTML</p>
                </div>
            </SkillsCard>

            <SkillsCard>
                <h3>Python</h3>
                <SkillsImgContainer>
                    <img src={python} />
                </SkillsImgContainer>
                <div className="text">
                <p>HTML</p>
                </div>
            </SkillsCard>

            <SkillsCard>
                <h3>Remote Work</h3>
                <SkillsImgContainer>
                    <img src={slack} />
                    <img src={zoom} />
                </SkillsImgContainer>
                <div className="text">
                <p>lorem loremlorem</p>
                </div>
            </SkillsCard>
        </SkillsContainer>
    )
}

export default Skills