import React, {ElementType} from 'react'
import {
    Flex,
    Link,
    Spacer,
    Hide,
    Box,
    Icon,
    HStack,
    Text,
    StackProps,
  } from '@chakra-ui/react'
import { RightArrowIcon } from '../icons/Icon'

interface FeatureProps extends StackProps {
    icon: ElementType
}

function Label(props: FeatureProps) {
    const {icon, children, ...rest} = props
    return (
        <HStack {...rest} spacing='24px'>
            <Link href='#' textDecoration='underline'>
                <Text fontWeight='normal' textAlign='left' color='blue.400' fontSize='32px'>{children}</Text>
            </Link>
            <Link href='#'>
                <Icon as={icon} boxSize='48px' textDecoration='underline'/>
            </Link>
        </HStack>
    )
}

export function HeroBottom() {
    return (
        <Box alignContent='left' pt={['5.5rem','6.5rem', 40]} pl={[0, 10, 20]} textAlign='left'>
            {/* <Link href='#' color='blue.400' fontSize='32px'>Get in touch</Link>
            <Icon as={RightArrowIcon} /> */}
            <Label icon={RightArrowIcon}>Get in Touch</Label>
        </Box> 
        
    )
}