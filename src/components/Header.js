import React from "react";
import classes from "./Header.module.css";
import  { NavLink }from "react-router-dom";


const Header = (props) => {
  return (
    <div className={classes.headbar}>
      <div className={classes.header}>
        <div><NavLink  activeClassName="active" to="/home"> HOME</NavLink></div>
        <div><NavLink activeClassName="active" to="/store">STORE</NavLink></div>
        <div><NavLink activeClassName="active" to='/about'>ABOUT</NavLink></div>
        
        
        <div><NavLink activeClassName="active" to='/contact'>Contact Us</NavLink></div>
        <div><NavLink activeClassName="active" to='/login'>Login</NavLink></div>
        
      </div>
      </div>
  );
};

export default Header;