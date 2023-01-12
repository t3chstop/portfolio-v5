import React from 'react'
import { Box, Flex, Heading, HStack, Text, Collapse, Button } from '@chakra-ui/react'

export function Header() {
    const [show, setShow] = React.useState(false);

    const handleToggle = () => setShow(!show);
  
    return (
            <Box textAlign='left' pt='36' pl='20'>
                <Heading as='h1' fontWeight='bold' fontSize='8xl' color='white'>Hey, I'm <Heading as='span' fontWeight='bold' fontSize='8xl' color='blue.400'>Siddarth</Heading></Heading>
                <Text fontWeight='light' fontSize='24px' pt='16px' maxWidth='xl' color='white'>Full-Stack web developer, 3D artist and robotics enthusiast</Text>
            </Box>

    )
}
