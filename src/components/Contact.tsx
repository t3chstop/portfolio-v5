import React from 'react'
import {
    Flex,
    Spacer,
    Box,
    Heading,
    Text,
    VStack,
    Link,
  } from '@chakra-ui/react'

import { HamburgerMenuIcon, RightArrowIcon } from '../icons/Icon'
import { motion } from "framer-motion"


export function Contact() {
    return (
        <motion.div     
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 2 }}
        variants={{
        visible: { opacity: 1, x: '0px', },
        hidden: { opacity: 0,  x: '-400px' }
        }}
        >
        <Box alignContent='right' id='about'>
            <Flex pt='9' pr={['8', '8', '36']} pl={['8', '8', '36']}>
                <Spacer />
                    <VStack spacing='3.5'>
                        <Heading as='h2' color='blue.100' fontWeight='bold' fontSize='5xl'>Contact</Heading>
                        <Text fontWeight='normal' fontSize='2xl' color='white' textAlign='center'>
                            Feel free to get in touch with me via email or Discord(t3chstop#6004). 
                        </Text>
                        <Link fontSize='32px' color='blue.400' pt='6' textDecoration='underline'>Email Me</Link>
                    </VStack>
                <Spacer />
            </Flex>
        </Box>
        </motion.div>
    )
}