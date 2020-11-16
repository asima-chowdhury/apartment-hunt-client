import React from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import homeBackground from '../../images/home-background.png';

const HomeBanner = () => {
    return (
        <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8) ), url(${homeBackground})` }} className="text-center home-banner">
            <div className="pt-5">
                <h1 className="text-white pt-5">FIND YOUR HOUSE RENT</h1>
                <div className="d-flex justify-content-center pt-5">
                    <Form inline>
                        <FormControl type="text" placeholder="Search...." className="mr-sm-2" />
                        <Button variant="info" className="header-button">Find Now</Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;