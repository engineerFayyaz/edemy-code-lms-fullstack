import React from 'react';
import Link from 'next/link';

const YogaTraining = () => {
    return (
        <div className="training-area bg-f5f7fa pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <h2 className="playfair-display-font">Why Online Yoga Training</h2>
                    <p>Embrace holistic well-being and inner peace as you embark on a path to strengthen your body, mind, and soul.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-training-box">
                            <img src="/images/training-img1.png" alt="image" />
                            <h3 className="playfair-display-font">
                                <Link href="/courses-1">
                                    <a>Flexibility</a>
                                </Link>
                            </h3>
                            <p>Experience flexibility in your training schedule, allowing you to adapt yoga seamlessly into your busy life while nurturing your well-being.</p>

                            <Link href="/courses-1">
                                <a className="link-btn">Start Now</a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-training-box">
                            <img src="/images/training-img2.png" alt="image" />
                            <h3 className="playfair-display-font">
                                <Link href="/courses-1">
                                    <a>Comfort</a>
                                </Link>
                            </h3>
                            <p>Access a wealth of resources, from expert instructors to comprehensive materials, to enhance your yoga training.</p>
                            
                            <Link href="/courses-1">
                                <a className="link-btn">Start Now</a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                        <div className="single-training-box">
                            <img src="/images/training-img3.png" alt="image" />
                            <h3 className="playfair-display-font">
                                <Link href="/courses-1">
                                    <a>Resources</a>
                                </Link>
                            </h3>
                            <p>Access a wealth of resources, from expert instructors to comprehensive materials, to enhance your yoga training.</p>
                            
                            <Link href="/courses-1">
                                <a className="link-btn">Start Now</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="tree-shape2">
                <img src="/images/tree-shape2.png" alt="image" />
            </div>
            <div className="tree-shape3">
                <img src="/images/tree-shape3.png" alt="image" />
            </div>
        </div>
    )
}

export default YogaTraining;