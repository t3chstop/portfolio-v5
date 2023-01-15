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
    Icon,
    Button,
    Link,
    StackProps,
    Box,
    Hide,
    Tooltip,
  } from '@chakra-ui/react'

import {FaGithub, FaReact, FaWordpress, FaElementor, FaYoast, FaPython, FaHtml5, FaFigma } from 'react-icons/fa'
import {SiChakraui, SiTypescript, SiVite, SiDjango, SiCss3} from 'react-icons/si'

export function MyWork() {
    return (
        <Box pt='24'>
            <Flex pt='9' pr='20' pl={[0, 10, 20]} id='myWork'>
                <Spacer />
                    <Heading as='h2' color='blue.100' fontWeight='bold' fontSize='5xl'>My Work</Heading>
                <Spacer />
            </Flex>
            {/* Portfolio Website Card */}
            <Flex pl={[0, 10, 20]} pr={[0, 10, 20]}>
                <Hide above='md'>
                    <Spacer />
                </Hide>
                <Card
                    direction={['column', 'column', 'column', 'row']}
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
                        <CardBody p='0px' pt='3.5' pl={['0', '0', '0', '9']}>
                            <Flex direction={['column', 'column', 'column', 'row']}>
                                <Box>
                                    <Heading as='h3' textAlign='left' fontSize='32px' color='white' fontWeight='bold'>Portfolio Website</Heading>
                                    <Text textAlign='left' fontWeight='normal' fontSize='2xl' color='white' maxW={['300px', '300px', '448px']}>
                                        My 5th portfolio iteration and a demonstration of my frontend skills.
                                    </Text>
                                </Box>
                                <Box pl={['0', '0', '0', '16']} pt={['9', '9', '9', '0']}>
                                    <Heading as='h3' textAlign='left' fontSize='32px' color='white' fontWeight='bold'>Tech Stack</Heading>
                                    <HStack textAlign='left' fontWeight='normal' fontSize='2xl' color='white' maxW={['300px', '300px', '448px']} spacing='5'> 
                                        <Tooltip label='Chakra UI' aria-label='Chakra'>
                                            <Link href='https://chakra-ui.com/'>
                                                <Icon as={SiChakraui} mt='6' boxSize='12' />
                                            </Link>
                                        </Tooltip> 
                                        <Tooltip label='React' aria-label='React'>
                                            <Link href='https://reactjs.org/'>
                                                <Icon as={FaReact} mt='6' boxSize='12' />
                                            </Link>
                                        </Tooltip>
                                        <Tooltip label='TypeScript' aria-label='TypeScript'>
                                            <Link href='https://www.typescriptlang.org/'>
                                                <Icon as={SiTypescript} mt='6' boxSize='12' />
                                            </Link>
                                        </Tooltip>
                                        <Tooltip label='Vite' aria-label='vite'>
                                            <Link href='https://vitejs.dev/'>
                                                <Icon as={SiVite} mt='6' boxSize='12' />
                                            </Link>
                                        </Tooltip>
                                        <Tooltip label='Figma' aria-label='figma'>
                                            <Link href='https://www.figma.com/'>
                                                <Icon as={FaFigma} mt='6' boxSize='12' />
                                            </Link>
                                        </Tooltip>
                                    </HStack>
                                </Box>
                            </Flex>
                            </CardBody>

                            <CardFooter pl={['0', '0', '0', '9']}>
                                <Link href='https://github.com/t3chstop/portfolio-v5'>
                                    <HStack spacing='4'>
                                        <Icon as={FaGithub} boxSize='12'/>
                                        <Text fontSize='2xl' color='white'>Source Code</Text>
                                    </HStack>
                                </Link>
                            </CardFooter>
                        </Stack>
                    </Card>
                <Spacer />
            </Flex>
            {/* Vrobotsim.com Project card */}
            <Flex pl={[0, 10, 20]} pr={[0, 10, 20]}>
                <Hide above='md'>
                    <Spacer />
                </Hide>
                <Card
                    direction={['column', 'column', 'column', 'row']}
                    overflow='hidden'
                    pt='16'
                    >
                    <Image
                        maxW={['300px', '300px', '400px']}
                        maxH={['150px', '150px', '200px']}
                        src='src\assets\vrobotsimcom.PNG'
                        alt='Screenshot of vrobotsim.com'
                        border='1px solid white'
                    />

                    <Stack>
                        <CardBody p='0px' pt='3.5' pl={['0', '0', '0', '9']}>
                            <Flex direction={['column', 'column', 'column', 'row']}>
                                <Box>
                                    <Heading as='h3' textAlign='left' fontSize='32px' color='white' fontWeight='bold'>vrobotsim.com</Heading>
                                    <Text textAlign='left' fontWeight='normal' fontSize='2xl' color='white' maxW={['300px', '300px', '448px']}>
                                        Promotional Website for Virtual Robot Simulator for which I developed most of the frontend
                                    </Text>
                                </Box>
                                <Box pl={['0', '0', '0', '16']} pt={['9', '9', '9', '0']}>
                                    <Heading as='h3' textAlign='left' fontSize='32px' color='white' fontWeight='bold'>Tech Stack</Heading>
                                    <HStack textAlign='left' fontWeight='normal' fontSize='2xl' color='white' maxW={['300px', '300px', '448px']} spacing='5'> 
                                        <Tooltip label='Wordpress' aria-label='Chakra'>
                                            <Link href='https://chakra-ui.com/'>
                                                <Icon as={FaWordpress} mt='6' boxSize='12' />
                                            </Link>
                                        </Tooltip> 
                                        <Tooltip label='Elementor' aria-label='React'>
                                            <Link href='https://reactjs.org/'>
                                                <Icon as={FaElementor} mt='6' boxSize='12' />
                                            </Link>
                                        </Tooltip>
                                        <Tooltip label='Yoast SEO' aria-label='TypeScript'>
                                            <Link href='https://www.typescriptlang.org/'>
                                                <Icon as={FaYoast} mt='6' boxSize='12' />
                                            </Link>
                                        </Tooltip>
                                    </HStack>
                                </Box>
                            </Flex>
                            </CardBody>
                        </Stack>
                    </Card>
                <Spacer />
            </Flex>
            {/* SocialMediaSite */}
            <Flex pl={[0, 10, 20]} pr={[0, 10, 20]}>
                <Hide above='md'>
                    <Spacer />
                </Hide>
                <Card
                    direction={['column', 'column', 'column', 'row']}
                    overflow='hidden'
                    pt='16'
                    >
                    <Image
                        maxW={['300px', '300px', '400px']}
                        maxH={['150px', '150px', '200px']}
                        src='src\assets\socialmediasite.PNG'
                        alt='Screenshot of my Social Media Website'
                        border='1px solid white'
                    />

                    <Stack>
                        <CardBody p='0px' pt='3.5' pl={['0', '0', '0', '9']}>
                            <Flex direction={['column', 'column', 'column', 'row']}>
                                <Box>
                                    <Heading as='h3' textAlign='left' fontSize='32px' color='white' fontWeight='bold'>SocialMediaSite</Heading>
                                    <Text textAlign='left' fontWeight='normal' fontSize='2xl' color='white' maxW={['300px', '300px', '448px']}>
                                        WIP Social Media Website primarily for live chatting with friends
                                    </Text>
                                </Box>
                                <Box pl={['0', '0', '0', '16']} pt={['9', '9', '9', '0']}>
                                    <Heading as='h3' textAlign='left' fontSize='32px' color='white' fontWeight='bold'>Tech Stack</Heading>
                                    <HStack textAlign='left' fontWeight='normal' fontSize='2xl' color='white' maxW={['300px', '300px', '448px']} spacing='5'> 
                                        <Tooltip label='Python' aria-label='Chakra'>
                                            <Link href='https://chakra-ui.com/'>
                                                <Icon as={FaPython} mt='6' boxSize='12' />
                                            </Link>
                                        </Tooltip> 
                                        <Tooltip label='Django' aria-label='React'>
                                            <Link href='https://reactjs.org/'>
                                                <Icon as={SiDjango} mt='6' boxSize='12' />
                                            </Link>
                                        </Tooltip>
                                        <Tooltip label='HTML' aria-label='TypeScript'>
                                            <Link href='https://www.typescriptlang.org/'>
                                                <Icon as={FaHtml5} mt='6' boxSize='12' />
                                            </Link>
                                        </Tooltip>
                                        <Tooltip label='CSS' aria-label='TypeScript'>
                                            <Link href='https://www.typescriptlang.org/'>
                                                <Icon as={SiCss3} mt='6' boxSize='12' />
                                            </Link>
                                        </Tooltip>
                                    </HStack>
                                </Box>
                            </Flex>
                            </CardBody>

                            <CardFooter pl={['0', '0', '0', '9']}>
                                <Link href='https://github.com/t3chstop/portfolio-v5'>
                                    <HStack spacing='4'>
                                        <Icon as={FaGithub} boxSize='12'/>
                                        <Text fontSize='2xl' color='white'>Source Code</Text>
                                    </HStack>
                                </Link>
                            </CardFooter>
                        </Stack>
                    </Card>
                <Spacer />
            </Flex>
        </Box>
        
    )
}