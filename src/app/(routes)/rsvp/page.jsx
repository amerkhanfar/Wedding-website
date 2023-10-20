"use client";

import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import Link from "next/link";
import Lottie from "lottie-react";
import { useLottie } from "lottie-react";
import Animation from "./Animation.json";
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dateName, setDateName] = useState("");
  const [dateEmail, setDateEmail] = useState("");
  const [hotDate, setHotDate] = useState("no");

  const options = {
    animationData: Animation,
  };

  const { View } = useLottie(options);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(name, email, dateName, dateEmail);

    try {
      await axios.post(
        "https://oplus.dev/apps/lana/api/save",
        {
          name,
          email,
          hot_date: hotDate,
          hot_date_name: dateName,
          hot_date_email: dateEmail,
          // phone,
          // company_name: companyName,
          // image: sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"),
          // location: JSON.parse(localStorage.getItem("panel")),
          // pledge: textArea,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      console.log("success");
      setName("");
      setEmail("");
      setDateName("");
      setDateEmail("");
    } catch (error) {
      console.log(error);
    }
  };
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
        {/* <div
          style={{
            width: "100vw",
            height: "20vh",
            zIndex: 3,
            backgroundColor: "#e8e5e1",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-40%)",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
          }}>
          {View}
        </div> */}
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
            <BiSolidEnvelope
              size='30px'
              color='#245879'
              style={{ marginBottom: "10px" }}
            />
            <h3
              className={TextFont.className}
              style={{ margin: 0, padding: 0 }}>
              PLEASE ENTER YOUR EMAIL TO RSVP
            </h3>
            <PleaseText className={TextFont.className}>
              Please RSVP by January 6th, 2024
            </PleaseText>
            <span
              className={TextFont.className}
              style={{ marginTop: "10px", fontSize: "11px" }}>
              Your email is only shared with the event host.
            </span>
          </Header>
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
            style={{ width: "70%", position: "relative" }}>
            <Input
              type='text'
              placeholder='Name'
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className={TextFont.className}
              required
            />
            <Input
              type='Email'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder='Email Address'
              className={TextFont.className}
              required
            />
            <div className={TextFont.className} style={{ margin: "15px 0px" }}>
              Bringing a hot date?
            </div>
            <div>
              <RadioContainer>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "5px",
                  }}>
                  <input
                    type='radio'
                    name='subscribe'
                    value='yes'
                    id='yes'
                    style={{ width: "15px", height: "15px" }}
                    onChange={() => setHotDate("yes")}
                  />
                  <label className={TextFont.className} for='subscribeNews'>
                    Yes
                  </label>
                </div>
                <input
                  type='radio'
                  name='subscribe'
                  value='no'
                  id='no'
                  style={{ width: "15px", height: "15px" }}
                  onChange={() => setHotDate("no")}
                  required
                />
                <label className={TextFont.className} for='subscribeNews'>
                  No
                </label>
              </RadioContainer>
              {hotDate === "yes" ? (
                <>
                  <Input
                    type='text'
                    placeholder='Name of your hot date'
                    value={dateName}
                    onChange={(e) => {
                      setDateName(e.target.value);
                    }}
                    className={TextFont.className}
                    required
                  />
                  <Input
                    type='Email'
                    value={dateEmail}
                    onChange={(e) => {
                      setDateEmail(e.target.value);
                    }}
                    placeholder='Email Address of your hot date'
                    className={TextFont.className}
                    required
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
  position: relative;
  display: flex;
  justify-content: center;
  gap: 20vh;
  background-color: #e8e5e1;
  width: 100vw;
  height: 110vh;
  max-height: 110vh;
  overflow: hidden;
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
  z-index: 1;
  right: -250px;
  bottom: -200px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url("/oliveshadow.png");
  width: 750px;
  height: 750px;

  @media (max-width: 500px) {
    display: none;
  }
`;

const PleaseText = styled.span`
  color: #245879;
  margin-top: 20px;
  font-style: italic;
  font-weight: 700;
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

const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 500px) {
    justify-content: center;
  }
`;
