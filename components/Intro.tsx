"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import profilePicture from "@/public/profilePicture.jpg";
import { SocialIcon } from "react-social-icons";
import { useSectionInView } from "@/lib/hooks";
import { HiOutlineMail } from 'react-icons/hi';

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <div className="scroll-mt-[100rem]" id="home">
      <section ref={ref} className="flex flex-col ">
        <motion.div
          className="flex justify-center "
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }} // Animation duration
        >
          <Image
            src={profilePicture}
            alt="Jatin's profile picture"
            priority={true}
            quality={95}
            className="rounded-full h-32 w-32 sm:h-48 sm:w-48 border-4 sm:border-8 border-white object-cover drop-shadow-lg focus:scale-[1.05] hover:scale-[1.05] transition"
          />
        </motion.div>
        <motion.h1
          className=" mb-4 sm:mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 10,
            duration: 3,
          }}
        >
              <p className="mt-2 text-sm sm:text-2xl sm:px-32 sm:leading-9">
          <span className="italic font-bold mb-8">Code</span>, 
          <span className="italic text-yellow-800"> Coffee</span>, 
          <span className="italic font-bold"> Create</span>&apos;! I&apos;m 
          <span className="font-bold"> Jatin Arora, </span>
          <span className="text-gray-400 dark:text-gray-300">
            a back-end virtuoso and MERN stack developer, crafting seamless and powerful digital solutions with Java and the MERN stack!
          </span>
        </p>

        </motion.h1>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4  font-medium"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            type: "spring",
            stiffness: 260,
            damping: 10,
            duration: 2,
          }}
        >
     <div>
          <Link
  href="mailto:jatinnaroraa5@gmail.com"
  className="group text-sm mr-2 bg-emerald-800 text-white px-7 py-3 flex items-center gap-3 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-emerald-900 active:scale-105 transition drop-shadow-lg"
>
  Contact me  <HiOutlineMail className="opacity-70 group-hover:translate-x-1 transition" /> jatinnaroraa5@gmail.com {" "}
 
</Link>
          </div>
          <a
            className="group text-sm bg-white mr-2 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 drop-shadow-lg"
            href="/resume.pdf"
            download
          >
            Download CV{" "}
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
          </a>

          <div className="flex gap-4">
            <SocialIcon
              network="github"
              className="bg-white h-4 w-4 hover:text-gray-950 flex items-center  rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 drop-shadow-lg"
              href="https://github.com/jatin51997"
              target="_blank"
            />

            <SocialIcon
              network="linkedin"
              className="bg-white h-4 w-4 flex items-center   rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 drop-shadow-lg"
              href="https://www.linkedin.com/in/jatinnaroraa/"
              target="_blank"
            />
          </div>

          <div className="flex gap-4">
          <SocialIcon
              network="email"
              className="bg-white h-4 w-4  flex items-center   rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 drop-shadow-lg"
              href="mailto:jatinnaroraa5@gmail.com"
              target="_blank"
            />
            <SocialIcon
              network="instagram"
              className="bg-white h-4 w-4  flex items-center  rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 drop-shadow-lg"
              href="https://www.instagram.com/jatinnaroraa/"
              target="_blank"
            />
          </div>
      
         
          
        </motion.div>
      </section>
    </div>
  );
}
