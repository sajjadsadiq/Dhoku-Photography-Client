import React from 'react';
import ListAltIcon from '@material-ui/icons/ListAlt';
import AddIcon from '@material-ui/icons/Add';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import { Link } from 'react-router-dom';

const SidebarLeft = () => {
    return (
        <div>
            <div className="orderlist mt-5">
                <Link to='/orderlist/dashboard' className='d-flex justify-content-center' >
                    <ListAltIcon />
                    <p>Order List</p>
                </Link>
            </div>
            <div className="AddService ">
            <Link to='/addservice/dashboard' className='d-flex justify-content-center' >
                    <AddIcon />
                    <p>Add Service</p>
                    </Link>
            </div>
            <div className="makeAdmin">
                <Link to='/makeAdmin/dashboard' className='d-flex justify-content-center' href="">
                    <SupervisorAccountIcon />
                    <p>Make Admin</p>
                </Link>
            </div>
            <div className="manager">
                <Link to='/managerservice/dashboard' className='d-flex justify-content-center' href="">
                    <InsertChartIcon />
                    <p>Manager Service</p>
                </Link>
            </div>
        </div>
    );
};

export default SidebarLeft;