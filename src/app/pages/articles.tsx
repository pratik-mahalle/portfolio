"use client";
import React from "react";
import Link from "next/link";
import { PinContainer } from "@/components/ui/3d-pin";

export function Article() {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-32 pb-20 overflow-hidden font-medium">
      <div className="px-4">
        <h2 className="md:text-4xl text-2xl lg:text-4xl font-bold text-left xl:pl-0 lg:mb-0 lg:pl-5 sm:mb-0 sm:pl-2">
          Articles
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-[0rem] w-full">
        {pinData.map((item, index) => (
          <div key={index}>
            <Link href={item.href} target="_blank">
              <PinContainer title={item.techstack} className="max-w-full">
                <div className="flex flex-col p-4 tracking-tight text-slate-100/50 h-[12rem] w-[18rem] lg:w-[16rem] lg:h-[14rem] sm:w-[18rem]">
                  <h3 className="font-bold text-base text-gray-100 mb-2">
                    {item.heading}
                  </h3>
                  <div className="text-sm text-gray-400 mb-4">
                    {item.description}
                  </div>
                </div>
              </PinContainer>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

const pinData = [
  {
    techstack: "pratikmahalle.live",
    href: "https://pratikmahalle.live/how-amazon-aurora-enhances-database-performance-in-modern-cloud-applications",
    heading: "How Amazon Aurora Enhances Database Performance",
    description:
      "Deep dive into Amazon Aurora's architecture, performance benefits, and how it optimizes database operations for modern cloud applications with enhanced scalability and reliability."
  },
  {
    techstack: "pratikmahalle.live",
    href: "https://pratikmahalle.live/simplifying-kubernetes-with-kubestellar",
    heading: "Simplifying Kubernetes with KubeStellar",
    description:
      "Explore how KubeStellar simplifies Kubernetes cluster management, offering advanced features for multi-cluster orchestration and streamlined container deployment."
  },
  {
    techstack: "pratikmahalle.live",
    href: "https://pratikmahalle.live/accessing-aws-documentdb-with-dynamic-secrets-via-hashicorp-vault",
    heading: "AWS DocumentDB with Dynamic Secrets via HashiCorp Vault",
    description:
      "Learn how to implement secure access to AWS DocumentDB using HashiCorp Vault's dynamic secrets management, enhancing database security in cloud environments."
  },
  {
    techstack: "pratikmahalle.live",
    href: "https://pratikmahalle.live/kubernetes-service-explained-basic-usage-and-examples",
    heading: "Kubernetes Service Explained: Basic Usage and Examples",
    description:
      "A comprehensive guide to understanding Kubernetes Services, including different types, configurations, and practical examples for effective container networking."
  },
  {
    techstack: "pratikmahalle.live",
    href: "https://pratikmahalle.live/how-to-troubleshoot-kubernetes-clusters-effectively",
    heading: "How to Troubleshoot Kubernetes Clusters Effectively",
    description:
      "Master the essential techniques and tools for diagnosing and resolving common issues in Kubernetes clusters, ensuring optimal performance and reliability."
  },
  {
    techstack: "pratikmahalle.live",
    href: "https://pratikmahalle.live/troubleshooting-kubernetes-pods-a-complete-guide",
    heading: "Troubleshooting Kubernetes Pods: A Complete Guide",
    description:
      "In-depth guide to debugging Kubernetes pods, covering common issues, debugging strategies, and best practices for maintaining healthy pod deployments."
  },
  {
    techstack: "pratikmahalle.live",
    href: "https://pratikmahalle.live/embarking-on-the-cloud-odyssey-a-students-exploration-of-cloud-native-development",
    heading: "Embarking on the Cloud Odyssey: Cloud Native Development",
    description:
      "A student's journey into cloud-native development, exploring key concepts, tools, and practices in modern cloud architecture and application deployment."
  }
];
