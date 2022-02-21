import React from "react";
import pic from '../amazon.jpg';
import classes from './Topbar.module.css';
const Topbar = () => {
    return (
        <header>
            <nav className={classes.Topbar}
            ><img src={pic}
                alt='Amazon logo' /></nav>
        </header>
    );
}
export default Topbar;