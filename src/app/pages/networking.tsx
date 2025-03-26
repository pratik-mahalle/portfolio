"use client";

import React from "react";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import { FlipWords } from "@/components/ui/flip-words";

const Networking = () => {
  const words = ["Connecting, Learning, and Growing Together"];

  return (
    <div className="max-w-7xl mx-auto px-4 mt-10">
      <h2 className="md:text-4xl text-2xl lg:text-4xl font-bold text-left pb-12 xl:pl-0 lg:mb-0 sm:mb-0 relative z-10 w-[100%]">
        <div className="subtitle-box">
          <FlipWords words={words} duration={1000} />
        </div>
      </h2>
      <h3 className="md:text-xl text-sm lg:text-xl font-medium text-left text-gray-400 max-w-7xl pb-8 lg:mb-4 pl-0 relative z-0">
        <p className="pb-12">
          Explore my insights and experiences from various{" "}
          <span className="text-white"></span>industry events and
          <span className="text-white"></span>meetups, where I share{" "}
          <span className="text-white"></span>key takeaways,{" "}
          <span className="text-white"></span>valuable connections, and moments
          that shaped my professional journey.
        </p>
      </h3>
      <ParallaxScroll items={images} />
    </div>
  );
};

export default Networking;

const images = [
  {
    src: "https://raw.githubusercontent.com/pratik-mahalle/attachments/main/photo_2025-03-26_08-59-06%20(2).jpg",
    href: "#"
  },
  {
    src: "https://raw.githubusercontent.com/pratik-mahalle/attachments/main/photo_2025-03-26_08-59-06%20(3).jpg",
    href: "#"
  },
  {
    src: "https://raw.githubusercontent.com/pratik-mahalle/attachments/main/photo_2025-03-26_08-59-06.jpg",
    href: "#"
  },
  {
    src: "https://raw.githubusercontent.com/pratik-mahalle/attachments/main/photo_2025-03-26_08-59-07%20(2).jpg",
    href: "#"
  },
  {
    src: "https://raw.githubusercontent.com/pratik-mahalle/attachments/main/photo_2025-03-26_08-59-07%20(3).jpg",
    href: "#"
  },
  {
    src: "https://raw.githubusercontent.com/pratik-mahalle/attachments/main/photo_2025-03-26_08-59-07%20(4).jpg",
    href: "#"
  },
  {
    src: "https://raw.githubusercontent.com/pratik-mahalle/attachments/main/photo_2025-03-26_08-59-07.jpg",
    href: "#"
  },
  {
    src: "https://raw.githubusercontent.com/pratik-mahalle/attachments/main/photo_2025-03-26_08-59-08%20(2).jpg",
    href: "#"
  },
  {
    src: "https://raw.githubusercontent.com/pratik-mahalle/attachments/main/photo_2025-03-26_08-59-08.jpg",
    href: "#"
  },
  {
    src: "https://raw.githubusercontent.com/pratik-mahalle/attachments/main/photo_2025-03-26_09-05-19%20(2).jpg",
    href: "#"
  },
  {
    src: "https://raw.githubusercontent.com/pratik-mahalle/attachments/main/photo_2025-03-26_09-05-19.jpg",
    href: "#"
  }
];
