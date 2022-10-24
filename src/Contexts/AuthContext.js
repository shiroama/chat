import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { auth } from "../components/firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  onAuthStateChanged,
} from "firebase/auth";

const AuthContext = React.createContext();
export const UserAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const history = useNavigate();

  const googleSignin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  useEffect(() => {
    // auth.onAuthStateChanged((user) => {
    //   setUser(user);
    //   setLoading(false);
    //   history("/Chats");
    // });
    const unsubscrible = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      console.log(currentUser);
    //   history("/Chats");
    });

    return () => unsubscrible;

  }, []);
  const value = { user, googleSignin };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
