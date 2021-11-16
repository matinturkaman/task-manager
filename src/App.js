import { Button } from "@chakra-ui/button";
import { Box, Container, Flex, Text } from "@chakra-ui/layout";
import React from "react";
import Main from "./components/main";
import SideBar from "./components/SideBar";
import { MdOutlineWbSunny } from "react-icons/md";
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode";

const App = () => {
  const { toggleColorMode } = useColorMode();
  const mainBackground = useColorModeValue("white", "gray.800");
  const mainColor = useColorModeValue("black", "white");
  const mainCardBackground = useColorModeValue("gray.100", "gray.700");
  const sideBarBackground = useColorModeValue("gray.100", "gray.700");
  const sideBarCardBackground = useColorModeValue("white", "gray.600");
  const sideBarAnOtherCardBackground = useColorModeValue(
    "gray.100",
    "gray.700"
  );
  const sideBarAnOtherCardColor = useColorModeValue("blackAlpha.500", "white");

  return (
    <Container height="full" maxW="container.3xl" p="0">
      <Flex justifyContent="space-between">
        <Flex flexDirection="column">
          <Box
            w={{
              base: "50px",
              sm: "100px",
              md: "250px",
              lg: "200px",
              xl: "auto",
            }}
            pos="static"
          >
            <SideBar
              sideBarBackground={sideBarBackground}
              sideBarCardBackground={sideBarCardBackground}
              sideBarAnOtherCardBackground={sideBarAnOtherCardBackground}
              sideBarAnOtherCardColor={sideBarAnOtherCardColor}
            />
          </Box>
          <Button
            w={{ base: "30", md: "auto", lg: "auto", xl: "auto" }}
            rounded="0"
            as="a"
            cursor="pointer"
            bg={sideBarBackground}
            fontWeight="normal"
            leftIcon={<MdOutlineWbSunny />}
            onClick={toggleColorMode}
            position="fixed"
          >
            <Text
              display={{ base: "none", md: "block", lg: "block", xl: "block" }}
            >
              Dark mode
            </Text>
          </Button>
        </Flex>
        <Main
          mainBackground={mainBackground}
          mainColor={mainColor}
          mainCardBackground={mainCardBackground}
        />
      </Flex>
    </Container>
  );
};

export default App;
