import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <div className="banner-section">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-12">
                        <div className="banner-content">
                            <h1>Lymphatic Drainage Massage Certification Training </h1>
                            <p>Welcome to the Lymphatic Drainage online course! Here you will learn all about this manual massage technique that helps eliminate fluids and toxins from the body, in addition to providing a series of health benefits.</p>

                            <Link href="/profile-authentication">
                                <a className="default-btn">
                                    <i className="flaticon-user"></i> Join For Free <span></span>
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-7 col-md-12">
                        <div className="banner-image">
                            <img src="/images/banner-img1.png" alt="image" />

                            <div className="banner-shape4">
                                <img src="/images/banner-shape4.png" alt="image" />
                            </div>
                            <div className="banner-shape5">
                                <img src="/images/banner-shape5.png" alt="image" />
                            </div>
                            <div className="banner-shape6">
                                <img src="/images/banner-shape6.png" alt="image" />
                            </div>
                            <div className="banner-shape7">
                                <img src="/images/banner-shape7.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBanner;