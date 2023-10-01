import { Routes, Route } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import LandingPage from './components/pages/LandingPage'
import SignUpForm from './components/FormScreens/SignUpForm'
import Home from './components/FormScreens/Home'

const App = () => {
  return (
    <>
      <Box className='layout'>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/signup' element={<SignUpForm />} />
        </Routes>
      </Box>
    </>
  )
}

export default App
