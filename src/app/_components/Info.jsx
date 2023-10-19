import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BiSolidMap, BiLinkExternal } from "react-icons/bi";
import Link from "next/link";
import {
  HeadingFont,
  TextFont,
  Epika,
  EpikaLight,
  EpikaMedium,
  EpikaBold,
} from "../fonts/font";

const Info = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [inputDate, setInputDate] = useState("16 mar 2024");
  const [currentDate, setCurrentDate] = useState(inputDate);

  useEffect(() => {
    const changingDate = new window.Date(inputDate);
    const currentDate = new window.Date();
    const totalSeconds = (changingDate - currentDate) / 1000;

    setDays(formatTime(Math.floor(totalSeconds / 3600 / 24)));
    setHours(Math.floor(totalSeconds / 3600) % 24);
    setMinutes(Math.floor(totalSeconds / 60) % 60);
  }, [currentDate]);

  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }

  const onChangeHandler = (event) => {
    setInputDate(event.target.value);
  };

  const onClickHandler = () => {
    setCurrentDate(inputDate);
  };
  return (
    <Container>
      <Content>
        <Heading className={HeadingFont.className}>The Ceremony</Heading>
        <Information>
          <Date>
            <div>
              <div className={TextFont.className}>SAT</div>
              <div className={TextFont.className} style={{ fontSize: "20px" }}>
                MARCH 16
              </div>
              <div className={TextFont.className}>2024</div>
            </div>
            <div
              style={{
                transform: "rotate(90deg)",
                color: "         #8a5636",
              }}>
              -------------------
            </div>
            <div>
              <div className={TextFont.className}>3:00PM - 12:00AM</div>
            </div>

            <Link
              className={TextFont.className}
              href={"/rsvp"}
              style={{
                textDecoration: "none",
                color: "white",
                background: "#8a5636",
                width: "110px",
                padding: "7px",
              }}>
              RSVP
            </Link>
          </Date>
          <Location>
            <h3 className={TextFont.className}>ASARA WINE ESTATE & HOTEL</h3>
            <p
              style={{ width: "50%", textAlign: "center" }}
              className={TextFont.className}>
              Polkadraai Rd, Stellenbosch, 7600, Cape Town, South Africa
            </p>

            <p
              style={{ width: "50%", textAlign: "center" }}
              className={TextFont.className}>
              +27 21 888 8000 http://www.asara.co.za/
            </p>

            <BiLinkExternal color='#8a5636' />
          </Location>
          <Map>
            <h3
              className={TextFont.className}
              style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              MAP TO VENUE <BiLinkExternal color='#8a5636' />
            </h3>
            <MapOutline>
              <BiSolidMap
                color='#8a5636'
                style={{ position: "absolute", left: "46px", bottom: 31 }}
              />
            </MapOutline>
          </Map>
        </Information>

        <DressCode>
          <Rose />
          <DressCodeContent>
            <div className={TextFont.className} style={{ fontSize: "13px" }}>
              DRESS CODE & COLOR THEME
            </div>
            <Line />
            <ColorContainer>
              <ColorCircle style={{ background: "#C8B09D" }} />
              <ColorCircle style={{ background: "#AFBBBE" }} />
              <ColorCircle style={{ background: "#ABB5C4" }} />
              <ColorCircle style={{ background: "#8A5636" }} />
              <ColorCircle style={{ background: "#79807E" }} />
              <ColorCircle style={{ background: "#245879" }} />
              <ColorCircle style={{ background: "#602D31" }} />
              <ColorCircle style={{ background: "#585E57" }} />
              <ColorCircle style={{ background: "#353F4F" }} />
            </ColorContainer>
            <Line />
            <DresscodeRules className={TextFont.className}>
              Semi-formal - think flowy dresses, botton down shirts, and
              timeless silhouettes!{" "}
              <strong>No black, No white, No jeans.</strong>
            </DresscodeRules>
          </DressCodeContent>
        </DressCode>

        <Countdown>
          <Heading className={HeadingFont.className}>Countdown</Heading>
          <CountdownContainer>
            <CountdownTimer className={TextFont.className}>
              <Number>{days}</Number>
              <div>Days</div>
            </CountdownTimer>
            <CountdownTimer className={TextFont.className}>
              <Number>{hours}</Number>
              <div>Hours</div>
            </CountdownTimer>
            <CountdownTimer className={TextFont.className}>
              <Number>{minutes}</Number>
              <div>Minutes</div>
            </CountdownTimer>
          </CountdownContainer>
        </Countdown>
      </Content>
    </Container>
  );
};

