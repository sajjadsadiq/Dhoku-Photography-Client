import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import EventsPackages from '../EventsPackages/EventsPackages';
import Header from '../Header/Header';
import Reviews from '../Reviews/Reviews';
import Service from '../Service/Service';
import ServiceOther from '../ServiceOther/ServiceOther';
import WorksPhoto from '../WorksPhoto/WorksPhoto';

const Home = () => {
    return (
        <div>
            <Header/>
            <Service/>
            <ServiceOther/>
            <WorksPhoto/>
            <EventsPackages/>
            <photoWorks/>
            <Reviews/>
            <Footer/>
      </div>      
    );
};

export default Home;