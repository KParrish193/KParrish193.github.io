import styled from 'styled-components'
import hero from '../assets/hero.jpg'


export const Nav = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .home-mobile {
        display: none;
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
            margin-bottom: 3rem;
        }
    }

    a {
        width: 25%;
        text-decoration: none;
        font-family: 'Permanent Marker', cursive;
        font-size: 2.1rem;
        letter-spacing: .5rem;
        color: #d9d9d9;

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

export const HeroContainer = styled.div`
    background-image: url("${hero}");
    background-color: #7aa4c6;
    height: 700px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
`

export const Gif = styled.img =styled.img`
    height: 500px;


    @media(max-width: 1100px) {
        height: 350px;
    }

    @media(max-width: 500px) {
        height: 250px;
    }
`

