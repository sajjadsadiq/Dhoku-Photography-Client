import React from 'react';
import ReviewsDataShow from '../ReviewsDataShow/ReviewsDataShow';
import './Reviews.css'

// onClick={handelAddService}
const handelAddService = () => {
    fetch(`http://localhost:4000/addService`,{
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(clientData)
    }) 
}
const clientData = [
    {
        id: 1,
        name: 'Sabir Hasan',
        type: 'Client',
        profile: '',
        description: "I believe that if life gives you lemons, you should make lemonade... And try to find somebody whose life has given them vodka, and have a party."
    },
    {
        id: 2,
        name: 'Sadman Kabir',
        type: 'Client',
        profile: '',
        description: "It's easy to impress me. I don't need a fancy party to be happy. Just good friends, good food, and good laughs. I'm happy. I'm satisfied. I'm content."
    },
    {
        id: 1,
        name: 'Rofikul Islam',
        type: 'Client',
        profile: '',
        description: "Future generations are not going to ask us what political party were you in. They are going to ask what did you do about it, when you knew the glaciers were melting."
    }
]

const Reviews = () => {
    return (
        <section className="reviews">
            <div className="container">
                <div className="reviewsTitle mt-5">
                    <h5 className="text-primary d-flex justify-content-center section__subtitle ">Testimonials</h5>
                    <h2 className="d-flex justify-content-center section__title">What peoples say</h2>
                </div>
                <div className="row">
                    {
                        clientData.map(client => <ReviewsDataShow client={client} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Reviews;