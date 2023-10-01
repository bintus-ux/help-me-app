import React from 'react'
import { Box, Center, Image } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Center className='footer'>
      <Box
        className='logo-footer-container'
        w='auto'
        marginLeft={{
          base: '-100px',
          sm: '-100px',
          md: '-100px',
          lg: '0',
          xl: '0',
        }}>
        <Image src='/iCON 7 1 (1).png' className='logo-footer' />
        <h2>HelpMeOut</h2>
      </Box>
      <Box className='footer-section2'>
        <Box className='section2-col1'>
          <Center className='footer-links-header'>Menu</Center>
          <Center className='footer-links-text'>Home</Center>
          <Center className='footer-links-text'>Converter</Center>
          <Center className='footer-links-text'>How it Works</Center>
        </Box>
        <Box className='section2-col1'>
          <Center className='footer-links-header'>About us</Center>
          <Center className='footer-links-text'>About</Center>
          <Center className='footer-links-text'>Contact Us</Center>
          <Center className='footer-links-text'>Privacy Policy</Center>
        </Box>
        <Box className='section2-col1'>
          <Center className='footer-links-header'>Screen Record</Center>
          <Center className='footer-links-text'>Browser Window</Center>
          <Center className='footer-links-text'>Desktop</Center>
          <Center className='footer-links-text'>Application</Center>
        </Box>
        <Box></Box>
        <Box></Box>
      </Box>
    </Center>
  )
}

export default Footer
