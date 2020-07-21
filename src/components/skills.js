import React from 'react';

import { SkillsCard, SkillsContainer, SkillsContentContainer, SkillsImgContainer } from '../styles/index';

import css from '../assets/icons/skills/css.png';
import html from '../assets/icons/skills/html-5.png';
import js from '../assets/icons/skills/js.png';
import react from '../assets/icons/skills/react.png';
import python from '../assets/icons/skills/python.png';
import slack from '../assets/icons/skills/slack.png';
import zoom from '../assets/icons/skills/zoom.png';
import word from '../assets/icons/skills/word.png';
import excel from '../assets/icons/skills/excel.png';
import outlook from '../assets/icons/skills/outlook.png';
import pp from '../assets/icons/skills/powerpoint.png';
import office from '../assets/icons/skills/office-365.png';
import drive from '../assets/icons/skills/google-drive.png';
import analytics from '../assets/icons/skills/analytics.png';
import xd from '../assets/icons/skills/xd.png';
import cc from '../assets/icons/skills/cc.png';
import photoshop from '../assets/icons/skills/photoshop.png';
import postgres from '../assets/icons/skills/postgresql.png';
import database from '../assets/icons/skills/database.png';

function Skills(){
    return(
        <SkillsContainer>
            <h2>
                Skills
            </h2>
            <SkillsContentContainer>
            <SkillsCard>
                <h3>Remote Work</h3>
                <SkillsImgContainer>
                    <img src={slack} alt="slack logo"/>
                    <img src={zoom} alt="zoom logo"/>
                </SkillsImgContainer>
            </SkillsCard>

            <SkillsCard>
                <h3>HTML & CSS</h3>
                <SkillsImgContainer>
                <img src={html} alt="html logo" />
                <img src={css} alt="css logo"/>
                </SkillsImgContainer>
            </SkillsCard>

            <SkillsCard>
                <h3>Javascript</h3>
                <SkillsImgContainer>
                <img src={js} alt="javascript logo" />
                </SkillsImgContainer>
            </SkillsCard>
            
            <SkillsCard>
                <h3>Google Services</h3>
                <SkillsImgContainer>
                <img src={drive} alt="google drive logo" />
                <img src={analytics} alt="analytics logo"/>
                </SkillsImgContainer>
            </SkillsCard>
            
            <SkillsCard>
                <h3>React</h3>
                <SkillsImgContainer>
                <img src={react} alt="react logo" />
                </SkillsImgContainer>
            </SkillsCard>

            <SkillsCard>
                <h3>Database Management</h3>
                <SkillsImgContainer>
                    <img src={postgres} alt="postgresql logo"/>
                    <img src={database} alt="zoom logo"/>
                </SkillsImgContainer>
            </SkillsCard>

            <SkillsCard>
                <h3>Python</h3>
                <SkillsImgContainer>
                    <img src={python} alt="python logo"/>
                </SkillsImgContainer>
            </SkillsCard>

            <SkillsCard>
                <h3>Microsoft Office Suite</h3>
                <SkillsImgContainer>
                    <img src={office} alt="office 365 logo"/>
                    <img src={word} alt="word logo"/>
                    <img src={excel} alt="excel logo"/>
                    <img src={pp} alt="powerpoint logo"/>
                    <img src={outlook} alt="outlook logo"/>
                </SkillsImgContainer>
            </SkillsCard>

            <SkillsCard>
                <h3>Adobe Suite</h3>
                <SkillsImgContainer>
                    <img src={cc} alt="creative cloud logo"/>
                    <img src={photoshop} alt="photoshop logo"/>
                    <img src={xd} alt="xd logo"/>
                </SkillsImgContainer>
            </SkillsCard>

            </SkillsContentContainer>
        </SkillsContainer>
    )
}

export default Skills