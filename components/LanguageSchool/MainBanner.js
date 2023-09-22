import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <div className="main-banner-wrapper">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-12">
                        <div className="main-banner-wrapper-content">
                            <h1>Discover the Artistry of Hair Extensions</h1>
                            <p>Elevate your hairstyling skills with our Hair Extension Course. Master the art of enhancing hair length, volume, and style for stunning transformations.</p>

                            <Link href="/profile-authentication">
                                <a className="default-btn">
                                    <i className="flaticon-user"></i> Join For Free <span></span>
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-7 col-md-12">
                        <div className="main-banner-wrapper-image">
                            <img src="/images/banner-img3.png" alt="image" />
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default MainBanner;