import React from 'react'
import { useDispatch } from 'react-redux';

import styles from './SignUpPage.module.scss'
import { SignUpForm } from 'widgets/sign-up-form';
import { userApi, userModel, userTypes } from 'entities/user';


const SignUpPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (user: userTypes.User) => {
    userApi.signUpUser(user).then((userCredentials: userTypes.User) => {
      dispatch(userModel.setActiveUser(userCredentials))
    })
  }

  return (
    <div className={styles.pageContainer}>
      <h2 className={styles.title}>Sign up</h2>
      <div className={styles.formContainer}>
        <SignUpForm handleSubmit={handleSubmit}/>  
      </div>
    </div>
  )
}

export default SignUpPage;
