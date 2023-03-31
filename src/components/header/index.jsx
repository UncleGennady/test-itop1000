import React from 'react';
import logo from '../../logo.svg';

import Container from "../container";

import './styles.scss'
const Header = () => {
        return (
            <header className="header">
                <Container>
                    <nav className="header__nav">
                        <div className="logo">
                            <img className="App-logo" src={logo} alt="logo" />
                        </div>
                        <ul className="header__currency">
                            <li>
                                <b>USD:</b> 36,67
                            </li>
                            <li>
                                <b>EUR:</b> 39,77
                            </li>
                        </ul>
                    </nav>
                </Container>
            </header>
        );
    };
export default Header;