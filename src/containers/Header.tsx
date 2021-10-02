import React from 'react';
import '../assets/sass/header.scss';
import * as Strings from '../strings';
import logo from '../assets/images/logo.svg';

const Header: React.VFC = () => {
    return (
        <div className="header">
            <h1 className="header__logo">
                <img
                    className="header__img"
                    src={logo}
                    alt={Strings.HEADER_TITLE}
                />
            </h1>
            <p className="header__title">{Strings.HEADER_TITLE}</p>
        </div>
    );
};

export default Header;
