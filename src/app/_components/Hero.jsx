import React from "react";
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

export const Hero = () => {
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
        <LogoContainer>
          <img
            src='/logoWhite.png'
            width={300}
            height={200}
            style={{ zIndex: 2 }}
          />
        </LogoContainer>
        <Overlay></Overlay>
        <HeroTextContainer>
          <span className={TextFont.className} style={{ fontSize: "30px" }}>
            WE’RE GETTING MARRIED
          </span>
          <span className={Epika.className} style={{ fontSize: "50px" }}>
            DENZIL & MARLIANA
          </span>
          <span className={TextFont.className} style={{ fontSize: "20px" }}>
            MARCH 16, 2024
          </span>
        </HeroTextContainer>
        <IconContainer>
          <Link href={"/about"}>
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
          </Link>
        </IconContainer>
      </Container>
    </AnimatePresence>
  );
};

export default Hero;

const breatheAnimation = keyframes`
  0%   { background-size: 100% auto; }
  50% { background-size: 140% auto; }
  100% { background-size: 100% auto; }`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-image: url("./hero.jpg");
  background-position: center;
  background-size: cover;
  animation-name: ${breatheAnimation};
  animation-duration: 30s;
  animation-iteration-count: infinite;
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
`;