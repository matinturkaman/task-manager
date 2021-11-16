import { Box } from "@chakra-ui/layout";
import React from "react";

const Card = ({ children, ...rest }) => {
  return (
    <Box w="full" bg="white" p="9px" borderRadius="5px" {...rest}>
      {children}
    </Box>
  );
};

export default Card;
