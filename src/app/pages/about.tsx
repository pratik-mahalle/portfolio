"use client";

import Tooltip from "@/components/Tooltip";
import Link from "next/link";
import React from "react";
import { HiMiniBellAlert } from "react-icons/hi2";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="px-4">
        <h2 className="md:text-4xl text-2xl lg:text-4xl font-bold text-left pb-12 xl:pl-0 lg:mb-0 sm:mb-0 ">
          About me
        </h2>
      </div>
      <h3 className="md:text-xl text-sm lg:text-xl font-medium text-left relative z-20 text-gray-400 max-w-7xl pb-8 lg:mb-4 pl-4 pr-4">
        <p>
          Hello, I&apos;m Pratik Mahalle, also known as{" "}
          <span className="text-white">That DevOps Guy</span> in the tech community.
        </p>
        <p className="mt-6">
          With <span className="text-white">1 years </span> 
          of experience as a <span className="text-white"></span>
          <span className="text-white">Software Enginner</span>, I specialize
          in <span className="text-white"></span>Devops and Cloud.
        </p>
        <p className="mt-6">
          My technical expertise includes –{" "}
          <span className="text-white">Kubernetes</span>,{" "}
          <span className="text-white">Golang</span>, and{" "}
          {/* <span className="text-white">React ecosystems</span> */}
          <Tooltip
            text="Docker and CI/CD"
            tooltipText="Docker, CI/CD, Jenkins, Git, Github Actions"
            className="text-white"
          />
          , along with{" "}
          {/* <span className="text-white">Cloud technologies</span> */}
          <Tooltip
            text="Cloud technologies"
            tooltipText="AWS, GCP, Azure"
            className="text-white"
          />
          ,{/* <span className="text-white">Community Management</span> */}{" "}
          <Tooltip
            text="Community Management"
            tooltipText=""
            className="text-white"
          />
          ,{/* <span className="text-white">real-time communication</span> */}{" "}
          <Tooltip
            text="DevRel"
            tooltipText="DevRel, Content Writing, Social Media Management"
            className="text-white"
          />
        </p>
        <p className="mt-6">
          Currently, I&apos;m contributing my skills to{" "}
          <span className="text-white">Samyak Tech Labs!</span>
        </p>
        <p className="mt-6">
          I&apos;m passionate about pushing technological boundaries and
          delivering impactful solutions that drive success. My commitment to
          innovation and excellence defines every project I undertake.
        </p>
      </h3>
      <div className="flex justify-center items-center">
        <Link
          href={"https://pratikmahalle.live/newsletter"}
          target="_blank"
        >
          <button className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              &nbsp; Subscribe to my newsletter &nbsp;
              <HiMiniBellAlert className="mr-2 text-xl" />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
