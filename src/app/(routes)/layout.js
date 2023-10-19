"use client";
// export const metadata = {
//   title: "Denzil & Marliana",
//   description:
//     "We are excited to welcome you, our loved ones, to attend our special day and where our hearts first met, Cape Town, South Africa. From across the globe or down the road, we hope you can make the journey and help us in celebrating our new adventure as The Washington’s.",
// };
import {
  HeadingFont,
  TextFont,
  Epika,
  EpikaLight,
  EpikaMedium,
  EpikaBold,
} from "../fonts/font";

import StyledComponentsRegistry from "../lib/registry";
import styled from "styled-components";
import { BiMenu, BiXCircle } from "react-icons/bi";
import Link from "next/link";
import "../styles/global.css";

import { useState } from "react";

export default function RootLayout({ children }) {
  const [menu, setMenu] = useState(false);
  return (
    <html lang='en'>
      <head>
        <title>Denzil & Marliana</title>
        <meta
          name='description'
          content='We are excited to welcome you, our loved ones, to attend our special day and where our hearts first met, Cape Town, South Africa. From across the globe or down the road, we hope you can make the journey and help us in celebrating our new adventure as The Washington’s.'
        />
      </head>
      <StyledComponentsRegistry>
        <body style={{ margin: "0", padding: 0 }}>
          <MenuIconContainer
            onClick={() => {
              setMenu(true);
            }}>
            <BiMenu size={"30px"} />
          </MenuIconContainer>
          <div className={`menu-container ${menu ? "show" : ""}`}>
            <Menu>
              <Close>
                <BiXCircle
                  size={"30px"}
                  color='black'
                  onClick={() => {
                    setMenu(false);
                  }}
                />
              </Close>
              <LogoContainer>
                <Logo />
              </LogoContainer>
              <Links className={TextFont.className}>
                <LinkContainer>
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontWeight: 500,
                    }}
                    onClick={() => {
                      setMenu(false);
                    }}
                    href={"/"}>
                    COVER
                  </Link>
                </LinkContainer>
                <LinkContainer>
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontWeight: 500,
                    }}
                    onClick={() => {
                      setMenu(false);
                    }}
                    href={"/about"}>
                    WE DO
                  </Link>
                </LinkContainer>
                <LinkContainer>
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontWeight: 500,
                    }}
                    onClick={() => {
                      setMenu(false);
                    }}
                    href={"/rsvp"}>
                    RSVP
                  </Link>
                </LinkContainer>
                <LinkContainer>
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontWeight: 500,
                    }}
                    onClick={() => {
                      setMenu(false);
                    }}
                    href={"/hotels"}>
                    HOTELS
                  </Link>
                </LinkContainer>
                <LinkContainer>
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontWeight: 500,
                    }}
                    onClick={() => {
                      setMenu(false);
                    }}
                    href={"/travel"}>
                    TRAVEL
                  </Link>
                </LinkContainer>
                <LinkContainer>
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontWeight: 500,
                    }}
                    onClick={() => {
                      setMenu(false);
                    }}
                    href={"/gifts"}>
                    GIFTS
                  </Link>
                </LinkContainer>
                <LinkContainer>
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontWeight: 500,
                    }}
                    onClick={() => {
                      setMenu(false);
                    }}
                    href={"/faq"}>
                    FAQ's
                  </Link>
                </LinkContainer>
              </Links>
            </Menu>
          </div>
          {children}
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}

const MenuContainer = styled.div`
  position: fixed;
  left: -2000px;
  top: 0;
  display: flex;
  justify-content: center;
  background: white;
  width: 20vw;
  height: 100%;
  z-index: 1000;
  transition: left 1s ease-in-out;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 90%;
  color: black;
  color: white;
`;

const MenuIconContainer = styled.div`
  position: absolute;
  left: 25px;
  top: 9px;
  display: flex;
  justify-content: center;
  align-self: center;
  display: none;

  @media (max-width: 500px) {
    display: flex;
  }
`;

const Close = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  color: black;
`;

const LinkContainer = styled.div`
  display: flex;
  font-size: 20px;
  text-decoration: none;
  color: black;
`;

const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.div`
  background-image: url("/LogoBlack.png");
  width: 250px;
  height: 200px;
  background-size: contain;
  background-repeat: no-repeat;
`;
