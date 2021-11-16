import { useColorModeValue } from "@chakra-ui/color-mode";
import { useDisclosure } from "@chakra-ui/hooks";
import { Box, Container, Text } from "@chakra-ui/layout";
import React, { useState, useEffect } from "react";
import Card from "./common/Card";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import toast, { Toaster } from "react-hot-toast";

const Main = ({ mainBackground, mainColor, mainCardBackground }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [todos, setTodos] = useState([]);
  
  const notify = () => toast
  
  const TodoCardBackground = useColorModeValue("gray.100", "gray.700");
  const TodoCardColor = useColorModeValue("gray.100", "gray.400");
  const TodoCardDescColor = useColorModeValue("gray.600", "white.200");

  useEffect(() => {
    getTodosLS();
  }, []);

  useEffect(() => {
    addTodosLS();
  }, [todos]);

  const addTodo = (todo) => {
    if (!todo._title || !todo._desc || /^\s*$/.test(todo._title, todo._desc)) {
    notify().error("please enter all item")
    return;
    }

    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    notify().success("Todo Added")
  };

  const updateTodo = (todoId, newValue) => {
    if (
      !newValue._title ||
      !newValue._desc ||
      /^\s*$/.test(newValue._title, newValue._desc)
    ) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const handleComplete = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const addTodosLS = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getTodosLS = () => {
    let todosLS = localStorage.getItem("todos");
    if (todosLS === null) {
      localStorage.setItem("todo", JSON.stringify([]));
    } else {
      let getTodos = JSON.parse(localStorage.getItem("todos"));
      setTodos(getTodos);
    }
  };

  const onDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <Box flex={6} bg={mainBackground} height="100vh" p="5">
    <Toaster notify={notify} />
      <Container>
        <Text fontSize="30px" fontWeight="medium">
          My Notes
        </Text>

        <Card
          onClick={onOpen}
          bg={mainCardBackground}
          width="full"
          marginTop="30"
          height="50px"
          display="flex"
          alignItems="center"
          fontWeight="medium"
          cursor="pointer"
          _hover={{}}
        >
          <Text fontSize="30" color={mainColor}>
            +
          </Text>
          <Text
            ml="3"
            fontSize={{ base: "14", md: "18", lg: "18", xl: "18" }}
            color={mainColor}
          >
            add new note
          </Text>
        </Card>
        <TodoForm isOpen={isOpen} onClose={onClose} onSubmit={addTodo} />
        <Todo
          handleComplete={handleComplete}
          todos={todos}
          onDelete={onDelete}
          updateTodo={updateTodo}
          onOpen={onOpen}
          isOpen={isOpen}
          onClose={onClose}
          TodoCardBackground={TodoCardBackground}
          TodoCardColor={TodoCardColor}
          TodoCardDescColor={TodoCardDescColor}
        />
      </Container>
    </Box>
  );
};

export default Main;
