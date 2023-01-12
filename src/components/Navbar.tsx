import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    Flex,
    Heading,
    Link,
    Spacer,
    Text,
  } from '@chakra-ui/react'


export function Navbar() {
    return (
        <Flex alignContent='right' pt='9' pr='20' pl='20'>
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
    )
}