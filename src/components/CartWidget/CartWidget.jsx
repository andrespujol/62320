import { Box } from "@chakra-ui/react";
import React from "react";
import { IoCartOutline } from "react-icons/io5";

const CartWidget = () => {
  return (
    <Box mr={4}>
      <IoCartOutline />
    </Box>
  );
};

export default CartWidget;
