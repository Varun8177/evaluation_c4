import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { FaRegIdCard } from "react-icons/fa";
import Link from "next/link";
const Navbar = () => {
  return (
    <Box w={"100%"} bgColor={"1"} p={5}>
      <Flex w={{
        base: '100px',
        sm: '100px',
        md: '100px',
        lg: '100px',
        xl: '100px',
        "2xl": '100px'
      }} justifyContent={"space-between"}>
        <Link href={"/"}>
          <FaRegIdCard style={{ cursor: "pointer" }} size={30} />
        </Link>
        <Link href="/people">
          <Text cursor={"pointer"} >People</Text>
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;
