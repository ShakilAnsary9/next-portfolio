"use client";
import { useEffect } from "react";
import gsap from "gsap";

const LoadingScreen = () => {
  useEffect(() => {
    const animateCounter = () => {
      const counter3 = document.querySelector(".counter-3");
      for (let j = 0; j < 10; j++) {
        const div = document.createElement("div");
        div.className = "num";
        div.textContent = j;
        counter3.appendChild(div);
      }
      const finalDiv = document.createElement("div");
      finalDiv.className = "num";
      finalDiv.textContent = "0";
      counter3.appendChild(finalDiv);

      function animate(counter, duration, delay = 0) {
        const numHeight = counter.querySelector(".num").clientHeight;
        const totalDistance =
          (counter.querySelectorAll(".num").length - 1) * numHeight;

        gsap.to(counter, {
          y: -totalDistance,
          duration: duration,
          delay: delay,
          ease: "power2.inOut",
        });
      }

      animate(counter3, 5);
      animate(document.querySelector(".counter-2"), 6);
      animate(document.querySelector(".counter-1"), 2, 4);
    };

    animateCounter();

    gsap.to(".digit", {
      top: "-150px",
      stagger: {
        amount: 0.25,
      },
      delay: 6,
      duration: 1,
      ease: "power4.inOut",
    });

    gsap.to(".loader-1", {
      width: 160,
      duration: 6,
      ease: "power2.inOut",
    });

    gsap.to(".loader-2", {
      width: 160,
      duration: 6,
      ease: "power2.inOut",
    });

    gsap.to(".loader", {
      background: "none",
      delay: 6,
      duration: 0.1,
    });

    gsap.to(".loader-1", {
      rotate: -62,
      x: 82,
      y: -88,
      duration: 0.5,
      delay: 6,
    });
    gsap.to(".loader-2", {
      rotate: -62,
      x: -82,
      y: 88,
      duration: 0.5,
      delay: 6,
    });
    gsap.to(".loader", {
      scale: 300,
      duration: 1,
      delay: 7,
      ease: "power2.inOut",
    });
    gsap.to(".loading-screen", {
      opacity: 0,
      duration: 0.5,
      delay: 7.5,
      ease: "power1.inOut",
    });
    gsap.to(".loading-screen", {
      display: "none",
      delay: 7.5,
    });

    // Cleanup on unmount (optional)
    // return () => {
    //   // Clear any timers or animations if needed
    // };
  }, []); // Run once on component mount

  return (
    <div className="loading-screen">
      <div className="loader">
        <div className="loader-1 bar"></div>
        <div className="loader-2 bar"></div>
      </div>

      <div className="counter">
        <div className="counter-1 digit">
          <div className="num">0</div>
          <div className="num num1offset1">1</div>
        </div>
        <div className="counter-2 digit">
          <div class="num">0</div>
          <div class="num num1offset2">1</div>
          <div class="num">2</div>
          <div class="num">3</div>
          <div class="num">4</div>
          <div class="num">5</div>
          <div class="num">6</div>
          <div class="num">7</div>
          <div class="num">8</div>
          <div class="num">9</div>
          <div class="num">0</div>
        </div>
        <div className="counter-3 digit">
          <div class="num">0</div>
          <div class="num num1offset3">1</div>
          <div class="num">2</div>
          <div class="num">3</div>
          <div class="num">4</div>
          <div class="num">5</div>
          <div class="num">6</div>
          <div class="num">7</div>
          <div class="num">8</div>
          <div class="num">9</div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
