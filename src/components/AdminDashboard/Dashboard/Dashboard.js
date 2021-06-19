import React from 'react';
import DashNavbar from '../DashNavbar/DashNavbar';
import SidebarLeft from '../SidebarLeft/SidebarLeft';
import SidebarRight from '../SidebarRight/SidebarRight';



const Dashboard = () => {
    return (
        <div className="container-fluid">
            <DashNavbar/>
            <div className="row">
                <div className="col-md-3">
                    <SidebarLeft />
                </div>
                <div className="col-md-9">
                    <SidebarRight />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;