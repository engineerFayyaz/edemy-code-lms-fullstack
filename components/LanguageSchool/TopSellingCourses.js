import React from 'react';
import Link from 'next/link';

const TopSellingCourses = () => {
    return (
        <div className="courses-area ptb-100">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">Go At Your Own Pace</span>
                    <h2>Top Hair Extension Courses</h2>
                    <p>Explore the world of hair extensions with courses designed to elevate your skills and transform your career. Discover the art of seamless hair transformations.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-courses-box">
                            <div className="courses-image">
                                <Link href="/single-courses-1">
                                    <a className="d-block image">
                                        <img src="/images/hair-extension-courses/hair-extension-course2.webp" alt="image" />
                                    </a>
                                </Link>
                                <a href="#" className="fav">
                                    <i className="flaticon-heart"></i>
                                </a>
                                <div className="price shadow">$190</div>
                            </div>
                            <div className="courses-content">
                                <div className="course-author d-flex align-items-center">
                                    <img src="/images/user1.jpg" className="rounded-circle" alt="image" />
                                    <span>Alex Morgan</span>
                                </div>
                                <h3>
                                    <Link href="/single-courses-1">
                                        <a>Fundamentals of Hair Extension Techniques</a>
                                    </Link>
                                </h3>
                                <p>Lay the foundation for hair extension mastery, learning essential techniques for volumizing hair with precision.</p>
                                <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                    <li>
                                        <i className='flaticon-agenda'></i> 15 Lessons
                                    </li>
                                    <li>
                                        <i className='flaticon-people'></i> 145 Students
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-courses-box">
                            <div className="courses-image">
                                <Link href="/single-courses-1">
                                    <a className="d-block image">
                                        <img src="/images/hair-extension-courses/hair-extension-course1.jpg" alt="image" />
                                    </a>
                                </Link>
                                <a href="#" className="fav">
                                    <i className="flaticon-heart"></i>
                                </a>
                                <div className="price shadow">$220</div>
                            </div>
                            <div className="courses-content">
                                <div className="course-author d-flex align-items-center">
                                    <img src="/images/user2.jpg" className="rounded-circle" alt="image" />
                                    <span>Sarah Taylor</span>
                                </div>
                                <h3>
                                    <Link href="/single-courses-1">
                                        <a>Advanced Hair Extension Artistry</a>
                                    </Link>
                                </h3>
                                <p>Elevate your skills to expert level, exploring advanced methods and creative applications for stunning hair transformations.</p>
                                <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                    <li>
                                        <i className='flaticon-agenda'></i> 20 Lessons
                                    </li>
                                    <li>
                                        <i className='flaticon-people'></i> 100 Students
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                        <div className="single-courses-box">
                            <div className="courses-image">
                                <Link href="/single-courses-1">
                                    <a className="d-block image">
                                    <img src="/images/hair-extension-courses/hair-extension-course3.webp" alt="image" />
                                    </a>
                                </Link>
                                <a href="#" className="fav">
                                    <i className="flaticon-heart"></i>
                                </a>
                                <div className="price shadow">$59</div>
                            </div>
                            <div className="courses-content">
                                <div className="course-author d-flex align-items-center">
                                    <img src="/images/user5.jpg" className="rounded-circle" alt="image" />
                                    <span>Nenna</span>
                                </div>
                                <h3>
                                    <Link href="/single-courses-1">
                                        <a>Mastering Tape-in Hair Extensions</a>
                                    </Link>
                                </h3>
                                <p>Specialize in the art of tape-in extensions, gaining in-depth knowledge and proficiency in this popular and versatile technique.</p>
                                <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                    <li>
                                        <i className='flaticon-agenda'></i> 20 Lessons
                                    </li>
                                    <li>
                                        <i className='flaticon-people'></i> 150 Students
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                        <div className="courses-info">
                            <p>Get the most dedicated consultation for your life-changing course. Earn a certification for your effort and passion <Link href="/profile-authentication"><a>Join Free Now</a></Link>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopSellingCourses;