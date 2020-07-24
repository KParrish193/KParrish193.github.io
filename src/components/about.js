import React from 'react'

import github from '../assets/icons/contact/github.png'
import phone from '../assets/icons/contact/call.png'
import mail from '../assets/icons/contact/mail.png'
import linkedin from '../assets/icons/contact/linkedin.png'

import scroll from '../assets/scroll.gif'
import medium from '../assets/medium.jpg'

import { HeroContainer, GitHub, Contact, AboutMe, Medium, Scroll, ScrollDiv } from '../styles/index' 

function Landing() {
    return (
        <div>
        
        <HeroContainer>
            <Contact>
                <div>
                <a href="https://github.com/KParrish193" target="blank">
                <GitHub src={github} alt="github logo"/>
                github.com/KParrish193
                </a>
                </div>
                
                <div>
                <a href="https://www.linkedin.com/in/parrishkristin/" target="blank">
                <GitHub src={linkedin} alt="github logo"/>
                linkedin.com/in/parrishkristin
                </a>
                </div>
                
                <div>
                <p>
                    <GitHub src={phone} alt="phone icon"/>
                    +1 208 440 2631
                </p>
                </div>
                
                <div>
                <a href="mailto:k.parrish193@gmail.com">
                <GitHub src={mail} alt="mail icon"/>
                K.Parrish193@gmail.com
                </a>
                </div>
            </Contact>
            <ScrollDiv>
                <Scroll src={scroll} alt='animated arrows pointing down to scroll'/>
            </ScrollDiv>
        </HeroContainer>
        <AboutMe>
            <h3>
                Hello there!
            </h3>
            <div>
                <div className="content">
                <p>
                I am a highly design-oriented  Fullstack Web Developer (HTML, CSS, JavaScript, React, NodeJS) currently seeking new opportunities in the western United States. 
                I recently completed the Full Stack Web curriculum at Lambda School, and have a Bachelor's degree in Marketing with a Chemistry minor.
                </p>
                <p>
                Emphasizing positive user experiences in front-end web design is where I do my best work. I don't believe an app or website should be considered "done" until all users can have a great experience with it.
                Other experience includes a demonstrated history of customer service, attention to detail, and teamwork, working in the retail industry.
                </p>
                <p>
                When I'm not coding aesthetically pleasing and design forward front-ends, I can be found mountain biking through the Uintas, climbing at the rock wall, on a calm lake paddleboarding with my pitbull, Tallahassee, cuddling my two cats, or hip-checking friends and foes with Wasatch Roller Derby in Salt Lake City, Utah.
                </p>
                </div>
                <Medium src={medium} alt="photo of smiling person in a hat"/>
            </div>
        </AboutMe>
        </div>
    )

}


export default Landing