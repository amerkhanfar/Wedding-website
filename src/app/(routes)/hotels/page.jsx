"use client";
import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { BiSolidMap, BiLinkExternal } from "react-icons/bi";
import { FaBriefcase, FaRegMoon } from "react-icons/fa";

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
          <Link href={"/travel"}>
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
              <div style={{ lineHeight: "1.8", fontSize: "15px" }}>
                To ensure that you can all enjoy the evening with us, we have
                blocked rooms at the hotel for “the Washington Wedding” on the
                night off, should you wish for a short walk back to bed and that
                hangover breakfast the next morning. Arrangements and costs are
                for your own expense and on a first-come-first-serve basis.
              </div>

              <div
                style={{
                  lineHeight: "1.8",
                  fontSize: "15px",
                  marginTop: "20px",
                  marginBottom: "10px",
                }}>
                If you wish to book at the venue, please use the below details:
              </div>

              <Contact>
                <img src='/person.png' alt='' width={40} height={40} />
                <span
                  style={{
                    fontSize: "15px",
                  }}>
                  Pending
                </span>
              </Contact>
              <Contact>
                <img src='/phone.png' alt='' width={40} height={40} />
                <span
                  style={{
                    fontSize: "15px",
                  }}>
                  Pending
                </span>
              </Contact>
              <Contact>
                <img src='/envelope.png' alt='' width={40} height={40} />
                <span
                  style={{
                    fontSize: "15px",
                  }}>
                  Pending
                </span>
              </Contact>
              <Contact>
                <img src='/hashtag.png' alt='' width={40} height={40} />
                <span
                  style={{
                    fontSize: "15px",
                  }}>
                  Guest of the Washington Wedding ‘24
                </span>
              </Contact>

              <div
                style={{
                  fontSize: "15px",
                  marginTop: "18px",
                }}>
                Should the Hotel be fully booked and or looking for other
                options please see below.
              </div>

              <div style={{ display: "flex", flexDirection: "column" }}>
                <LinksContainer>
                  <a
                    href='https://maps.app.goo.gl/ghqTTEwDwB6rJVgb7'
                    target='_blank'
                    style={{ textDecoration: "none", color: "black" }}>
                    MAP TO VENUE
                  </a>
                  <BiLinkExternal />
                </LinksContainer>
                <LinksContainers>
                  http://www.asara.co.za/
                  <a
                    href='http://www.asara.co.za/'
                    target='_blank'
                    style={{ textDecoration: "none", color: "black" }}>
                    <BiLinkExternal />
                  </a>
                </LinksContainers>
              </div>
            </HotelText>
          </HotelTextContainer>
        </HotelContent>
      </Container>

      <SuggestionsContainer className={TextFont.className}>
        <Suggestions>
          <Suggestion>
            <SuggestIconContainer>
              <FaBriefcase />
            </SuggestIconContainer>
            <h3>CAPE TOWN HOTELS</h3>
            <h5>Your City Landing</h5>
            <div>
              Our recommendations for the before-and-after legs of your South
              African trip. Please note that these properties are enjoyed as an
              experience as they are unique and tie into the local history of
              the city. It is by no means essential to stay in a hotel or
              somewhere fancy, but the list below falls within this category.
            </div>
            <a
              style={{ marginTop: "20px", color: "black" }}
              href='https://www.booking.com/fivestars/city/za/cape-town.en-gb.html?label=gen173rf-1FCAMYyAEo-wE46wJIM1gDaAKIAQGYAQm4AQfIAQzYAQHoAQH4AQKIAgGiAg5hcHB5Y291cGxlLmNvbagCA7gCmeXJqQbAAgHSAiQ0NTlmOTg4My1mYmQ4LTQzOGEtYmU1ZS1mMzNkYWI1NWYyYjjYAgXgAgE&sid=10cbc3ac1c1339de25342e3b6a9060ac&keep_landing=1&'
              target='_blank'>
              Booking.com
            </a>
          </Suggestion>
          <Suggestion>
            <MoonIconContainer>
              <FaRegMoon />
            </MoonIconContainer>
            <h3>AIRBNB</h3>
            <h5>The Best Way to Stay</h5>
            <div>
              While everyone loves the luxury of a hotel, the best way to stay
              in Cape Town is through services like Airbnb. The city is full of
              short-term accommodation options located in incredible pockets of
              the city bowl, Atlantic seaboard, and nearby suburbs. We highly
              recommend this option if you'd like to get the best value for
              money, while still enjoying premier lodgings.
            </div>
            <a
              style={{ marginTop: "20px", color: "black" }}
              href='https://www.airbnb.co.za/cape-town-south-africa/stays'
              target='_blank'>
              Airbnbs in Cape town
            </a>
          </Suggestion>
          <PhoneWhatsapp>
            For any other recommendation, please contact Denzil via{" "}
            <a
              href='https://wa.me/+971 56 881 9474'
              style={{ color: "black" }}
              target='_blank'>
              {" "}
              Whatsapp
            </a>
          </PhoneWhatsapp>
        </Suggestions>
        <Whatsapp>
          For any other recommendation, please contact Denzil via{" "}
          <a href='/' style={{ color: "black" }}>
            {" "}
            Whatsapp
          </a>
        </Whatsapp>
      </SuggestionsContainer>
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
  background-image: url("/hotelbg2.jpeg");
  background-size: cover;
  background-position: center;
  @media (max-width: 500px) {
    background-image: none;
    height: fit-content;
  }

  @media (min-width: 1500px) {
    height: 85vh;
    background-image: url("/hotelsbg2.jpeg");
  }

  @media (min-width: 1600px) {
    height: 67vh;
    background-image: url("/hotelsbg2.jpeg");
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
  background: rgba(232, 229, 225, 0.8);

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
    padding-bottom: 30px;
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
  align-items: center;
  gap: 20px;

  margin-top: 20px;
`;

const LinksContainers = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 5px;
`;

const SuggestionsContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 60vh;
  display: flex;
  justify-content: center;
  background-color: #abb7ba;

  @media (max-width: 500px) {
    height: fit-content;
  }

  @media (min-width: 1500px) {
    height: 55vh;
  }

  @media (min-width: 1600px) {
    height: 45vh;
  }
`;

const Suggestions = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 500px) {
    flex-direction: column;
    width: 90%;
  }
`;

const SuggestIconContainer = styled.div`
  display: flex;
  width: 100px;
  height: 15px;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: -100px;
  top: 22px;

  @media (max-width: 500px) {
    left: 172px;
    top: 22px;
    right: 0;
  }
`;

const MoonIconContainer = styled.div`
  display: flex;
  width: 100px;
  height: 15px;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: -100px;
  top: 22px;

  @media (max-width: 500px) {
    left: 40px;
    top: 22px;
    right: 0;
  }
`;

const Suggestion = styled.div`
  width: 42%;
  display: flex;
  flex-direction: column;
  position: relative;

  @media (max-width: 500px) {
    width: 82%;
    margin: 40px 0px;
  }
`;

const Seperation = styled.hr`
  width: 10px;
  transform: rotate(90deg);
  position: absolute;
  left: 50%;
  top: 50%;
  background-color: black;
  transform: rotate(90deg) translate(-50%, -50%);
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

const Whatsapp = styled.div`
  position: absolute;
  left: 50%;
  bottom: 30px;
  transform: translateX(-50%);
  font-weight: 600;

  @media (max-width: 500px) {
    display: none;
  }
`;

const PhoneWhatsapp = styled.div`
  font-weight: 600;
  margin-bottom: 50px;
  display: none;
  @media (max-width: 500px) {
    display: block;
    width: 82%;
  }
`;
