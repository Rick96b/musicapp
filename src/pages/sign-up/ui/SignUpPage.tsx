import React from 'react'

import styles from './SignUpPage.module.scss'
import { SignUpForm } from 'widgets/sign-up-form';

const SignUpPage = () => {
  return (
    <div className={styles.pageContainer}>
      <h2 className={styles.title}>Sign up</h2>
      <div className={styles.formContainer}>
        <SignUpForm />  
      </div>
    </div>
  )
}

export default SignUpPage;
