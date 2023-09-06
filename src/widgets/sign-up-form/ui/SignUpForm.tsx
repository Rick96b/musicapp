import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

import styles from './SignUpForm.module.scss'

const SignUpForm = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [password, setPassword] = useState('')
 
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log(firstName, lastName, email, dateOfBirth, password) 
    }
 
    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <TextField
                className={styles.textField}    
                type="text"
                variant='standard'
                label="login"
                onChange={e => setFirstName(e.target.value)}
                value={firstName}
                fullWidth
                required
            />
            <TextField
                className={styles.textField}
                type="password"
                variant='standard'
                label="Password"
                onChange={e => setLastName(e.target.value)}
                value={lastName}
                fullWidth
                required
            /> 
            <TextField
                className={styles.textField}
                type="password"
                variant="standard"
                label="Repeat password"
                onChange={e => setEmail(e.target.value)}
                value={email}
                fullWidth
                required
            />
            <Button 
                type="submit"
                sx={{
                    color: "#57B560"
                }}
            >
                Register
            </Button>
        </form>
    )
}
 
export default SignUpForm;