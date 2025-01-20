
import React from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";
import './Header.css';


function Header() {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out successfully");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          E-Commerce
        </Link>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
          
          {user ? (
            <>
              <span className="user-email">{user.email}</span>
              <button onClick={handleSignOut} className="logout-btn">
                Logout
              </button>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
          <Link to = "/signup">Signup</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
