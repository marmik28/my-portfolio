import React from "react";
import { ChakraProvider, Stack, Text, Button } from "@chakra-ui/react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <ChakraProvider>
            <footer className="py-8">
                <div className="max-w-screen-xl w-full my-0 mx-auto px-4">
                    {/* Footer Content */}
                    <Stack
                        direction={{ base: "column", md: "row" }}
                        spacing={6}
                        align="center"
                        justify="center"
                        mb={8}
                    >
                        <Text fontSize="lg" fontWeight="medium">
                            © {new Date().getFullYear()} Marmik Patel. All rights reserved.
                        </Text>
                        
                    </Stack>

                    {/* Social Media Links */}
                    <Stack
                        direction="row"
                        spacing={4}
                        align="center"
                        justify="center"
                    >
                        <Link href="https://github.com/marmik28" passHref>
                            <Button
                                leftIcon={<FaGithub />}
                                colorScheme="blackAlpha"
                                variant="outline"
                                size="md"
                                className="flex items-center px-6 py-3 text-lg font-medium hover:bg-[#3CCF91] transition duration-300 ease-in-out"
                            >
                                Github
                            </Button>
                        </Link>
                        <Link href="https://www.linkedin.com/in/marmikpatel28" passHref>
                            <Button
                                leftIcon={<FaLinkedin />}
                                colorScheme="blackAlpha"
                                variant="outline"
                                size="md"
                                className="flex items-center px-6 py-3 text-lg font-medium hover:bg-[#3CCF91] transition duration-300 ease-in-out"
                            >
                                LinkedIn
                            </Button>
                        </Link>
                        <Link href="mailto:marmik28112002@gmail.com" passHref>
                            <Button
                                leftIcon={<FaEnvelope />}
                                colorScheme="blackAlpha"
                                variant="outline"
                                size="md"
                                className="flex items-center px-6 py-3 text-lg font-medium hover:bg-[#3CCF91] transition duration-300 ease-in-out"
                            >
                                Email
                            </Button>
                        </Link>
                    </Stack>
                </div>
            </footer>
        </ChakraProvider>
    );
};

export default Footer;
