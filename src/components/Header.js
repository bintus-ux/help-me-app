import React from 'react'
import { useState } from 'react'
import {
  BrowserRouter as Router,
  NavLink as RouterLink,
} from 'react-router-dom'
import {
  Box,
  Flex,
  HStack,
  Image,
  IconButton,
  ChakraProvider,
  Link as ChakraLink,
  Spacer,
  Collapse,
  Text,
  useMediaQuery,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons'

const Header = () => {
  const [isOpen, setIsOpen, onClose] = useState(false)
  const [isSmallScreen] = useMediaQuery('(max-width: 767px)')

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <ChakraProvider id='header'>
      <Flex
        alignItems='center'
        textAlign='center'
        justifyContent='space-between'
        bg='white'
        px='150px'
        borderBottom='1px lightGray solid'
        color='#000'
        w={{
          base: 'auto',
          sm: 'auto',
          md: 'auto',
          lg: '100%',
          xl: '100%',
        }}
        h='150px'>
        <Box
          className='logo-container'
          w='auto'
          marginLeft={{
            base: '-100px',
            sm: 'auto',
            md: 'auto',
            lg: '0',
            xl: '0',
          }}>
          <Image src='/iCON 7 1.jpg' className='logo' />
          <h2>HelpMeOut</h2>
        </Box>
        <Spacer />
        {isSmallScreen ? (
          <>
            <IconButton
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              variant='unstyled'
              size='md'
              mr={{ base: '-120px', sm: '-100px', md: '0', lg: '0', xl: '0' }}
              onClick={toggleMenu}
            />

            <Collapse in={isOpen} animateOpacity>
              <Flex
                direction='column'
                align='center'
                mt={isOpen ? 4 : 0}
                mr={isOpen ? '25px' : 0}
                py={isOpen ? 2 : 0}
                px={isOpen ? '40px' : 0}
                bg='gray.100'>
                <ChakraLink
                  to='/features'
                  fontSize='20px'
                  m='0 80px'
                  color='#000'
                  as={RouterLink}
                  style={{ textDecoration: 'none' }}
                  p={2}
                  marginBottom='-20px'
                  _activeLink={{
                    fontWeight: 'bold',
                    borderBottom: 'solid Olive 2px',
                    lineHeight: '50px',
                  }}
                  className='navbar'
                  _hover={{
                    fontWeight: 'bold',
                  }}>
                  Features
                </ChakraLink>
                <ChakraLink
                  to='/how-it-works'
                  fontSize='20px'
                  m='0 80px'
                  color='#000'
                  as={RouterLink}
                  style={{ textDecoration: 'none' }}
                  p={2}
                  marginBottom='-20px'
                  _activeLink={{
                    fontWeight: 'bold',
                    borderBottom: 'solid Olive 2px',
                    lineHeight: '50px',
                  }}
                  className='navbar'
                  _hover={{
                    fontWeight: 'bold',
                  }}>
                  How It Works
                </ChakraLink>
                <ChakraLink
                  to='/signup'
                  fontSize='20px'
                  m='0 80px'
                  color='#000'
                  as={RouterLink}
                  style={{ textDecoration: 'none' }}
                  p={2}
                  marginBottom='-20px'
                  _activeLink={{
                    fontWeight: 'bold',
                    borderBottom: 'solid Olive 2px',
                    lineHeight: '50px',
                  }}
                  className='navbar'
                  _hover={{
                    fontWeight: 'bold',
                  }}>
                  Get Started
                </ChakraLink>
              </Flex>
            </Collapse>
          </>
        ) : (
          <HStack as='nav' display={{ base: 'none', md: 'flex' }}>
            <ChakraLink
              to='/features'
              fontSize='20px'
              mx={{
                base: 'auto',
                sm: 'auto',
                md: 'auto',
                lg: 'auto',
                xl: '50px',
              }}
              color='#000'
              as={RouterLink}
              style={{ textDecoration: 'none' }}
              p={5}
              marginBottom='-20px'
              _activeLink={{
                fontWeight: 'bold',
                borderBottom: 'solid Olive 2px',
                lineHeight: '50px',
              }}
              className='navbar'
              _hover={{
                fontWeight: 'bold',
              }}>
              Features
            </ChakraLink>
            <ChakraLink
              to='/how-it-works'
              fontSize='20px'
              mr={{ base: '20px', sm: '20px', md: '0', lg: '0', xl: '300px' }}
              color='#000'
              as={RouterLink}
              style={{ textDecoration: 'none' }}
              px='50px'
              py={1}
              marginBottom='-20px'
              _activeLink={{
                fontWeight: 'bold',
                borderBottom: 'solid Olive 2px',
                lineHeight: '50px',
              }}
              className='navbar'
              _hover={{
                fontWeight: 'bold',
              }}>
              How It Works
            </ChakraLink>
            <Spacer />
            <ChakraLink
              to='/signup'
              fontSize='20px'
              color='#000'
              as={RouterLink}
              style={{ textDecoration: 'none' }}
              p={2}
              marginBottom='-20px'
              _activeLink={{
                fontWeight: 'bold',
                borderBottom: 'solid Olive 2px',
                lineHeight: '50px',
              }}
              className='navbar'
              _hover={{
                fontWeight: 'bold',
              }}>
              Get Started
            </ChakraLink>
          </HStack>
        )}
      </Flex>
    </ChakraProvider>
  )
}

export default Header
