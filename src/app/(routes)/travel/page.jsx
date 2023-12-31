"use client";

import { BiSolidBinoculars } from "react-icons/bi";
import { FaTaxi, FaPlane, FaBinoculars } from "react-icons/fa";
import React from "react";
import Link from "next/link";
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
              style={{ fontSize: "70px" }}>
              Travel
            </span>

            <p
              style={{ fontWeight: 600, fontStyle: "italic", fontSize: "13px" }}
              className={TextFont.className}>
              For any other recommendations and or questions, please contact
              Denzil via{" "}
              <a
                href='https://wa.me/+971568819474'
                target='_blank'
                style={{ color: "black" }}>
                Whatsapp
              </a>
            </p>

            {/* <Categories>
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
            </Categories> */}
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
                <InfoLink
                  href='https://capetown-airport.co.za/'
                  target='_blank'>
                  Cape Town International Airport
                </InfoLink>
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
                <InfoLink
                  href='https://www.avis.com/en/locations'
                  target='_blank'>
                  Avis Rent a Car
                </InfoLink>
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
                <InfoLink
                  href='https://insideguide.co.za/cape-town/to-do/'
                  target='_blank'>
                  https://insideguide.co.za/cape-town/to-do/
                </InfoLink>

                <InfoLink
                  href='https://www.capetown.travel/offical-cape-town-bucket-list/'
                  target='_blank'>
                  https://www.capetown.travel/offical-cape-town-bucket-list/
                </InfoLink>
              </InfoText>
            </InfoContainer>
          </RightMiddleContent>
        </RightMiddle>
      </Container>

      <PhoneContainer className={TextFont.className}>
        <Arrow>
          <Link href={"/gifts"}>
            <IconssContainer>
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
            </IconssContainer>
          </Link>
        </Arrow>
        <PhoneHeader>
          <PhoneOverlay />
          <span
            className={HeadingFont.className}
            style={{
              fontSize: "70px",
              color: "white",
              zIndex: "2",
            }}>
            Travel
          </span>

          {/* <PhoneIconContainer style={{ color: "white", zIndex: "2" }}>
            <PhoneCategories>
              <PhoneCategory>
                <PhoneIcon />
                <PhoneCategoryText>FLIGHTS</PhoneCategoryText>
              </PhoneCategory>
              <PhoneCategory>
                <PhoneIcon style={{ backgroundImage: 'url("/taxi.png")' }} />
                <PhoneCategoryText>TRANSPORTATION</PhoneCategoryText>
              </PhoneCategory>
              <PhoneCategory>
                <PhoneIcon style={{ backgroundImage: 'url("/scope.png")' }} />
                <PhoneCategoryText>THINGS TO DO</PhoneCategoryText>
              </PhoneCategory>
            </PhoneCategories>
          </PhoneIconContainer> */}
        </PhoneHeader>
        <PhoneInfoContainer>
          <PhoneInfos style={{ marginTop: "30px" }}>
            <PhoneInfo>
              <PhoneInfoText>
                <PhoneInfoFirst>
                  {" "}
                  <FaPlane
                    size={"20px"}
                    color='#79807E'
                    style={{ margin: "0px 20px 0px 0px", minWidth: "0PX" }}
                  />
                  <span>FLIGHTS </span>
                </PhoneInfoFirst>
                <InfoSecond>Getting In</InfoSecond>
                <InfoThird>
                  We recommend flying into Cape Town International Airport!
                </InfoThird>
                <InfoLink
                  href='https://capetown-airport.co.za/'
                  target='_blank'>
                  Cape Town International Airport
                </InfoLink>
              </PhoneInfoText>
            </PhoneInfo>
            <PhoneInfo>
              <PhoneInfoText>
                <PhoneInfoFirst>
                  {" "}
                  <FaTaxi
                    size={"20px"}
                    color='#79807E'
                    style={{ margin: "0px 20px 0px 0px", minWidth: "20PX" }}
                  />
                  <span>TRANSPORTATION </span>
                </PhoneInfoFirst>
                <InfoSecond>Getting Downtown</InfoSecond>
                <InfoThird>
                  The easiest options are Uber and Bolt, which are inexpensive
                  and run 24 /7. Alternatively, there are several car rental
                  options available at the airport. Be sure to ask for an
                  automatic if needed - the South African standard is manual.
                </InfoThird>
                <InfoLink
                  href='https://www.avis.com/en/locations'
                  target='_blank'>
                  Avis Rent a Car
                </InfoLink>
              </PhoneInfoText>
            </PhoneInfo>
            <PhoneInfo>
              <PhoneInfoText>
                <PhoneInfoFirst>
                  <BiSolidBinoculars
                    size={"20px"}
                    color='#79807E'
                    style={{ margin: "0px 20px 0px 0px", minWidth: "0PX" }}
                  />
                  <span>THINGS TO DO </span>
                </PhoneInfoFirst>
                <InfoSecond>Cape Town Bucket List</InfoSecond>
                <InfoThird>
                  You could spend a weekend, a month, a year in Cape Town - and
                  never run out of things to do and see! Our personal favorites
                  include a climb up Lion's head, a drive around Chapmans Peak,
                  visiting the penguins at Boulders Beach, wine-tasting...
                  everywhere, and catching a tan on Clifton Beach.
                </InfoThird>
                <InfoThird>Here's another fabulous list of to-do's:</InfoThird>
                <InfoLink
                  href='https://insideguide.co.za/cape-town/to-do/'
                  target='_blank'>
                  https://insideguide.co.za/cape-town/to-do/
                </InfoLink>

                <InfoLink
                  href='https://www.capetown.travel/offical-cape-town-bucket-list/'
                  target='_blank'>
                  https://www.capetown.travel/offical-cape-town-bucket-list/
                </InfoLink>
              </PhoneInfoText>
            </PhoneInfo>

            <div style={{ marginBottom: "30px" }}>
              {" "}
              For any other recommendation, please contact Denzil via{" "}
              <a
                href='https://wa.me/+971568819474'
                target='_blank'
                style={{ color: "black" }}>
                {" "}
                Whatsapp
              </a>
            </div>
          </PhoneInfos>
        </PhoneInfoContainer>
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
  background: url("/travelbg.jpg");
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
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  height: fit-content;
  display: none;

  @media (max-width: 1000px) {
    display: flex;
  }
`;

const PhoneHeader = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 25vh;
  background: url("/travelbg.jpg");
  background-size: cover;

  align-items: center;
  justify-content: center;
`;

const PhoneOverlay = styled.div`
  background-color: black;
  opacity: 0.5;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;

  @media (max-width: 1000px) {
    opacity: 0.3;
  }
`;

const PhoneIconContainer = styled.div`
  display: flex;
  width: 80%;
`;

const PhoneCategories = styled.div`
  display: flex;
  margin: 30px 0px;
  width: 100%;
  justify-content: space-between;
`;

const PhoneCategory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
`;

const PhoneIcon = styled.div`
  width: 80px;
  height: 80px;
  background-image: url("/flight.png");
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PhoneCategoryText = styled.span`
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 1px;
`;

const PhoneInfoContainer = styled.div`
  width: 100vw;
  height: fit-content;
  display: flex;
  justify-content: center;
  background-color: #e8e5e1;
`;

const PhoneInfos = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  gap: 15px;
`;

const PhoneInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const PhoneInfoFirst = styled.div`
  display: flex;
  gap: 5px;
  font-size: 17px;
  font-weight: 400;
  letter-spacing: 2px;
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

const PhoneInfoText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 25px;
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
  text-decoration: underline;
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

const IconssContainer = styled.div`
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
