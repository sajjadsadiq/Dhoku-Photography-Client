import React from 'react'
import './WorksPhoto.css'
import birthdayOne from '../../../images/birtdhayOne.jpg'
import birthdayTwo from '../../../images/BirthdayTwo.jpg'
import birthdayThree from '../../../images/BirthdayThree.jpg'
import weddingOne from '../../../images/WeddingsOne.jpg'
import weddingTwo from '../../../images/WeddingsTwo.jpg'
import weddingThree from '../../../images/WeddingsThree.jpg'
import partyOne from '../../../images/PartyOne.jpg'
import partyTwo from '../../../images/PartyTwo.jpg'
import partyThree from '../../../images/PartyThree.jpg'

const WorksPhoto = () => {
    return (
        <div className="mt-5">
            <h5 className=" d-flex justify-content-center">CREATIVEWORKS</h5>
            <div className="workNav mt-3 d-flex text-align-center justify-content-center">
                <p className="ml-3 text-danger">All</p>
                <p className="ml-3">Birthday</p>
                <p className="ml-3">Weddings</p>
                <p className="ml-3">Festival</p>
            </div>
            <div className="workPhoto">
                <div className="container row p-5">
                    <div className="col-md-4 framePhoto Birthday">
                        <img className='imgSize mb-3 mt-3' src={birthdayOne} alt=""/>
                        <img className='imgSize mb-3' src={birthdayTwo} alt=""/>
                        <img className='imgSize mb-3' src={birthdayThree} alt=""/>
                    </div>
                    <div className="col-md-4 framePhoto Weddings mt-5">
                        <img className='imgSize mb-3 mt-3' src={weddingOne} alt=""/>
                        <img className='imgSize mb-3' src={weddingTwo} alt=""/>
                        <img className='imgSize mb-3' src={weddingThree} alt=""/>
                    </div>
                    <div className="col-md-4 framePhoto Festival">
                        <img className='imgSize mb-3 mt-3' src={partyOne} alt=""/>
                        <img className='imgSize mb-3' src={partyTwo} alt=""/>
                        <img className='imgSize mb-3' src={partyThree} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorksPhoto;