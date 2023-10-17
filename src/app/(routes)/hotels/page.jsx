"use client";
import React from "react";

import { motion, AnimatePresence } from "framer-motion";

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
        <HotelContent>
          <HotelImage>
            <Overlay>
              <OverlayContent>
                <span
                  className={HeadingFont.className}
                  style={{ fontSize: "70px" }}>
                  Hotels
                </span>

                <p className={TextFont.className} style={{ fontSize: "20px" }}>
                  ASARA WINE ESTATE & HOTEL
                </p>
              </OverlayContent>
            </Overlay>
          </HotelImage>
          <HotelText>
            <h2 className={HeadingFont.className}>WELCOME</h2>
            <p
              className={TextFont.className}
              style={{ width: "80%", lineHeight: "1.2" }}>
              We are excited to welcome you, our loved ones, to attend our
              special day and where our hearts first met, Cape Town, South
              Africa.
            </p>{" "}
            <p
              className={TextFont.className}
              style={{ width: "80%", lineHeight: "1.2" }}>
              From across the globe or down the road, we hope you can make the
              journey and help us in celebrating our new adventure as The
              Washington’s.
            </p>
          </HotelText>
        </HotelContent>
      </Container>
    </AnimatePresence>
  );
};

export default page;

const Container = styled.div`
  background-color: #e8e5e1;
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const Overlay = styled.div`
  background: rgba(255, 255, 255, 0.8);
  width: 50%;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  justify-content: center;
`;

const OverlayContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

const HotelContent = styled.div`
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 500px) {
    width: 100%;
    flex-direction: column;
  }
`;

const HotelImage = styled.div`
  width: 45%;
  background-image: url("/herocolor.jpg");
  height: 85vh;
  background-size: cover;
  position: relative;

  @media (max-width: 500px) {
    height: 50vh;
    width: 100%;
  }
`;

const HotelText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 55%;
  height: 100%;

  @media (max-width: 500px) {
    width: 100%;
  }
`;
