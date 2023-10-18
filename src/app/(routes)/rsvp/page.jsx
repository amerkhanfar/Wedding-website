"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
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

import { BiSolidEnvelope } from "react-icons/bi";

const page = () => {
  const [hotDate, setHotDate] = useState("no");
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
          <Link href={"/hotels"}>
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
        <Rose />

        <FormContainer>
          <Header>
            <BiSolidEnvelope size='30px' color='#245879' />
            <h3 className={TextFont.className}>
              PLEASE ENTER YOUR EMAIL TO RSVP
            </h3>
            <span className={TextFont.className}>
              Your email is only shared with the event host.
            </span>
          </Header>
          <form action='' style={{ width: "70%", position: "relative" }}>
            <Input
              type='text'
              placeholder='Name'
              className={TextFont.className}
            />
            <Input
              type='Email'
              placeholder='Email Address'
              className={TextFont.className}
            />
            <div className={TextFont.className} style={{ margin: "15px 0px" }}>
              Bringing a hot date?
            </div>
            <div>
              <input
                type='radio'
                name='subscribe'
                value='yes'
                id='yes'
                onChange={() => setHotDate("yes")}
              />
              <label className={TextFont.className} for='subscribeNews'>
                Yes
              </label>
              <input
                type='radio'
                name='subscribe'
                value='no'
                id='no'
                onChange={() => setHotDate("no")}
              />
              <label className={TextFont.className} for='subscribeNews'>
                No
              </label>
              {hotDate === "yes" ? (
                <>
                  <Input
                    type='text'
                    placeholder='Name of your hot date'
                    className={TextFont.className}
                  />
                  <Input
                    type='Email'
                    placeholder='Email Address of your hot date'
                    className={TextFont.className}
                  />
                </>
              ) : (
                <></>
              )}
            </div>
            <SubmitContainer>
              <Submit
                type='submit'
                value={"SEND"}
                className={TextFont.className}
              />
            </SubmitContainer>
          </form>
        </FormContainer>
      </Container>
    </AnimatePresence>
  );
};

export default page;

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 20vh;
  background-color: #e8e5e1;
  width: 100vw;
  height: 80vh;
`;

const FormContainer = styled.div`
  width: 33vw;
  height: fit-content;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0px;
  margin-top: 50px;
  gap: 30px;
  @media (max-width: 500px) {
    width: 100vw;
    text-align: center;
    height: 70vh;
  }
`;

const Rose = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url("/rose.png");
  width: 150px;
  height: 300px;

  @media (max-width: 500px) {
    display: none;
  }
`;

const Inverted = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url("/inverted.png");
  width: 250px;
  height: 300px;
  @media (max-width: 500px) {
    display: none;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
`;

const Input = styled.input`
  width: 100%;
  height: 50px;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  margin: 10px 0px;
  padding: 0;
`;

const SubmitContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  @media (max-width: 500px) {
    align-items: center;
    justify-content: center;
    margin: 10px 0px;
  }
`;

const Submit = styled.input`
  background-color: #245879;
  border: none;
  color: white;
  width: 80px;
  padding: 5px;
  outline: none;
  align-self: flex-end;
  @media (max-width: 500px) {
    position: relative;
    display: block;
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
  bottom: 70px;
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
