import React from 'react';

const ServiceOtherShow = ({ otherServices }) => {
    return (
        <div className="col-md-4 d-flex text-align-center">
            <div >
                <img src={otherServices.icon} alt="" />
            </div>
            <div className="ml-3">
                <h6>{otherServices.name}</h6> <br />
                <p>{otherServices.description}</p>
            </div>
        </div>
    );
};

export default ServiceOtherShow;