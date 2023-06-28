import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import app from "../Firebase/Firebase.js";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState({});

  const handleEnroll = (classItem) => {
    setCartItems([...cartItems, classItem]);
    toast.success("Successfully added! Checkout Cart.");
  };

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const removeItemFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item._id !== itemId);
    setCartItems(updatedCartItems);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (loggedInUser) => {
      setUser(loggedInUser);

      //get & set token

      if(loggedInUser){
        axios.post('https://music-school-server-sahariarsupto.vercel.app/jwt',{email: loggedInUser.email})
        .then(data=>{
          // console.log(data.data.token)
          localStorage.setItem('access-token',data.data.token)
        })
      }
      else{
        localStorage.removeItem('access-token')
      }

      setLoading(false);
    });
    return () => unSubscribe();
  }, [auth]);

  const logOut = () => {
    return signOut(auth);
  };

  const authInfo = {
    user,
    loading,
    createUser,
    loginUser,
    setUser,
    logOut,
    auth,
    handleEnroll,
    cartItems,
    removeItemFromCart,
    userData,
    setUserData,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      <Toaster />
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthProvider;
