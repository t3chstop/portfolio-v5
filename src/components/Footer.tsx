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

export function Footer() {
    return (
        <Box alignContent='right' id='about' borderTop='2px white solid' mt='12'>
            <Flex pt='9' pb='9' pr={['8', '8', '36']} pl={['8', '8', '36']}>
                <Spacer />
                    <Text fontWeight='normal' fontSize='2xl' color='white' textAlign='center'>
                        Siddarth Calidas - 2023
                    </Text>
                <Spacer />
            </Flex>
        </Box>
        
    )
}