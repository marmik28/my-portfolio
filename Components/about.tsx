import React from "react";
import "../app/globals.css";
import { ChakraProvider, Box, Text, Stack, Image, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import "../app/globals.css";

const AboutMe: React.FC = () => {
    return (
        <ChakraProvider>
            <div className="relative max-w-screen-xl w-full my-0 mx-auto px-4 pt-[2vh] pb-[10vh] md:pb-[12vh]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <Flex
                        direction={{ base: "column", md: "row" }}
                        alignItems="center"
                        justifyContent="space-between"
                        className="relative"
                    >
                        <Box flex="1">
                            <Text className="text-4xl md:text-5xl lg:text-6xl font-poppins font-semibold pb-4">
                                About Me
                            </Text>
                            <Stack spacing={6} className="text-base md:text-lg lg:text-xl font-light text-gray-600 leading-relaxed md:leading-loose">
                                <Text>
                                    I'm Marmik Patel, a software developer with a passion for creating modern, scalable web applications.
                                </Text>
                                <Text>
                                    My journey in coding began with a deep fascination for problem-solving and a love for technology.
                                    Over the years, I've honed my skills in full-stack development, mastering technologies like React,
                                    Node.js, and more.
                                </Text>
                                <Text>
                                    I believe in writing clean, efficient code that not only works but also adds value to the user experience.
                                    When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and
                                    engaging with the developer community.
                                </Text>
                                <Text>
                                    I'm constantly learning and evolving, driven by my passion for coding and a commitment to delivering
                                    high-quality software solutions.
                                </Text>
                            </Stack>
                        </Box>

                        {/* Image */}
                        <Box
                            flex="1"
                            mt={{ base: 8, md: 0 }}
                            ml={{ base: 0, md: 8 }}
                            textAlign={{ base: "center", md: "right" }}
                        >
                            <Image
                                src="Capt.jpg"
                                alt="Marmik Patel"
                                borderRadius="full"
                                boxSize={{ base: "150px", md: "300px" }}
                                objectFit="cover"
                                mx="auto"
                            />
                        </Box>
                    </Flex>
                </motion.div>
            </div>
        </ChakraProvider>
    );
};

export default AboutMe;
