import React from 'react'
import {
  Box,
  Button,
  Image,
  Center,
  Text,
  Heading,
  Link as ChakraLink,
} from '@chakra-ui/react'
import Header from '../Header'
import Footer from '../Footer'

const LandingPage = () => {
  return (
    <>
      <Header />
      <Box
        justify='center'
        mt='0'
        align='center'
        width={{ base: 'auto', sm: 'auto', md: 'auto', lg: 'auto', xl: '100%' }}
        height='100%'>
        <Center
          className='main-info-wrapper'
          justify='center'
          mt='0'
          align='center'
          width='100%'
          height='100%'>
          <Box className='main-info-text'>
            <Heading as='h1' className='main-info-heading'>
              Show Them Don’t Just Tell
            </Heading>
            <Text className='main-heading-info'>
              Help your friends and loved ones by creating and sending videos on
              how to get things done on a website.
            </Text>
            <ChakraLink
              to='/signup'
              className='main-info-button'
              w='239px'
              h='60px'>
              Install HelpMeOut<i className='fa-solid fa-arrow-right-long'></i>
            </ChakraLink>
          </Box>
          <Box className='main-info-images'>
            <Image src='/AdobeStock_400053098 1.png' className='img' />
            <Image
              src='/woman-using-smartphone-technology 2.png'
              className='img'
              style={{ width: '300px', maxHeight: '500px' }}
            />
            <Image src='/AdobeStock_362497671 1.png' className='img' />
          </Box>
        </Center>
        <Box className='middle-div'></Box>
        <Center className='features-section'>
          <Box className='features-text-wrapper'>
            <Text className='features-header'>Features</Text>
            <Text className='features-subtitle'>
              Key Highlights of Our Extension
            </Text>
          </Box>
        </Center>
        <Center className='features-info-wrapper'>
          <Box className='features-info-section'>
            <Box className='record-info-header'>
              <Image src='/record-circle.png' className='record-img' />
              <Box>
                <Text className='record-header'>Simple Screen Recording</Text>
                <Text className='record-text'>
                  Effortless screen recording for everyone. Record with ease, no
                  tech expertise required.
                </Text>
              </Box>
            </Box>
            <Box className='record-info-header'>
              <Image src='/send-2.png' className='record-img' />
              <Box>
                <Text className='record-header'>Easy-to-Share URL</Text>
                <Text className='record-text'>
                  Share your recordings instantly with a single link. No
                  attachments, no downloads.
                </Text>
              </Box>
            </Box>
            <Box className='record-info-header'>
              <Image src='/refresh-square-2.png' className='record-img' />
              <Box>
                <Text className='record-header'>Revisit Recordings</Text>
                <Text className='record-text'>
                  Access and review your past content effortlessly. Your
                  recordings, always at your fingertips.
                </Text>
              </Box>
            </Box>
          </Box>
          <Box>
            <Image src='/Video Repository.png' />{' '}
          </Box>
        </Center>
        <Box className='middle-div'></Box>
        <Center className='how-wrapper'>
          <Text className='how-header'>How it works</Text>
          <Box className='flex-col'>
            <Box className='how-section'>
              <Box>
                <Box className='center-number'>
                  <Box className='one-wrapper'>
                    <Text className='one-text'>1</Text>
                  </Box>
                </Box>
                <Text className='one-info-header'>Record Screen</Text>
                <Text className='record-info-text'>
                  Click the "Start Recording" button in our extension. choose
                  which part of your screen to capture and who you want to send
                  it to.
                </Text>
                <Image src='/record-img.jpg' />
              </Box>
            </Box>
            <Box className='how-section'>
              <Box>
                <Box className='center-number'>
                  <Box className='one-wrapper'>
                    <Text className='one-text'>2</Text>
                  </Box>
                </Box>
                <Text className='one-info-header'>Share Your Recording</Text>
                <Text className='record-info-text'>
                  We generate a shareable link for your video. Simply send it to
                  your audience via email or copy the link to send via any
                  platform.
                </Text>
                <Image src='/record-img.jpg' />
              </Box>
            </Box>
            <Box className='how-section'>
              <Box>
                <Box className='center-number'>
                  <Box className='one-wrapper'>
                    <Text className='one-text'>3</Text>
                  </Box>
                </Box>
                <Text className='one-info-header'>Learn Effortlessly</Text>
                <Text className='record-info-text'>
                  Recipients can access your video effortlessly through the
                  provided link, with our user-friendly interface suitable for
                  everyone.
                </Text>
                <Image src='/record-img.jpg' />
              </Box>
            </Box>
          </Box>
        </Center>
        <Center>
          <Footer />
        </Center>
      </Box>
    </>
  )
}

export default LandingPage
