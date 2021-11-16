import { Box, Flex, Text } from "@chakra-ui/layout";
import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { BsCheck2, BsThreeDots } from "react-icons/bs";
import { Button } from "@chakra-ui/button";
import moment from "moment";
import TodoForm from "./TodoForm";

const Todo = ({
  todos,
  handleComplete,
  onDelete,
  updateTodo,
  isOpen,
  onOpen,
  onClose,
  TodoCardBackground,
  todoCardColor,
  TodoCardDescColor,
}) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
    desc: ""
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
      desc: ""
    });
  };

  if (edit.id) {
    return (
      <TodoForm
        isOpen={isOpen}
        onClose={onClose}
        edit={edit}
        onSubmit={submitUpdate}
      />
    );
  }

  return (
    <Box>
      <Text
        display={todos.length > 0 ? "block" : "none"}
        fontWeight="medium"
        mt="18"
        fontSize="lg"
      >
        Task - {todos.length}
      </Text>
      {todos.map((todo) => {
        return (
          <Box
            width="full"
            mt="5"
            p="3"
            bg={TodoCardBackground}
            key={todo.id}
            borderRadius="5"
          >
            <Box display="flex" justifyContent="space-between">
              <Text w="full" fontSize={{ base: "13" }} color="gray.400">
                {moment().format("ll")}
              </Text>
              <Menu>
                <MenuButton
                  as={Button}
                  _hover={{}}
                  _focus={{ outline: "none" }}
                  _active={{}}
                  bg="none"
                  rightIcon={<BsThreeDots cursor="pointer" color="#A0AEC0" />}
                ></MenuButton>
                <MenuList>
                  <MenuItem
                    onClick={() => {
                      onOpen();
                      setEdit({
                        id: todo.id,
                        title: todo._title,
                        desc: todo._desc,
                      });
                    }}
                  >
                    Edit
                  </MenuItem>
                  <MenuItem onClick={() => onDelete(todo.id)} color="red">
                    Delete
                  </MenuItem>
                </MenuList>
              </Menu>
            </Box>
            <Accordion allowMultiple>
              <AccordionItem as="a">
                <Flex alignItems="center">
                  <Box
                    width="25px"
                    height="25px"
                    border="2px solid"
                    borderColor={"green.500"}
                    bg={todo.isComplete ? "green.500" : "none"}
                    cursor="pointer"
                    borderRadius="5"
                    onClick={() => handleComplete(todo.id)}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    transition="ease-in-out .1s"
                  >
                    {todo.isComplete ? <BsCheck2 color="white" /> : null}
                  </Box>
                  <AccordionButton _hover={{}} as="a" cursor="pointer">
                    <Box flex="1" textAlign="left">
                      <Text
                        fontWeight="medium"
                        fontSize="lg"
                        mt="1"
                        color={
                          todo.isComplete
                            ? { todoCardColor }
                            : { todoCardColor }
                        }
                        as={todo.isComplete ? "del" : "a"}
                      >
                        {todo._title}
                      </Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </Flex>

                <AccordionPanel pb={1}>
                  <Text
                    w={{ base: "80px", md: "full", lg: "full", xl: "full" }}
                    ml="1"
                    color={TodoCardDescColor}
                  >
                    {todo._desc}
                  </Text>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
        );
      })}
    </Box>
  );
};

export default Todo;
