import React from "react";
import CartWidget from "../CartWidget/CartWidget";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Heading,
  Button,
  Flex,
  Image,
} from "@chakra-ui/react";
import { FaAngleDown } from "react-icons/fa";
import './NavBar.css'
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'

const NavBar = () => {
  return (
    <Flex className="navBar" justify={'space-between'} align={'center'} height={'10vh'} w={'100%'} bg={'#222831'}>
        <Heading color={'#F7EEF1'} ml={4}><Link to='/'><Image w={'20%'} src={logo}/></Link></Heading>
        <Menu>
        <MenuButton as={Button} color={'#c5d0d3'} rightIcon={<FaAngleDown />}>
            Categorías
        </MenuButton>
        <MenuList>
            <MenuItem 
              color={'#c5d0d3'}
              _hover={{ bg: '#c5d0d3', color: '#416d6d' }}
              >
              <Link to='/categoria/Remeras'>
                Remeras
              </Link>
            </MenuItem>
            <MenuItem 
              color={'#c5d0d3'}
              _hover={{ bg: '#c5d0d3', color: '#416d6d' }}
              >
              <Link to='/categoria/Buzos'>
                Buzos
              </Link>
            </MenuItem>
            <MenuItem 
              color={'#c5d0d3'}
              _hover={{ bg: '#c5d0d3', color: '#416d6d' }}
              >
              <Link to='/categoria/Pijamas'>
                Pijamas
              </Link>
            </MenuItem>
            <MenuItem 
              color={'#c5d0d3'}
              _hover={{ bg: '#c5d0d3', color: '#416d6d' }}
              >
              <Link to='/categoria/Zapatillas'>
                Zapatillas
              </Link>
            </MenuItem>
        </MenuList>
        </Menu>
        <CartWidget />
    </Flex>
  );
};

export default NavBar;
