"use client";

import React, { useState, useEffect } from "react"; // Import CSS module for styling

const ScrollDownButton = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;

      // Check if we have reached the bottom of the page
      if (windowHeight + scrollPosition >= document.body.scrollHeight) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`scroll__down ${isVisible ? "" : "fade__out"}`}>
      Scroll Down
    </div>
  );
};

export default ScrollDownButton;
