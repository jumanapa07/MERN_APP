import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';


export default function NavBar(){
    return(
        <nav className="navbar">
            <div className='navbar-logo'>
                <Link to='/'>Home</Link>

</div>   
<ul className='navbar-links'>
    <li><Link to='/products'>Products </Link></li>
    <li><Link to='/cart'>Cart </Link></li>

</ul>
        </nav>
    )

}