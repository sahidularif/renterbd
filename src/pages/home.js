import React from 'react';
import AddListing from '../components/home/addListing/addListing';
import FeatherListing from '../components/home/feathurListing/featherListing';
import Footer from '../components/home/footer/footer';
import Header from '../components/home/header/header';
import Navbar from '../components/home/header/navBar';
import HeroSection from '../components/home/heroSection/heroSection';
import Services from '../components/home/services/services';
import Subscribe from '../components/home/subscribe/subscribe';
import Testimonial from '../components/home/testimonial/testimonial';
import '../styles/home.css';
const Home = () => {

    return (
        <>
            <section className="top-section">
                <div className="header-section">
                    <div className="top-bar">
                        <Header />
                    </div>
                    <div className="nav-bar">
                        <Navbar />
                    </div>
                    <div className="hero-bar text-center justify-content-center">
                        <HeroSection />
                    </div>
                </div>
            </section>
            <section className="service-section">
                <Services />
            </section>
            <section className="testimonial-section">
                <Testimonial />
            </section>
            <section>
                <FeatherListing />
            </section>
            <section>
                <AddListing />
            </section>
            <section>
                <Subscribe />
            </section>
            <section>
                <Footer />
            </section>
        </>
    );
};

export default Home;