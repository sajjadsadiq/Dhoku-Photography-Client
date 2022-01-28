import React from 'react';
import EventsPackagesDataShow from '../EventsPackagesDataShow/EventsPackagesDataShow';
import './EventsPackages.css'

const eventsPackagesData = [
    {
        id: 1,
        title: 'Birthday Parties',
        price:  199,
        description: '5 Hour Up to 10 Persone Decoration Catering',
        btn: 'GET IN BOOKING'
    },
    {
        id: 2,
        title: 'Wedding Celebrations',
        price:  899,
        description: '10 Hour Up to 100 Persone Decoration Catering',
        btn: 'GET IN BOOKING'
    },
    {
        id: 3,
        title: 'Corporate Events',
        price:  799,
        description: '8 Hour Up to 50 Persone Decoration Catering',
        btn: 'GET IN BOOKING'
    },
    {
        id: 4,
        title: 'Festival Celebrations',
        price:  1199,
        description: '18 Hour Up to 200+ Persone Decoration Catering',
        btn: 'GET IN BOOKING'
    }
]

const EventsPackages = () => {
    return (
        <section>
            <div className="eventpackges container">
                <div className="section__subtitle packagesTitle mt-5">
                    <h6 className="d-flex justify-content-center text-primary">Choose Your Time</h6>
                    <h2 className="d-flex justify-content-center section__title" >Our events packages</h2>
                </div>
                <div className="row">
                    {
                       eventsPackagesData.map(eventPackage => <EventsPackagesDataShow eventPackage={eventPackage} /> ) 
                    }
                </div>
            </div>
        </section>
    );
};

export default EventsPackages;