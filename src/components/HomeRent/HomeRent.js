import React, { useEffect, useState } from 'react';
import SingleApartment from '../SingleApartment/SingleApartment';

const HomeRent = () => {
    const [apartmentData, setApartmentData] = useState([]);
    useEffect(() => {
        fetch('https://limitless-everglades-16673.herokuapp.com/apartment')
            .then(res => res.json())
            .then(data => setApartmentData(data))
    }, [])
    const [content, setContent] = useState(apartmentData[0]);
    const handleApartmentContent = (id) => {
        setContent(apartmentData[id]);
    }
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
                            key={apartment.id}
                            apartment={apartment}
                            handleApartmentContent={handleApartmentContent}
                        ></SingleApartment>)
                    }
                </div>
            </div>
        </section>
    );
};

export default HomeRent;