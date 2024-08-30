import React from 'react';
import { ChakraProvider, Box, Text, VStack, Divider } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const ResumeSection: React.FC = () => {
    return (
        <ChakraProvider>
            <div className="relative max-w-screen-xl w-full my-0 mx-auto px-4 pt-[2vh] pb-[10vh] md:pb-[12vh]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <Text className="text-4xl md:text-5xl lg:text-6xl font-poppins font-semibold pb-8">
                        Resume
                    </Text>
                    <VStack spacing={10} align="stretch">
                        {/* Work Experience */}
                        <Box>
                            <Text className="text-2xl md:text-3xl font-semibold pb-4">
                                Work Experience
                            </Text>
                            <Box>
                                <Box className="timeline-item">
                                    <Text className="font-semibold">Software Developer at XYZ Corp</Text>
                                    <Text className="text-gray-600">June 2020 - Present</Text>
                                    <Text className="mt-2">
                                        Developed and maintained web applications using React and Node.js. Led a team of developers to deliver a major project on time.
                                    </Text>
                                </Box>
                                <Divider my={6} />
                                <Box className="timeline-item">
                                    <Text className="font-semibold">Junior Developer at ABC Ltd</Text>
                                    <Text className="text-gray-600">Jan 2018 - May 2020</Text>
                                    <Text className="mt-2">
                                        Assisted in the development of internal tools and client-facing applications. Improved application performance by 30%.
                                    </Text>
                                </Box>
                            </Box>
                        </Box>

                        {/* Education */}
                        <Box>
                            <Text className="text-2xl md:text-3xl font-semibold pb-4">
                                Education
                            </Text>
                            <Box>
                                <Box className="timeline-item">
                                    <Text className="font-semibold">Bachelor of Science in Computer Science</Text>
                                    <Text className="text-gray-600">University of Somewhere, 2014 - 2018</Text>
                                    <Text className="mt-2">
                                        Graduated with honors. Focused on software engineering, algorithms, and data structures.
                                    </Text>
                                </Box>
                            </Box>
                        </Box>
                    </VStack>
                </motion.div>
            </div>
        </ChakraProvider>
    );
};

export default ResumeSection;
