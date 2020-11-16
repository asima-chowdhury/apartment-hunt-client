import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import HomeBanner from '../../components/HomeBanner/HomeBanner';
import HomeRent from '../../components/HomeRent/HomeRent';
import HomeService from '../../components/HomeService/HomeService';

const Home = () => {
    return (
        <div>
            <Header/>
            <HomeBanner/>
            <HomeRent/>
            <HomeService/>
            <Footer/>
        </div>
    );
};

export default Home;