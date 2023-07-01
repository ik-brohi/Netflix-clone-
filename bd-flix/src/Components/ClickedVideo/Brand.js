import React from 'react';
import styled from 'styled-components';
import img1 from "../../Images/viewers-disney.png";
import img2 from "../../Images/viewers-pixar.png";
import img3 from "../../Images/viewers-marvel.png";
import img4 from "../../Images/viewers-starwars.png";
import img5 from "../../Images/viewers-national.png";
import img6 from "../../Images/DSNY_STAR_LOGO_LIGHT_RGB.png";
import videoBrand1 from "../../videos/1564674844-disney.mp4";
import videoBrand2 from "../../videos/1564676714-pixar.mp4";
import videoBrand3 from "../../videos/1564676115-marvel.mp4";
import videoBrand4 from "../../videos/1608229455-star-wars.mp4";
import videoBrand5 from "../../videos/1564676296-national-geographic.mp4";
import videoBrand6 from "../../videos/star_on_disney2021.mp4";

const Brand = () => {
    return (
        <>
            <Container>
                <Wrap>
                    <img src={img1} alt={img1} />
                    <video autoPlay={true} loop={true} playsInline={true} muted={true}><source src={videoBrand1} type="video/mp4" /></video>
                </Wrap>
                <Wrap>
                    <img src={img2} alt={img2} />
                    <video autoPlay={true} loop={true} playsInline={true} muted={true}><source src={videoBrand2} type="video/mp4" /></video>
                </Wrap>
                <Wrap>
                    <img src={img3} alt={img3} />
                    <video autoPlay={true} loop={true} playsInline={true} muted={true}><source src={videoBrand3} type="video/mp4" /></video>
                </Wrap>
                <Wrap>
                    <img src={img4} alt={img4} />
                    <video autoPlay={true} loop={true} playsInline={true} muted={true}><source src={videoBrand4} type="video/mp4" /></video>
                </Wrap>
                <Wrap>
                    <img src={img5} alt={img5} />
                    <video autoPlay={true} loop={true} playsInline={true} muted={true}><source src={videoBrand5} type="video/mp4" /></video>
                </Wrap>
                <Wrap>
                    <img src={img6} alt={img6} />
                    <video autoPlay={true} loop={true} playsInline={true} muted={true}><source src={videoBrand6} type="video/mp4" /></video>
                </Wrap>
            </Container>
        </>
    )
}
const Container = styled.div`
    margin-top: 30px;
    padding: 30px 0px 26px;
    display: grid;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    @media screen and (min-width: 768px) and (max-width: 1200px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
        grid-gap: 15px;
        gap: 15px;
    }
    @media screen and (max-width: 767px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        grid-gap: 11px;
        gap: 11px;
    }
`;

const Wrap = styled.div`
    padding-top: 56.25%;
    border-radius: 10px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    border: 3px solid rgba(249, 249, 249, 0.1);
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;

    img {
        inset: 0px;
        display: block;
        height: 100%;
        object-fit: cover;
        opacity: 1;
        position: absolute;
        transition: opacity 500ms ease-in-out 0s;
        width: 100%;
        z-index: 1;
        top: 0;
        border-radius: 10px;
    }

    video {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        opacity: 0;
        z-index: 0;
        border-radius: 10px;
    }

    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
            rgb(0 0 0 / 72%) 0px 30px 22px -10px;

        transform: scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);

        video {
            opacity: 1;
        }
    }
`;
export default Brand;