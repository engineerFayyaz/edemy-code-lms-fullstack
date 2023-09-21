import React from 'react';
import Link from 'next/link';

const GetInstantCourses = () => {
    return (
        <div className="get-instant-courses-area">
            <div className="container">
                <div className="get-instant-courses-inner-area">
                    <div className="row align-items-center">
                        <div className="col-lg-8 col-md-12">
                            <div className="get-instant-courses-content">
                                <span className="sub-title">Get Instant Access</span>
                                <h2>Wood Therapy Mastery Program</h2>
                                <p>Our Wood Therapy Mastery Program is your pathway to a profound understanding of this ancient healing art, empowering you to enhance your career like never before! We believe that learning should be both enriching and fulfilling, as it's only through such experiences that true transformation can occur!</p>

                                <Link href="/profile-authentication">
                                    <a className="default-btn">
                                        <i className="flaticon-user"></i> Start Now <span></span>
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <div className="get-instant-courses-image">
                                <img src="/images/about-img-new-3.jpg" alt="image" />
                                <div className="shape7">
                                    <img src="/images/shape4.png" alt="image" />
                                </div>
                                <div className="shape6">
                                    <img src="/images/shape6.png" alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="shape5">
                        <img src="/images/shape5.png" alt="image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetInstantCourses;