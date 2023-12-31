import React from 'react';
import PageBanner from '../components/Common/PageBanner';
import Link from 'next/link';
import CoursesSidebar from '../components/Courses/CoursesSidebar';

const CoursesRightSidebar = () => {
    return (
        <>
            <PageBanner 
                pageTitle="Courses Right Sidebar" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Courses Right Sidebar" 
            />  

            <div className="courses-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="edemy-grid-sorting row align-items-center">
                                <div className="col-lg-8 col-md-6 result-count">
                                    <p>We found <span className="count">12</span> courses available for you</p>
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
                                <div className="col-lg-6 col-md-6">
                                    <div className="single-courses-box">
                                        <div className="courses-image">
                                            <Link href="/single-courses-1">
                                                <a className="d-block image">
                                                    <img src="/images/courses/courses15.jpg" alt="image" style={{width:"100%", height:"256px"}} />
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
                                                    <a>Teeth Whitening</a>
                                                </Link>
                                            </h3>
                                            
                                            <p>Discover the art of teeth whitening in our comprehensive course.</p>
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

                                <div className="col-lg-6 col-md-6">
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
                                            <div className="price shadow">$190</div>
                                        </div>
                                        <div className="courses-content">
                                            <div className="course-author d-flex align-items-center">
                                                <img src="/images/user2.jpg" className="rounded-circle" alt="image" />
                                                <span>Sarah Taylor</span>
                                            </div>
                                        
                                            <h3>
                                                <Link href="/single-courses-1">
                                                    <a>Natural Teeth Whitening</a>
                                                </Link>
                                            </h3>

                                            <p>Unlock the secrets of natural teeth whitening.</p>
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

                                <div className="col-lg-6 col-md-6">
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
                                            <div className="price shadow">$190</div>
                                        </div>
                                        <div className="courses-content">
                                            <div className="course-author d-flex align-items-center">
                                                <img src="/images/user3.jpg" className="rounded-circle" alt="image" />
                                                <span>David Warner</span>
                                            </div>
                                    
                                            <h3>
                                                <Link href="/single-courses-1">
                                                    <a>Teeth Dentist
                                        
                                                    </a>
                                                </Link>
                                            </h3>
        
                                            <p>A teeth dentist, also known as a dentist or dental professional.</p>
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

                                <div className="col-lg-6 col-md-6">
                                    <div className="single-courses-box">
                                        <div className="courses-image">
                                            <Link href="/single-courses-1">
                                                <a className="d-block image">
                                                    <img src="/images/courses/courses4.jpg" alt="image" />
                                                </a>
                                            </Link>
                                            <a href="#" className="fav">
                                                <i className="flaticon-heart"></i>
                                            </a>
                                            <div className="price shadow">$190</div>
                                        </div>
                                        <div className="courses-content">
                                            <div className="course-author d-flex align-items-center">
                                                <img src="/images/user6.jpg" className="rounded-circle" alt="image" />
                                                <span>Alex Morgan</span>
                                            </div>
                                
                                            <h3>
                                                <Link href="/single-courses-1">
                                                    <a>Teeth Whitening</a>
                                                </Link>
                                            </h3>

                                            <p>Unlock the secrets of natural teeth whitening.</p>
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

                                <div className="col-lg-6 col-md-6">
                                    <div className="single-courses-box">
                                        <div className="courses-image">
                                            <Link href="/single-courses-1">
                                                <a className="d-block image">
                                                    <img src="/images/courses/courses5.jpg" alt="image" />
                                                </a>
                                            </Link>
                                            <a href="#" className="fav">
                                                <i className="flaticon-heart"></i>
                                            </a>
                                            <div className="price shadow">$190</div>
                                        </div>
                                        <div className="courses-content">
                                            <div className="course-author d-flex align-items-center">
                                                <img src="/images/user5.jpg" className="rounded-circle" alt="image" />
                                                <span>Sarah Taylor</span>
                                            </div>
                    
                                            <h3>
                                                <Link href="/single-courses-1">
                                                    <a>Yoga Training</a>
                                                </Link>
                                            </h3>

                                            <p>"Yoga training is a transformative journey that combines physical postures.</p>
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

                                <div className="col-lg-6 col-md-6">
                                    <div className="single-courses-box">
                                        <div className="courses-image">
                                            <Link href="/single-courses-1">
                                                <a className="d-block image">
                                                    <img src="/images/courses/courses6.jpg" alt="image" />
                                                </a>
                                            </Link>
                                            <a href="#" className="fav">
                                                <i className="flaticon-heart"></i>
                                            </a>
                                            <div className="price shadow">$190</div>
                                        </div>
                                        <div className="courses-content">
                                            <div className="course-author d-flex align-items-center">
                                                <img src="/images/user4.jpg" className="rounded-circle" alt="image" />
                                                <span>James Anderson</span>
                                            </div>
                                        
                                            <h3>
                                                <Link href="/single-courses-1">
                                                    <a>Lymphatic drainage</a>
                                                </Link>
                                            </h3>

                                            <p>"Lymphatic drainage is a gentle and specialized massage technique designed.</p>
                                            <ul className="courses-box-footer d-flex justify-content-between align-items-center">
                                                <li>
                                                    <i className='flaticon-agenda'></i> 44 Lessons
                                                </li>
                                                <li>
                                                    <i className='flaticon-people'></i> 440 Students
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="pagination-area text-center">
                                        <a href="#" className="prev page-numbers">
                                            <i className='bx bx-chevrons-left'></i>
                                        </a>
                                        <span className="page-numbers current" aria-current="page">1</span>
                                        <a href="#" className="page-numbers">2</a>
                                        <a href="#" className="page-numbers">3</a>
                                        <a href="#" className="page-numbers">4</a>
                                        <a href="#" className="next page-numbers">
                                            <i className='bx bx-chevrons-right'></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <CoursesSidebar />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CoursesRightSidebar;