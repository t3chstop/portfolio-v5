import React from 'react'
import { Box, Flex, Heading, HStack, Text, Collapse, Button } from '@chakra-ui/react'
import { motion } from "framer-motion"

export function Header() {
  
    return (
            <motion.div     
            initial={{ opacity: 0, }}
            animate={{ opacity: 1, }}
            transition={{ duration: 1 }}>
                <Box textAlign='left' pt={[10, 10, 10, 36]} pl={[0, 10, 20]} pr='10'>
                    <Heading as='h1' fontWeight='bold' fontSize={['5.5rem', '5.5rem', '8xl']} color='white'>Hey, I'm <Heading as='span' fontWeight='bold' fontSize={['5.5rem', '5.5rem', '8xl']} color='blue.100'>Siddarth</Heading></Heading>
                    <Text fontWeight='light' fontSize='32px' pt='16px' maxWidth='xl' color='white'>Full-Stack web developer, 3D artist and robotics enthusiast</Text>
                </Box>
            </motion.div>

    )
}
