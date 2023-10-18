import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled, { keyframes } from "styled-components";
import Link from "next/link";
import {
  HeadingFont,
  TextFont,
  Epika,
  EpikaLight,
  EpikaMedium,
  EpikaBold,
} from "../fonts/font";
import { AiFillRightCircle } from "react-icons/ai";
const images = ["./hero.jpg", "./hero2.jpg"];
export const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 10000);

    return () => clearInterval(intervalId);
  }, []); // Add interval as a dependency to useEffect
  return (
    <AnimatePresence mode='wait'>
      <motion.div
        className='slide-in'
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}></motion.div>
      <motion.div
        className='slide-out'
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}></motion.div>

      <Container>
        <BackGroundImage
          style={{ backgroundImage: `url(${images[currentImage]})` }}
        />
        <LogoContainer>
          <img
            src='/LogoWhite.png'
            width={300}
            height={200}
            style={{ zIndex: 2 }}
          />
        </LogoContainer>
        <Overlay></Overlay>
        <HeroTextContainer>
          <FirstLine className={TextFont.className}>
            WE’RE GETTING MARRIED
          </FirstLine>
          <SecondLine className={Epika.className}>DENZIL & MARLIANA</SecondLine>
          <ThirdLine className={TextFont.className}>MARCH 16, 2024</ThirdLine>
        </HeroTextContainer>
        <Link href={"/about"}>
          <IconContainer>
            <svg
              width='100%'
              height='20px'
              viewBox='0 0 56 87'
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'>
              <g>
                <line
                  transform='rotate(101.38104248046875 27.750000000000004,63.24999999999999) '
                  stroke='#fff'
                  stroke-linecap='undefined'
                  stroke-linejoin='undefined'
                  id='svg_4'
                  y2='83.75'
                  x2='53.75'
                  y1='42.75'
                  x1='1.75'
                  stroke-width='5'
                  fill='none'></line>
                <line
                  stroke-linecap='undefined'
                  stroke-linejoin='undefined'
                  id='svg_5'
                  y2='41.75'
                  x2='52.75'
                  y1='0.75'
                  x1='0.75'
                  stroke-width='5'
                  stroke='#fff'
                  fill='none'></line>
              </g>
            </svg>
          </IconContainer>
        </Link>
      </Container>
    </AnimatePresence>
  );
};

export default Hero;

const breatheAnimation = keyframes`
  0%   { transform: scale(1); }
  50% { transform: scale(1.5);  }
  100% { transform: scale(1);  }`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;
const BackGroundImage = styled.div`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  animation-name: ${breatheAnimation};
  transition: background-image 1s ease-in-out;
  animation-duration: 21s;
  animation-iteration-count: infinite;
  position: absolute;
  width: 100vw;
  height: 100vh;
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.6;
  z-index: 1;
  left: 0;
  top: 0;
`;

const LogoContainer = styled.div`
  width: 100%;
  height: 20%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.div`
  background-image: url("./logo.png");
  width: 100px;
  height: 50px;
  background-size: cover;

  z-index: 2;
`;

const HeroTextContainer = styled.div`
  display: flex;
  z-index: 2;
  flex-direction: column;
  gap: 10px;
  color: white;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`;

const IconContainer = styled.div`
  width: 40px;
  height: 40px;
  padding: 3px;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  bottom: 35px;
  transform: translateX(-50%);
  background-color: #8a5636;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 3;
  transition: all 0.3s;
  &:hover {
    border: 1px solid white;
  }

  @media (max-width: 500px) {
    bottom: 100px;
  }
`;

const FirstLine = styled.span`
  font-size: 30px;

  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

const SecondLine = styled.span`
  font-size: 50px;

  @media (max-width: 500px) {
    font-size: 35px;
  }
`;

const ThirdLine = styled.span`
  font-size: 20px;
`;
