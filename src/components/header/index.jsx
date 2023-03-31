import React from 'react';
import logo from '../../logo.svg';

import Container from "../container";

import './styles.scss'
import {useGetCurrencyQuery} from "../../store/currencyApi";
import {getDate, rounded} from "../../utils";
const Header = () => {
    const currentDate = getDate()
    const {data:usd, isLoading:usdLoading} = useGetCurrencyQuery({currentDate, valcode:"USD"})
    const {data:eur, isLoading:eurLoading} = useGetCurrencyQuery({currentDate, valcode:"EUR"})

    return (
            <header className="header">
                <Container>
                    <nav className="header__nav">
                        <div className="logo">
                            <img className="App-logo" src={logo} alt="logo" />
                        </div>
                        {usdLoading && eurLoading ? <div>Loading...</div> :

                                !!usd && !!eur && <ul className="header__currency">
                            <li>
                            <b>USD:</b> {rounded(usd[0].rate, 2)}
                            </li>
                            <li>
                            <b>EUR:</b> {rounded(eur[0].rate, 2)}
                            </li>
                            </ul>
                        }
                    </nav>
                </Container>
            </header>
        );
    };
export default Header;