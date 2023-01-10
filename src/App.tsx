import { ChakraProvider } from '@chakra-ui/react'
import './App.css'
import { Box, Flex, Text, Heading } from '@chakra-ui/react'
import { theme } from './Theme'
import { Navbar } from './components/Navbar'
import '@fontsource/montserrat/300.css'
import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/700.css'
import { Header } from './components/Header'

function App() {
  document.title = "Siddarth Calidas | Web Developer"

  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <Box w='100vw' h='100vh' bgGradient='linear(to-b, blue.900, black)'>
          <Navbar />
          <Header />
        </Box>
      </ChakraProvider>
        
    </div>
  )
}

export default App
