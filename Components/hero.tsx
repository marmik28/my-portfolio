import React from "react";
import "../app/globals.css";
import { Button, ChakraProvider, Stack } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Hero: React.FC = () => {
    return (
        <ChakraProvider>
            <div className="max-w-screen-xl w-full my-0 mx-auto px-4 pt-[16vh] pb-[12vh] md:pt-[24vh] md:pb-[16vh]">
                <h1 className="text-3xl md:text-6xl lg:text-7xl font-poppins font-semibold heroText pb-6 md:pb-8 slide delay01">
                    Software Developer.
                    <br />
                    Crafting solutions with coding.
                </h1>
                <div>
                    <Stack
                    direction="row"
                    spacing={4}
                    align="center"
                    justify={{ sm: "space-evenly", md: "flex-start" }}
                >
                    <a
                        href="https://github.com"
                    >
                        <Button
                            leftIcon={<FaGithub />}
                            colorScheme="black"
                            variant="outline"
                            size={{ base: "sm", md: "md" }}
                            className="flex items-center px-6 py-3 text-lg font-medium hover:bg-[#f5f5f5] transition duration-300 ease-in-out"
                        >
                            Github
                        </Button>
                    </a>
                    <a
                        href="https://linkedin.com"
                    >
                        <Button
                            leftIcon={<FaLinkedin />}
                            colorScheme="black"
                            variant="outline"
                            size={{ base: "sm", md: "md" }}
                            className="flex items-center px-6 py-3 text-lg font-medium hover:bg-[#f5f5f5] transition duration-300 ease-in-out"
                        >
                            LinkedIn
                        </Button>
                    </a>
                    <a
                        href="mailto:example@example.com"
                    >
                        <Button
                            leftIcon={<FaEnvelope />}
                            colorScheme="black"
                            variant="outline"
                            size={{ base: "sm", md: "md" }}
                            className="flex items-center px-6 py-3 text-lg font-medium hover:bg-[#f5f5f5] transition duration-300 ease-in-out"
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
