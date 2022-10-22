import { Button, Container, Flex, Heading, Image } from "@chakra-ui/react";
import type { NextPage } from "next";
import Splash from "../components/splash";
import {
  BABY_POWDER,
  BLACK_CHOCOLATE,
  PLATINUM,
  RED_PIGMENT,
} from "../utils/colors";

const Home: NextPage = () => {
  return (
    <Container
      background={BLACK_CHOCOLATE}
      padding={0}
      margin={0}
      minW={"100vw"}
      minH={"100vh"}
      width={"100vw"}
      height={"100vh"}
    >
      <Flex
        background={PLATINUM}
        id="navbar"
        zIndex={2}
        width={"100%"}
        paddingX={"2em"}
        paddingY={"2em"}
        alignItems="center"
        height={"5%"}
        justifyContent={"space-between"}
      >
        <Heading size="lg" fontStyle={"italic"} fontWeight={900}>
          Kurseek
        </Heading>

        <Flex gap={1}>
          <Button color={BABY_POWDER} background={BLACK_CHOCOLATE}>
            Sign up
          </Button>
          <Button color={BABY_POWDER} background={RED_PIGMENT}>
            Sign in
          </Button>
        </Flex>
      </Flex>
      <Flex
        zIndex={0}
        justifyContent="space-between"
        backgroundImage={"url(/splashRestuarant.jpg)"}
        backgroundSize="cover"
        backgroundPosition={"center"}
        paddingX="10%"
        height={"90%"}
      >
        <Splash />
      </Flex>
    </Container>
  );
};

export default Home;
