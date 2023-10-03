import React from 'react';

const AboutUs = () => {
    return (
        <div className="about-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                    <div className="about-image">
                            <div className="row">
                                <div className="col-lg-6 col-sm-6 col-md-6 col-6 align-self-center">
                                    <div className="image">
                                        <img src="/images/about-img12.png" className='rounded-pill' alt="image" />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6 col-md-6 col-6 ">
                                    <div className="image">
									<img src="/images/banner-img4.png" className='rounded-5' alt="image" />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6 col-md-6 col-6">
                                    <div className="image">
                                        <img src="/images/kindergarten-about-img2.png" className='rounded-5' alt="image" />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6 col-md-6 col-6">
                                    <div className="image">
                                        <img src="/images/banner-img2.png" className='rounded-pill' alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="about-content">
                            <span className="sub-title">DISTANCE LEARNING</span>
                            <h2>89% of our dedicated learners experience transformative career benefits, including career advancement and new career opportunities.</h2>
                            <p>At Toxic beauty Academy, we're committed to providing you with top-notch education in body sculpting, wood therapy, lashes, fat dissolving, health coaching, yoga training, lip fillers, lymphatic drainage, and hair extensions.</p>

                            <p>Our courses empower you to achieve your professional goals and open doors to exciting career possibilities. Discover the path to success with us!</p>
                            
                            <ul className="features-list">
                                <li><span><i className="flaticon-experience"></i> Expert Trainers</span></li>
                                <li><span><i className="flaticon-time-left"></i> Lifetime Acces</span></li>
                                <li><span><i className="flaticon-tutorials"></i> Remote Learning</span></li>
                                <li><span><i className="flaticon-self-growth"></i> Self Development</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;