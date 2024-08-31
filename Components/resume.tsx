import React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Divider,
  SimpleGrid,
  Image,
  Flex,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaPython,
  FaJava,
  FaNodeJs,
  FaDocker,
  FaHtml5,
  FaCss3Alt,
  FaGit,
  FaReact,
} from "react-icons/fa";
import {
  SiC,
  SiCsharp,
  SiNextdotjs,
  SiJenkins,
  SiJavascript,
} from "react-icons/si";

const MotionBox = motion(Box);

const ResumeSection: React.FC = () => {
  return (
    <ChakraProvider>
      <Box
        className="max-w-screen-xl w-full mx-auto"
        px={{ base: 4, md: 8 }}
        pt={{ base: "2vh", md: "4vh" }}
        pb={{ base: "10vh", md: "12vh" }}
        position="relative"
      >
        {/* Resume and Education Section */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
          mb={{ base: 5, md: 15 }}
        >
          <Text
            fontFamily="Poppins, sans-serif"
            fontWeight="700"
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            pb={8}
          >
            Resume
          </Text>
          <VStack spacing={10} align="stretch">
            {/* Education */}
            <Box>
              <Text
                fontWeight="700"
                fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
                pb={4}
              >
                Education
              </Text>
              <Box>
                <Box mb={{ base: 3, md: 6 }}>
                  <Text fontWeight="600" fontSize={{ base: "md", md: "lg" }}>
                    Bachelor of Science in Computer Science
                  </Text>
                  <Text color="gray.600" fontSize={{ base: "sm", md: "md" }}>
                    Concordia University, 2022 - 2026
                  </Text>
                </Box>
              </Box>
            </Box>
          </VStack>
        </MotionBox>

        {/* Work Experience Section */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
          mb={{ base: 5, md: 15 }}
        >
          <VStack spacing={10} align="stretch">
            <Box mb={{ base: 3, md: 6 }}>
              <Text
                fontWeight="700"
                fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
                pb={4}
              >
                Work Experience
              </Text>
              <Box>
                {/* Matrox Video */}
                <Box mb={6}>
                  <Text fontWeight="600" fontSize={{ base: "md", md: "lg" }}>
                    Software Developer Intern at Matrox Video
                  </Text>
                  <Text color="gray.600" fontSize={{ base: "sm", md: "md" }}>
                    May 2024 - Present
                  </Text>
                  <Text mt={2} fontSize={{ base: "sm", md: "md" }}>
                    Developed and maintained IPKVM device management software
                    using Java and C#.
                  </Text>
                </Box>
                <Divider />
                {/* Root On */}
                <Box mt={6}>
                  <Text fontWeight="600" fontSize={{ base: "md", md: "lg" }}>
                    Full-Stack Developer at Root On
                  </Text>
                  <Text color="gray.600" fontSize={{ base: "sm", md: "md" }}>
                    Sept 2023 - April 2024
                  </Text>
                  <Text mt={2} fontSize={{ base: "sm", md: "md" }}>
                    Built a user-friendly global website, developed RESTful APIs
                    to support seamless communication between the front-end and
                    back-end.
                  </Text>
                </Box>
              </Box>
            </Box>
          </VStack>
        </MotionBox>

        {/* Skills Section */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.1 }}
          mb={{ base: 5, md: 15 }}
        >
          <VStack spacing={10} align="stretch">
            <Box mb={{ base: 3, md: 6 }}>
              <Text
                fontWeight="700"
                fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
                pb={4}
              >
                Skills
              </Text>

              {/* Programming Languages */}
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.4 }}
                mb={10}
              >
                <Text
                  fontWeight="600"
                  fontSize={{ base: "lg", md: "xl" }}
                  pb={4}
                >
                  Programming Languages
                </Text>
                <SimpleGrid columns={{ base: 2, lg: 3 }} spacing={6}>
                  <Flex align="center">
                    <Box boxSize={{ base: "30px", md: "40px" }}>
                      <FaPython size="100%" color="#3776AB" />
                    </Box>
                    <Text ml={4} fontSize={{ base: "sm", md: "md" }}>
                      Python
                    </Text>
                  </Flex>
                  <Flex align="center">
                    <Box boxSize={{ base: "30px", md: "40px" }}>
                      <FaJava size="100%" color="#007396" />
                    </Box>
                    <Text ml={4} fontSize={{ base: "sm", md: "md" }}>
                      Java
                    </Text>
                  </Flex>
                  <Flex align="center">
                    <Box boxSize={{ base: "30px", md: "40px" }}>
                      <SiC size="100%" color="#A8B9CC" />
                    </Box>
                    <Text ml={4} fontSize={{ base: "sm", md: "md" }}>
                      C
                    </Text>
                  </Flex>
                  <Flex align="center">
                    <Box boxSize={{ base: "30px", md: "40px" }}>
                      <SiCsharp size="100%" color="#239120" />
                    </Box>
                    <Text ml={4} fontSize={{ base: "sm", md: "md" }}>
                      C#
                    </Text>
                  </Flex>
                </SimpleGrid>
              </MotionBox>

              {/* Web Development */}
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.4 }}
                mb={10}
              >
                <Text
                  fontWeight="600"
                  fontSize={{ base: "lg", md: "xl" }}
                  pb={4}
                >
                  Web Development
                </Text>
                <SimpleGrid columns={{ base: 2, lg: 3 }} spacing={6}>
                  <Flex align="center">
                    <Box boxSize={{ base: "30px", md: "40px" }}>
                      <FaHtml5 size="100%" color="#e34c26" />
                    </Box>
                    <Text ml={4} fontSize={{ base: "sm", md: "md" }}>
                      HTML
                    </Text>
                  </Flex>
                  <Flex align="center">
                    <Box boxSize={{ base: "30px", md: "40px" }}>
                      <FaCss3Alt size="100%" color="#1572B6" />
                    </Box>
                    <Text ml={4} fontSize={{ base: "sm", md: "md" }}>
                      CSS
                    </Text>
                  </Flex>
                  <Flex align="center">
                    <Box boxSize={{ base: "30px", md: "40px" }}>
                      <SiJavascript size="100%" color="#f0db4f" />
                    </Box>
                    <Text ml={4} fontSize={{ base: "sm", md: "md" }}>
                      JavaScript
                    </Text>
                  </Flex>
                  <Flex align="center">
                    <Box boxSize={{ base: "30px", md: "40px" }}>
                      <SiNextdotjs size="100%" color="#000000" />
                    </Box>
                    <Text ml={4} fontSize={{ base: "sm", md: "md" }}>
                      Next.js
                    </Text>
                  </Flex>
                  <Flex align="center">
                    <Box boxSize={{ base: "30px", md: "40px" }}>
                      <FaNodeJs size="100%" color="#339933" />
                    </Box>
                    <Text ml={4} fontSize={{ base: "sm", md: "md" }}>
                      Node.js
                    </Text>
                  </Flex>
                  <Flex align="center">
                    <Box boxSize={{ base: "30px", md: "40px" }}>
                      <FaReact size="100%" color="#61DAFB" />
                    </Box>
                    <Text ml={4} fontSize={{ base: "sm", md: "md" }}>
                      React
                    </Text>
                  </Flex>
                </SimpleGrid>
              </MotionBox>

              {/* DevOps & Tools */}
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.4 }}
              >
                <Text
                  fontWeight="600"
                  fontSize={{ base: "lg", md: "xl" }}
                  pb={4}
                >
                  DevOps & Tools
                </Text>
                <SimpleGrid columns={{ base: 2, lg: 3 }} spacing={6}>
                  <Flex align="center">
                    <Box boxSize={{ base: "30px", md: "40px" }}>
                      <FaDocker size="100%" color="#2496ED" />
                    </Box>
                    <Text ml={4} fontSize={{ base: "sm", md: "md" }}>
                      Docker
                    </Text>
                  </Flex>
                  <Flex align="center">
                    <Box boxSize={{ base: "30px", md: "40px" }}>
                      <SiJenkins size="100%" color="#D24939" />
                    </Box>
                    <Text ml={4} fontSize={{ base: "sm", md: "md" }}>
                      Jenkins
                    </Text>
                  </Flex>
                  <Flex align="center">
                    <Box boxSize={{ base: "30px", md: "40px" }}>
                      <FaGit size="100%" color="#F1502F" />
                    </Box>
                    <Text ml={4} fontSize={{ base: "sm", md: "md" }}>
                      Git
                    </Text>
                  </Flex>
                </SimpleGrid>
              </MotionBox>
            </Box>
          </VStack>
        </MotionBox>

        {/* Certifications Section */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <VStack spacing={10} align="stretch">
            <Box mb={{ base: 3, md: 6 }}>
              <Text
                fontWeight="700"
                fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
                pb={4}
              >
                Certifications
              </Text>
              <Box>
                {/* Microsoft Certificate */}
                <Box mb={6}>
                  <Box
                    display={{ base: "block", md: "flex" }}
                    alignItems="center"
                  >
                    <Image
                      alt="Microsoft_Certificate"
                      src="/Microsoft_Certificate.png"
                      width={200}
                      objectFit="contain"
                      mb={{ base: 4, md: 0 }}
                      mr={{ md: 4 }}
                    />
                    <Box>
                      <Text
                        fontWeight="600"
                        fontSize={{ base: "md", md: "lg" }}
                      >
                        Microsoft Introduction to Artificial Intelligence
                      </Text>
                      <Text
                        color="gray.600"
                        fontSize={{ base: "sm", md: "md" }}
                      >
                        Microsoft, 2020
                      </Text>
                      <Text mt={2} fontSize={{ base: "sm", md: "md" }}>
                        Earned certification for demonstrating expertise in AI
                        concepts and applications.
                      </Text>
                    </Box>
                  </Box>
                </Box>
                <Divider />
                {/* Harvard Certificate */}
                <Box mt={6}>
                  <Box
                    display={{ base: "block", md: "flex" }}
                    alignItems="center"
                  >
                    <Image
                      alt="Harvard_Certificate"
                      src="/Harvard_Certificate.png"
                      width={200}
                      objectFit="contain"
                      mb={{ base: 4, md: 0 }}
                      mr={{ md: 4 }}
                    />
                    <Box>
                      <Text
                        fontWeight="600"
                        fontSize={{ base: "md", md: "lg" }}
                      >
                        Introduction to Computer Science
                      </Text>
                      <Text
                        color="gray.600"
                        fontSize={{ base: "sm", md: "md" }}
                      >
                        HarvardX, 2021
                      </Text>
                      <Text mt={2} fontSize={{ base: "sm", md: "md" }}>
                        Completed a comprehensive course of Computer Science
                        offered at HarvardX.
                      </Text>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </VStack>
        </MotionBox>
      </Box>
    </ChakraProvider>
  );
};

export default ResumeSection;
