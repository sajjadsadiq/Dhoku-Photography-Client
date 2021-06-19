import React from 'react';
import './ReviewsDataShow.css'
import Avatar from '@material-ui/core/Avatar';

const ReviewsDataShow = ({client}) => {
    return (
        <div className='col-md-4 text-white'>
            <small>{client.description}</small>
            <div className="ReviewProfile d-flex mt-5">
                <div className="avatar ">
                    <Avatar/>
                </div>
                <div className="name ml-2">
                    <p>{client.name}</p>
                    <small>{client.type}</small>
                </div>
            </div>
        </div>
    );
};

export default ReviewsDataShow;