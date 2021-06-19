import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDataShow.css'

const ServiceDataShow = ({ event }) => {
    return (
        <div className="col-md-3 mt-5">
            <div className="servicesCol">
                <img className="servicesImg" src={event.img} alt="" />
                <h5 className="text-danger">{event.title}</h5>
                <small className="text-secondary mt-2">{event.description}</small> <br />
                <Link to="/dashboard">
                    <button className="btn btn-danger mt-2">{event.btn}</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDataShow;