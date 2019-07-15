import React from 'react';
import FacebookLogo from '../assets/facebooklogo.png'

function Header() {
    return (
        <header className="header">
            <img width="100" src={FacebookLogo} alt="logo"></img>
            <span>Meu Perfil</span>
        </header>
    )
}

export default Header