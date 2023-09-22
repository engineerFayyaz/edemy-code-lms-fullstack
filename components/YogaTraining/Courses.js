import React from 'react';
import Link from 'next/link';

const Courses = () => {
    return (
        <div className="courses-area pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">Go at your own pace</span>
                    <h2 className="playfair-display-font">Become a Certified Yoga Expert</h2>
                    <p>Explore all of our courses and pick your suitable ones to enroll and start learning with us! We ensure that you will never regret it!</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-yoga-courses-box">
                            <div className="courses-image">
                                <Link href="/single-courses-1">
                                    <a className="d-block">
                                        <img src="/images/courses/yoga-img1.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="courses-content">
                                <h3 className="playfair-display-font">
                                    <Link href="/single-courses-1">
                                        <a>200 Hour YT Course</a>
                                    </Link>
                                </h3>
                                <p>Begin your journey to becoming a certified yoga instructor with our foundational 200-hour Yoga Training. Develop a strong foundation.</p>
                                
                                <Link href="#">
                                    <a className="default-btn">View Details<span></span></a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-yoga-courses-box">
                            <div className="courses-image">
                                <Link href="/single-courses-1">
                                    <a className="d-block">
                                        <img src="/images/courses/yoga-img2.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="courses-content">
                                <h3 className="playfair-display-font">
                                    <Link href="/single-courses-1">
                                        <a>300 Hour YT Course</a>
                                    </Link>
                                </h3>
                                <p>Enhance your expertise with our 300-hour Yoga Training. Delve into advanced techniques and philosophy to refine your teaching and practice.</p>
                                
                                <Link href="#">
                                    <a className="default-btn">View Details<span></span></a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                        <div className="single-yoga-courses-box">
                            <div className="courses-image">
                                <Link href="/single-courses-1">
                                    <a className="d-block">
                                        <img src="/images/courses/yoga-img3.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>

                            <div className="courses-content">
                                <h3 className="playfair-display-font">
                                    <Link href="/single-courses-1">
                                        <a>500 Hour YT Course</a>
                                    </Link>
                                </h3>
                                <p>Dive deep into the art and science of yoga with our comprehensive 500-hour Yoga Training. Elevate your practice and become a skilled yoga instructor.</p>
                                
                                <Link href="#">
                                    <a className="default-btn">View Details<span></span></a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses;