/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";
import { ChakraProvider, Box, Text, Grid, Link, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const ProjectsSection: React.FC = () => {
  const [repos, setRepos] = useState<any[]>([]);

  useEffect(() => {
    // Fetch GitHub repos
    fetch("https://api.github.com/users/marmik28/repos")
      .then((response) => response.json())
      .then((data) => setRepos(data));
  }, []);

  return (
    <ChakraProvider>
      <div className="relative max-w-screen-xl w-full my-0 mx-auto px-4 pt-[2vh] pb-[10vh] md:pb-[12vh]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Text className="text-4xl md:text-5xl lg:text-6xl font-poppins font-semibold pb-8 ">
            Projects
          </Text>

          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            }}
            gap={6}
          >
            {repos.map((repo) => (
              <Box
                key={repo.id}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                p={4}
                bg="white"
                shadow="md"
                transition="all 0.3s ease-in-out"
                _hover={{ shadow: "lg" }}
              >
                <Text fontWeight="bold" fontSize="xl" mb={2}>
                  {repo.name}
                </Text>
                <Text mb={4} color="gray.600">
                  {repo.description}
                </Text>
                <Link href={repo.html_url} isExternal>
                  <Image
                    src={`https://img.shields.io/github/stars/marmik28/${repo.name}?style=social`}
                    alt={`${repo.name} stars`}
                  />
                </Link>
              </Box>
            ))}
          </Grid>
        </motion.div>
      </div>
    </ChakraProvider>
  );
};

export default ProjectsSection;
