import styled from 'styled-components'
import hero from '../assets/hero.jpg'

export const AppContainer = styled.div`
width: 100%;
height: 100vh;
background-color: #272C33;
`

export const Nav = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .home-mobile {
        display: none;
    }

    .home {
        width: 500px;
        
        @media(max-width: 1100px) {
            width: 350px;
            
        }
    }

    @media(max-width: 950px) {
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin-bottom: 1rem;

        .home {
            display: none;
        }

        .home-mobile{
            display: flex;
            justify-content: center;
            border: none;
            width: 100%;
            padding: 1.5 0 2.5rem 0;
        }
    }

    a {
        width: 20%;
        text-decoration: none;
        font-family: 'Permanent Marker', cursive;
        font-size: 2.1rem;
        letter-spacing: .3rem;
        color: #d9d9d9;
        
        :hover {
            color: #C0A887;
            font-weight: 700;
        }

        @media(max-width: 950px) { 
            padding: .4rem 0;
            letter-spacing: 1.15rem;
            justify-content: center;
            width: 100%;
        }

        @media(max-width: 500px) {
            width: 100%;
            border-bottom: solid 1px #d9d9d9;
            padding: .1rem 0;
            letter-spacing: .9rem;
        }
    }
`

export const Gif = styled.img`
    height: 250px;
    width: 500px;

    @media(max-width: 1700px) {
        height: 200px;
        width: 400px;
    }

    @media(max-width: 1000px) {
        height: 150px;
        width: 300px;
    }
`

export const HeroContainer = styled.div`
    background-image: url("${hero}");
    background-color: #7aa4c6;
    height: 70vh;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 700px){
        height: 60vh;
    }
}
`

export const Scroll = styled.img`
    width: 100px;
    opacity: 0.3;

    @media (max-width: 600px) {
        display: none;
    }
`

export const ScrollDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100px;
`

export const Contact = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    padding-top: 2rem;
    
    @media(max-width: 850px) {
        padding-top: .5rem;
        width: 100%;
    }

    div {
        font-family: 'Permanent Marker', cursive;
        font-size: 1.7rem;
        letter-spacing: .12rem;
        padding: .5rem 2rem;
        width: 100%;

        @media(max-width: 850px) {
            padding: .5rem 0;
            font-size: 1.5rem;
            letter-spacing: .1rem;
        }

        @media(max-width: 600px) {
            font-size: 1.2rem;
            letter-spacing: .13rem
        }
    }

    a {
        display: flex;
        flex-direction: row;
        align-items: center;
        text-decoration: none;
        color: #272C33;

        :hover {
            color: #D5D5D5;
            font-weight: 800;
        }
    }

    p {
        display: flex;
        flex-direction: row; 
        align-items: center;
        margin: 0;
        color: #272C33;
    }
    
    img {
        margin: 0 1rem ;
        
        @media(max-width: 700px) {
            margin: 0 .5rem;
        }
    }
`

export const Medium = styled.img`
    position: relative;
    width: 450px;
    height: 450px;
    border-radius: 300px;
    margin: 0 auto;

    @media(max-width: 900px) {
        width: 300px;
        height: 300px;
        margin: 1rem 0 3.5rem;
    }
`

export const AboutMe = styled.div`
    width: 100%;
    background-color: #d9d9d9;

    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        @media(max-width: 900px){
            flex-direction: column;
        }

    .content {
        display: flex;
        flex-direction: column;
        padding: 1rem 0;
        width: 60%;
        letter-spacing: .12rem;

        @media(max-width: 1000px ){
            width: 100%;
            letter-spacing: .09rem;
        }

        p {
            font-family: 'Permanent Marker', cursive;
            font-size: 1.6rem;
            padding: 0 2rem;
    
            @media(max-width: 600px) {
                font-size: 1.3rem;
                padding: 0 1.25rem;
            }
        }
    }
    }

    h3 {
        font-family: 'Bebas Neue', cursive;
        font-size: 4rem;
        letter-spacing: .7rem;
        margin: 0;
        padding: 1rem 0;
        width: 100%;
        background-color: #272c33;
        color: #d6d6d6;
    }
`

export const ProjectCardContainer = styled.div`
    padding: 0;
    margin: 0;

    p {
        font-family: 'Permanent Marker', cursive;
        font-size: 1.6rem;
        letter-spacing: .12rem;
        color: #292C34;
    }
`

export const ProjectCard = styled.div`
    background-color: #d9d9d9;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    h3 {
        font-family: 'Permanent Marker', cursive;
        font-size: .1rem;
        letter-spacing: .3rem;
        color: #292C34;
    }

    img.project {
        height: 200px;
        border-radius: 150px;
        margin: 1rem 0 2rem;
    }

    h4 {
        font-family: 'Bebas Neue', cursive;
        font-size: 2rem;
        letter-spacing: .2rem;
        color: #C0A887;
        padding: 0;
        margin: 0 0 .5rem 0;
        text-align: left;
        width: 90%;

        @media (max-width: 600px) {
            text-align: center;
        }
    }

    h5 {
        font-family: 'Bebas Neue', cursive;
        font-size: 1.8rem;
        letter-spacing: .2rem;
        text-align: left;
        width: 90%;
        padding: 0;
        margin: .5rem 0 0;
    }


    .bulletpoints {
        font-family: 'Bebas Neue', cursive;
        text-align: left;
        font-size: 1.3rem;
        padding: 0 0 .5rem 0;
        margin: 0;
        width: 100%;
    }

    .github {
        width: 15%;
        display: flex;
        justify-content: flex-end;
    }

    .bullets {
        width: 85%;
        display: flex;
        flex-direction: column;
        margin: 0 0 1rem 0;
    }

    div {
        display: flex;
        flex-direction: row-reverse;
        width: 90%;
    }

    p {
        width: 90%;
        // margin: 1rem 0 1.5rem;
        text-align: center;
        padding: 0;
    }

    a {
        text-decoration: none;
        color: #292C34
    }
`

export const GitHub = styled.img`
    height: 35px;
` 

export const SkillsContentContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    background-color: #d9d9d9;
`

export const SkillsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 2.5rem;
    background-color: #272c33;

    h2 {
        font-family: 'Bebas Neue', cursive;
        font-size: 4.5rem;
        width: 90%;
        letter-spacing: .7rem;
        background-color: #272c33;
        color: #d6d6d6;
        text-align: left;
        margin: 0;
        margin-left: 2rem;
        padding: 0;
    }
`

export const SkillsImgContainer = styled.div`
    display: flex;
    width: 30%;
    justify-content: space-around;
    align-items: center;
    margin: .75rem 0 1rem 0;
    width: 75%;
`

export const SkillsCard = styled.div`
    width: 33%;
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    min-width: 240px;
    background-color: #d9d9d9;

    @media(max-width: 600px){
        width: 50%;
    }

    h3 {
        font-family: 'Permanent Marker', cursive;
        font-size: 2.1rem;
        letter-spacing: .3rem;
        color: #292C34;
        margin: .2rem 0;

        @media(max-width: 600px){
            font-size: 1.7rem;
            letter-spacing: .15rem;
        }
    }

    p {
        font-family: 'Permanent Marker', cursive;
        font-size: 1.2rem;
        letter-spacing: .15rem;
        color: #d9d9d9;
    }
`



