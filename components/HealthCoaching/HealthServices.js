import React from 'react';
import Link from 'next/link';

const HealthServices = () => {
    return (
        <div className="health-services-area bg-fcf7f3 pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">Do not wait for Tomorrow!</span>
                    <h2 className="playfair-display-font">You’ve tried dieting a million times. Now try something different.</h2>
                    <p>Unlock your full potential with a personalized program tailored just for you. Achieve your goals, whether it's fitness, health, or personal development, through a customized and guided journey.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-health-services-box">
                            <div className="icon">
                                <i className="flaticon-yoga-2"></i>
                            </div>
                            <h3 className="playfair-display-font">
                                <Link href="/courses-1">
                                    <a>Daily Excersize</a>
                                </Link>
                            </h3>
                            <p>Incorporate daily exercise into your healthcare routine for improved well-being. Engage in activities like brisk walks, yoga, or strength training to boost energy, reduce stress, and enhance overall health..</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-health-services-box">
                            <div className="icon">
                                <i className="flaticon-yoga"></i>
                            </div> 
                            <h3 className="playfair-display-font">
                                <Link href="courses-1.html">
                                    <a>Find Your Balance</a>
                                </Link>
                            </h3>
                            <p>Find Your Balance in Healthcare. We provide comprehensive wellness services, combining modern medicine with holistic approaches, ensuring you achieve optimal health and a harmonious, balanced life.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-health-services-box">
                            <div className="icon">
                                <i className="flaticon-lotus"></i>
                            </div>
                            <h3 className="playfair-display-font">
                                <Link href="/courses-1">
                                    <a>Personal Program</a>
                                </Link>
                            </h3>
                            <p>Experience personalized healthcare programs that cater to your unique needs. Our expert team crafts tailored plans encompassing nutrition, exercise, and wellness strategies, enhancing your overall well-being and vitality.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-health-services-box">
                            <div className="icon">
                                <i className="flaticon-tomato"></i>
                            </div> 
                            <h3 className="playfair-display-font">
                                <Link href="/courses-1">
                                    <a>Natural Process</a>
                                </Link>
                            </h3>
                            <p>Embrace healthcare through natural processes. We prioritize holistic, non-invasive methods, harnessing the body's innate healing abilities. Experience wellness and vitality through our patient-centered approach.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-health-services-box">
                            <div className="icon">
                                <i className="flaticon-yoga-1"></i>
                            </div>
                            <h3 className="playfair-display-font">
                                <Link href="/courses-1">
                                    <a>Immune System</a>
                                </Link>
                            </h3>
                            <p>Explore healthcare focused on enhancing your immune system. Our tailored solutions and expert guidance aim to boost your immunity, safeguarding your well-being and vitality in today's world.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-health-services-box">
                            <div className="icon">
                                <i className="flaticon-strawberry"></i>
                            </div>
                            <h3 className="playfair-display-font">
                                <Link href="/courses-1">
                                    <a>Gives You Energy</a>
                                </Link>
                            </h3>
                            <p>Our healthcare focuses on revitalizing your energy. We offer personalized solutions, including nutrition, fitness, and lifestyle changes, to boost your vitality and foster long-lasting, vibrant well-being</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HealthServices;