import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import bed from '../../images/logos/bed1.png'
import bath from '../../images/logos/bath1.png'

const SingleApartment = (props) => {
    const{id,img,title,location,beds,baths,price} =props.apartment;
    return (
        <div className="col-md-4 my-3">
            <div className="bg-white single-apartment">
                <img style={{ height: '40%', width: '100%' }} src={img} alt="apartment" />
                <div className="apartment-content p-2">
                    <h5 className="my-3">{title}</h5>
                    <p className="text-secondary">{location}</p>
                    <div className="d-flex justify-content-between text-secondary">
                        <p><img src={bed} alt="bed" style={{ height: '20px', width: '20px', marginRight: '10px' }} />{beds}</p>
                        <p><img src={bath} alt="bath" style={{ height: '20px', width: '20px', marginRight: '10px' }} />{baths}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <h2>{price}</h2>
                        <Link to={`/homeDetails/${id}`} onClick={() =>{props.handleApartmentContent(props.id)}}>
                            <Button variant="info" className="header-button">View Details</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleApartment;