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
    Button,
    MenuList,
    Icon,
  } from '@chakra-ui/react'

import { HamburgerMenuIcon, RightArrowIcon } from '../icons/Icon'

export function Navbar() {
    return (
        <Box alignContent='right' pt='9'  pr='15' pl={[0, 10, 20]} id='nav'>
            <Flex display={{base: 'none', sm:'none', md:'none', lg:'flex'}} position='static'>
                <Link href='#' color='white' fontSize='2xl'>t3chstop.github.io</Link>
                <Spacer />
                <Breadcrumb separator='' fontSize='2xl' color='white' pr={[0, 10, 20]}>
                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>My Work</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>Resume</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>Contact</BreadcrumbLink>
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
        
    )
}