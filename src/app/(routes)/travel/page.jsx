"use client";

import { BiSolidBinoculars } from "react-icons/bi";
import { FaTaxi, FaPlane, FaBinoculars } from "react-icons/fa";
import React from "react";

import { motion, AnimatePresence } from "framer-motion";
import { BiSolidMap, BiLinkExternal } from "react-icons/bi";

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
        <Left />

        <LeftMiddle>
          <BlackOverlay />
          <LeftMiddleContent>
            <span
              className={HeadingFont.className}
              style={{ fontSize: "55px" }}>
              Travel & Tourism
            </span>

            <Categories>
              <Category>
                <Icon />
                <CategoryText className={TextFont.className}>
                  FLIGHTS
                </CategoryText>
              </Category>
              <Category>
                <Icon style={{ backgroundImage: 'url("/taxi.png")' }} />
                <CategoryText className={TextFont.className}>
                  TRANSPORTATION
                </CategoryText>
              </Category>
              <Category>
                <Icon style={{ backgroundImage: 'url("/scope.png")' }} />
                <CategoryText className={TextFont.className}>
                  THINGS TO DO
                </CategoryText>
              </Category>
            </Categories>
          </LeftMiddleContent>
        </LeftMiddle>

        <RightMiddle>
          <RightMiddleContent className={TextFont.className}>
            <InfoContainer style={{ marginTop: "35px" }}>
              <FaPlane
                size={"20px"}
                color='#79807E'
                style={{
                  margin: "0px 20px 0px 0px",
                  minWidth: "20PX",
                  transform: "rotate(-45deg)",
                }}
              />
              <InfoText>
                <InfoFirst>FLIGHTS</InfoFirst>
                <InfoSecond>Getting In</InfoSecond>
                <InfoThird>
                  We recommend flying into Cape Town International Airport!
                </InfoThird>
                <InfoLink href='/'>Cape Town International Airport</InfoLink>
              </InfoText>
            </InfoContainer>
            <InfoContainer>
              <FaTaxi
                size={"20px"}
                color='#79807E'
                style={{ margin: "0px 20px 0px 0px", minWidth: "20PX" }}
              />
              <InfoText>
                <InfoFirst>TRANSPORTATION</InfoFirst>
                <InfoSecond>Getting Downtown</InfoSecond>
                <InfoThird>
                  The easiest options are Uber and Bolt, which are inexpensive
                  and run 24 /7. Alternatively, there are several car rental
                  options available at the airport. Be sure to ask for an
                  automatic if needed - the South African standard is manual.
                </InfoThird>
                <InfoLink href='/'>Avis Rent a Car</InfoLink>
              </InfoText>
            </InfoContainer>
            <InfoContainer style={{ border: "none" }}>
              <BiSolidBinoculars
                size={"25px"}
                color='#79807E'
                style={{ margin: "0px 12px 0px 0px", minWidth: "25PX" }}
              />
              <InfoText>
                <InfoFirst>THINGS TO DO</InfoFirst>
                <InfoSecond>Cape Town Bucket List</InfoSecond>
                <InfoThird>
                  You could spend a weekend, a month, a year in Cape Town - and
                  never run out of things to do and see! Our personal favorites
                  include a climb up Lion's head, a drive around Chapmans Peak,
                  visiting the penguins at Boulders Beach, wine-tasting...
                  everywhere, and catching a tan on Clifton Beach.
                </InfoThird>
                <InfoThird>Here's another fabulous list of to-do's:</InfoThird>
                <InfoLink href='https://insideguide.co.za/cape-town/to-do/'>
                  https://insideguide.co.za/cape-town/to-do/
                </InfoLink>
              </InfoText>
            </InfoContainer>
          </RightMiddleContent>
        </RightMiddle>
      </Container>

      <PhoneContainer>
        <PhoneHeader>
          <span className={HeadingFont.className} style={{ fontSize: "40px" }}>
            Travel & Tourism
          </span>
          <PhoneIconContainer></PhoneIconContainer>
        </PhoneHeader>
      </PhoneContainer>
    </AnimatePresence>
  );
};

export default page;

const Container = styled.div`
  background-color: #e8e5e1;
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-image: url("/hotelbg.jpeg");
  background-size: cover;
  background-position: center;

  @media (min-width: 1700px) {
    height: 87vh;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;

const PhoneContainer = styled.div`
  display: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: fit-content;

  @media (max-width: 1000px) {
    display: block;
  }
`;

const PhoneHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  background: rgba(232, 229, 225, 0.8);
  align-items: center;
`;

const PhoneIconContainer = styled.div`
  display: flex;
  width: 80%;
`;

const BlackOverlay = styled.div`
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
    opacity: 0.7;
  }
`;

const Left = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 3;
  width: 8%;
  height: 100%;
  background-color: #e8e5e1;
`;

const LeftMiddle = styled.div`
  position: relative;
  background: rgba(232, 229, 225, 0.8);
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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

const LeftMiddleContent = styled.div`
  width: 85%;
  height: 95%;
  display: flex;
  flex-direction: column;
`;

const Categories = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: -60px;
  top: 49%;

  transform: translateY(-60%);
`;

const Category = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
`;

const Icon = styled.div`
  width: 120px;
  height: 120px;
  background-image: url("/flight.png");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CategoryText = styled.span`
  font-size: 13px;
  font-weight: 600;
`;

const RightMiddle = styled.div`
  background: #e8e5e1;
  width: 35%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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

const RightMiddleContent = styled.div`
  width: 85%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding-bottom: 20px;
  border-bottom: 1px solid black;
`;

const InfoIcon = styled.div`
  width: 120px;
  height: 120px;
  background-image: url("/flight.png");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InfoText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const InfoFirst = styled.span`
  font-size: 17px;
  font-weight: 400;
  letter-spacing: 2px;
`;

const InfoSecond = styled.span`
  font-size: 15px;
  font-weight: 600;
`;

const InfoThird = styled.span`
  font-size: 13px;
`;

const InfoLink = styled.a`
  color: black;
  font-size: 13px;
  text-decoration: none;
`;
