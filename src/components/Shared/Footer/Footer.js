import React from 'react';
import CameraIcon from '@material-ui/icons/Camera';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const Footer = () => {
    return (
        <footer className="container">
            <div class="row">
                <div className="col-md-5  justify-content-center">
                <h1 class="d-flex justify-content-center" href="#">< CameraIcon className="text-danger logoSize mt-3" /> Dho<label className="text-danger">KU</label></h1>
                    <p class="d-flex justify-content-center">All Rights Reserved 2021 &copy;<b> Sajjad Sadiq</b></p>
                </div>
                <div className="col-md-2">
                    <b>ABOUT US</b>
                    <p className="mt-5">About</p>
                    <p>Service</p>
                    <p>Pricing</p>
                </div>
                <div className="col-md-2">
                    <b>QUICK LINS</b>
                    <p className="mt-5">Privacy</p>
                    <p>Offers</p>
                    <p>Advertise</p>
                    <p>Support</p>
                    <p>Refund</p>
                </div>
                <div className="col-md-3">
                    <b>CONTACT US</b>
                    <p className="mt-5"><CallIcon/> +88 096 2344 6345</p>
                    <p><EmailIcon/> Support@dhoku.com</p>
                    <p><LocationOnIcon/>Dhanmondi, Dhaka 1209</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;