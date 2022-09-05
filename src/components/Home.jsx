import React from "react";
import { motion } from "framer-motion";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";
import AnimatedImage from "./animations/AnimatedImage";
import {
  Stack,
  Grid,
  GridItem,
  Center,
  Box,
  Image,
  SimpleGrid,
  Heading,
  Text,
  Flex,
  Button,
  transition,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import profile from "../assets/bp.png";
import TypeWriterEffect from "react-typewriter-effect";
const Home = () => {
  return (
    <Box bgGradient="linear(to-b, #000000,#292929)" h="auto">
      <SimpleGrid
        columns={{ base: 0, md: 2 }}
        w="100%"
        h="auto"
        direction={{ base: "column", md: "row" }}
      >
        <motion.div
          animate={{ opacity: 1 }}
          inital={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Flex
            flexDirection="column"
            p={{ base: "5", md: "10" }}
            mb={20}
            alignItems="center"
            justifyContent="center"
            w={{ base: "90vw", md: "100%" }}
            borderBottom={{ base: "1px solid grey", md: "none" }}
          >
            <Heading
              as="h1"
              size={{ base: "3xl", md: "4xl" }}
              color="white"
              mb={{ base: "7", md: "10" }}
            >
              Hey There.
            </Heading>
            <Heading
              color="white"
              as="h1"
              size={{ base: "2xl", md: "3xl" }}
              mb={{ base: "7", md: "10" }}
            >
              I am{" "}
              <Text as="span" style={{ color: "#29ff47" }}>
                Manikandan
              </Text>
              .
            </Heading>
            <Flex
              flexDirection={{ base: "" }}
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="600"
              color="#3F3D56"
            >
              I'm a
              <Text as="span" ml={{ base: "3", md: "5" }}>
                <TypeWriterEffect
                  textStyle={{
                    color: "cyan",
                  }}
                  startDelay={2000}
                  cursorColor="#3F3D56"
                  multiText={[
                    "Student",
                    "Programmer",
                    "Web Developer",
                    "ML Enthusiast",
                    "Artist",
                    "Constant Learner.",
                  ]}
                  multiTextDelay={1200}
                  typeSpeed={100}
                />
              </Text>
            </Flex>
            <Center gap={6} mt={{ md: "24", base: "10" }}>
              <BsInstagram color="#d640ff" size="40px" cursor="pointer" />
              <BsLinkedin color="#46a6f0" size="40px" cursor="pointer" />
              <BsGithub color="grey" size="40px" cursor="pointer" />
            </Center>
          </Flex>
        </motion.div>
        <Center>
          <motion.div
            animate={{ scale: 1 }}
            initial={{ scale: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              border="5px solid pink"
              boxShadow="-1px 1px 21px 1px pink"
              src={profile}
              objectFit="cover"
              borderRadius="full"
              boxSize={{ base: "350px", md: "500px" }}
            />
          </motion.div>
        </Center>
      </SimpleGrid>
    </Box>
  );
};

export default Home;
