import React from 'react';
import PageBanner from '../components/Common/PageBanner';
import Link from 'next/link';

const CoursesList01 = () => {
    return (
        <>
            <PageBanner 
                pageTitle="Courses List 01" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Courses List 01" 
            />  

            <div className="courses-area ptb-100 bg-f5f7fa">
                <div className="container">
                    <div className="edemy-grid-sorting row align-items-center">
                        <div className="col-lg-8 col-md-6 result-count">
                            <p>We found <span className="count">06</span> courses available for you</p>
                        </div>

                        <div className="col-lg-4 col-md-6 ordering">
                            <div className="select-box">
                                <select className="form-control">
                                    <option>Sort By</option>
                                    <option>Popularity</option>
                                    <option>Latest</option>
                                    <option>Price: low to high</option>
                                    <option>Price: high to low</option>
                                </select>
                            </div>
                        </div>
                    </div>

              
                    <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="single-courses-item without-box-shadow">
                            <div className="row align-items-center">
                                <div className="col-lg-4 col-md-4">
                                    <div className="courses-image">
                                        <img src="/images/courses-small/courses-small1.jpg" alt="image" />

                                        <Link href="/single-courses-1">
                                            <a className="link-btn"></a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-lg-8 col-md-8">
                                    <div className="courses-content">
                                        <a href="#" className="fav">
                                            <i className="flaticon-heart"></i>
                                        </a>
                                        <span className="price">$190</span>

                                        <h3>
                                            <Link href="/single-courses-1">
                                                <a>The Beginners Botox Anti-wrinkle Training Course</a>
                                            </Link>
                                        </h3>

                                        <ul className="courses-content-footer d-flex justify-content-between align-items-center">
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
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="single-courses-item without-box-shadow">
                            <div className="row align-items-center">
                                <div className="col-lg-4 col-md-4">
                                    <div className="courses-image">
                                        <img src="/images/courses-small/courses-small2.jpg" alt="image" />

                                        <Link href="/single-courses-1">
                                            <a className="link-btn"></a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-lg-8 col-md-8">
                                    <div className="courses-content">
                                        <a href="#" className="fav">
                                            <i className="flaticon-heart"></i>
                                        </a>
                                        <span className="price">$190</span>
                                        <h3>
                                            <Link href="/single-courses-1">
                                                <a>Platelet Rich Plasma (PRP Vampire Facial) Training Course</a>
                                            </Link>
                                        </h3>
                                        <ul className="courses-content-footer d-flex justify-content-between align-items-center">
                                            <li>
                                                <i className='flaticon-agenda'></i> 14 Lessons
                                            </li>
                                            <li>
                                                <i className='flaticon-people'></i> 100 Students
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="single-courses-item without-box-shadow">
                            <div className="row align-items-center">
                                <div className="col-lg-4 col-md-4">
                                    <div className="courses-image">
                                        <img src="/images/courses-small/courses-small3.jpg" alt="image" />

                                        <Link href="/single-courses-1">
                                            <a className="link-btn"></a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-lg-8 col-md-8">
                                    <div className="courses-content">
                                        <a href="#" className="fav"><i className="flaticon-heart"></i></a>
                                        <span className="price">$190</span>

                                        <h3>
                                            <Link href="/single-courses-1">
                                                <a>The Profhilo® & Skin Boosters Training Course</a>
                                            </Link>
                                        </h3>

                                        <ul className="courses-content-footer d-flex justify-content-between align-items-center">
                                            <li>
                                                <i className='flaticon-agenda'></i> 11 Lessons
                                            </li>
                                            <li>
                                                <i className='flaticon-people'></i> 104 Students
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="single-courses-item without-box-shadow">
                            <div className="row align-items-center">
                                <div className="col-lg-4 col-md-4">
                                    <div className="courses-image">
                                        <img src="/images/courses-small/courses-small4.jpg" alt="image" />

                                        <Link href="/single-courses-1">
                                            <a className="link-btn"></a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-lg-8 col-md-8">
                                    <div className="courses-content">
                                        <a href="#" className="fav"><i className="flaticon-heart"></i></a>
                                        <span className="price">$190</span>
                               
                                        <h3>
                                            <Link href="/single-courses-1">
                                                <a> The Aesthetics Expert Packages course</a>
                                            </Link>
                                        </h3>
                                        
                                        <ul className="courses-content-footer d-flex justify-content-between align-items-center">
                                            <li>
                                                <i className='flaticon-agenda'></i> 14 Lessons
                                            </li>
                                            <li>
                                                <i className='flaticon-people'></i> 100 Students
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="single-courses-item without-box-shadow">
                            <div className="row align-items-center">
                                <div className="col-lg-4 col-md-4">
                                    <div className="courses-image">
                                        <img src="/images/courses-small/courses-small6.jpg" alt="image" />

                                        <Link href="/single-courses-1">
                                            <a className="link-btn"></a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-lg-8 col-md-8">
                                    <div className="courses-content">
                                        <a href="#" className="fav"><i className="flaticon-heart"></i></a>
                                        <span className="price">$190</span> 

                                        <h3>
                                            <Link href="/single-courses-1">
                                                <a>New Double Chin Treatment Training Course </a>
                                            </Link>
                                        </h3>
 
                                        <ul className="courses-content-footer d-flex justify-content-between align-items-center">
                                            <li>
                                                <i className='flaticon-agenda'></i> 09 Lessons
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

                    <div className="col-lg-6 col-md-12">
                        <div className="single-courses-item without-box-shadow">
                            <div className="row align-items-center">
                                <div className="col-lg-4 col-md-4">
                                    <div className="courses-image">
                                        <img src="/images/courses-small/courses-small7.jpg" alt="image" />

                                        <Link href="/single-courses-1">
                                            <a className="link-btn"></a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-lg-8 col-md-8">
                                    <div className="courses-content">
                                        <a href="#" className="fav"><i className="flaticon-heart"></i></a>
                                        <span className="price">$190</span> 

                                        <h3>
                                            <Link href="/single-courses-1">
                                                <a>Fat Dissolving Injections Course</a>
                                            </Link>
                                        </h3>
 
                                        <ul className="courses-content-footer d-flex justify-content-between align-items-center">
                                            <li>
                                                <i className='flaticon-agenda'></i> 20 Lessons
                                            </li>
                                            <li>
                                                <i className='flaticon-people'></i> 200 Students
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                  
                </div>
                </div>
            </div>
        </>
    )
}

export default CoursesList01;