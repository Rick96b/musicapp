import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

import styles from './SignInForm.module.scss'
import { userTypes } from 'entities/user';

interface SignInFormProps {
    handleSubmit: (user: userTypes.User) => void;
}

const SingInForm: React.FC<SignInFormProps> = ({handleSubmit}) => {
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
 
    const preHandleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const user: userTypes.User = {
            id: '',
            email: email,
            login: login,
            password: password
        }

        handleSubmit(user)
    }

    return (
        <form onSubmit={(event) => preHandleSubmit(event)} className={styles.form}>
            <TextField
                className={styles.textField}    
                type="text"
                variant='standard'
                label="login"
                onChange={e => setLogin(e.target.value)}
                value={login}
                fullWidth
                required
                autoComplete='off'
            />
             <TextField
                className={styles.textField}
                type="email"
                variant='standard'
                label="Email"
                onChange={e => setEmail(e.target.value)}
                value={email}
                fullWidth
                required
                autoComplete='off'
            /> 
            <TextField
                className={styles.textField}
                type="password"
                variant='standard'
                label="Password"
                onChange={e => setPassword(e.target.value)}
                value={password}
                fullWidth
                required
                autoComplete='off'
            /> 
            <Button 
                type="submit"
                sx={{
                    color: "#57B560"
                }}
            >
                Log in
            </Button>
        </form>
    )
}
 
export default SingInForm;