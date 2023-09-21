import React from 'react';
import Link from 'next/link';

const YouMightLikeTheCourses = () => {
    return (
        <div className="courses-area bg-f8f9f8 pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <h2>More Courses You Might Like</h2>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-courses-box">
                            <div className="courses-image">
                                <Link href="/single-courses-1">
                                    <a className="d-block image">
                                        <img src="/images/courses/courses1.jpg" alt="image" />
                                    </a>
                                </Link>
                                <a href="#" className="fav">
                                    <i className="flaticon-heart"></i>
                                </a>
                                <div className="price shadow">$180</div>
                            </div>
                            <div className="courses-content">
                                <div className="course-author d-flex align-items-center">
                                    <img src="/images/user1.jpg" className="rounded-circle" alt="image" />
                                    <span>Alex Morgan</span>
                                </div>
                                <h3>
                                    <Link href="/single-courses-1">
                                        <a>Body Contouring 6-in-1 Masterclass</a>
                                    </Link>
                                </h3>
                                <p>This turnkey Body Contouring online certification course teaches you Ultrasound Fat Cavitation, RF (Radiofrequency), Vacuum/LED AND Lipo Laser.</p>
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
                                        <img src="/images/courses/courses2.jpg" alt="image" />
                                    </a>
                                </Link>
                                <a href="#" className="fav">
                                    <i className="flaticon-heart"></i>
                                </a>
                                <div className="price shadow">$180</div>
                            </div>
                            <div className="courses-content">
                                <div className="course-author d-flex align-items-center">
                                    <img src="/images/user2.jpg" className="rounded-circle" alt="image" />
                                    <span>Sarah Taylor</span>
                                </div>
                                <h3>
                                    <Link href="/single-courses-1">
                                        <a>The Booty and Body Sculpting Masterclass</a>
                                    </Link>
                                </h3>
                                <p>The ultimate online butt lift course showing you how to give your clients the enhanced booties and hourglass figures they desire…performing advanced techniques with Vacuum Therapy and Vacuum Cupping Technology!</p>
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
                                        <img src="/images/courses/courses3.jpg" alt="image" />
                                    </a>
                                </Link>
                                <a href="#" className="fav">
                                    <i className="flaticon-heart"></i>
                                </a>
                                <div className="price shadow">$59</div>
                            </div>
                            <div className="courses-content">
                                <div className="course-author d-flex align-items-center">
                                    <img src="/images/user3.jpg" className="rounded-circle" alt="image" />
                                    <span>David Warner</span>
                                </div>
                                <h3>
                                    <Link href="/single-courses-1">
                                        <a>Cryolipolysis (Fat Freezing) Certification Course</a>
                                    </Link>
                                </h3>
                                <p>Cryolipolysis (fat freezing) is a non-invasive body contouring technology that utilizes cold temperatures to destroy fat cells, leading to fat reduction in the treated area.</p>
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
                </div>
            </div>
        </div>
    )
}

export default YouMightLikeTheCourses;