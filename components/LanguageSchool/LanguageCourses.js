import React from 'react';
import Link from 'next/link';

const LanguageCourses = () => {
    return (
        <div className="courses-area pt-100 pb-70 bg-f5f7fa">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">CERTIFIED  COURSES</span>
                    <h2>Our Hair Extensions Courses</h2>
                    <p>Elevate your hairdressing expertise with our Hair Extension Courses. Learn the art of seamless hair transformations from industry professionals.</p>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-language-courses-box">
                            <img src="/images/hair-extension-courses/hair-extension-course1.jpg" alt="image" className="rounded-4" />
                            <h3>Fundamentals of Hair Extension Techniques</h3>
                            <p>Lay the foundation for hair extension mastery, learning essential techniques for lengthening and volumizing hair with precision.</p>

                            <Link href="/courses-1">
                                <a className="default-btn">
                                    <i className="flaticon-right"></i> View More <span></span>
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-language-courses-box">
                            <img src="/images/hair-extension-courses/hair-extension-course2.webp" alt="image" className="rounded-4" />
                            <h3>Advanced Hair Extension Artistry</h3>
                            <p>Elevate your skills to expert level, exploring advanced methods and creative applications for stunning hair transformations.</p>
                            
                            <Link href="/courses-1">
                                <a className="default-btn">
                                    <i className="flaticon-right"></i> View More <span></span>
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                        <div className="single-language-courses-box">
                            <img src="/images/hair-extension-courses/hair-extension-course3.webp" alt="image" className="rounded-4" />
                            <h3>Mastering Tape-in Hair Extensions</h3>
                            <p>Specialize in the art of tape-in extensions, gaining in-depth knowledge and proficiency in this popular and versatile technique.</p>
                            
                            <Link href="/courses-1">
                                <a className="default-btn">
                                    <i className="flaticon-right"></i> View More <span></span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LanguageCourses;