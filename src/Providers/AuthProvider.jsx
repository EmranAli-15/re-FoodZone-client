import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
const auth = getAuth(app);


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const loginWithGoogle = (googleProvider) =>{
        signInWithPopup(auth, googleProvider)
    }
    const creteUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateUser = (user, name, photo) => {
        return updateProfile(user, {
            displayName: name, photoURL: photo
        });
    }
    const logOut = () => {
        return signOut(auth);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo =
    {
        creteUser,
        loginWithGoogle,
        signInUser,
        logOut,
        user,
        updateUser,
        loading
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;