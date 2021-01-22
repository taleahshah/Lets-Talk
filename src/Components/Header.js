import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header class="header-login-signup">
            <div class="header-limiter">
                <h1><a href="/">Lets<span>Talk!</span></a></h1>
                <nav>
                    <Link to="/">Home</Link>
                    <a class="selected"><Link to="/">About Us</Link></a>
                    <a><Link to="/">Contact Us</Link></a>
                </nav>

                <ul>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                </ul>
            </div>
        </header>
    )
}
export default Header