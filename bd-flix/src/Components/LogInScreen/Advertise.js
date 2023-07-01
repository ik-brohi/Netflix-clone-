import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import disneybundle from '../../images/cta-logo-one.svg';

const Advertise = () => {
    return (
        <>
            <Section>
                <Container>
                    <ImgContent>
                        <img src={disneybundle} alt={disneybundle} />
                    </ImgContent>
                    <TextContent>
                        <p>Get The BD-FLIX Bundle to Stream the best movies, shows, and sports with BD-FLIX, HULU and ESPN+. Term Apply</p>
                        <NavLink to="" className="btn-theme-disney">GET THIS BD-FLIX BUNDLE</NavLink>
                    </TextContent>
                </Container>
            </Section>
        </>
    );
};
const Section = styled.section`
    position: relative;
    padding: 35px 5%;
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
    flex-direction: row;
    border: 1px solid #f9f9f9;
    padding: 35px 5%;
    @media screen and (max-width: 991px){
        padding: 25px 35px;
        flex-direction: column;
        justify-content: center;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-flow: column;
        text-align: center;
    }
    @media screen and (max-width: 767px){
        padding: 25px 15px;
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
            height: auto;
            width: 95%;
            object-fit: contain;
        }
    }
`;
export default Advertise;
