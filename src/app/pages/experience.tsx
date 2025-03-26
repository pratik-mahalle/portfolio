import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Timeline } from "@/components/ui/timeline";

export function Experience() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 770);
    };

    // Check screen size on initial render
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const data = [
    {
      title: (
        <Image
          src="https://raw.githubusercontent.com/pratik-mahalle/attachments/main/STL%20Logo-bwpd20jn.png"
          alt="samyak-tech-lab-logo"
          width={200}
          height={60}
          priority
        />
      ),
      duration: "2025 – Present",
      smallScreenLogo: (
        <Image
          src="https://raw.githubusercontent.com/pratik-mahalle/attachments/main/STL%20Logo-bwpd20jn.png"
          alt="samyak-tech-lab-logo"
          width={50}
          height={50}
          priority
        />
      ),
      content: (
        <div className="max-w-4xl mx-auto">
          <div>
            <h1 className="text-3xl text-white mb-6">
              <p className="font-bold flex text-xl md:text-xl lg:text-2xl">
                Cloud Infrastructure Intern
              </p>

              {/* Show only if screen size is <= 770px */}
              {isSmallScreen && (
                <p className="font-light flex text-xs mt-2">
                  <span className="font-medium mr-2">Samyak Tech Lab</span>
                  (Feb 2025 – Present)
                </p>
              )}

              {/* Show only if screen size is > 770px */}
              {!isSmallScreen && (
                <p className="text-gray-400 text-base md:text-sm mt-2 block italic">
                  (Feb 2025 – Present)
                </p>
              )}
            </h1>

            <div className="text-gray-400 font-medium text-sm">
              <span className="text-white">Samyak Tech Lab</span> is a{" "}
              <span className="text-white">technology solutions company</span>{" "}
              specializing in <span className="text-white">cloud infrastructure</span>,{" "}
              <span className="text-white">DevOps automation</span>, and{" "}
              <span className="text-white">cost optimization</span> for scalable
              deployments.
            </div>

            <div className="text-sm text-gray-400 mt-8 font-medium">
              <p>
                At <span className="text-white">Samyak Tech Lab</span>, I design and
                deploy <span className="text-white">cloud infrastructure solutions</span>,
                ensuring optimized performance and cost efficiency. My responsibilities
                include managing <span className="text-white">AWS services</span> such
                as <span className="text-white">EC2</span>,{" "}
                <span className="text-white">S3</span>,{" "}
                <span className="text-white">IAM</span>, and{" "}
                <span className="text-white">VPC</span> to create secure and scalable
                environments.
              </p>
              <p className="mt-2">
                Additionally, I automate infrastructure provisioning using{" "}
                <span className="text-white">Terraform</span>, streamlining the{" "}
                <span className="text-white">CI/CD pipeline</span> for faster and more
                reliable deployments. By implementing best practices in{" "}
                <span className="text-white">cloud security</span> and{" "}
                <span className="text-white">automation</span>, I enhance the overall
                efficiency of cloud-based operations.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: (
        <Image
          src="https://raw.githubusercontent.com/pratik-mahalle/attachments/main/1721645728419.jpg"
          alt="musitech-logo"
          width={120}
          height={40}
          priority
        />
      ),
      duration: "2024 – 2024",
      smallScreenLogo: (
        <Image
          src="https://raw.githubusercontent.com/pratik-mahalle/attachments/main/1721645728419.jpg"
          alt="musitech-logo"
          width={60}
          height={60}
          priority
        />
      ),
      content: (
        <div className="max-w-4xl mx-auto">
          <div>
            <h1 className="text-3xl text-white mb-6">
              <p className="font-bold flex text-xl md:text-xl lg:text-2xl">
                DevRel
              </p>
              {isSmallScreen && (
                <p className="font-light flex text-xs mt-2">
                  <span className="font-medium mr-2">MusiTech</span>
                  (Mar 2024 – Aug 2024)
                </p>
              )}
              {!isSmallScreen && (
                <p className="text-gray-400 text-base md:text-sm mt-2 block italic">
                  (Mar 2024 – Aug 2024)
                </p>
              )}
            </h1>

            <div className="text-sm text-gray-400 font-medium">
              <span className="text-white">MusiTech</span> is a{" "}
              <span className="text-white">technology-driven company</span> that focuses on providing{" "}
              <span className="text-white">innovative digital solutions</span> for the{" "}
              <span className="text-white">music industry</span>.
            </div>

            <div className="text-sm text-gray-400 mt-8 font-medium">
              <p>
                At <span className="text-white">MusiTech</span>, I represented the company at{" "}
                <span className="text-white">conferences and events</span>, delivering{" "}
                <span className="text-white">impactful talks and presentations</span> to engage with{" "}
                <span className="text-white">developers</span> and{" "}
                <span className="text-white">industry professionals</span>.
              </p>
              <p className="mt-2">
                I collaborated with developers to gather{" "}
                <span className="text-white">feedback</span>, address{" "}
                <span className="text-white">technical challenges</span>, and improve the{" "}
                <span className="text-white">user experience</span> of MusiTech&apos;s products. My role involved{" "}
                <span className="text-white">fostering relationships</span> within the developer community, 
                enhancing <span className="text-white">product adoption</span>, and driving{" "}
                <span className="text-white">engagement</span> through technical content and advocacy.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      title: (
        <Image
          src="https://raw.githubusercontent.com/pratik-mahalle/attachments/main/1644811039724.jpeg"
          alt="cloud-counselage-logo"
          width={200}
          height={60}
          priority
        />
      ),
      smallScreenLogo: (
        <Image
          src="https://raw.githubusercontent.com/pratik-mahalle/attachments/main/1644811039724.jpeg"
          alt="cloud-counselage-logo"
          width={300}
          height={80}
          priority
        />
      ),
      content: (
        <div className="max-w-4xl mx-auto">
          <div>
            <h1 className="text-3xl text-white mb-6">
              <p className="font-bold flex text-xl md:text-xl lg:text-2xl">
                Cloud Intern
              </p>
              {isSmallScreen && (
                <p className="font-light flex text-xs mt-2">
                  <span className="font-medium mr-2">Cloud Counselage</span>
                  (Aug 2024 – Oct 2024)
                </p>
              )}
              {!isSmallScreen && (
                <p className="text-gray-400 text-base md:text-sm mt-2 block italic">
                  (Aug 2024 – Oct 2024)
                </p>
              )}
            </h1>

            <div className="text-sm text-gray-400 font-medium">
              <span className="text-white">Cloud Counselage</span> is a{" "}
              <span className="text-white">cloud consulting firm</span> that provides{" "}
              <span className="text-white">cutting-edge cloud solutions</span> to businesses, 
              ensuring <span className="text-white">high availability</span> and{" "}
              <span className="text-white">performance</span>.
            </div>

            <div className="text-sm text-gray-400 mt-8 font-medium">
              <p>
                During my internship at <span className="text-white">Cloud Counselage</span>, 
                I implemented <span className="text-white">cloud infrastructure solutions</span>, 
                managing cloud resources to optimize deployments for{" "}
                <span className="text-white">efficiency</span> and{" "}
                <span className="text-white">scalability</span>.
              </p>
              <p className="mt-2">
                I automated <span className="text-white">cloud management tasks</span> using scripts, 
                enhancing <span className="text-white">operational performance</span> and reducing{" "}
                <span className="text-white">manual intervention</span>. My contributions helped 
                improve <span className="text-white">cloud efficiency</span> and{" "}
                <span className="text-white">reliability</span>, ensuring seamless operations 
                for various business applications.
              </p>
            </div>
          </div>
        </div>
      )
    }
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 mt-20 ">
      <div className="px-4">
        <h2 className="md:text-4xl text-2xl lg:text-4xl font-bold text-left pb-12 xl:pl-0 lg:mb-0 sm:mb-0 ">
          Experience
        </h2>
      </div>
      <Timeline data={data} />
    </div>
  );
}
