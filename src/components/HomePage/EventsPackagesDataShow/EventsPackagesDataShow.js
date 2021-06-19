import React from 'react';
import { Link } from 'react-router-dom';
import './EventsPackagesDataShow.css'

const EventsPackagesDataShow = ({ eventPackage }) => {
    return (
        <div className="col-md-3 mt-5">
            <div className="eventPackages">
                <h4>{eventPackage.title}</h4>
                <h2 className="text-danger">$ {eventPackage.price}</h2>
                <p>{eventPackage.description}</p>
                <Link to="/dashboard">
                    <button className="btn btn-danger">{eventPackage.btn}</button>
                </Link>
            </div>
        </div >
    );
};

export default EventsPackagesDataShow;