import React from 'react';
import {Link} from "react-router-dom";
import logo from '../assets/images/logo KA.png'

const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
        <Link className="navbar-brand" to="/"><img src={logo} alt="store logo" width="7%" /></Link>
    </nav>
)

export default Navbar