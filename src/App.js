import React, { useState, useEffect } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavLogo from "./assets/nav__logo.png";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { auth } from "./firebase/init";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

function App() {
  const [user, setUser] = useState({})
  const [loggedIn, setloggedIn] = useState(false)
  const [loading, setLoading] = useState(true)
  const [logInLoading, setLogInLoading] = useState(false)

 useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user){
      setUser(user)
      setloggedIn(true)
      }
      setLoading(false)
    })
 }, []);

  function register() {
    createUserWithEmailAndPassword(auth, "Benjamin@email.com", "test123")
      .then((data) => {
        setUser(data.user);
        setloggedIn(true)
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  function login() {
    setLogInLoading(true)
    signInWithEmailAndPassword(auth, "Benjamin@email.com", "test123")
    .then(
      (data) => {
        setUser(data.user)
        setloggedIn(true)
        setLogInLoading(false)
      }
    )
    .catch(error => {
      console.log(error.message)
    })
  }

  function logout(){
   signOut(auth) 
   setloggedIn(false)
  }

  return (
    <nav>
      <div className="left">
        <FontAwesomeIcon className="bars" icon={faBars} />
        <figure className="nav__logo--wrapper">
          <img className="nav__logo" src={NavLogo}></img>
        </figure>
      </div>
      <div className="right">
        {loggedIn ? 
        (loading ? (
        <>
        <div className="skeleton btn__skeleton"></div>
        <div className="skeleton pfp__skeleton"></div>
        </>
        ) : (<button className="nav__pfp" onClick={logout}>{user.email[0].toUpperCase()}</button>) )
        : 
        ( loading ? (<>
          <div className="skeleton btn__skeleton"></div>
          <div className="skeleton pfp__skeleton"></div>
          </>) :
        (<>
        <button className="btn register__btn" onClick={register}>Register</button>
        <button className="btn login__btn" onClick={login}>{logInLoading ? "..." : "Log In"}</button>
        </>)
        )}
      </div>
    </nav>
  );
}

export default App;
