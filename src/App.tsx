import { ChakraProvider, Flex, Spacer } from '@chakra-ui/react'
import './App.css'
import { Box } from '@chakra-ui/react'
import { theme } from './Theme'
import { Navbar } from './components/Navbar'
import '@fontsource/montserrat/300.css'
import '@fontsource/montserrat/400.css'
import '@fontsource/montserrat/700.css'
import { Header,} from './components/Header'
import { HeroBottom } from './components/HeroBottom'
import { MyWork } from './components/MyWork'
import { AboutMe } from './components/AboutMe'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  document.title = "Siddarth Calidas | Web Developer"

  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <Box  h='100vh' bgGradient='linear(0deg, rgba(0,0,0,1) 0%, rgba(9,6,28,1) 45%)'>
          <Navbar />
          <Header />
          <HeroBottom />
        </Box>
        <Box pt='1vh' w='100vw' h='100%' bg='black'>
          <AboutMe />
          <MyWork />
          <Contact />
          <Footer />
        </Box>
      </ChakraProvider>
        
    </div>
  )
}

export default App
