import React from 'react';
import location from '../../images/logos/map.png';
import facebook from '../../images/logos/fb.png';
import instagram from '../../images/logos/instagram.png';
import linkedIn from '../../images/logos/linkedin.png';
import youTube from '../../images/logos/youtube.png'

const Footer = () => {
    return (
        <div className="footer-area text-white pt-5 pb-5">
            <div className="container">
                <div className="row pt-3 pb-3">
                    <div className="col-md-5">
                        <div className="row d-flex">
                            <img className="mr-3" src={location} alt="" />
                            <p>H#340 (4th Floor), Road #24, <br />New DOHS, Mohakhali, Dhaka, Bangladesh <br />Phone: 018xxxxxxxxxx <br />Email:info@company.com</p>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <h4>Company</h4>
                        <br />
                        <p>About <br />Site Map <br />Support Center <br />Terms Conditions <br />Submit Listing</p>
                    </div>
                    <div className="col-md-2">
                        <h4>Quick Links</h4>
                        <br />
                        <p>Quick Links <br />Rentals <br /> Sales <br />Contact <br />Terms Condition <br />Our blog</p>
                    </div>
                    <div className="col-md-3 pl-5">
                        <h4>About Us</h4>
                        <br />
                        <p>We are the top real estate <br />agency in Sydney, with agents <br />available to answer any <br />question 24/7.</p>
                        <br />
                        <div className="row d-flex pl-3">
                            <img className="mr-3" src={facebook} alt="" />
                            <img className="mr-3" src={instagram} alt="" />
                            <img className="mr-3" src={linkedIn} alt="" />
                            <img src={youTube} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;