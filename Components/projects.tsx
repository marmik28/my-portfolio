import React, { useEffect, useState } from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Grid,
  LinkBox,
  LinkOverlay,
  Button,
  Icon,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  topics: string[];
}

const ProjectsSection: React.FC = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/marmik28/repos")
      .then((response) => response.json())
      .then((data: GitHubRepo[]) => {
        const filteredRepos = data.filter((repo) =>
          repo.topics.includes("portfolio")
        );
        setRepos(filteredRepos);
      });
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
          <Text
            className="text-4xl md:text-5xl lg:text-6xl font-poppins font-semibold pb-8"
          >
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
              <LinkBox
                key={repo.id}
                as={motion.div}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                p={5}
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                shadow="md"
                transition="all 0.3s ease-in-out"
                _hover={{ shadow: "lg" }}
              >
                <LinkOverlay href={repo.html_url} isExternal>
                  <Text fontWeight="bold" fontSize="xl" mb={2}>
                    {repo.name}
                  </Text>
                  <Text mb={4} color="gray.600">
                    {repo.description}
                  </Text>
                  <Button
                    leftIcon={<Icon as={FaGithub} />}
                    colorScheme="teal"
                    variant="outline"
                  >
                    View Repository
                  </Button>
                </LinkOverlay>
              </LinkBox>
            ))}
          </Grid>
        </motion.div>
      </div>
    </ChakraProvider>
  );
};

export default ProjectsSection;
