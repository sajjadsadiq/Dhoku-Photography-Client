import React from 'react';
import './ServiceOtherShow.css'

const ServiceOtherShow = ({ otherServices }) => {
    return (
        <div className="col-md-4 mb-3 d-flex text-align-center mt-3">
            <div >
                <img className='serviceIcon' src={otherServices.icon} alt="" />
            </div>
            <div className="ml-3">
                <span className='service-title'>{otherServices.name}</span> <br />
                <p>{otherServices.description}</p>
            </div>
        </div>
    );
};

export default ServiceOtherShow;