import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png';
import plus from '../../../images/logos/plus.png';
import rent from '../../../images/logos/my-rent.png';

const MyRent = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [rentDetails, setRentDetails] = useState([]);

    useEffect(() => {
        fetch('https://limitless-everglades-16673.herokuapp.com/rentDetails?email=' + loggedInUser.email,)
            .then(res => res.json())
            .then(data => {
                setRentDetails(data);
            })
    }, [])
    return (
        <section className="my-rent">
            <div className="container">
                <div className="row">
                    <div className="col-md-2 col-sm-12 col-12 py-3">
                        <Link to="/home" >
                            <img src={logo} alt="" className="logo" />
                        </Link>
                    </div>
                    <div className="col-md-10 col-sm-12 col-12 d-flex justify-content-between py-3">
                        <h4>My Rent</h4>
                        <div className="user">
                            <h4>{loggedInUser.displayName}</h4>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 col-2">
                        <div className="sidebar d-flex flex-column">
                            <Link to="/bookingList" className="py-1">
                                <h6 className="d-inline text-dark"><img src={plus} alt="" className="mr-2" /> Booking List</h6>
                            </Link>
                            <Link to="/addHouse" className="py-1">
                                <h6 className="d-inline text-dark"><img src={rent} alt="" className="mr-2" />Add House</h6>
                            </Link>
                            <Link to="/myRent" className="py-1">
                                <h6 className="d-inline text-info">My Rent</h6>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-10 col-10 container p-4" style={{ backgroundColor: '#E5E5E5' }}>
                        <div className="row">
                            <div className="col-md-6">
                                <h6>House Name</h6>
                            </div>
                            <div className="col-md-3">
                                <h6>Price</h6>
                            </div>
                            <div className="col-md-3">
                                <h6>Action</h6>
                            </div>
                        </div>
                        {
                            rentDetails.map(singleRent =>
                                <div className="row bg-white pt-1 border-bottom" key={singleRent._id}>
                                    <div className="col-md-6">
                                        <p>{singleRent.title}</p>
                                    </div>
                                    <div className="col-md-3">
                                        <p>{singleRent.price}</p>
                                    </div>
                                    <div className="col-md-3">
                                        <Button variant="info" className="header-button">View details</Button>
                                    </div>
                                </div>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyRent;