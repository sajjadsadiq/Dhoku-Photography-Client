import React from 'react';
import './ReviewsDataShow.css';
import Avatar from '@material-ui/core/Avatar';

const ReviewsDataShow = ({ client }) => {
  return (
    <div className="col-md-4 text-white">
      <div className="reviewsBox">
        <div className='profileName'>
        <div className="avatar ">
          <Avatar className='profile'/>
        </div>

        <div className="name ml-3">
          <p className=''>{client.name}</p>
        </div>
        </div>
        <small className='reviesDes mt-4'>{client.description}</small>
      </div>
    </div>
  );
};

export default ReviewsDataShow;
