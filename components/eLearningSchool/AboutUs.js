import React from 'react';
import Link from 'next/link';

const AboutUs = () => {
    return (
        <div className="about-area bg-fef8ef ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-image">
                            <div className="row">
                                <div className="col-lg-6 col-sm-6 col-md-6 col-6">
                                    <div className="image">
                                        <img src="/images/about-img-new-1.jpg" alt="image" class="rounded-circle" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6 col-md-6 col-6">
                                    <div className="image">
                                        <img src="/images/about-img-new-3.jpg" alt="image" class="img-thumbnail" />
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6 col-md-6 col-6">
                                    <div className="image">
                                        <img src="/images/about-img-new-4.jpg" alt="image" class="img-thumbnail"/>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-sm-6 col-md-6 col-6">
                                    <div className="image">
                                        <img src="/images/video-new-img1.jpg" alt="image" class="rounded-circle" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="about-content">
                            <span className="sub-title">Online learning</span>
                            <h2>Embrace the Art of Wooden Therapy, and Cultivate Your Skills from Anywhere in the World!</h2>
                            <p>We value the transformative potential of our online Wooden Therapy courses, fostering connections with learners worldwide. Our commitment to continuous learning ensures the most exceptional outcomes in the world of wooden therapy education!</p>
                            
                            <ul className="features-list">
                                <li><span><i className="flaticon-experience"></i> Expert Trainers</span></li>
                                <li><span><i className="flaticon-time-left"></i> Lifetime Acces</span></li>
                                <li><span><i className="flaticon-tutorials"></i> Remote Learning</span></li>
                                <li><span><i className="flaticon-self-growth"></i> Self Development</span></li>
                            </ul>

                            <Link href="/courses-1">
                                <a className="default-btn">
                                    <i className="flaticon-user"></i> View All Courses <span></span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shape1"><img src="/images/shape1.png" alt="image" /></div>
            <div className="shape2"><img src="/images/shape2.png" alt="image" /></div>
            <div className="shape3"><img src="/images/shape3.png" alt="image" /></div>
            <div className="shape4"><img src="/images/shape4.png" alt="image" /></div>
        </div>
    )
}

export default AboutUs;