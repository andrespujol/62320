import React from "react";
import CartWidget from "../CartWidget/CartWidget";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Heading,
  Button,
  Flex,
} from "@chakra-ui/react";
import { FaAngleDown } from "react-icons/fa";
import './NavBar.css'
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <Flex className="navBar" justify={'space-between'} align={'center'} height={'10vh'} w={'100%'}>
        <Heading ml={4}><Link to='/'>Logo</Link></Heading>
        <Menu>
            <MenuButton as={Button} rightIcon={<FaAngleDown />}>
            Categorías
            </MenuButton>
            <MenuList>
                {/* menú con nuestras categorías */}
            </MenuList>
        </Menu>
        <CartWidget />
    </Flex>
  );
};

export default NavBar;
