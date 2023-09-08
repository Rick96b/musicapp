import { set, ref, child, get } from "firebase/database";
import { firebase } from "shared/api/firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

import type { User } from "../model/types";
import { auth } from "shared/api/firebase/config";


export const postUser = async (user: User) => {
    set(ref(firebase.database, 'users/' + user.id), user);
}

export const getUser = async (userUID: string) => {
    return get(child(ref(firebase.database), `users/${userUID}`)).then((snapshot) => {
        if (snapshot.exists()) {
           return snapshot.val();
        } else {
            return null
        }
    }).catch((error) => {
        console.error(error);
    });
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