import React, { useState } from 'react'
import { auth } from '../../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const SignUpForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    createUserWithEmailAndPassword(auth, email, password)
      .then((useCredential) => {
        console.log(useCredential)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <>
      <div className='logo-container'>
        <img src='/apple-touch-icon1.png' className='logo' />
        <h2>HelpMeOut</h2>
      </div>
      <div className='login-container'>
        <form onSubmit={handleSubmit} className='login-form'>
          <h1 className='login-title'>Log in or Sign up</h1>

          <p className='login-text'>
            Join millions of others in sharing successful moves on HelpMeOut.
          </p>

          <div className='facebook-button-wrapper'>
            <img src='/Google svg.jpg' />
            <div className='facebook-button-text'>Continue with Facebook</div>
          </div>
          <div className='facebook-button-wrapper'>
            <img src='/Facebook svg.jpg' />
            <div className='facebook-button-text'>Continue with Facebook</div>
          </div>

          <div className='divider'>
            <div className='divider-line'></div> or{' '}
            <div className='divider-line'></div>
          </div>
          <div className='input-group'>
            <input
              type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='input-field'
              placeholder=' '
              id='email'
            />
            <label for='email' className='input-label'>
              Email
            </label>
          </div>

          <div className='input-group'>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='input-field'
              placeholder=' '
              id='password'
            />
            <label for='password' className='input-label'>
              Password
            </label>
          </div>

          <input type='submit' className='submit-button' value='Sign Up' />
        </form>
      </div>
    </>
  )
}

export default SignUpForm
