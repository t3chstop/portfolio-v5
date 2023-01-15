import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Flex,
    Link,
    Spacer,
    Hide,
    Box,
    Menu,
    MenuItem,
    MenuButton,
    Text,
    Button,
    MenuList,
    Icon,
    HStack,
  } from '@chakra-ui/react'

import { HamburgerMenuIcon, RightArrowIcon } from '../icons/Icon'
import { motion } from "framer-motion"
import { AiFillHome, AiOutlineMail } from 'react-icons/ai'
import { BsFileEarmarkPersonFill, BsCodeSlash } from 'react-icons/bs'
import { CgFileDocument } from 'react-icons/cg'

export function Navbar() {
    return (
        <motion.div     
            initial={{ opacity: 0, }}
            animate={{ opacity: 1, }}
            transition={{ duration: 1 }}>
        <Box alignContent='right' pt='9'  pr='15' pl={[0, 10, 20]} id='nav'>
            <Flex display={{base: 'none', sm:'none', md:'none', lg:'flex'}} position='static'>
                <Link href='#' color='white' fontSize='2xl'>Siddarth Calidas</Link>
                <Spacer />
                <Breadcrumb separator='' fontSize='2xl' color='white' pr={[0, 10, 20]} spacing='2.5'>
                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href='#'>
                            <HStack spacing='1.5'>
                                <Icon as={AiFillHome} boxSize='24px' />
                                <Text>Home</Text> 
                            </HStack>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                   
                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>
                            <HStack spacing='1.5'>
                                <Icon as={ BsFileEarmarkPersonFill} boxSize='24px' />
                                <Text>About</Text> 
                            </HStack>
                        </BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>
                            <HStack spacing='1.5'>
                                <Icon as={ BsCodeSlash } boxSize='24px' />
                                <Text>My Work</Text> 
                            </HStack>
                        </BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>
                            <HStack spacing='1.5'>
                                <Icon as={ CgFileDocument } boxSize='24px' />
                                <Text>Resume</Text> 
                            </HStack>
                        </BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>
                            <HStack spacing='1.5'>
                                <Icon as={ AiOutlineMail } boxSize='24px' />
                                <Text>Contact</Text> 
                            </HStack>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Flex>
            
            <Flex display={{base: 'flex', sm:'flex', md:'flex', lg:'none'}}>
                <Link href='#' color='white' fontSize='2xl'>t3chstop.github.io</Link>
                <Spacer />
                <Menu>
                <MenuButton as={Button} bg='transparent' variant='ghost'>
                    <Icon as={HamburgerMenuIcon} /> 
                    {/* <a href="https://iconscout.com/icons/hamburger-menu" target="_blank">Hamburger Menu Icon</a> by <a href="https://iconscout.com/contributors/petras-nargela" target="_blank">Petras Nargėla</a> */}
                </MenuButton>
                <MenuList>
                    <MenuItem>Home</MenuItem>
                    <MenuItem>My Work</MenuItem>
                    <MenuItem>Resume</MenuItem>
                    <MenuItem>Contact</MenuItem>
                </MenuList>
                </Menu>
            </Flex>
        </Box>
        </motion.div>
        
    )
}