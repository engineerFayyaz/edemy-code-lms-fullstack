import React from 'react';
import Link from 'next/link';

const AboutUs = () => {
    return (
        <div className="about-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-image text-center">
                            <img src="/images/about-img11.png" alt="image" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="about-content">
                            <span className="sub-title">About Us</span>
                            <h2 className="playfair-display-font">Feel Like You Are Attending Your Class Physically!</h2>
                            <p>Toxic Beauty Academy offers an exhilarating online learning experience. Explore our courses from the comfort of your space, free from any drawbacks. Our adaptable learning methods empower you to master skills efficiently, outpacing conventional learning approaches.</p>

                            <Link href="/profile-authentication">
                                <a className="default-btn mt-2">
                                    <i className="flaticon-user"></i> Join For Free <span></span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;