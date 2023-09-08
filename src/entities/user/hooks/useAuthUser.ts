import React, { useState, useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from 'shared/api/firebase/config'
import { getUser } from '../api/firebase'
import { User } from '../model/types'

const useAuthUser = () => {
    const [activeUser, setActiveUser] = useState<User | null>(null);
    const [activeUserloading, setActiveUserloading] = useState(true);
    const [user, loading, error] = useAuthState(auth)
 
    useEffect(() => {
        if(user) {
            getUser(user.uid).then((user: User) => {
                setActiveUser(user)
                setActiveUserloading(false);
            })
        } else if (!loading && !user) {
            setActiveUserloading(false)
        }
    }, [loading])
    

    return [activeUser, activeUserloading] 
}

export default useAuthUser;
