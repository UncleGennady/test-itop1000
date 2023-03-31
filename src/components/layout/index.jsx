import React from 'react';
import Header from '../header'
import Container from "../container"

import './styles.scss'
const Layout = ({children}) => {
    return (
        <>
            <Header />
            <main>
                <Container>
                    {children}
                </Container>
            </main>
        </>
    );
};

export default Layout;