"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { useSectionInView } from "@/lib/hooks";

export default function AboutSection() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className=" mb-8\ w-full sm:px-24 text-center leading-6 sm:leading-8 sm:mb-10 scroll-mt-28 text-sm sm:text-base"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-6">
        After securing a Master&apos;s in{" "}
        <span className="font-medium">Applied Computer Science</span> from
        Concordia University, my passion for programming propelled me deeper
        into <span className="font-medium">web development</span>. The{" "}
        <span className="italic">intrigue of solving complex problems</span> and
        the exhilaration when a solution materializes is what fuels me. Built on
        a foundation of technologies like{" "}
        <span className="font-medium">
          Java, Spring Boot, and MySQL
        </span>
        , I&apos;ve broadened my expertise to include <span className="font-medium">JavaScript</span> and frameworks like <span className="font-medium">MongoDB, React, Node.js, and Express.js</span>.
        Embracing the journey of{" "}
        <span className="underline">continual learning</span> is core to my
        ethos. During my stint at <span className="font-medium">Just My Roots</span>,
        I optimised and improved the product search api, resulting in
        reduced response times. Similarly, my time at{" "}
        <span className="font-medium">Newgen Software Technologies Ltd</span> revolved around 
        developing projects for major financial institutions, optimizing operations and enhancing profitability through Java backend solutions integrated with AWS and Spring Boot. Recognized for streamlining processes, introducing innovative features, and automating deployments, resulting in significant time and cost savings. I&apos;m
        presently scouting for a{" "}
        <span className="font-medium">full-time opportunity</span> as a software
        developer, keen to amplify my skills and leave impactful imprints.
      </p>
      <p>
      Beyond the world of coding, I have a deep love for travel and exploration. Join me on this journey as I seek new opportunities and destinations, both in the digital realm and around the world!
      </p>
    </motion.section>
  );
}
