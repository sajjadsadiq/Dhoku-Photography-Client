import React from 'react';
import { Link } from 'react-router-dom';
import './EventsPackagesDataShow.css';

const EventsPackagesDataShow = ({ eventPackage }) => {
  return (
    //   col-md-3 mt-5
    <div className=" eventContainer">
      <div className="eventPackages">
        <div className="enentPrices">
          <h1>$ {eventPackage.price}</h1>
          <h3 className="">{eventPackage.title}</h3>
        </div>
        <div className="eventTitleDisc mt-3">
          <p>{eventPackage.description}</p>
        </div>
        <div className="enentBooking">
          <Link to="/dashboard">
            <button className="btn btn-primary">{eventPackage.btn}</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventsPackagesDataShow;