export default Info;

const Container = styled.div`
  background-color: #e8e5e1;
  width: 100vw;
  display: flex;
  justify-content: center;
  height: fit-content;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  align-items: start;

  @media (max-width: 500px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
`;

const Heading = styled.span`
  font-size: 55px;
  font-weight: 500;
`;

const Information = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  background-color: white;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 500px) {
    height: fit-content;
    flex-direction: column;
    margin-bottom: 0;
  }
`;

const Date = styled.div`
  height: 80%;
  width: 33%;
  gap: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #8a5636;
  text-align: center;

  @media (max-width: 500px) {
    height: 300px;
    width: 100%;
    border: none;
    border-bottom: 1px solid #8a5636;
    padding-bottom: 10px;
    gap: 50px;
    margin-top: 20px;
  }
`;

const Location = styled.div`
  width: 33%;
  gap: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid #8a5636;
  text-align: center;

  @media (max-width: 500px) {
    height: 300px;
    width: 100%;
    border-bottom: 1px solid #8a5636;
    padding-bottom: 10px;
    gap: 0px;
  }
`;

const Map = styled.div`
  width: 33%;
  gap: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 500px) {
    height: 300px;
    width: 100%;
    border: none;

    gap: 0px;
  }
`;

const MapOutline = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  background-image: url("/map.jpg");
  background-repeat: no-repeat;
  background-size: contain;
`;

const DressCode = styled.div`
  position: relative;
  width: 100%;
  height: 150px;
  display: flex;
  background-color: rgba(255, 255, 255, 0.7);
  justify-content: center;
  z-index: 2;
  align-items: center;
  margin-bottom: 100px;

  @media (max-width: 500px) {
    flex-direction: column;
    height: fit-content;
    margin-top: 50px;
  }
`;

const DressCodeContent = styled.div`
  padding: 25px 0px;
  min-width: 80%;
  max-width: 80%;
  display: flex;
  background-color: rgba(255, 255, 255, 0);
  z-index: 2;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const DresscodeRules = styled.span`
  font-size: 13px;
  width: 20%;

  @media (max-width: 500px) {
    width: 100%;
    text-align: center;
  }
`;

const Line = styled.hr`
  width: 100px;

  @media (max-width: 500px) {
    width: 55px;
    transform: rotate(90deg);
    margin: 40px 0px;
  }
`;

const ColorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4px;

  @media (max-width: 500px) {
    margin: 10px 0px;
  }
`;

const ColorCircle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: red;
`;

const Countdown = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
  background-color: #e8e5e1;
`;

const CountdownContainer = styled.div`
  width: 90%;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  background-color: #e8e5e1;

  @media (max-width: 500px) {
    align-items: center;
    width: 90%;
  }
`;

const CountdownTimer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
  border-radius: 50%;
  background-color: #79807e;
  color: white;
  font-size: 30px;

  @media (max-width: 500px) {
    margin: 10px 0px;
    width: 100px;
    height: 100px;
    font-size: 15px;
  }
`;

const Number = styled.h2`
  font-size: 50px;
  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

const Rose = styled.div`
  position: absolute;
  z-index: 1;
  left: -350px;
  bottom: -400px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url("/upside.png");
  width: 500px;
  height: 500px;

  @media (max-width: 500px) {
    display: none;
  }
`;
