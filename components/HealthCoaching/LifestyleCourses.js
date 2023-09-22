import React from 'react';
import Link from 'next/link';

const LifestyleCourses = () => {
    return (
        <div className="lifestyle-area bg-f6f7fb pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <h2 className="playfair-display-font">Inspring you to live a healthier lifestyle</h2>
                    <p>I'm here to inspire you to embrace a healthier lifestyle. Together, we'll make positive choices and achieve your wellness goals for a happier, more vibrant life</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-lifestyle-box">
                            <div className="icon">
                                <i className="flaticon-diet"></i>
                            </div>

                            <h3 className="playfair-display-font">
                                <Link href="/courses-1">
                                    <a>Nutrition Strategies</a>
                                </Link>
                            </h3>
                            
                            <p>Discover effective nutrition strategies with me. From balanced meal plans to mindful eating, I'll empower you to make informed choices for a healthier, more energized life.</p>

                            <Link href="/courses-1">
                                <a className="link-btn">Start Now</a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-lifestyle-box">
                            <div className="icon">
                                <i className="flaticon-vitamin-c"></i>
                            </div>
                     
                            <h3 className="playfair-display-font">
                                <Link href="/courses-1">
                                    <a>Personal Program</a>
                                </Link>
                            </h3>

                            <p>Unlock your full potential with a personalized program tailored just for you. Achieve your goals, whether it's fitness, health, or personal development, through a customized.</p>
                            
                            <Link href="/courses-1">
                                <a className="link-btn">Start Now</a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                        <div className="single-lifestyle-box">
                            <div className="icon">
                                <i className="flaticon-heart-rate-monitor"></i>
                            </div> 

                            <h3 className="playfair-display-font">
                                <Link href="/courses-1">
                                    <a>Find Your Balance</a>
                                </Link>
                            </h3>

                            <p>Discover the key to wellness with 'Find Your Balance' healthcare. We offer holistic approaches to health, helping you achieve harmony and vitality through tailored solutions.</p>
                            
                            <Link href="/courses-1">
                                <a className="link-btn">Start Now</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LifestyleCourses;