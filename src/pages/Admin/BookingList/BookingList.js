import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png';
import plus from '../../../images/logos/plus.png';
import rent from '../../../images/logos/my-rent.png';
import { Link } from 'react-router-dom';

const BookingList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [totalBookingList, setTotalBookingList] = useState([]);

    useEffect(() => {
        fetch(`https://limitless-everglades-16673.herokuapp.com/allBooking`)
            .then(res => res.json())
            .then(data => {
                setTotalBookingList(data);
            })
    }, [])
    return (
        <section className="booking-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-2 col-sm-12 col-12 py-3">
                        <Link to="/home" >
                            <img src={logo} alt="" className="logo" />
                        </Link>
                    </div>
                    <div className="col-md-10 col-sm-12 col-12 d-flex justify-content-between py-3">
                        <h4>Booking List</h4>
                        <h4>{loggedInUser.displayName}</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2 col-2">
                        <div className="sidebar d-flex flex-column">
                            <Link to="/bookingList" className="py-1">
                                <h6 className="d-inline text-info"><img src={plus} alt="" className="mr-2" /> Booking List</h6>
                            </Link>
                            <Link to="/addHouse" className="py-1">
                                <h6 className="d-inline text-dark"><img src={rent} alt="" className="mr-2" />Add House</h6>
                            </Link>
                            <Link to="/myRent" className="py-1">
                                <h6 className="d-inline text-dark"><img src={rent} alt="" className="mr-2" />My Rent</h6>
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-10 col-10 container p-4" style={{ backgroundColor: '#E5E5E5' }}>
                        <div className="row py-2" style={{ backgroundColor: '#ddd' }}>
                            <div className="col-md-2">
                                <h6>Name</h6>
                            </div>
                            <div className="col-md-3">
                                <h6>Email ID</h6>
                            </div>
                            <div className="col-md-2">
                                <h6>Phone No</h6>
                            </div>
                            <div className="col-md-3">
                                <h6>Message</h6>
                            </div>
                            <div className="col-md-2">
                                <h6>Status</h6>
                            </div>
                        </div>
                        {
                            totalBookingList.map(singleBook =>
                                <div className="booking-list-items" key={singleBook._id}>
                                    <div className="row bg-white pt-1 border-bottom">
                                        <div className="col-md-2">
                                            <p>{singleBook.fullName}</p>
                                        </div>
                                        <div className="col-md-3">
                                            <p>{singleBook.email}</p>
                                        </div>
                                        <div className="col-md-2">
                                            <p>{singleBook.phone}</p>
                                        </div>
                                        <div className="col-md-3">
                                            <p>{singleBook.message}</p>
                                        </div>
                                        <div className="col-md-2">
                                            <div>
                                                <select id="status" name="status" style={{ border: '0' }}>
                                                    <option value="pending" className="text-danger">Pending</option>
                                                    <option value="done" className="text-success">Done</option>
                                                    <option value="ongoing" className="text-warning">On going</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookingList;