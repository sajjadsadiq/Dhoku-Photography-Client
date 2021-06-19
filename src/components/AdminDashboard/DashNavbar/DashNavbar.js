import React, { useContext } from 'react';
import CameraIcon from '@material-ui/icons/Camera';
import { UserContext } from '../../../App';

const DashNavbar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    return (
        <div>
            <div className="row">
                <div className="col-md-3">
                    <h1 class="d-flex justify-content-center" href="#">< CameraIcon className="text-primary logoSize mt-3" /> Dho<label className="text-primary">KU</label></h1>
                </div>
                <div className="col-md-7 mt-3">
                    <h6>Order List</h6>
                </div>
                <div className="col-md-2 mt-3">
                    <h5>{loggedInUser.name}</h5>
                </div>
            </div>
        </div>
    );
};

export default DashNavbar;