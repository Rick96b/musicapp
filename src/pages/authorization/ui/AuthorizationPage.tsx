import React, { useState } from 'react'
import { Slide } from '@mui/material';

import styles from './AuthorizationPage.module.scss'
import { SignUpForm } from 'widgets/sign-up-form';
import { userApi, userTypes } from 'entities/user';
import SingInForm from 'widgets/sing-in-form/ui/SignInForm';


const AuthorizationPage = () => {
  const [isSignUpVisible, setIsSignUpVisible] = useState(false)

  const handleRegistrationSubmit = (user: userTypes.User) => {
    userApi.signUpUser(user);
  }

  const handleLogInSubmit = (user: userTypes.User) => {
    userApi.signInUser(user);
  }

  return (
    <div className={styles.formsContainer}>
      <Slide direction="right" in={isSignUpVisible} mountOnEnter unmountOnExit>
        <div className={styles.signUpContainer}>
          <h2 className={styles.title}>Sign up</h2>
          <div className={styles.formContainer}>
            <SignUpForm handleSubmit={handleRegistrationSubmit}/>  
          </div>
          <button style={{color: '#fff'}} onClick={() => setIsSignUpVisible(!isSignUpVisible)}>next</button>
        </div>
      </Slide>
      <Slide direction="left" in={!isSignUpVisible} mountOnEnter unmountOnExit>
        <div className={styles.signInContainer}>
          <h2 className={styles.title}>Sign in</h2>
          <div className={styles.formContainer}>
            <SingInForm handleSubmit={handleLogInSubmit}/>  
          </div>
          <button style={{color: '#fff'}} onClick={() => setIsSignUpVisible(!isSignUpVisible)}>next</button>
        </div>
      </Slide>
    </div>
  )
}

export default AuthorizationPage;
