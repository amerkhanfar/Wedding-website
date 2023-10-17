"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Hero from "../_components/Hero";
import {
  HeadingFont,
  TextFont,
  Epika,
  EpikaLight,
  EpikaMedium,
  EpikaBold,
} from "../fonts/font";

import "../styles/global.css";
export default function Home() {
  return <Hero></Hero>;
}
