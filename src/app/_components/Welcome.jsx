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
            style={{ width: "80%", lineHeight: "1.2" }}>
            We are excited to welcome you, our loved ones, to attend our special
            day and where our hearts first met, Cape Town, South Africa.
          </p>{" "}
          <p
            className={TextFont.className}
            style={{ width: "80%", lineHeight: "1.2" }}>
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
  font-size: 55px;
  font-weight: 500;
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
  background-image: url("/WelcomeImage.jpg");
  height: 85vh;
  background-size: cover;

  @media (max-width: 500px) {
    height: 50vh;
    width: 100%;
  }
`;

const WelcomeText = styled.div`
  background-color: #f8f7f5;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  height: 300px;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

const Rose = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-image: url("/rose.png");
  width: 200px;
  height: 250px;

  @media (max-width: 500px) {
    display: none;
  }
`;
