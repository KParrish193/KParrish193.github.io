import styled from 'styled-components'
import hero from '../assets/hero.jpg'
import cheese from '../assets/cheese.png'

export const Nav = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    // background-image: url("${cheese}");
    // background-color: #292c34;
    // height: 389px;
    // background-position: center;
    // background-repeat: no-repeat;
    // background-size: cover;
    // position: relative;

    .home-mobile {
        display: none;

        @media(max-width: 500px){
            border-bottom: 1px solid #d9d9d9;
        }
    }

    .home {
        width: 500px;
        border-left: none;
        border-right: none;

        @media(max-width: 1100px) {
            width: 350px;
        }
    }

    .left {
        border-right: #d9d9d9 solid 1px;
        
        @media(max-width: 1100px) {
            border-left: none;
            border-right: none;
        }  
    }

    .right {
        border-left: #d9d9d9 solid 1px;

        @media(max-width: 1100px) {
            border-left: none;
            border-right: none;
        }
    }

    @media(max-width: 950px) {
        flex-direction: column;
        align-items: center;
        width: 100%;

        .home {
            display: none;
        }

        .home-mobile{
            display: flex;
            justify-content: center;
            border: none;
            width: 100%;
            padding-bottom: 2.5rem;
            padding-top: 1.5rem;
        }
    }

    a {
        width: 20%;
        text-decoration: none;
        font-family: 'Permanent Marker', cursive;
        font-size: 2.1rem;
        letter-spacing: .3rem;
        color: #d9d9d9;

        :active {
            fontWeight: "bold",
            color: "#FA8B37",
            display: "none",
        }
        
        :hover {
            color: #fdc942;
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
            letter-spacing: 1.25rem;
        }
    }
`

export const Gif = styled.img =styled.img`
    height: 400px;

    @media(max-width: 1100px) {
        height: 350px;
    }

    @media(max-width: 500px) {
        height: 250px;
    }
`

export const HeroContainer = styled.div`
    background-image: url("${hero}");
    background-color: #7aa4c6;
    height: 700px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
`

export const ProjectCard = styled.div`
    border: solid 1px black;

    h3 {
        font-family: 'Permanent Marker', cursive;
        font-size: 2.1rem;
        letter-spacing: .3rem;
        color: #292C34;
    }

    img {
        height: 200px;
        border-radius: 150px;
    }
`

export const SkillsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 2.5rem;
`

export const SkillsImgContainer = styled.div`
    display: flex;
    width: 30%;
    justify-content: space-around;
    align-items: center;
    padding: .75rem 0 1rem 0;
`

export const SkillsCard = styled.div`
    border: black solid 1px;
    width: 45%;
    height: 350px;
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    div.text {
        border: orange 2px solid;
        background-color: #292C34;
        width: 100%;
    }


    h3 {
        font-family: 'Permanent Marker', cursive;
        font-size: 2.1rem;
        letter-spacing: .3rem;
        color: #292C34;
        margin: .2rem 0;
    }

    p {
        font-family: 'Permanent Marker', cursive;
        font-size: 1.5rem;
        letter-spacing: .15rem;
        color: #d9d9d9;
    }
`



