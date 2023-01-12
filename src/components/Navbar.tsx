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
  } from '@chakra-ui/react'


export function Navbar() {
    return (
        <Box alignContent='right' pt='9' pr='20' pl={[0, 10, 20]} id='nav'>
            <Flex display={{base: 'none', sm:'none', md:'none', lg:'flex'}}>
                <Link href='#' color='white' fontSize='2xl'>t3chstop.github.io</Link>
                <Spacer />
                <Breadcrumb separator='' fontSize='2xl' color='white'>
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
            </Flex>
        </Box>
        
    )
}