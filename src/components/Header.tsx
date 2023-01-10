import React from 'react'
import { Box, Heading, HStack, Text } from '@chakra-ui/react'

export function Header() {
    return (
        <Box textAlign='left' pt='36' pl='20'>
            <HStack spacing='0px'>
                <Heading as='h1' fontWeight='bold' fontSize='8xl' color='white'>Hey, I'm </Heading>
                <Heading as='h1' fontWeight='bold' fontSize='8xl' color='blue.400'>Siddarth</Heading>
            </HStack>
            <Text fontWeight='light' fontSize='24px' pt='16px' maxWidth='xl' color='white'>Full-Stack web developer, 3D artist and robotics enthusiast</Text>
        </Box>

    )
}