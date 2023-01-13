import React from 'react'
import {
    Flex,
    Spacer,
    Heading,
    HStack,
    Card,
    CardBody,
    CardFooter,
    Image,
    Stack,
    Text,
    Button,
    StackProps,
    Box,
  } from '@chakra-ui/react'

export const Project = (props: StackProps) => {
    const { children, ...rest } = props
    return (
        <Card
            direction={['column', 'column', 'row']}
            overflow='hidden'
            pt='16'
            >
            <Image
                maxW={['300px', '300px', '400px']}
                maxH={['150px', '150px', '200px']}
                src='src\assets\portfolio.PNG'
                alt='Portfolio Screenshot'
                border='1px solid white'
            />

            <Stack>
                <CardBody>
                <Heading as='h3' size='md'>Portfolio Website</Heading>

                <Text py='2'>
                    {children}
                </Text>
                </CardBody>

                <CardFooter>
                <Button variant='solid' colorScheme='blue'>
                    Source Code
                </Button>
                </CardFooter>
            </Stack>
            </Card>
    )
}

export function MyWork() {
    return (
        <Box>
            <Flex pt='9' pr='20' pl={[0, 10, 20]} id='myWork'>
                <Spacer />
                    <Heading as='h2' color='white' fontWeight='bold' fontSize='40'>My Work</Heading>
                <Spacer />
            </Flex>
            <Flex pl={[0, 10, 20]} pr={[0, 10, 20]}>
                <Project>portfolio</Project>
                <Spacer />
            </Flex>
        </Box>
        
    )
}