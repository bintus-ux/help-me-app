import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Loader from './Loader'

const SignInForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)
  const [loading, setLoading] = useState(false)
  const [passwordStrength, setPasswordStrength] = useState(false)
  const [passwordMatch, setPasswordMatch] = useState(false)

  const navigate = useNavigate()

  const handleSignupSubmit = (e) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      navigate('/home')
    }
  }
  const strengthCheck = () => {
    if (password.length >= 8 && password.length <= 10) {
      setPasswordStrength(true)
    } else {
      setPasswordStrength(false)
    }
  }
  const matchCheck = () => {
    if (password === confirmPassword) {
      setPasswordMatch(true)
    } else {
      setPasswordMatch(false)
    }
  }

  return (
    <div className='login-container'>
      <form action='' className='login-form'>
        <h1 className='login-title'>Sign Up</h1>
        {loading && <Loader />}

        <div className='input-group'>
          <input
            type='text'
            className='input-field'
            onChange={(e) => setEmail(e.target.value)}
            placeholder=' '
            value={email}
            id='email'
          />
          <label for='email' className='input-label'>
            Email
          </label>
        </div>

        <div className='input-group'>
          <input
            type='password'
            className='input-field'
            placeholder=' '
            onChange={(e) => setPassword(e.target.value)}
            onKeyUp={strengthCheck}
            value={password}
            id='password'
          />
          <label for='password' className='input-label'>
            Password
          </label>
        </div>
        {passwordStrength ? (
          <span
            style={{
              marginTop: '-30px',
              position: 'absolute',
            }}>
            <i class='fa-solid fa-check-double checkmark-icon'></i>
          </span>
        ) : password.length > 10 ? (
          <p className='password-long'>Password is too long</p>
        ) : (
          <p className='password-strength'>
            Password has to be 8-10 characters long!
          </p>
        )}

        <div className='input-group'>
          <input
            type='password'
            className='input-field'
            placeholder=' '
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            onKeyUp={matchCheck}
            id='confirm-password'
          />
          <label for='confirm-password' className='input-label'>
            Confirm Password
          </label>
        </div>
        {passwordMatch ? (
          <span
            style={{
              marginTop: '-30px',
              position: 'absolute',
            }}>
            <i class='fa-solid fa-check-double checkmark-icon'></i>
          </span>
        ) : (
          <p className='password-strength'>Passwords do not match!</p>
        )}

        <input
          type='submit'
          onClick={handleSignupSubmit}
          className='submit-button'
          value='Sign In'
        />
      </form>
    </div>
  )
}

export default SignInForm
