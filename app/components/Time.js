// components/KolkataTime.js
"use client";
import React, { useState, useEffect } from "react";
import moment from "moment-timezone";
import { Space_Mono } from "next/font/google";

const space = Space_Mono({
  weight: "400",
  style: "italic",
  subsets: ["latin"],
});

const KolkataTime = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const time = moment().tz("Asia/Kolkata").format("hh:mm:ss A");
      setCurrentTime(time);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div className={space.className}>{currentTime} / KOLKATA</div>;
};

export default KolkataTime;
