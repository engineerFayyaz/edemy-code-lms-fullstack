import React from 'react';
import Link from 'next/link';

const PremiumAccess = () => {
    return (
        <div className="premium-access-area bg-f9f9f9 ptb-100">
            <div className="container">
                <div className="premium-access-content">
                    <span className="sub-title">Go at your own pace</span>
                    <h2>Give their limitless potential unlimited access</h2>
                    <p>Creating a more positive and supportive atmosphere within the academy is crucial for students' growth and well-being.</p>
                    
                    <Link href="/membership-levels">
                        <a className="default-btn">
                            <i className="flaticon-user"></i> Give Premium Access <span></span>
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

export default PremiumAccess;