import React from "react";
import { motion } from "framer-motion";
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
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import profile from "../assets/bp.png";
import TypeWriterEffect from "react-typewriter-effect";
const Home = () => {
  return (
    <Box
      bgGradient="linear(to-b, #000000,#292929)"
      h={{ base: "auto", md: "94vh" }}
    >
      <SimpleGrid
        justifyContent={{ base: "center" }}
        columns={{ base: 0, md: 2 }}
        w="100%"
        h="100%"
        direction={{ base: "column", md: "row" }}
      >
        <Box
          p={{ base: "5", md: "10" }}
          mb={20}
          alignItems={{ base: "center" }}
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
            I am <span style={{ color: "#29ff47" }}>Manikandan S</span>.
          </Heading>
          <Flex
            fontSize={{ base: "2xl", md: "5xl" }}
            fontWeight="600"
            color="#3F3D56"
          >
            I am a
            <Text as="span" ml={4}>
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
          <Center mt={24} display={{ base: "none", md: "flex" }}>
            <Button
              size="lg"
              rightIcon={<ArrowForwardIcon />}
              colorScheme="orange"
              variant="outline"
            >
              Contact Me
            </Button>
          </Center>
        </Box>
        <Center>
          <motion.div animate={{ scale: 1 }} initial={{ scale: 0 }}>
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
