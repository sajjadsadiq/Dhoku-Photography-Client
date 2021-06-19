import React from 'react';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';

const HeaderContentInfo = () => {
    return (
        <div className="container">
            <div className="row d-flex justify-content-center mt-5 mb-5">
                <div className="col-md-4 text-danger"><CallIcon/>+88 096 2342 4879</div>
                <div className="col-md-4 text-danger"><EmailIcon/> Support@Dhoku.com</div>
            </div>
        </div>
    );
};

export default HeaderContentInfo;