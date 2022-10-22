import { Flex, Heading, Text } from "@chakra-ui/react";
import { BABY_POWDER, BLACK_CHOCOLATE } from "../utils/colors";

const Splash: React.FC = () => {
  return (
    <Flex
      justifyContent="space-between"
      flexDirection="column"
      paddingX="4em"
      className="CurveBackground"
      boxShadow={`0px 0px 30px 2px ${BLACK_CHOCOLATE};`}
      paddingY="2em"
    >
      <Flex flexDirection="column" gap={"4em"}>
        <Heading
          fontStyle={"italic"}
          fontWeight={900}
          size="4xl"
          color={BLACK_CHOCOLATE}
        >
          Kurseek
        </Heading>
        <Heading
          fontStyle={"italic"}
          fontWeight={900}
          size="3xl"
          color={BLACK_CHOCOLATE}
        >
          We saved you a seat.
        </Heading>
      </Flex>
      <Flex flexDirection="column" gap={"4em"}>
        <Heading
          fontStyle={"italic"}
          fontWeight={900}
          size="4xl"
          textAlign="right"
          color={BABY_POWDER}
        >
          كرسيك
        </Heading>
        <Heading
          fontStyle={"italic"}
          fontWeight={900}
          size="3xl"
          textAlign="right"
          color={BABY_POWDER}
        >
          خلنالك محل
        </Heading>
      </Flex>
    </Flex>
  );
};

export default Splash;
