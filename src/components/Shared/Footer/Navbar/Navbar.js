import React from 'react';
import './Navbar.css'
import CameraIcon from '@material-ui/icons/Camera';

const Navbar = () => {
    return (
        <div className="container">
            <nav class="navbar navbar-expand-lg navbar-light text-white">
                <a class="navbar-brand logoSize" href="/home">< CameraIcon className="text-danger logoSize" /> Dho<label className="text-danger">KU</label></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <a class="nav-link mr-2" href="/home">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mr-2" href="#/about">About <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mr-2" href="#/service">Service <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mr-2" href="#/reviews">Reviews <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mr-2" href="/dashboard">Admin<span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mr-2" href="#/contact">Contact <span class="sr-only">(current)</span></a>
                        </li>
                        <li>
                            
                            <button href='/login' className='loginBtn btn btn-danger ml-5 pr-4'><a href="/login">Login</a></button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;