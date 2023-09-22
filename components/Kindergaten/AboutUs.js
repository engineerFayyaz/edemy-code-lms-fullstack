import React from 'react';
import Link from 'next/link';

const AboutUs = () => {
    return (
        <div className="about-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="kindergarten-about-image">
                            <div className="main-image">
                                <img src="/images/kindergarten-about-img1.png" alt="image" />
                                <img src="/images/kindergarten-about-img2.png" className='rounded-5' alt="image" />
                            </div>
                            <div className="shape">
                                <img src="/images/kite1.png" alt="image" />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="about-content">
                            <span className="sub-title">About Us</span>
                            <h2 className="font-weight-black">Eyelash Extension and Lash Lift</h2>
                            <p>Learn to skillfully perform eyelash extension and lash curl treatments to grow your business and impress clientele. This course introduces the tools required, procedures and industry standards for hygiene in the work environment.</p>
                            <p>You will also learn to select the best lashes suitable for the different natural lash lengths and discover how to choose the best shields to give the curl effect that is sure to satisfy your clients..</p>

                            <ul className="about-list">
                                <li><span><i className='bx bx-check'></i> Enhanced Length</span></li>
                                <li><span><i className='bx bx-check'></i> Customized Looks</span></li>
                                <li><span><i className='bx bx-check'></i> Semi-Permanent</span></li>
                                <li><span><i className='bx bx-check'></i> Best Care</span></li>
                            </ul>

                            <Link href="/about-5" >
                                <a className="default-btn-style-two">
                                    <i className="flaticon-user"></i> More About Us
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="kindergarten-shape7">
                <img src="/images/kindergarten-shape/k-shape7.png" alt="image" />
            </div>
            <div className="kindergarten-shape8">
                <img src="/images/kindergarten-shape/k-shape8.png" alt="image" />
            </div>
        </div>
    )
}

export default AboutUs;