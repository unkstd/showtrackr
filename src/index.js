import "reset-css";
import "./scss/style.scss";

import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";

import Rellax from "rellax";

import { TweenMax } from "gsap";

window.onload = () => {
  TweenMax.fromTo(
    document.getElementById("app"),
    2.5,
    {
      css: {
        opacity: "0"
      }
    },
    {
      ease: Expo.easeOut,
      css: {
        opacity: "1"
      }
    }
  );

  TweenMax.fromTo(
    document.getElementsByClassName("hero-outer"),
    1,
    {
      css: {
        opacity: "0",
        transform: "scale(1.015)"
      }
    },
    {
      css: {
        opacity: "1",
        transform: "scale(1)"
      }
    }
  )
  const initSwiper = new Swiper(".swiper-container", {
    loop: true,
    slidesPerView: "auto",
    centeredSlides: true,
    freeMode: true,
    simulateTouch: false,
    noSwiping: true
  });

  const testimonials = new Swiper(".swiper-container-tweet", {
    loop: true,
    direction: "vertical",
    freeMode: true,
    slidesPerView: "auto",
    centeredSlides: true,
    simulateTouch: false,
    noSwiping: true
  });

  window.addEventListener("scroll", () => {
    document.getElementById("seriesSlider").style = `
    transition-duration: 0ms; transform: translate3d(${((window.scrollY -
      1146.5) /
      5) *
      -1 -
      200}px, 0px, 0px);
  `;

    document.querySelectorAll(".swiper-container-tweet")[0].style = `
    transition-duration: 0ms; transform: translate3d(0px, ${((window.scrollY -
      1146.5) /
      8) *
      -1 +
      100}px, 0px);
  `;

    document.querySelectorAll(".swiper-container-tweet")[1].style = `
    transition-duration: 0ms; transform: translate3d(0px, ${(window.scrollY -
      1146.5) /
      8 -
      300}px, 0px);
  `;

    document.getElementById("mobileTweets").style = `
    transition-duration: 0ms; transform: translate3d(${((window.scrollY -
      1146.5) /
      5) *
      -1 -
      200}px, 0px, 0px);
  `;
  });

  const initRellax = new Rellax(".parallaxItem", {
    speed: -2
  });

  if (window.innerWidth <= 1155) {
    document
      .getElementById("mobileTweets")
      .classList.add("swiper-container-mobileTweets");
    document.getElementById("mobileTweets").classList.remove("hidden");
    const mobileTweets = new Swiper(".swiper-container-mobileTweets", {
      loop: true,
      slidesPerView: "auto",
      centeredSlides: true,
      freeMode: true,
      simulateTouch: false,
      noSwiping: true
    });
  }

  document.querySelectorAll("nav ul li").forEach((link, index) => {
    TweenMax.from(link, 1, {
      ease: Expo.easeOut,
      css: {
        opacity: 0,
        transform: "translateY(20px)"
      }
    }).delay(0.05 * index + 1 / 10);
  });

  TweenMax.fromTo(
    document.getElementsByClassName("hero-inner-left__textWithInput-title"),
    2,
    {
      css: {
        opacity: "0",
        transform: "translateY(20px)"
      }
    },
    {
      ease: Expo.easeOut,
      css: {
        opacity: "1",
        transform: "translateY(0px)"
      }
    }
  ).delay(0.2);

  TweenMax.fromTo(
    document.getElementsByClassName("hero-inner-left__textWithInput-text"),
    2,
    {
      css: {
        opacity: "0",
        transform: "translateY(20px)"
      }
    },
    {
      ease: Expo.easeOut,
      css: {
        opacity: "1",
        transform: "translateY(0px)"
      }
    }
  ).delay(0.35);

  TweenMax.fromTo(
    document.getElementsByClassName("hero-inner-left__textWithInput-input"),
    2,
    {
      css: {
        opacity: "0",
        transform: "translateY(20px)"
      }
    },
    {
      ease: Expo.easeOut,
      css: {
        opacity: "1",
        transform: "translateY(0px)"
      }
    }
  ).delay(0.5);

  TweenMax.fromTo(
    document.getElementsByClassName("hero-inner-right__mockup"),
    2,
    {
      css: {
        opacity: "0",
        transform: "translateY(20px)"
      }
    },
    {
      ease: Expo.easeOut,
      css: {
        opacity: "1",
        transform: "translateY(0px)"
      }
    }
  ).delay(0.25);
};
