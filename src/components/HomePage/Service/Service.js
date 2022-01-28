import React, { useEffect, useState } from 'react';
import './Service.css'
import ServiceDataShow from '../ServiceDataShow/ServiceDataShow';



const Service = () => {
    const [service, setService] = useState([])

    useEffect(() => {
        fetch('https://ancient-ravine-66876.herokuapp.com/serviceEvent')
        .then(res => res.json())
        .then(data => setService(data))
    })
    return (
        <section className="container service-container">
            <div className="services justify-content-center">
                <h6 className="d-flex justify-content-center text-primary section__subtitle">HEY THERE, OUR SERVICE!</h6>
                <h2 className="d-flex justify-content-center section__title">We will give a very special celebration for you</h2>

                <div className="row">
                    {
                        service.map(event => <ServiceDataShow event={event} />)
                    }
                </div>
                {/* <button onClick={handelAddService} className="btn btn-outline-primary mt-5">Add Service</button> */}
            </div>
        </section>
    );
};

export default Service;







//-----------------------------------------


// import birthday from '../../../images/birthday.svg'
// import wedding from '../../../images/Weddings.svg'
// import party from '../../../images/Party.svg'
// import fentival from '../../../images/Festival.svg'

// onClick={handelAddService}
// const handelAddService = () => {
//     fetch(`http://localhost:4000/addService`,{
//         method: 'POST',
//         headers: {
//             'Content-Type' : 'application/json'
//         },
//         body: JSON.stringify(eventsData)
//     }) 
// }


// const eventsData = [
//     {
//         title: 'Birthday Party',
//         id: 1,
//         description: 'Lorem ipsum dolor sit amet, adi piscing elit, sed do..',
//         img: https://i.ibb.co/5KYsk2v/birthday.jpg,
//         btn: 'Booking Now'
//     },
//     {
//         title: 'Weddings',
//         id: 2,
//         description: 'At vero eos et accusamus et iusto odio dignissimos ducimus..',
//         img: https://i.ibb.co/rc6bs88/Weddings.jpg,
//         btn: 'Booking Now'
//     },
//     {
//         title: 'Party & Events',
//         id: 3,
//         description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur. Sed do...',
//         img: https://i.ibb.co/L0cpTMr/Party.jpg,
//         btn: 'Booking Now'
//     },
//     {
//         title: 'Festival',
//         id: 4,
//         description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur. Sed do...',
//         img: https://i.ibb.co/r57dyg1/Festival.jpg,
//         btn: 'Booking Now'
//     }
// ]