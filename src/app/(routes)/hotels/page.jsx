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
        <BlackOverlay />
        <HotelContent>
          <HotelImage>
            <Overlay>
              <Black />
              <OverlayContent>
                <span
                  className={HeadingFont.className}
                  style={{ fontSize: "70px", marginTop: "10px" }}>
                  Hotels
                </span>

                <p className={TextFont.className} style={{ fontSize: "20px" }}>
                  ASARA WINE ESTATE & HOTEL
                </p>

                <p className={TextFont.className}>
                  Polkadraai Rd, Stellenbosch, 7600, Cape Town, South Africa
                </p>
              </OverlayContent>
            </Overlay>
          </HotelImage>
          <HotelTextContainer>
            <HotelText className={TextFont.className}>
              <h4 style={{ marginTop: "50px" }}>WEDDING VENUE</h4>
              <h5>Best Seat in The House</h5>
              <div style={{ lineHeight: "1.8", fontSize: "13px" }}>
                To ensure that you can all enjoy the evening with us, we have
                blocked rooms at the hotel for “the Washington Wedding” on the
                night off, should you wish for a short walk back to bed after
                the festivities and that hangover breakfast the next morning.
                Arrangements and costs are for your own expense and on a
                first-come-first-serve basis.
              </div>

              <div
                style={{
                  lineHeight: "1.8",
                  fontSize: "13px",
                  marginTop: "20px",
                  marginBottom: "10px",
                }}>
                If you wish to book at the venue, please use the below details:
              </div>

              <Contact>
                <img src='/person.png' alt='' width={40} height={40} />
                <span
                  style={{
                    fontSize: "13px",
                  }}>
                  Pending
                </span>
              </Contact>
              <Contact>
                <img src='/phone.png' alt='' width={40} height={40} />
                <span
                  style={{
                    fontSize: "13px",
                  }}>
                  Pending
                </span>
              </Contact>
              <Contact>
                <img src='/envelope.png' alt='' width={40} height={40} />
                <span
                  style={{
                    fontSize: "13px",
                  }}>
                  Pending
                </span>
              </Contact>
              <Contact>
                <img src='/hashtag.png' alt='' width={40} height={40} />
                <span
                  style={{
                    fontSize: "13px",
                  }}>
                  Guest of the Washington Wedding ‘24
                </span>
              </Contact>

              <div
                style={{
                  fontSize: "13px",
                  marginTop: "10px",
                }}>
                Should the Hotel be fully booked and or looking for other
                options please see below.
              </div>
            </HotelText>
          </HotelTextContainer>
        </HotelContent>
      </Container>
    </AnimatePresence>
  );
};

export default page;

const Container = styled.div`
  background-color: #e8e5e1;
  position: relative;
  width: 100vw;
  height: 77vh;
  display: flex;
  justify-content: center;
  background-image: url("/hotelbg.jpeg");
  background-size: cover;
  background-position: center;
  @media (max-width: 500px) {
    background-image: none;
  }
`;

const Black = styled.div`
  display: none;
  background-color: black;
  opacity: 0.2;
  z-index: 1;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  @media (max-width: 500px) {
    display: block;
    opacity: 0.4;
  }
`;

const BlackOverlay = styled.div`
  background-color: black;
  opacity: 0.2;
  z-index: 1;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  @media (max-width: 500px) {
    opacity: 0.7;
  }
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
  z-index: 2;

  @media (max-width: 500px) {
    width: 100%;
    height: 100%;
    text-align: center;
    background: url("/hotelbg.jpeg");
    background-size: cover;
    color: white;
  }
`;

const OverlayContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  z-index: 2;
`;

const HotelContent = styled.div`
  z-index: 1;
  width: 100%;
  display: flex;
  align-items: flex-start;

  @media (max-width: 500px) {
    width: 100%;
    height: fit-content;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const HotelImage = styled.div`
  width: 45%;

  height: 100%;
  background-size: cover;
  position: relative;

  @media (max-width: 500px) {
    height: 30vh;
    width: 100%;
  }
`;

const HotelTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  height: 100%;
  background-color: #f3f2f0;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

const HotelText = styled.div`
  width: 80%;
  height: 100%;
`;

const Contact = styled.div`
  display: flex;

  align-items: center;
`;

const LinksContainer = styled.div`
  display: flex;
`;
