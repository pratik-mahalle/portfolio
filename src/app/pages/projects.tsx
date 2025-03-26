"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ButtonsCard } from "@/components/ui/tailwindcss-buttons";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card.tsx";

const ThreeDCard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-20 ">
      <div className="px-4">
        <h2 className="md:text-4xl text-2xl lg:text-4xl font-bold text-left pb-12 xl:pl-0 lg:mb-0 sm:mb-0">
          Projects
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 sm:gap-3">
        {dummyData.map((item, index) => (
          <div key={index}>
            <CardContainer className="inter-var font-medium">
              <CardBody
                key={index}
                className="bg-black relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-white/[0.2] w-auto  h-auto rounded-xl p-6 border"
              >
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-gray-100 dark:text-white"
                >
                  {item.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-gray-400 text-sm max-w-sm mt-2"
                >
                  {item.description}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={item.image}
                    height="1000"
                    width="1000"
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                    // unoptimized
                    priority
                  />
                </CardItem>
                <div className="flex justify-end items-center mt-6">
                  <Link href={item.link} target="_blank">
                    <ButtonsCard>
                      <button className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                          View Project →
                        </span>
                      </button>
                    </ButtonsCard>
                  </Link>
                </div>
              </CardBody>
            </CardContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThreeDCard;

const dummyData = [
  {
    title: "AI-Driven Cloud Cost Optimization",
    description:
      "An intelligent cloud cost management solution that leverages AI to analyze cloud resource usage patterns and automatically optimize costs across AWS, Azure, and GCP platforms. Features include real-time monitoring, predictive analytics, and automated resource scaling",
    image:
      "https://raw.githubusercontent.com/pratik-mahalle/attachments/main/Screenshot%20From%202025-03-26%2009-06-30.png",
    link: "#"
  },
  {
    title: "Java application using SonarQube, Argo CD, Helm, and Kubernetes",
    description:
      "A comprehensive CI/CD pipeline implementation for Java applications featuring code quality analysis with SonarQube, GitOps deployment using Argo CD, Helm charts for package management, and Kubernetes for container orchestration. Demonstrates modern DevOps practices and automation.",
    image:
      "https://raw.githubusercontent.com/pratik-mahalle/attachments/main/Screenshot%20From%202025-03-26%2009-07-29.png",
    link: "#"
  },
  {
    title: "EKS-Terraform-GitHub-Actions",
    description:
      "An Infrastructure as Code (IaC) project that automates AWS EKS cluster deployment using Terraform and GitHub Actions. Features include automated cluster provisioning, infrastructure version control, and CI/CD pipeline integration for infrastructure changes.",
    image:
      "https://raw.githubusercontent.com/pratik-mahalle/attachments/main/Screenshot%20From%202025-03-26%2009-09-22.png",
    link: "#"
  },
];
