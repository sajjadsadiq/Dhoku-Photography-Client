import React from 'react';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Logo from './../../../images/Dhokh.png'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="container footerContainer">
            <div class="row">
                <div className="col-md-5  justify-content-center">
                <div class="d-flex justify-content-center" href="#">
                    <img className="footerLogo" src={Logo} alt="" />
                </div>
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