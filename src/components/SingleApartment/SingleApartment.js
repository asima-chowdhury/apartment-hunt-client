import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import bed from '../../images/logos/bed1.png'
import bath from '../../images/logos/bath1.png'

const SingleApartment = ({ apartment }) => {
    return (
        <div className="col-md-4 my-3 single-apartment">
            <Link to="#">
                <div className="bg-white">
                    <img style={{ height: '40%', width: '100%' }} src={apartment.img} alt="apartment" />
                    <div className="apartment-content p-2">
                        <h5 className="my-3">{apartment.title}</h5>
                        <p className="text-secondary">{apartment.location}</p>
                        <div className="d-flex justify-content-between text-secondary">
                            <p><img src={bed} alt="bed" style={{ height: '20px', width: '20px', marginRight: '10px' }} />{apartment.beds}</p>
                            <p><img src={bath} alt="bath" style={{ height: '20px', width: '20px', marginRight: '10px' }} />{apartment.baths}</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <h2>{apartment.price}</h2>
                            <Link to="#">
                                <Button variant="info" className="header-button">View Details</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default SingleApartment;