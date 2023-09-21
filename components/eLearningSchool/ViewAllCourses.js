import React from 'react';
import Link from 'next/link';

const ViewAllCourses = () => {
    return (
        <div className="view-all-courses-area bg-fef8ef">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="view-all-courses-content">
                            <span className="sub-title">Distance learning</span>
                            <h2>Experience the Authenticity of In-Person Learning!</h2>
                            <p>Our Wood Therapy courses offer a remarkable online learning experience that feels just like being present in a physical classroom! You'll never miss out on the authenticity of learning, even as you enjoy your classes from the comfort of your own space. Our flexible and engaging learning methods are designed to accelerate your wood therapy expertise, surpassing the conventional ways of skill development.</p>

                            <Link href="/courses-1">
                                <a className="default-btn">
                                    <i className="flaticon-agenda"></i> View Courses <span></span>
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="view-all-courses-image">
                            <img src="/images/man-with-laptop.png" alt="image" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="shape1">
                <img src="/images/shape1.png" alt="image" />
            </div>
            <div className="shape9">
                <img src="/images/shape8.svg" alt="image" />
            </div>
        </div>
    )
}

export default ViewAllCourses;