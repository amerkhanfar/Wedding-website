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
          <Link href={"/"}>
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
        <BackgroundImage />
        <TextContainer>
          <Text className={TextFont.className}>
            <h2>FAQs</h2>
            <QuestionContainer>
              <Question>When is the RSVP deadline?</Question>
              <Answer>
                Please RSVP by 6 January 2024 - our venue requires an accurate
                headcount. Upon receiving all RSVP’s, we will share a link with
                menu options for you and your date to choose from.
              </Answer>
              <Line />
            </QuestionContainer>
            <QuestionContainer>
              <Question>Are kids welcome?</Question>
              <Answer>
                As much as we love your little ones, we will not be including
                them in the ceremony or reception. However, we recognize that
                some of you will be traveling with your kids, therefore we ask
                that you please arrange your own au pair and or nanny services.
              </Answer>
              <Line />
            </QuestionContainer>
            <QuestionContainer>
              <Question>What should I wear?</Question>
              <Answer>
                Semi-Formal leaning more towers Formal - but we ask No black, No
                white & No jeans! Aim for the sweet spot between understated
                dressy and classic. Think flowy dresses, well-tailored
                jumpsuits, button-down shirts, suit jackets, and timeless
                silhouettes. We welcome a little bowtie or set of suspenders to
                complete the look!
              </Answer>
              <Line />
            </QuestionContainer>
            <QuestionContainer>
              <Question>What kind of shoes should I wear?</Question>
              <Answer>
                Attention all ladies! I strongly recommend that you do not wear
                stiletto heels ! There are a bunch of grassy areas and a lot of
                coble stones that you will have to walk over. A chunky heel/
                wedge or sandals would help avoid ruining nice shoes or breaking
                any ankles.
              </Answer>
              <Line />
            </QuestionContainer>
            <QuestionContainer>
              <Question>Where should I park at Asara?</Question>
              <Answer>
                There is plenty of free parking in front of the Hotel entrance
                on the Estate. After entering the main gate from Polkadraai Rd.,
                simply follow the road & signages as it will lead you straight
                to the parking area. From the parking area special signages &
                venue staff will directing you to the ceremony area.
              </Answer>
              <Line />
            </QuestionContainer>
            <QuestionContainer>
              <Question>What will the weather be like?</Question>
              <Answer>
                Welcome to Cape Town, all of you out-of-towners! The weather
                here can be very unpredictable. During the day, the weather in
                Cape Town should be beautiful, as we will be nearing the end of
                Summer, averaging 32 – 28 Degrees Celsius, but it can get chilly
                at night. Please bring some warm layers for the evening, as
                temperatures can dip to 15 or below. Don't forget a windbreaker
                – they don’t call it the Windy City for nothing!
              </Answer>
              <Line />
            </QuestionContainer>
            <QuestionContainer>
              <Question>Is the wedding indoors or outdoors?</Question>
              <Answer>
                Our wedding ceremony & drinks will be held outdoors, The
                reception will be held indoors after sunset with open outdoor
                access where some drinks and firepits will help keep you warm
                should the weather decide to take a turn.
              </Answer>
              <Line />
            </QuestionContainer>
            <QuestionContainer>
              <Question>The Bar - cash or tab?</Question>
              <Answer>
                We will be providing a selected bar tab inclusive of spirits,
                ciders, beers, wine and refreshments after the ceremony until
                the end of the evening. Any shots or other preferences will be
                for your own account and payable via cash (South African Rand)
                or via Card at the bar.
              </Answer>
              <Line />
            </QuestionContainer>
            <QuestionContainer>
              <Question>
                Are the ceremony and reception locations wheelchair accessible?
              </Question>
              <Answer>
                Yes, and we will have a golf cart available for anyone needing
                assistance getting around the property should it be needed.
              </Answer>
              <Line />
            </QuestionContainer>
            <QuestionContainer style={{ marginBottom: "150px" }}>
              <Question>To drink, or to drive?</Question>
              <Answer>
                If you're planning to drink at the wedding, which we know most
                of you will ;) - we strongly suggest that you pre-arrange
                transportation and or make use of Uber which is available in
                Cape Town & Stellenbosch. Should there be shuttle busses
                arranged at a later time we will be sure to let you know.
                Alternatively please contact Denzil on WhatsApp here for any
                other recommendations and or assistance for arranging
                transportation prior to the big day.
              </Answer>
            </QuestionContainer>
          </Text>
        </TextContainer>
      </Container>
    </AnimatePresence>
  );
};

export default page;

const Container = styled.div`
  position: relative;
  display: flex;
  height: 77vh;
  background-color: #e8e5e1;
  width: 100vw;
  justify-content: space-between;
  overflow: hidden;

  @media (max-width: 500px) {
    flex-direction: column;
  }

  @media (min-width: 1400px) {
    height: 87vh;
    overflow: hidden;
  }
`;

const BackgroundImage = styled.div`
  height: 100%;
  width: 45%;
  background-image: url("./faabg.jpg");
  background-size: cover;
  background-position: center;

  @media (max-width: 500px) {
    width: 100vw;
  }
`;

const TextContainer = styled.div`
  width: 55%;
  max-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e8e5e1;
  overflow-y: scroll;
  padding-bottom: 40px;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

const Text = styled.div`
  width: 80%;
  height: 90%;
  display: flex;
  flex-direction: column;

  @media (max-width: 500px) {
    width: 85%;
    text-align: center;
  }
`;

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0px;
`;

const Question = styled.span`
  font-weight: bold;
`;

const Answer = styled.span`
  font-size: 12px;
  margin: 12px 0px;
  width: 80%;

  @media (max-width: 500px) {
    width: 100%;
    padding: 0px 5px;
  }
`;

const Line = styled.hr`
  width: 60%;
  margin: 5px 0px;
  background-color: black;

  @media (max-width: 500px) {
    width: 100%;
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
