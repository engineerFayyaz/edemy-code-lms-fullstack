import React from 'react';
import Link from 'next/link';

const FeaturedCourses = () => {
    return (
        <div className="boxes-area boxes-style-two bg-f5f7fa">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-box-item">
                            <div className="image">
                                <img src="/images/boxes-img1.png" alt="image" />
                            </div>
                            <h3>8 Point Facelift Training course</h3>
                            <p>During the course, students will learn how to enhance and balance each of these areas to create a lifting effect across the entire face. Focusing on facial profiling to rebalance the facial feature</p>

                            <Link href="/courses-1">
                                <a className="link-btn">Start Now!</a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 col-md-6">
                        <div className="single-box-item">
                            <div className="image">
                                <img src="/images/boxes-img2.png" alt="image" />
                            </div>
                            <h3>Advanced Aesthetics Training Course</h3>
                            <p>This course is built and lead by passion and determination and we promise to bring you the best with an invaluable amount of information to become a professional and confident aesthetics practitioner.</p>
                            
                            <Link href="/courses-1">
                                <a className="link-btn">Start Now!</a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-box-item">
                            <div className="image">
                                <img src="/images/boxes-img3.png" alt="image" />
                            </div>
                            <h3>Advanced Anti Wrinkle Injection Course </h3>
                            <p>This course is built and lead by passion and determination and we promise to bring you the best with an invaluable amount of information to become a professional and confident aesthetics practitioner.</p>
                            
                            <Link href="/courses-1">
                                <a className="link-btn">Start Now!</a>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="boxes-info">
                    <p>If you want more? <Link href="/courses-1"><a>View More Courses</a></Link></p>
                </div>
            </div>
        </div>
    )
}

export default FeaturedCourses;