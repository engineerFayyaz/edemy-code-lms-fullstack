import React from 'react';
import Link from 'next/link';

const PopularCourses = () => {
    return (
        <div className="courses-area pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">Go at your own pace</span>
                    <h2>Popular lymphatic Drainage Courses</h2>
                    <p>Explore all of our courses and pick your suitable ones to enroll and start learning with us! We ensure that you will never regret it!</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-courses-box without-boxshadow">
                            <div className="courses-image">
                                <Link href="/single-courses-2">
                                    <a className="d-block image">
                                        <img src="/images/courses/courses9.jpg" alt="image" style={{borderRadius:"50px"}} />
                                    </a>
                                </Link>

                                <Link href="#">
                                    <a className="fav"><i className="flaticon-heart"></i></a>
                                </Link>

                                <div className="price shadow">$500</div>
                            </div>
                            <div className="courses-content">
                                <div className="course-author d-flex align-items-center">
                                    <img src="/images/user1.jpg" className="rounded-circle" alt="image" />
                                    <span>Alex David</span>
                                </div>
                                <h3>
                                    <Link href="/single-courses-2">
                                        <a>Complete Lymphatic Drainage Course</a>
                                    </Link>
                                </h3>
                                <p>Welcome to the Lymphatic Drainage online course! Here you will learn all about this manual massage technique that helps eliminate fluids and toxins from the body, in addition to providing health.</p>
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
                        <div className="single-courses-box without-boxshadow active">
                            <div className="courses-image">
                                <Link href="/single-courses-2">
                                    <a className="d-block image">
                                        <img src="/images/courses/courses10.jpg" alt="image" style={{borderRadius:"50px"}} />
                                    </a>
                                </Link>
                                <Link href="#">
                                    <a className="fav"><i className="flaticon-heart"></i></a>
                                </Link>
                                <div className="price shadow">$500</div>
                            </div>
                            <div className="courses-content">
                                <div className="course-author d-flex align-items-center">
                                    <img src="/images/user2.jpg" className="rounded-circle" alt="image" />
                                    <span>Amelia</span>
                                </div>
                                <h3>
                                    <Link href="/single-courses-2">
                                        <a>Advanced Reflexology Certificate Course (3 CEU)</a>
                                    </Link>
                                </h3>
                                <p>In this advanced reflexology massage course, you are going to learn the specific reflex zones and acupressure points to stimulate so that you will see great results in your reflexology practice.</p>
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
                        <div className="single-courses-box without-boxshadow">
                            <div className="courses-image">
                                <Link href="/single-courses-2">
                                    <a className="d-block image">
                                        <img src="/images/courses/courses11.jpg" alt="image" style={{borderRadius:"50px"}}/>
                                    </a>
                                </Link>
                                <Link href="#">
                                    <a className="fav"><i className="flaticon-heart"></i></a>
                                </Link>
                                <div className="price shadow">$$500</div>
                            </div>
                            <div className="courses-content">
                                <div className="course-author d-flex align-items-center">
                                    <img src="/images/user3.jpg" className="rounded-circle" alt="image" />
                                    <span>Samuel</span>
                                </div>
                                <h3>
                                    <Link href="/single-courses-2">
                                        <a>Acupressure Massage For Pain Relief Certificate </a>
                                    </Link>
                                </h3>
                                <p>This acupressure massage course is informative and enjoyable i really want to just keep going with it I cannot put it down. Learning so many beneficial acupressure massage techniques.</p>
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
                            <Link href="/courses-2">
                                <a className="default-btn">
                                    <i className="flaticon-user"></i> View All Courses <span></span>
                                </a>
                            </Link>

                            <p>Get into details now?​ <Link href="/courses-2"><a>PM Master’s Program</a></Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopularCourses;