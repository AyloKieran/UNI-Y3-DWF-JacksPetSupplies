import { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import firebaseConfig from "../firebase.config.json";

let app = initializeApp(firebaseConfig),
    auth = getAuth(app),
    db = getFirestore(app);

const doLogin = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        alert(err.message);
    }
};

const doRegister = async (name, email, password) => {
    try {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        const user = response.user;

        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });

    } catch (err) {
        alert(err.message);
    }
};

const doLogout = () => {
    signOut(auth);
};

const useFirebaseAuth = () => {
    const [user, loading] = useAuthState(auth);
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
        if (loading) return;
        setIsAuthenticated(user != null);
    }, [user, loading, isAuthenticated]);

    return [isAuthenticated, user];
};

export {
    useFirebaseAuth,
    doLogin,
    doRegister,
    doLogout
};