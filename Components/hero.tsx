import React from "react";
import "../app/globals.css";
import { Button, ChakraProvider, Stack } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Hero: React.FC = () => {
  return (
    <ChakraProvider>
      <div className="relative max-w-screen-xl w-full my-0 mx-auto px-4 pt-[18vh] pb-[14vh] md:pt-[26vh] md:pb-[18vh] slide delay01">
        {/* Background SVG */}
        <div className="absolute inset-0 flex justify-center items-center opacity-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-[80vw] h-[80vh] text-slate-500"
          >
            <polyline points="15 3 21 9 15 15"></polyline>
            <polyline points="9 21 3 15 9 9"></polyline>
          </svg>
        </div>

        {/* Text Content */}
        <p className="relative text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium text-gray-600 leading-relaxed slide delay md:leading-loose">
          Hey There! I&apos;m-
        </p>

        <br />
        <h1 className="relative text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-poppins font-semibold heroText pb-6 md:pb-8">
          Marmik Patel.
          <br />
          <span className="heroText2">Software Developer</span>
        </h1>
        <p className="relative text-base md:text-lg lg:text-xl xl:text-2xl font-light text-gray-600 leading-relaxed slide delay02 md:leading-loose mb-8 md:mb-10">
          Driven by a passion for coding,
          <br />
          My goal is to turn ideas into reality with elegant and efficient code.
        </p>

        {/* Social Media Links */}
        <div className="relative slide delay02">
          <Stack
            direction="row"
            spacing={4}
            align="center"
            justify={{ sm: "space-evenly", md: "flex-start" }}
          >
            <a href="https://github.com/marmik28">
              <Button
                leftIcon={<FaGithub />}
                colorScheme="black"
                variant="outline"
                size={{ base: "sm", md: "md" }}
                className="flex items-center px-6 py-3 text-lg font-medium hover:bg-[#3CCF91] transition duration-300 ease-in-out"
              >
                Github
              </Button>
            </a>
            <a href="www.linkedin.com/in/marmikpatel28">
              <Button
                leftIcon={<FaLinkedin />}
                colorScheme="black"
                variant="outline"
                size={{ base: "sm", md: "md" }}
                className="flex items-center px-6 py-3 text-lg font-medium hover:bg-[#3CCF91] transition duration-300 ease-in-out"
              >
                LinkedIn
              </Button>
            </a>
            <a href="mailto:marmik28112002@gmail.com">
              <Button
                leftIcon={<FaEnvelope />}
                colorScheme="black"
                variant="outline"
                size={{ base: "sm", md: "md" }}
                className="flex items-center px-6 py-3 text-lg font-medium hover:bg-[#3CCF91] transition duration-300 ease-in-out"
              >
                Email
              </Button>
            </a>
          </Stack>
        </div>
      </div>
    </ChakraProvider>
  );
};

export default Hero;
