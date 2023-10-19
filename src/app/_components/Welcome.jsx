import React from "react";
import styled from "styled-components";
import {
  HeadingFont,
  TextFont,
  Epika,
  EpikaLight,
  EpikaMedium,
  EpikaBold,
} from "../fonts/font";

const Welcome = () => {
  return (
    <Container>
      <WelcomeContent>
        <WelcomeImage></WelcomeImage>
        <WelcomeText>
          <Heading className={HeadingFont.className}>Welcome</Heading>
          <p
            className={TextFont.className}
            style={{ width: "80%", lineHeight: "1.2", fontSize: "18px" }}>
            We are excited to welcome you, our loved ones, to attend our special
            day and where our hearts first met, Cape Town, South Africa.
          </p>{" "}
          <p
            className={TextFont.className}
            style={{ width: "80%", lineHeight: "1.2", fontSize: "18px" }}>
            From across the globe or down the road, we hope you can make the
            journey and help us in celebrating our new adventure as The
            Washington’s.
          </p>
        </WelcomeText>
      </WelcomeContent>
      <Rose />
    </Container>
  );
};

export default Welcome;

const Container = styled.div`
  background-color: #e8e5e1;
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const Heading = styled.span`
  font-size: 60px;
  font-weight: 500;
  margin-bottom: 15px;
`;

const WelcomeContent = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 500px) {
    width: 100%;
    flex-direction: column;
  }
`;

const WelcomeImage = styled.div`
  width: 45%;
  background-image: url("/hero2.jpg");
  height: 85vh;
  background-size: cover;
  background-position: center;

  @media (max-width: 500px) {
    height: 50vh;
    width: 100%;
  }
`;

const WelcomeText = styled.div`
  background-color: rgba(248, 247, 245, 0.7);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  height: 350px;
  z-index: 2;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

const Rose = styled.div`
  position: absolute;
  z-index: 1;
  right: -250px;
  bottom: -400px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url("/olivepattern.png");
  width: 750px;
  height: 750px;

  @media (max-width: 500px) {
    display: none;
  }
`;
