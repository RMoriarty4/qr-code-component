import * as React from "react";
import {
  ChakraProvider,
  Flex,
  CardBody,
  Card,
  Image,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { theme } from "./theme";

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Flex
        bgColor={"bg.default"}
        justify={"center"}
        h={"100vh"}
        align={"center"}
      >
        <Card borderRadius={"xl"} maxW={"sm"}>
          <CardBody>
            <Stack>
              <Image
                borderRadius={"xl"}
                src="/image-qr-code.png"
                alt="qr-code-image"
              />
              <Heading pt={6} px={10} textAlign={"center"} size={"md"}>
                Improve your front-end skills by building projects
              </Heading>
              <Text
                px={10}
                color={"gray.500"}
                fontWeight={400}
                textAlign={"center"}
              >
                Scan the QR code to visit Frontend Mentor and take your coding
                skills to the next level
              </Text>
            </Stack>
          </CardBody>
        </Card>
      </Flex>
    </ChakraProvider>
  );
};
