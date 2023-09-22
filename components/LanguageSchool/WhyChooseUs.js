import React from 'react';
import Link from 'next/link';

const WhyChooseUs = () => {
    return (
        <div className="about-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-image text-center">
                            <img src="/images/about-img7.png" alt="image" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="about-content">
                            <span className="sub-title">Why choose us</span>
                            <h2>Unlock the Art of Hair Extensions</h2>
                            <p>We recognize the power of online education to reach aspiring hairstylists worldwide. Our commitment to diverse learning options ensures your journey to hair extension mastery is as exceptional as the results you'll achieve!</p>

                            <ul className="features-list">
                                <li><span><i className="flaticon-experience"></i> Skiled Teachers</span></li>
                                <li><span><i className="flaticon-time-left"></i> Afordable Courses</span></li>
                                <li><span><i className="flaticon-tutorials"></i> Efficient & Flexible</span></li>
                                <li><span><i className="flaticon-self-growth"></i> Lifetime Access</span></li>
                            </ul>

                            <Link href="/profile-authentication">
                                <a className="default-btn">
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

export default WhyChooseUs;