import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import fakeData from '../../fakeData';
import SingleApartment from '../SingleApartment/SingleApartment';

const HomeRent = () => {
    // const handleAdd = () => {
    //     fetch('http://localhost:5000/addApartment', {
    //         method: 'POST',
    //         header:{
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(fakeData)
    //    })
    // }
    const [apartmentData, setApartmentData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/apartment')
            .then(res => res.json())
            .then(data => setApartmentData(data))
    }, [])
    return (
            <section className="home-rent">
                <div className="section-title p-5 text-center">
                    <h6>House Rent</h6>
                    <h2>Discover the latest Rent <br />available today</h2>
                </div>
                <div className="d-flex justify-content-center">
                    <div className="row w-75">
                        {
                            apartmentData.map(apartment => <SingleApartment
                                key={apartment._id}
                                apartment={apartment}
                            ></SingleApartment>)
                        }
                    </div>
                </div>
            </section>
    );
};

export default HomeRent;