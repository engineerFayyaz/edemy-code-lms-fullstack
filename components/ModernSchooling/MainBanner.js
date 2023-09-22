import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <div className="hero-banner-area">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="hero-banner-content">
                            <h1>Build Fat Dissolving Skills With Toxic Beauty Academyademy Any Time, Anywhere</h1>
                            <p>This course is built and lead by passion and determination and we promise to bring you the best with an invaluable amount of information to become a professional and confident FAT DISSOLVING and successful business owner.</p>
                            
                            <Link href="/profile-authentication">
                                <a className="default-btn">
                                    <i className="flaticon-user"></i> Join For Free <span></span>
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="hero-banner-image">
                            <img src="/images/main-banner3.png" alt="image" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="banner-shape19">
                <img src="/images/banner-shape20.png" alt="image" />
            </div>
            <div className="divider"></div>
        </div>
    )
}

export default MainBanner;