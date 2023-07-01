import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import jugle from '../../images/jugle.jpg';

const Stream = () => {
    return (
        <>
            <Section>
                <Container>
                    <TextContent>
                        <h1 className="disney-titles">Stream with Premier Access the</h1>
                        <h1 className="disney-titles">same day it's in theaters</h1>
                        <p>Comming May 28. Get Premier Access to Cruella for $29.99 with a Disney+ subsciption, and watch as many times as you like before it's available to all Disney+ subscribers at a later date.</p>
                        <NavLink to="" className="btn-theme-disney">Preorder</NavLink>
                    </TextContent>
                    <ImgContent>
                        <img src={jugle} alt={jugle} />
                    </ImgContent>
                </Container>
            </Section>
        </>
    );
};
const Section = styled.section`
    position: relative;
    padding: 50px 5%;
    margin-bottom: 0;
    background: 0 0;
    color: #fff;

    @media screen and (max-width: 991px){
        padding: 35px 50px;
    }
    @media screen and (max-width: 767px){
        padding: 25px;
    }    
`;
const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row-reverse;

    @media screen and (max-width: 991px){
        flex-direction: column;
        justify-content: center;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-flow: column;
        text-align: center;
    }
`;
const TextContent = styled.div`
    width: 48%;
    flex: 0 1 auto;
    z-index: 3;
    @media screen and (max-width:991px){
        width: 100%;
        padding: 0;
        text-align: center;
    }
    /* h1{
        font-size: 2.5rem;
        font-weight: 500 !important;
        line-height: 2.5rem;
        @media screen and (min-width: 991px) and (max-width: 1200px){
            font-size: 2rem;
            line-height: 2rem;
        }
        @media screen and (min-width: 550px) and (max-width: 991px){
            font-size: 1.7rem;
            line-height: 1.8rem;
        }
        @media screen and (min-width: 375px) and (max-width: 550px){
            font-size: 1.5rem;
            line-height: 1.7rem;
        }
        @media screen and (min-width: 280px) and (max-width: 375px){
            font-size: 1.2rem;
            line-height: 1.3rem;
        }
    } */
    p{
        color: #eee !important;
        font-size: 1rem;
        @media screen and (min-width: 375px) and (max-width: 550px){
            font-size: 0.85rem;
            line-height: 1rem;
        }
        @media screen and (min-width: 280px) and (max-width: 375px){
            font-size: 0.7rem;
            line-height: 1rem;
            margin-top: 1vh;
        }
    }    
`;
const ImgContent = styled.div`
    width: 48%;
    flex: 0 1 auto;
    @media screen and (max-width: 991px){
        width: 100%;
        margin-top: 1em;
        max-width: 600px;
    }
    img{
        width: 100%;
        height: auto;
        max-width: 600px;
        z-index: 1500;
        @media screen and (min-width: 500px) and (max-width: 1200px){
            height: auto;
            width: 100%;
            object-fit: contain;
        }
        @media screen and (min-width: 280px) and (max-width: 500px){
            height: 27vh;
            width: 100%;
            object-fit: contain;
        }
    }
`;
export default Stream;
