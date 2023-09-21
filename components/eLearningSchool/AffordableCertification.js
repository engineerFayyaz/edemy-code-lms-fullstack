import React from 'react';
import Link from 'next/link';

const AffordableCertification = () => {
    return (
        <div className="premium-access-area ptb-100">
            <div className="container">
                <div className="premium-access-content">
                    <span className="sub-title">ACCESSIBLE CERTIFICATION</span>
                    <h2>Earn Your Prestigious Wood Therapy Certificate with Online Examinations</h2>
                    <p>Our student-friendly pricing for certification programs ensures that individuals can obtain their valuable wood therapy certificates with unparalleled ease!</p>
                    
                    <Link href="/membership-levels">
                        <a className="default-btn">
                            <i className="flaticon-user"></i> Get Started Now <span></span>
                        </a>
                    </Link>
                </div>
            </div>

            <div className="shape3">
                <img src="/images/shape3.png" alt="image" />
            </div>
            <div className="shape4">
                <img src="/images/shape4.png" alt="image" />
            </div>
            <div className="shape8">
                <img src="/images/shape7.png" alt="image" />
            </div>
        </div>
    )
}

export default AffordableCertification;