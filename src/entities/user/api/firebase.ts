
import { firebase } from "shared/api/firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import type { User } from "../model/types";
import { auth } from "shared/api/firebase/config";
import { doc, getDoc, setDoc } from "firebase/firestore";


export const postUser = async (user: User) => {
    await setDoc(doc(firebase.database, "users", user.id), user);
}

export const getUser = async (userUID: string) => {
    return (await getDoc(doc(firebase.database, 'users', userUID))).data() as User;
}

export const signUpUser = async (user: User) => {
    return createUserWithEmailAndPassword(auth, user.email, user.password).then((userCredentials) => {
        postUser({...user, id: userCredentials.user.uid})
        return {...user, id: userCredentials.user.uid}
    })
}

export const signInUser = async (user: User) => {
    return signInWithEmailAndPassword(auth, user.email, user.password)
}