import React from 'react';
import Link from 'next/link';

const Features = () => {
    return (
        <div className="boxes-area bg-f5f7fa">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-box-item">
                            <div className="icon">
                                <i className="flaticon-brain-process"></i>
                                <img src="/images/icon-shape.png" alt="image" />
                            </div>
                            <h3>Learn the Latest Skills</h3>
                            <p>Toxic beauty refers to the use of beauty and personal care products that contain harmful ingredients that can potentially harm your health.</p>

                            <Link href="/membership-levels">
                                <a className="link-btn">Start Now!</a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-box-item">
                            <div className="icon">
                                <i className="flaticon-computer"></i>
                                <img src="/images/icon-shape.png" alt="image" />
                            </div>
                            <h3>Go at Your Own Pace</h3>
                            <p> You can go at your own pace and gradually incorporate these practices into your daily life.</p>
                            
                            <Link href="/membership-levels">
                                <a className="link-btn">Start Now!</a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-box-item">
                            <div className="icon">
                                <i className="flaticon-shield-1"></i>
                                <img src="/images/icon-shape.png" alt="image" />
                            </div>
                            <h3>Learn from Beauty Experts</h3>
                            <p>Learning from beauty experts involves gaining insights, tips, and techniques from experienced professionals in the beauty industry to enhance your personal grooming.</p>
                            
                            <Link href="/membership-levels">
                                <a className="link-btn">Start Now!</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;