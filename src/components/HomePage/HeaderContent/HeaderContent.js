import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderContent.css'
import DhoKu from '../../../images/dhoku.svg'
import TodayIcon from '@material-ui/icons/Today';
import HeaderContentInfo from '../HeaderContentInfo/HeaderContentInfo';

const HeaderContent = () => {
    return (
        <main className="container">
            <div className="row align-items-center headerContent">
                <div className="col-md-6 ">
                    <h2>DHOKU</h2>
                    <h2 className="text-danger mt-1">PHOTOGRAPHY</h2>
                    <h6>Photography With Style, It's Time To Celebrate!</h6>
                    <p className="mt-1 text-secondary">In photography there is a reality so subtle that it becomes more real than reality.</p>
                    <div className="btnName">
                        <Link to="/dashboard">
                            <button className="btn btn-danger">
                                <TodayIcon /> ONLINE BOOOKING
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="col-md-6 mt-5">
                    <img src={DhoKu} alt="" className="img-fuild imgDhoku" />
                </div>
                <HeaderContentInfo />
            </div>
        </main>
    );
};

export default HeaderContent;