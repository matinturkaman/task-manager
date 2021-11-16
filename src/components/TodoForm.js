import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
} from "@chakra-ui/react";
import { Input } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import { FormLabel, FormControl } from "@chakra-ui/form-control";
import { Flex } from "@chakra-ui/layout";

const TodoForm = ({ isOpen, onClose, onSubmit, edit }) => {
  const [title, setTitle] = useState(edit ? edit.title : "");
  const [desc, setDesc] = useState(edit ? edit.desc : "");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleDesc = (e) => {
    setDesc(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit({
      id: Date.now(),
      _title: title,
      _desc: desc,
    });

    setTitle("");
    setDesc("");
  };

  return (
    <>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{edit ? "Update Your Todo" : "Add a todo"}</ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input
                  focusBorderColor="green.500"
                  type="text"
                  mt="1"
                  mb="5"
                  placeholder="add title ..."
                  value={title}
                  onChange={handleTitle}
                />
                <FormLabel>Description</FormLabel>
                <Input
                  focusBorderColor="green.500"
                  type="text"
                  mt="1"
                  mb="5"
                  placeholder="add description ..."
                  value={desc}
                  onChange={handleDesc}
                />
              </FormControl>
              <Flex mb="5" mt="3" justifyContent="flex-end">
                <Button
                  cursor="pointer"
                  onClick={onClose}
                  variant="outline"
                  mr={3}
                >
                  Cancel
                </Button>
                <Button
                  cursor="pointer"
                  _hover={{ bg: "green.600" }}
                  color="white"
                  bg="green.500"
                  onClick={onClose}
                  mr={3}
                  type="submit"
                >
                  {edit ? "Update" : "Add todo"}
                </Button>
              </Flex>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TodoForm;
