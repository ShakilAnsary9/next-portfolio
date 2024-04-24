"use client";
import { useEffect } from "react";

const Gsap = () => {
  useEffect(() => {
    require("https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js");
  }, []);
  return null;
};

export default Gsap;
