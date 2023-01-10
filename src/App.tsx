import { ChakraProvider } from '@chakra-ui/react'
import './App.css'
import { Box, Flex, Text, Heading } from '@chakra-ui/react'
import { theme } from './Theme'
import { Navbar } from './components/Navbar'

function App() {
  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <Box w='100vw' h='100vh' bgGradient='linear(to-b, blue.900, black)'>
          <Navbar />
        </Box>
      </ChakraProvider>
        
    </div>
  )
}

export default App
