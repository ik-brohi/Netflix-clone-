import React from 'react';
import styled from 'styled-components';
import GrpImg from '../../images/Soul_Groupwatch.jpg';
const Groupwatch = () => {
    return (
        <>
            <Section>
                <Container>
                    <Content>
                        <h1 className="disney-titles">Virtual Movie Nights with</h1>
                        <h1 className="disney-titles">GroupWatch</h1>
                        <li>Watch togather, even when apart</li>
                        <li>Stream with up to 6 friends</li>
                        <li>Pause, rewind, react togather</li>
                        <li>Easy setup and Sharing</li>
                    </Content>
                </Container>
            </Section>
        </>
    );
};
const Section = styled.section`
    background: url(${GrpImg})center/cover no-repeat;
    height: 71vh;
    display: flex;
    align-items: center;
    flex-direction: column;

    @media screen and (min-width: 768px) and (max-width: 1200px){
        height: 61vh;
    }
    @media screen and (min-width: 280px) and (max-width: 767px){
        height: 55vh;
        object-fit: contain;
    }
`;
const Container = styled.div`
    width: 91%;
    margin: 0 auto;
    @media screen and (max-width: 991px){
        width: 85%;
    }
`;
const Content = styled.div`
    margin-top: 17vh;
    @media screen and (min-width: 280px) and (max-width: 1200px){
        margin-top: 13vh;
    }
    li{
        font-size: 1.5rem;
        @media screen and (min-width: 768px) and (max-width: 1200px){
            font-size: 1.2rem;
        }
        @media screen and (min-width: 375px) and (max-width: 767px){
            font-size: 1rem;
        }
        @media screen and (min-width: 280px) and (max-width: 375px){
            font-size: 0.7rem;
            font-weight: 400;
        }
    }
`;
export default Groupwatch;
