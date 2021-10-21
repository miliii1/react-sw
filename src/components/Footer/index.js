import React from 'react';
import { FaGithub, FaLinkedin, FaJediOrder } from 'react-icons/fa';
import './index.css';

function Footer() {
    return (
        <footer>
            <div className='fuente-api'>
                <a href='' target='_blank' rel='noopener noreferrer'>
                    <FaJediOrder /> <p>Star Was API</p>
                </a>
            </div>

            <div className='creador'>
                <span>Developer by Milagros Jara</span>
                <span>Full Stack Developer</span>
            </div>

            <div className='redes-sociales'>
                <a href='https://www.linkedin.com/in/milagros-jara/' target='_blank' rel='noopener noreferrer'>
                    <FaLinkedin />
                </a>
                <a href='https://github.com/miliii1' target='_blank' rel='noopener noreferrer'>
                    <FaGithub />
                </a>
            </div>
        </footer>
    )
}

export default Footer
