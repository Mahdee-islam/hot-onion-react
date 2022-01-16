import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initialization from "../Firebase/firebase.init";

initialization();

const useFirebase = () => {
    const [user, setUser] = useState({});
    

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(user);
        })

    }
    useEffect( () => {
        onAuthStateChanged(auth, user => {
            if(user){
                setUser(user);
            } else {
                setUser({})
            }
            
        })
    },[])

  

    const logOut = () => {
        signOut(auth)
        .then(() => {
            setUser({})
        })
    }

    return {
        user,
        logOut,
        signInUsingGoogle,
    }
}

export default useFirebase;