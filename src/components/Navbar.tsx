import React from 'react'

import { Box, Heading, Text, HStack, StackProps } from '@chakra-ui/react'

export const ListItem = (props: StackProps) => {
    const { children, ...rest } = props
    return (
        // eslint-disable-next-line
        <Text as='li' color='white' {...rest}>{children}</Text>
    )
}

export function Navbar() {
    return (
        <HStack as='ul' pt='9' pl='20' fontSize='24px' spacing='6' listStyleType='none'>
            <ListItem fontWeight='500'>Siddarth Calidas</ListItem>
            <ListItem pl='57vw'>Home</ListItem>
            <ListItem>My Work</ListItem>
            <ListItem>Resume</ListItem>
            <ListItem>Contact</ListItem>
        </HStack>
    )
}