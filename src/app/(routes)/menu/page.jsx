"use client";
import react, { useState } from "react";
import styled from "styled-components";
import Lottie from "lottie-react";
import Animation from "./Animation.json";
import { InfinitySpin } from "react-loader-spinner";
import { redirect } from "next/navigation";
import "../../styles/global.css";
import axios from "axios";
import {
  HeadingFont,
  TextFont,
  Epika,
  EpikaLight,
  EpikaMedium,
  EpikaBold,
} from "../../fonts/font";
import thankYouMessage from "./Animation.json";

export default function Page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [starter, setStarter] = useState("");
  const [main, setMain] = useState("");
  const [dessert, setDessert] = useState("");
  const [notes, setNotes] = useState("");
  const [song, setSong] = useState("");
  const [loading, setLoading] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);

  const options = {
    animationData: Animation,
    onComplete: () => console.log("hi"),
  };

  async function createTodo(event) {
    event.preventDefault();
    setLoading(true);
    try {
      await axios.post(
        "https://sdg-signture-default-rtdb.firebaseio.com/attendance.json",
        { name, email, starter, main, dessert, notes, song }
      );

      console.log("success");
      setName("");
      setEmail("");
      setStarter("");
      setMain("");
      setDessert("");
      setSong("");
      setNotes("");
      setStartAnimation(true);
      setLoading(false);
    } catch {}
  }
  return (
    <>
      <Container>
        {startAnimation ? (
          <div
            style={{
              width: "100vw",
              height: "100vh",
              zIndex: 3,
              backgroundColor: "#e8e5e1",
              position: "absolute",
              top: "37%",
              left: "50%",
              transform: "translate(-50%,-40%)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Lottie
              play
              animationData={thankYouMessage}
              loop={false}
              onComplete={() => setStartAnimation(false)}
              width={"500px"}
              height={"500px"}
            />
          </div>
        ) : null}

        {loading ? (
          <div
            style={{
              width: "100vw",
              height: "100vh",
              zIndex: 3,
              backgroundColor: "#e8e5e1",
              position: "absolute",
              top: "37%",
              left: "50%",
              transform: "translate(-50%,-40%)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <InfinitySpin width="200" color="#8a5636" />
          </div>
        ) : null}
        <Subcontainer>
          <Background />

          <FormContainer>
            <Menu
              href="/dummy.pdf"
              target="_blank"
              className={TextFont.className}
            >
              MENU
            </Menu>
            <Overlay />
            <FormSub>
              <h2
                style={{ alignSelf: "center", letterSpacing: "5px" }}
                className={TextFont.className}
              >
                RSVP
              </h2>
              <Form onSubmit={createTodo} className={HeadingFont.className}>
                <HalfInput
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  className="inputs"
                  required
                  type="text"
                  name="name"
                  placeholder="NAME"
                  //   value={name}
                  //   onChange={(e) => {
                  //     setName(e.target.value);
                  //   }}
                />
                <HalfInput
                  required
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="text"
                  name="email"
                  placeholder="EMAIL"
                  //   value={name}
                  //   onChange={(e) => {
                  //     setName(e.target.value);
                  //   }}
                  className={TextFont.className}
                />
                <Text className={TextFont.className}>
                  *We will provide bla bla bla
                </Text>
                <Select
                  value={starter}
                  onChange={(e) => {
                    setStarter(e.target.value);
                  }}
                  className={TextFont.className}
                  name="starter"
                  required
                >
                  <Option disabled selected value={""}>
                    STARTER
                  </Option>
                  <Option value="1">1</Option>
                  <Option disabled>VEGAN</Option>
                  <Option value="2">2</Option>
                </Select>
                <Select
                  value={main}
                  onChange={(e) => {
                    setMain(e.target.value);
                  }}
                  className={TextFont.className}
                  name="main"
                  required
                >
                  <option disabled selected value={""}>
                    MAIN
                  </option>
                  <option value="1">1</option>
                  <option disabled>VEGAN</option>
                  <option value="2">2</option>
                </Select>

                <Select
                  value={dessert}
                  onChange={(e) => {
                    setDessert(e.target.value);
                  }}
                  className={TextFont.className}
                  name="dessert"
                  required
                >
                  <option disabled selected value={""}>
                    DESSERT
                  </option>
                  <option value="1">1</option>
                  <option disabled>VEGAN</option>
                  <option value="2">2</option>
                </Select>

                <FullInput
                  required
                  value={notes}
                  onChange={(e) => {
                    setNotes(e.target.value);
                  }}
                  type="text"
                  name="notes"
                  placeholder="ALLERGIES / SPECIAL REQUEST"
                  //   value={status}
                  //   onChange={(e) => {
                  //     setStatus(e.target.value);
                  //   }}
                  className={TextFont.className}
                />

                <Text className={TextFont.className}>
                  *We will provide bla bla bla
                </Text>

                <FullInput
                  value={song}
                  onChange={(e) => {
                    setSong(e.target.value);
                  }}
                  required
                  type="text"
                  name="song"
                  placeholder="SUGGEST A SONG"
                  //   value={status}
                  //   onChange={(e) => {
                  //     setStatus(e.target.value);
                  //   }}
                  className={TextFont.className}
                />

                <div style={{ width: "97%" }}>
                  <Go type="submit" className={TextFont.className}>
                    Send
                  </Go>
                </div>
              </Form>
            </FormSub>
          </FormContainer>
        </Subcontainer>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #e8e5e1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Option = styled.option`
  color: black;
`;

const Subcontainer = styled.div`
  width: 70%;
  height: 85%;
  background-color: white;
  position: relative;
  display: flex;
  border-radius: 5px;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

const Background = styled.div`
  border-radius: 5px;
  width: 50%;
  height: 100%;
  background-image: url("/hero.jpg");
  background-size: cover;

  @media (max-width: 768px) {
    display: none;
  }
`;

const FormContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    background-image: url("/hero.jpg");
    background-size: cover;
  }
`;

const Menu = styled.a`
  text-decoration: underline;
  position: absolute;
  letter-spacing: 1px;
  right: 30px;
  bottom: 30px;
  font-size: 13px;
  color: black;
  font-weight: bold;

  @media (max-width: 768px) {
    color: white;
    z-index: 5;
  }
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.5;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

const FormSub = styled.div`
  width: 80%;
  height: 75%;

  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  background-color: white;
  z-index: 2;

  @media (max-width: 768px) {
    background-color: transparent;
    color: white;
  }
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
`;

const Text = styled.div`
  width: 100%;
  margin-left: 10px;
`;

const HalfInput = styled.input`
  width: 43.5%;
  border: none;
  border-bottom: 1px solid grey;
  padding: 10px 3px;
  outline: none;

  ::placeholder {
    color: deepPink;
    font-size: 1.2em;
    font-style: italic;
  }

  @media (max-width: 768px) {
    width: 42%;
    background-color: transparent;
    color: white;
    border-bottom: 1px solid white;
  }
`;

const FullInput = styled.input`
  width: 97%;
  border: none;
  border-bottom: 1px solid grey;
  padding: 10px 3px;
  outline: none;

  @media (max-width: 768px) {
    background-color: transparent;
    color: white;
    border-bottom: 1px solid white;
  }
`;

const Select = styled.select`
  width: 28%;
  border: none;
  border-bottom: 1px solid grey;
  padding: 10px 0px;

  @media (max-width: 768px) {
    width: 26%;
    background-color: transparent;
    color: white;
    border-bottom: 1px solid white;
  }
`;

const SelectHalf = styled.select`
  width: 44.5%;
  border: none;
  border-bottom: 1px solid grey;
  padding: 10px 0px;

  @media (max-width: 768px) {
    background-color: transparent;
    color: white;
    border-bottom: 1px solid white;
  }
`;

const Go = styled.button`
  width: 97%;
  padding: 10px;
  color: black;
  border: 2px solid black;
  background: white;
  border-radius: 2px;
  letter-spacing: 2px;
  font-size: 14px;
  color: black;
  font-weight: 600;
  cursor: pointer;

  @media (max-width: 768px) {
    background-color: transparent;
    color: white;
    border-bottom: none;
    border: 2px solid white;
  }
`;
