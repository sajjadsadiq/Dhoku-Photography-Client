import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDataShow.css';

const ServiceDataShow = ({ event }) => {
  return (
    <section className="section">
      <div className="serviceContainer">
        <div className="serviceBox">
          <img className="servicesImg" src={event.img} alt="" />
          <div className="service-text text-center mt-3">
            <h3 className="text-primary">{event.title}</h3>
            <small className="text-secondary">{event.description}</small>
          </div>
          <br />
          <Link to="/dashboard">
            <div className='text-center mb-3'>
              <button className="btn btn-primary">
                {event.btn}
              </button>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceDataShow;
