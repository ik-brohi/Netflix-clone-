import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import logo1 from '../../images/cta-logo-one.svg';
import logo2 from '../../images/cta-logo-two.png';
const Banner = () => {
    return (
        <>
            <Main>
                <Container>
                    <Content>
                        <img src={logo1} alt="Logo/img" />
                        <h1 className='text-center font-bold text-4xl font-[Tourney] mb-3 text-green-500'>BD-FLIX</h1>
                        <NavLink to='/login' className="get-bundle">Get The BD-FLIX Bundle</NavLink>
                        <h4>Stream now: <NavLink to="">Terms Apply</NavLink></h4>
                        <img src={logo2} alt="Logo/img" />
                        <NavLink to="" className="singup-btn">Sign Up for BD-FLIX Only</NavLink>
                        <NavLink to="" className="singup-btn text-muted">$7.99/month or $79.99/year.</NavLink>
                    </Content>
                </Container>
            </Main>
        </>
    );
};
const Main = styled.main`
    background: url("https://disney-clone-d1e27.web.app/images/login-background.jpg")center/cover no-repeat;
    height: 95vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    @media screen and (min-width: 768px) and (max-width: 1200px){
        height: 85vh;
    }
    @media screen and (min-width: 280px) and (max-width: 767px){
        height: 75vh;
    }
`;
const Container = styled.div`
    width: 85%;
    margin: 0 auto;
`;
const Content = styled.div`
    width: 100%;
    display: flex;
    margin: 0 auto;
    max-width: 650px;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    @media screen and (min-width: 768px) and (max-width: 1200px){
        max-width: 550px;
    }
    @media screen and (min-width: 550px) and (max-width: 767px){
        max-width: 450px;
        margin-top: 13vh;
    }
    @media screen and (min-width: 375px) and (max-width: 550px){
        max-width: 350px;
        margin-top: 13vh;
    }
    @media screen and (min-width: 280px) and (max-width: 375px){
        max-width: auto;
        margin-top: 13vh;
    }
    img{
        width: 100%;
        height: auto;
        display: block;
        max-width: 600px;
        object-fit: contain;
        margin-bottom: 12px;
    }
    h4{
        margin: 1vh 0 2vh 0;
    }
    > .get-bundle{
        width: 100%;
        color: #f9f9f9;
        font-size: 18px;
        font-weight: 100;
        padding: 11.5px 0;
        text-align: center;
        border-radius: 4px;
        margin-bottom: 12px;
        letter-spacing: 1.5px;
        background-color: #0063e5;
        text-transform: uppercase;
        border: 1px solid transparent;
        @media screen and (min-width: 550px) and (max-width: 1200px){
            padding: 10px 0;
            font-size: 15px;
        }
        @media screen and (min-width: 280px) and (max-width: 550px){
            padding: 5px 0;
            font-size: 14px;
        }
        &:hover {
            background-color: #0483ee;
        }
    }
    > .singup-btn{
        font-size: 19px;
        @media screen and (min-width: 280px) and (max-width: 550px){
            font-size: 15px;
        }
    }
    > .text-muted{
        color: gray;    
    }
`;

export default Banner;
