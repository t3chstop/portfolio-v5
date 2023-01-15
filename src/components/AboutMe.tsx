import React from 'react'
import {
    Flex,
    Spacer,
    Box,
    Heading,
    Text,
    VStack,
  } from '@chakra-ui/react'

import { HamburgerMenuIcon, RightArrowIcon } from '../icons/Icon'
import { motion } from "framer-motion"

export function AboutMe() {
    return (
        <motion.div     
            // initial="hidden"
            // whileInView="visible"
            // variants={{
            //     visible: { x: 0, opacity: 1 },
            //     hidden: { x: -400, opacity: 0 }
            //   }}
            
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            variants={{
                // visible: { , scale: 1 },
                // hidden: { visibility: 'hidden', scale: 0 }
              visible: { visibility: 'visible', x: '0px', },
              hidden: { visibility: 'hidden',  x: '-400px' }
            }}

            // initial={{opacity: 0}}
            // whileInView={{ opacity: 1}}
            // transition={{ duration: 3 }}
            // viewport={{ once: true }}

            // initial={{ opacity: 0 }}
            // whileInView={{ opacity: 1 }}
            // viewport={{ once: true }}
            >
            <Box alignContent='right' id='about' w='full'>
                <Flex pt='9' pr={['8', '8', '36']} pl={['8', '8', '36']}>
                    <Spacer />
                        <VStack spacing='3.5'>
                            <Heading as='h2' color='blue.100' fontWeight='bold' fontSize='5xl'>About Me</Heading>
                            <Text fontWeight='normal' fontSize='2xl' color='white'>
                                My name is Siddarth Calidas. I have 2 years of software development experience. Through my 
                                work on personal projects, competition robotics, and open-source contributions, I’ve gained 
                                experience with many different technologies. From winning 2nd place at a UCSD programming 
                                competition by detecting illegal fishing with machine learning to developing authentication 
                                infrastructure for a robotics emulation project, I’ve taken every opportunity I can to expand 
                                and demonstrate my programming skills.
                            </Text>
                        </VStack>
                    <Spacer />
                </Flex>
            </Box>
        </motion.div>
        
    )
}