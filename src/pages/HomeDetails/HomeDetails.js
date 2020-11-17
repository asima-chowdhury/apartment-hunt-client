import React, { useContext, useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import HomeDetailsBanner from '../../components/HomeDetailsBanner/HomeDetailsBanner';
import homeDetails1 from '../../images/apartments/homedetails-1.png';
import homeDetails2 from '../../images/apartments/homedetails-2.png';
import homeDetails3 from '../../images/apartments/homedetails-3.png';
import homeDetails4 from '../../images/apartments/homedetails-4.png';
import { useHistory, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';

const HomeDetails = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const { homeId } = useParams();
    const [singleHome, setSingleHome] = useState([]);
    const history = useHistory();

    useEffect(() => {
        fetch('https://limitless-everglades-16673.herokuapp.com/apartment')
            .then(res => res.json())
            .then(data => {
                const singleHome = data.map(home => home);
                const homeInfo = singleHome.find(data => parseInt(data.id) === parseInt(homeId));
                setSingleHome(homeInfo);
            })
    }, [])
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
            console.log(data);
            fetch('https://limitless-everglades-16673.herokuapp.com/addBooking',{
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => {
                history.push('/myRent')
                console.log(data);
                console.log('posted');
            })
    }
    return (
        <div>
            <Header />
            <HomeDetailsBanner />
            <div className="home-details container">
                <div className="row">
                    <div className="col-md-7">
                        <div className="row main-image pt-5">
                            <img src={singleHome.img} alt="" className="img-fluid" />
                        </div>
                        <div className="row gallery py-5">
                            <div className="col-md-3"><img src={homeDetails1} alt="homeDetails" style={{ height: '100px', width: '150px' }} /></div>
                            <div className="col-md-3"><img src={homeDetails2} alt="homeDetails" style={{ height: '100px', width: '150px' }} /></div>
                            <div className="col-md-3"><img src={homeDetails3} alt="homeDetails" style={{ height: '100px', width: '150px' }} /></div>
                            <div className="col-md-3"><img src={homeDetails4} alt="homeDetails" style={{ height: '100px', width: '150px' }} /></div>
                        </div>
                        <div className="home-info pb-5">
                            <div className="d-flex justify-content-between">
                                <h2>{singleHome.title}</h2>
                                <h2>{singleHome.price}</h2>
                            </div>
                            <p>3000 sq-ft., 3 Bedroom, Semi-furnished, Luxurious, South facing Apartment for Rent in Rangs Malancha, Melbourne.</p>
                            <h3>Price details-</h3>
                            <p>Rent/Month: $550 (negotiable) <br />
                            Service Charge : 8,000/= Tk per month, subject to change <br />
                            Security Deposit : 3 month’s rent <br />
                            Flat Release Policy : 3 months earlier notice required
                        </p>
                            <h3>Property Details-</h3>
                            <p>Address & Area : Rangs Malancha, House-68, Road-6A (Dead End Road), <br />   Dhanmondi Residential Area. <br />
                            Flat Size : 3000 Sq Feet. <br />
                            Floor :  A5 (5th Floor) (6 storied Building ) (South Facing Unit) <br />
                            Room Category : 3 Large Bed Rooms with 3 Verandas, Spacious Drawing, Dining & Family Living Room, <br />Highly Decorated Kitchen with Store Room and Servant room with attached Toilet. <br />
                            Facilities : 1 Modern Lift, All Modern Amenities & Semi Furnished. <br />
                            Additional Facilities : a. Electricity with full generator load, b. Central Gas Geyser, c. 2 Car <br /> Parking with 1 Driver’s Accommodation, d. Community Conference Hall, e. Roof Top Beautified Garden <br /> and Grassy Ground, f. Cloth Hanging facility with CC camera
                        </p>
                        </div>
                    </div>
                    <div className="col-md-4 pt-5">
                        <div className="homeDetails-form">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input name="fullName" defaultValue={loggedInUser.displayName} placeholder="Full Name" ref={register({ required: true })} />
                                {errors.fullName && <span className="error">Full Name is required</span>}

                                <input name="phone" placeholder="Phone No" ref={register({ required: true })} />
                                {errors.phone && <span className="error">Phone is required</span>}

                                <input name="email"  defaultValue={loggedInUser.email} placeholder="Email Address" ref={register({ required: true })} />
                                {errors.email && <span className="error">Email is required</span>}

                                <input name="message" placeholder="Message" ref={register({ required: true })} />
                                {errors.message && <span className="error">Message is required</span>}

                                <input className="invisible" defaultValue={singleHome.title} name="title" placeholder="title" ref={register({ required: true })} />
                                <input className="invisible" defaultValue={singleHome.price} name="price" placeholder="price" ref={register({ required: true })} />

                                <input type="submit" value="Request Booking" className="my-3 btn-block header-button text-white" variant="info" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeDetails;