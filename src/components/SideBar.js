import { Avatar, AvatarBadge } from "@chakra-ui/avatar";
import { Box, Link, Text } from "@chakra-ui/layout";
import React from "react";
import { CgNotes } from "react-icons/cg";
import { RiTodoLine } from "react-icons/ri";
import { AiOutlineCheck } from "react-icons/ai";
import { BsPencil, BsBook } from "react-icons/bs";
import Card from "./common/Card";
import { ArrowUpDownIcon } from "@chakra-ui/icons";

const SideBar = ({
  sideBarBackground,
  sideBarCardBackground,
  sideBarAnOtherCardBackground,
  sideBarAnOtherCardColor,
}) => {
  return (
    <Box
      flex={1}
      w={{ base: "80px", md: "auto", lg: "auto", xl: "auto" }}
      bg={sideBarBackground}
      p="8"
      height="100vh"
      display="flex"
      position="fixed"
      alignItems="center"
      flexDirection="column"
    >
      <Link focus={{}} href="https://github.com/matinturkaman" isExternal>
        <Card
          display="flex"
          alignItems="center"
          justifyContent="space-evenly"
          width="full"
          height="55px"
          bg={sideBarCardBackground}
          borderRadius="8px"
          cursor="pointer"
        >
          <Avatar
            name="matin turkaman"
            w="40px"
            h="40px"
            src="https://avatars.githubusercontent.com/u/79017406?v=4"
          >
            <AvatarBadge
              boxSize={{ base: "1rem", md: ".80em", lg: ".80em", xl: ".80em" }}
              bg="green.500"
            />
          </Avatar>
          <Text
            fontWeight="medium"
            ml="1"
            display={{ base: "none", md: "block", lg: "block", xl: "block" }}
          >
            matin turkaman
          </Text>
          <ArrowUpDownIcon
            ml="2"
            size="30"
            display={{ base: "none", md: "block", lg: "block", xl: "block" }}
          />
        </Card>
      </Link>
      <Card
        display="flex"
        alignItems="center"
        mt="70"
        width={{ base: "55px", md: "full", lg: "full", xl: "full" }}
        height="40px"
        bg={sideBarCardBackground}
        borderRadius="8px"
        justifyContent="space-between"
        cursor="pointer"
      >
        <Box display="flex" alignItems="center">
          <Text ml="2">
            <CgNotes size="20" />
          </Text>
          <Text
            fontWeight="medium"
            ml="2"
            display={{ base: "none", md: "block", lg: "block", xl: "block" }}
          >
            My Notes
          </Text>
        </Box>
      </Card>
      <Card
        display="flex"
        alignItems="center"
        mt="5"
        width={{ base: "55px", md: "full", lg: "full", xl: "full" }}
        height="40px"
        bg={sideBarAnOtherCardBackground}
        borderRadius="8px"
        justifyContent="space-between"
        cursor="pointer"
      >
        <Box display="flex" alignItems="center">
          <Text ml="2" color={sideBarAnOtherCardColor}>
            <AiOutlineCheck size="20" />
          </Text>
          <Text
            fontWeight="medium"
            ml="2"
            color={sideBarAnOtherCardColor}
            display={{ base: "none", md: "block", lg: "block", xl: "block" }}
          >
            To-do list
          </Text>
        </Box>
      </Card>
      <Card
        display="flex"
        alignItems="center"
        mt="5"
        width={{ base: "55px", md: "full", lg: "full", xl: "full" }}
        height="40px"
        bg={sideBarAnOtherCardBackground}
        borderRadius="8px"
        justifyContent="space-between"
        cursor="pointer"
      >
        <Box display="flex" alignItems="center">
          <Text ml="2" color={sideBarAnOtherCardColor}>
            <RiTodoLine size="20" />
          </Text>
          <Text
            fontWeight="medium"
            ml="2"
            color={sideBarAnOtherCardColor}
            display={{ base: "none", md: "block", lg: "block", xl: "block" }}
          >
            projects
          </Text>
        </Box>
      </Card>
      <Card
        display="flex"
        alignItems="center"
        mt="5"
        width={{ base: "55px", md: "full", lg: "full", xl: "full" }}
        height="40px"
        bg={sideBarAnOtherCardBackground}
        borderRadius="8px"
        justifyContent="space-between"
        cursor="pointer"
      >
        <Box display="flex" alignItems="center">
          <Text ml="2" color={sideBarAnOtherCardColor}>
            <BsPencil size="20" />
          </Text>
          <Text
            fontWeight="medium"
            ml="2"
            color={sideBarAnOtherCardColor}
            display={{ base: "none", md: "block", lg: "block", xl: "block" }}
          >
            journal
          </Text>
        </Box>
      </Card>
      <Card
        display="flex"
        alignItems="center"
        mt="5"
        width={{ base: "55px", md: "full", lg: "full", xl: "full" }}
        height="40px"
        bg={sideBarAnOtherCardBackground}
        borderRadius="8px"
        justifyContent="space-between"
        cursor="pointer"
      >
        <Box display="flex" alignItems="center">
          <Text ml="2" color={sideBarAnOtherCardColor}>
            <BsBook size="20" />
          </Text>
          <Text
            fontWeight="medium"
            ml="2"
            color={sideBarAnOtherCardColor}
            display={{ base: "none", md: "block", lg: "block", xl: "block" }}
          >
            Reading list
          </Text>
        </Box>
      </Card>
    </Box>
  );
};

export default SideBar;
