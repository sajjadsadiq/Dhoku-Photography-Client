import React from 'react';
import './Header.css'
import HeaderContent from '../HeaderContent/HeaderContent';
import Navbar from '../../Shared/Footer/Navbar/Navbar';

const Header = () => {
    return (
        <div className="header">
            <Navbar/>
            <HeaderContent/>
        </div>
    );
};

export default Header;