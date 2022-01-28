import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderContent.css'
import DhoKu from '../../../images/dhoku.svg'
import TodayIcon from '@material-ui/icons/Today';
import HeaderContentInfo from '../HeaderContentInfo/HeaderContentInfo';

const HeaderContent = () => {
    return (
        <main className="container headerContentArea">
            <div className="row align-items-center headerContent">
                <div className="col-md-6 ">
                    <h2 className='bannerTitle mt-4'>DhOKU <br /><span className="text-primary mt-1">PHOTOGRAPHY</span></h2>
                    <h4>Photography With Style, It's Time To Celebrate!</h4>
                    <p className="mt-1 text-secondary">In photography there is a reality so subtle that it becomes more real than reality.</p>
                    <div className="btnName">
                        <Link to="/dashboard">
                            <button className="btn btn-primary mt-3">
                                <TodayIcon /> ONLINE BOOOKING
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="col-md-6 mt-5">
                    <img src={DhoKu} alt="" className="img-fuild imgDhoku" />
                </div>
                
            </div>
        </main>
    );
};

export default HeaderContent;