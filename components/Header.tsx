"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
// import { HiOutlineMenu } from "react-icons/hi";

// const useIsMobile = (): boolean => {
//   const [isMobile, setIsMobile] = useState<boolean>(false);

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const mediaQuery = window.matchMedia("(max-width: 640px)");

//       const handleScreenChange = (e: MediaQueryListEvent) => {
//         setIsMobile(e.matches);
//       };
//       mediaQuery.addEventListener("change", handleScreenChange);

//       return () => {
//         mediaQuery.removeEventListener("change", handleScreenChange);
//       };
//     }
//   }, []);

//   return isMobile;
// };

const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  // const isMobile = useIsMobile();
  // const [dropdownActive, setdropdownActive] = useState(false);

  return (
    <>
      {/* {isMobile && (
        <header className="mobile fixed top-4 right-4  p-3 w-12 h-12 rounded-full object-cover bg-white shadow-lg z-[9999] flex space-between dark:bg-black">
          <button onClick={() => setdropdownActive((val) => !val)}>
            <motion.div
              className=""
              animate={{ rotate: dropdownActive ? 90 : 0 }} // Rotate the element by 90 degrees
              transition={{ duration: 0.3 }}
            >
              <HiOutlineMenu size={24} />
            </motion.div>
          </button>
        </header>
      )}
      {dropdownActive && (
        <motion.div
          className="fixed  z-[999] top-0 h-80 w-64 bg-white rounded-lg bg-opacity-100"
          initial={{ x: -100, y: 0, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
        >
          <nav className="">
            <ul className="flex flex-col h-full my-8 mx-4 gap-6 ">
              {links.map((link) => (
                <li onClick={() => setdropdownActive(false)} key={link.hash}>
                  <Link
                    className="text-zinc-950 transition dark:text-zinc-400"
                    href={link.hash}
                    key={link.hash}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </motion.div>
      )} */}
      {
        // !isMobile &&
        <header className="relative z-[999] flex justify-center ">
          <motion.div
            className="fixed top-0  h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white/[0.6] bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[48rem] sm:rounded-full  dark:bg-zinc-900/[0.7] dark:text-zinc-50 dark:text-opacity-90"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 10,
              duration: 2,
            }}
          ></motion.div>
          <nav className="flex fixed top-[0.15rem] h-12  py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 ">
            <ul className="flex w-full flex-wrap sm:pt-1.5 gap-y-1 text-[0.9rem] font-medium text-zinc-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
              {links.map((link) => (
                <motion.li
                  className="h-3/4 flex items-center justify-center relative"
                  key={link.hash}
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                    duration: 2,
                  }}
                >
                  <Link
                    key={link.hash}
                    className={clsx(
                      "flex items-center justify-center px-3 py-1 hover:text-zinc-950 transition dark:text-zinc-400 dark:hover:text-zinc-300 sm:py-3",
                      {
                        "text-zinc-950 dark:text-zinc-200":
                          activeSection === link.name,
                      }
                    )}
                    href={link.hash}
                    onClick={() => {
                      setActiveSection(link.name);
                      setTimeOfLastClick(Date.now());
                    }}
                  >
                    {link.name}

                    {link.name === activeSection && (
                      <motion.span
                        className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-zinc-800"
                        layoutId="activeSection" //concept got from framer motion
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      ></motion.span>
                    )}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>
        </header>
      }
    </>
  );
};

export default Header;
