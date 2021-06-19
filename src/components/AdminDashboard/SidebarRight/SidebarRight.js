import React from 'react';
import { Router } from 'react-router';
import './SidebarRight.css'
import OrderList from '../OrderList/OrderList';

const SidebarRight = () => {
    return (
        <div>
            <div className="SidebarRight">
                <div className="sidebarRightContent">
                   <OrderList/>
                </div>
            </div>
        </div>
    );
};

export default SidebarRight;