import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logohorizontal.png';
import './nav.css';


function Nav() {
    return (
        <header>
            <nav className='nav-main'>
                <Link to='/'><img src={logo} alt='Logo Star Wars'></img></Link>
                <ul>
                    <li><Link to='/' className='home'>HOME</Link></li>
                    <li><Link to='/characters' className='personagens'>CHARACTERS</Link></li>
                    <li><Link to='/planets' className='planetas'>PLANETS</Link></li>
                    <li><Link to='/starships' className='naves'>STARSHIPS</Link></li>
                    <li><Link to='/movies' className='naves'>MOVIES</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default Nav
