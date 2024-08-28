import React from "react";
import "../app/globals.css";
import { Button, ChakraProvider, Stack } from '@chakra-ui/react';
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Hero: React.FC = () => {
    return (
        <ChakraProvider>
            <>
                <div className="max-w-screen-xl w-full my-0 mx-auto px-0 pt-[24vh] pb-[16vh]">
                    <h1 className="text-7xl font-poppins font-semibold heroText pb-8 slide delay01">Software Developer.
                        <br />Crafting efficient solutions with a love for Computer Science.</h1>
                    <div className="pt-8">
                        <Stack direction='row' spacing={4}>
                            <Button leftIcon={<FaGithub />} colorScheme='teal' variant='solid'>
                                Github
                            </Button>
                            <Button leftIcon={<FaLinkedin />} colorScheme='teal' variant='solid'>
                                LinkedIn
                            </Button>
                            <Button leftIcon={<MdEmail />} colorScheme='teal' variant='solid'>
                                Email
                            </Button>
                        </Stack>
                    </div>
                </div>
            </>
        </ChakraProvider>
    );
};

export default Hero;