import React from 'react'
import { Box, Heading, Text, HStack, StackProps } from '@chakra-ui/react'

export const ListItem = (props: StackProps) => {
    const { children, ...rest } = props
    return (
        <Text color='white' fontFamily='heading'>{children}</Text>
    )
}

export function Navbar() {
    return (
        <HStack as='ul' p='3' fontSize='24px'>
            <ListItem>t3chstop.github.io</ListItem>
            <ListItem>next</ListItem>
        </HStack>
    )
}