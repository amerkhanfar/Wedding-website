import React from "react";
import Link from "next/link";
import styled from "styled-components";
import "../styles/global.css";
import {
  HeadingFont,
  TextFont,
  Epika,
  EpikaLight,
  EpikaMedium,
  EpikaBold,
} from "../fonts/font";

const Navbar = () => {
  return (
    <NavbarContainer>
      <LogoContainer>
        <img src='/LogoBlack.png' width={210} height={150} />
      </LogoContainer>
      <LinksContainer>
        <Link className={`${TextFont.className}  link`} href={"/"}>
          COVER
        </Link>
        <Link className={`${TextFont.className}  link`} href={"/about"}>
          WE DO
        </Link>
        <Link className={`${TextFont.className}  link`} href={"/rsvp"}>
          RSVP
        </Link>
        <Link className={`${TextFont.className}  link`} href={"/hotels"}>
          HOTELS
        </Link>
        <Link className={`${TextFont.className}  link`} href={"/"}>
          TRAVEL
        </Link>
        <Link className={`${TextFont.className}  link`} href={"/gifts"}>
          GIFTS
        </Link>
        <Link className={`${TextFont.className}  link`} href={"/"}>
          FAQ's
        </Link>
      </LinksContainer>
    </NavbarContainer>
  );
};

export default Navbar;

const NavbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  padding-bottom: 10px;
`;

const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.div`
  background-image: url("/LogoBlack.png");
  width: 200px;
  height: 150px;
  background-size: contain;
  background-repeat: no-repeat;
`;

const LinksContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
`;