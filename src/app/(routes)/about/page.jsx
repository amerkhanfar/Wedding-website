"use client";

import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";
import Link from "next/link";
import React from "react";
import Navbar from "@/app/_components/Navbar";
import Welcome from "@/app/_components/Welcome";
import Info from "@/app/_components/Info";

const page = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Arrow>
        <Link href={"/rsvp"}>
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
        <AboutContent>
          <Welcome />
          <Info />
        </AboutContent>
      </AnimatePresence>
    </div>
  );
};

export default page;

const Arrow = styled.div`
  position: fixed;
  bottom: -88px;
  right: 48px;
  display: none;
  z-index: 1000;

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

  @media (max-width: 500px) {
    bottom: 100px;
  }
`;

const AboutContent = styled.div`
  display: flex;
  gap: 20vh;
  flex-direction: column;
  background-color: #e8e5e1;

  @media (max-width: 500px) {
    gap: 5vh;
  }
`;
