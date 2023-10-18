"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import React from "react";
import Navbar from "@/app/_components/Navbar";
import styled from "styled-components";

import {
  HeadingFont,
  TextFont,
  Epika,
  EpikaLight,
  EpikaMedium,
  EpikaBold,
} from "../../fonts/font";

const page = () => {
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

      <Navbar />
      <Container>
        <Arrow>
          <Link href={"/faq"}>
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
        </Arrow>

        <TextContainer>
          <Olive src='/oliveshadow.png' />
          <Circle>
            <For className={HeadingFont.className}>For Denzil & Marliana</For>
          </Circle>
          <Text>
            <Honey className={HeadingFont.className}>Honeyfund</Honey>
            <ThankyouText className={TextFont.className}>
              We're so thankful that our friends and family are traveling to
              celebrate with us. Your presences on our big day in itself is a
              gift! However, should you want to spoil us, we’d love to have it
              be as a contribution to an experience that we’ll remember forever,
              our dream honeymoon!
            </ThankyouText>

            <ThankyouText className={TextFont.className}>
              Should you wish to contribute, you’re welcome to do so by using
              the following details:
            </ThankyouText>

            <ThankyouText className={TextFont.className}>
              EFT: DENZIL WASHINGTON{" "}
            </ThankyouText>

            <ThankyouText className={TextFont.className}>
              (pending)
            </ThankyouText>
          </Text>
        </TextContainer>
        <BackgroundImage />
      </Container>
    </AnimatePresence>
  );
};

export default page;

const Container = styled.div`
  position: relative;
  display: flex;
  height: 85vh;
  background-color: #e8e5e1;
  width: 100vw;
  justify-content: space-between;

  @media (max-width: 500px) {
    flex-direction: column;
  }

  @media (min-width: 1600px) {
    height: 90vh;
  }
`;

const Olive = styled.img`
  position: absolute;
  right: 0;
  bottom: 20px;
  width: 400px;
  height: 400px;

  @media (max-width: 500px) {
    display: none;
  }
`;
const TextContainer = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

const Text = styled.div`
  width: 80%;
  height: 85%;
  display: flex;
  flex-direction: column;

  @media (max-width: 500px) {
    width: 100%;
    text-align: center;
    align-items: center;
  }
`;

const BackgroundImage = styled.div`
  height: 100%;
  width: 50vw;
  background-image: url("./giftsbg.jpg");
  background-size: cover;
  background-position: top;

  @media (max-width: 500px) {
    width: 100vw;
    margin-top: 30px;
  }
`;

const Circle = styled.div`
  background-color: #865636;
  width: 80px;
  height: 80px;
  padding: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 230px;
  bottom: 120px;
  color: white;

  @media (max-width: 500px) {
    display: none;
  }
`;

const For = styled.span`
  font-size: 13px;
  font-weight: 500;
`;

const Honey = styled.span`
  font-size: 55px;
  font-weight: 500;
`;

const ThankyouText = styled.div`
  width: 70%;
  margin: 15px 0;
  font-weight: 500;

  @media (max-width: 500px) {
    width: 80%;
    font-size: 11px;
  }
`;

const Arrow = styled.div`
  position: fixed;
  bottom: 0px;
  right: 48px;
  display: none;
  z-index: 3;

  @media (max-width: 500px) {
    display: block;
  }
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
