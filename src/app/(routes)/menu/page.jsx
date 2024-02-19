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
            <Overlay />
            <FormSub>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <h1
                  style={{
                    fontSize: "35px",
                    alignSelf: "center",
                    letterSpacing: "3px",
                    margin: 0,
                    padding: 0,
                    fontWeight: "normal",
                  }}
                  className={HeadingFont.className}
                >
                  the
                  <span
                    className={TextFont.className}
                    style={{ fontSize: "25px", fontWeight: "normal" }}
                  >
                    MENU
                  </span>
                </h1>

                <h6
                  style={{ alignSelf: "center" }}
                  className={TextFont.className}
                >
                  Please complete by 26 February 2024.
                </h6>
              </div>
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
                  Please select 1 option for each course below,{" "}
                  <Click href="/pdf.pdf" target="_blank">
                    Click here to see the menu
                  </Click>{" "}
                  for more details.
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
                  <Option value="Tuna Tar-Tar">Tuna Tar-Tar</Option>
                  <Option value="Cape Hope Baby Chokka">
                    Cape Hope Baby Chokka
                  </Option>
                  <Option value="Smoked Springbok Carpaccio">
                    Smoked Springbok Carpaccio
                  </Option>
                  <Option disabled>* VEGAN</Option>
                  <Option value="Candy Beetroot Salad">
                    Candy Beetroot Salad
                  </Option>
                  <Option value="Coconut Cauliflower Bites">
                    Coconut Cauliflower Bites
                  </Option>
                  <Option value="Avocado Aioli Toast">
                    Avocado Aioli Toast
                  </Option>
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
                  <Option disabled selected value={""}>
                    MAIN
                  </Option>
                  <Option value="Braised Pork Belly">Braised Pork Belly</Option>
                  <Option value="Karoo Lamb Chops">Karoo Lamb Chops</Option>
                  <Option value="Elgin Chicken Supreme">
                    Elgin Chicken Supreme
                  </Option>
                  <Option disabled>* VEGAN</Option>
                  <Option value="Butternut Risotto">Butternut Risotto</Option>
                  <Option value="Mushroom Edamame Tortellini">
                    Mushroom Edamame Tortellini
                  </Option>
                  <Option value="Szechuan Eggplant">Szechuan Eggplant</Option>
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
                  <Option disabled selected hidden="true" value={""}>
                    DESSERT
                  </Option>
                  <Option value="Vanilla Crème Brûlée">
                    Vanilla Crème Brûlée
                  </Option>
                  <Option value="Banana Caramel Chocolate Tart">
                    Banana Caramel Chocolate Tart
                  </Option>
                  <Option value="Baklava">Baklava</Option>
                  <Option disabled>* VEGAN</Option>
                  <Option value="Coconut Pannacotta">Coconut Pannacotta</Option>
                  <Option value="Raspberry Tartlet">Raspberry Tartlet</Option>
                  <Option value="Carrot Cake">Carrot Cake</Option>
                </Select>

                <Text className={TextFont.className}>
                  Kindly specify any food allergies or dietary restrictions. If
                  none please note it in order to submit the form.
                </Text>
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
                  We love a good party and nothing sets the tone better than
                  some great tunes. Please help us in building the ultimate
                  playlist and share a song suggestion below in order to
                  complete & submit the form.
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

                <Text
                  className={TextFont.className}
                  style={{ textAlign: "center" }}
                >
                  Please make sure you see the Thank you message when pressing
                  send to indicate it was successful. <br />
                  <strong>
                    We look forward to celebrating our big day with you.
                  </strong>
                </Text>
                <div style={{ width: "97%" }}>
                  <Go type="submit" className={TextFont.className}>
                    SEND
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

    @media (max-width: 768px) {
    height:115vh;
  }
`;

const Option = styled.option`
  color: black;
`;

const Subcontainer = styled.div`
  width: 70%;
  height: 95%;
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
  background-image: url("/3.jpeg");
  background-size: cover;
  filter: grayscale(100%);

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
    background-image: url("/3.jpeg");
    filter: grayscale(100%);
    background-size: cover;
  }
`;

const Menu = styled.a`
  text-decoration: underline;
  position: absolute;
  letter-spacing: 1px;
  right: 30px;
  top: 25px;
  font-size: 13px;
  color: black;
  font-weight: bold;

  @media (max-width: 768px) {
    color: white;
    z-index: 5;
    top: 50px;
    bottom: auto;
  }
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.7;
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
  gap: 25px;
  flex-wrap: wrap;
`;

const Text = styled.div`
  width: 100%;
  margin-left: 10px;
  font-size: 11px;
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
    font-size: 16px;
  }
`;

const FullInput = styled.input`
  width: 96%;
  border: none;
  border-bottom: 1px solid grey;
  padding: 10px 3px;
  outline: none;

  @media (max-width: 768px) {
    background-color: transparent;
    color: white;
    border-bottom: 1px solid white;
    font-size: 16px;
  }
`;

const Select = styled.select`
  width: 28%;
  border: none;
  border-bottom: 1px solid grey;
  padding: 10px 0px;
  -webkit-appearance: none;

  @media (max-width: 768px) {
    width: 26%;
    background-color: transparent;
    color: white;
    border-bottom: 1px solid white;
    font-size: 16px;
  }
`;

const SelectHalf = styled.select`
  width: 44.5%;
  border: none;
  border-bottom: 1px solid grey;
  padding: 10px 0px;
  -webkit-appearance: none;

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

const Click = styled.a`
  color: black;

  @media (max-width: 768px) {
    color: white;
  }
`;
