import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Devices from '../../images/Devices.png';


const DownloadNow = () => {
    return (
        <>
            <Section>
                <Container>
                    <TextContent>
                        <h1 className="disney-titles">Stream Now or Download Now</h1>
                        <h1 className="disney-titles">Explore US More on Disney</h1>
                        <p>Strem on 4 Devices at Once or Download Your Favorites to Watch Later. With dozens of titles i stunning 4K UHD, you can watch the way you always wished.</p>
                        <NavLink to="" className="btn-theme-disney">Download Now</NavLink>
                    </TextContent>
                    <ImgContent>
                        <img src={Devices} alt={Devices} />
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
    flex-direction: row;

    @media screen and (max-width: 991px){
        flex-direction: column-reverse;
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
            height: 45vh;
            width: 100%;
            object-fit: contain;
        }
        @media screen and (min-width: 280px) and (max-width: 500px){
            height: 35vh;
            width: 100%;
            object-fit: contain;
        }
    }
`;
export default DownloadNow;
