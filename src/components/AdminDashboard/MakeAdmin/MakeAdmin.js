import React from 'react';
import SidebarLeft from '../SidebarLeft/SidebarLeft';
import './MakeAdmin.css'

const MakeAdmin = () => {
    return (
        <div>
            <div className="makeAdmin p-5">
                <label htmlFor="">Email</label> <br />
                <div className="mail d-flex">
                    <input placeholder="saj@gmail.com" type="text" />
                    <input className="btn btn-primary emaiBtn ml-3" type="submit" value="Submit" />
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;