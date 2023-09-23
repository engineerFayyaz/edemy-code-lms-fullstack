import React from 'react';
import PageBanner from '@/components/SingleCoursesTwo/PageBanner';
import YouMightLikeTheCourses from '@/components/Courses/YouMightLikeTheCourses';
import CoursesDetailsSidebar from '@/components/SingleCoursesTwo/CoursesDetailsSidebar';
import Link from 'next/link';

const SingleCourses = () => {
    return (
        <>
            <PageBanner 
                pageTitle="Python for Finance: Investment Fundamentals & Data Analytics" 
                homePageUrl="/" 
                homePageText="Home" 
                innerPageUrl="/courses-1" 
                innerPageText="Courses" 
                activePageText="Python for Finance: Investment Fundamentals & Data Analytics" 
            />  

            <div className="courses-details-area ptb-100">
                <div className="container">
                    <div className="courses-details-header">
                        <div className="row align-items-center">
                            <div className="col-lg-8 col-md-12">
                                <div className="courses-title">
                                    <p>Achieve your dream physique with our comprehensive certified course, covering the latest techniques in body sculpting and contouring.</p>
                                </div>
                                <div className="courses-meta">
                                    <ul>
                                        <li>
                                            <i className='bx bx-folder-open'></i>
                                            <span>Category</span>
                                            <Link href="#"><a>Body Sculpting</a></Link>
                                        </li>
                                        <li>
                                            <i className='bx bx-group'></i>
                                            <span>Students Enrolled</span>
                                            <Link href="#"><a>541,214</a></Link>
                                        </li>
                                        <li>
                                            <i className='bx bx-calendar'></i>
                                            <span>Last Updated</span>
                                            <Link href="#"><a>01/14/2023</a></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-12">
                                <div className="courses-price">
                                    <div className="courses-review">
                                        <div className="review-stars">
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                            <i className='bx bxs-star'></i>
                                        </div>
                                        <span className="reviews-total d-inline-block">(4 reviews)</span>
                                    </div>

                                    <div className="price">$500</div>

                                    <Link href="#">
                                        <a className="default-btn">
                                            <i className="flaticon-user"></i> Buy Course <span></span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="courses-details-image-style-two text-center">
                                <img src="/images/blog/img16.jpg" style={{height:"450px"}} alt="image" />
                            </div>

                            <div className="courses-details-desc-style-two">
                                <h3>Description</h3>
                                <p><strong>Hi! Welcome to our Body Sculpting Mastery Course, your ultimate path to achieving your fitness goals and sculpting the body you desire.</strong></p>
                                <p>Here are some more details of what you get with The Body Sculpting Course:</p>
                                <ul className="description-features-list">
                                    <li><strong>Introduction to Body Sculpting: </strong> – An overview of the field, its history, and its relevance in the beauty and fitness industry.</li>
                                    <li><strong>Anatomy and Physiology:</strong> – Understanding the human body's musculature, fat distribution, and how it relates to body sculpting;</li>
                                    <li><strong>Client Consultation and Assessment: </strong> –  How to assess a client's goals, needs, and medical history to create a personalized sculpting plan;</li>
                                    <li><strong>Body Sculpting Techniques:</strong> – Hands-on training in various body sculpting techniques such as liposuction, non-surgical methods, and more;</li>
                                    <li><strong>Equipment and Tools:</strong> –   Familiarization with the tools and equipment used in body sculpting procedures, including their maintenance;</li>
                                </ul>

                                <h3>Courses Video</h3>
                                <div className="courses-curriculum">
                                    <h3>Introduction to Body Sculpting: </h3>
                                    <ul>
                                        <li>
                                            <a href="#" className="d-flex justify-content-between align-items-center">
                                                <span className="courses-name">Introduction to Body Sculpting: </span>
                                                <div className="courses-meta">
                                                    <span className="questions">5 questions</span>
                                                    <span className="duration">01 Hour</span>
                                                    <span className="status">Preview</span>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                    <h3>Stepping into the World of Body Sculpting</h3>
                                    <ul>
                                        <li>
                                            <a href="#" className="d-flex justify-content-between align-items-center">
                                                <span className="courses-name">Anatomy and Physiology:</span>
                                                <div className="courses-meta">
                                                    <span className="duration">15 Min</span>
                                                    <span className="status locked"><i className="flaticon-password"></i></span>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="d-flex justify-content-between align-items-center">
                                                <span className="courses-name">Client Consultation and Assessment: </span>
                                                <div className="courses-meta">
                                                    <span className="duration">30 Min</span>
                                                    <span className="status locked"><i className="flaticon-password"></i></span>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="d-flex justify-content-between align-items-center">
                                                <span className="courses-name">Body Sculpting Techniques:</span>
                                                <div className="courses-meta">
                                                    <span className="duration">45 Min</span>
                                                    <span className="status locked"><i className="flaticon-password"></i></span>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="d-flex justify-content-between align-items-center">
                                                <span className="courses-name">Equipment and Tools:</span>
                                                <div className="courses-meta">
                                                    <span className="questions">4 questions</span>
                                                    <span className="duration">1 Hour</span>
                                                    <span className="status locked"><i className="flaticon-password"></i></span>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="d-flex justify-content-between align-items-center">
                                                <span className="courses-name">NumPy Array Slicing</span>
                                                <div className="courses-meta">
                                                    <span className="duration">1.5 Hour</span>
                                                    <span className="status locked"><i className="flaticon-password"></i></span>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>

                                    <h3>Last Week</h3>
                                    <ul>
                                        <li>
                                            <a href="#" className="d-flex justify-content-between align-items-center">
                                                <span className="courses-name">Hands-On Practice:</span>
                                               
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="d-flex justify-content-between align-items-center">
                                                <span className="courses-name">Case Studies:</span>
                                               
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="d-flex justify-content-between align-items-center">
                                                <span className="courses-name">Continuing Education:</span>
                                              
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <h3>What you'll learn</h3>
                                <div className="why-you-learn">
                                    <ul>
                                        <li>
                                            <span>
                                                <i className='flaticon-tick'></i>
                                                Become an expert in Body Sculpting
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className='flaticon-tick'></i>
                                                Boost your resume with skills
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className='flaticon-tick'></i>
                                                Understanding the human musculoskeletal system
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className='flaticon-tick'></i>
                                                Liposuction procedures and principles
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className='flaticon-tick'></i>
                                                Infection control and sterilization procedures
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className='flaticon-tick'></i>
                                                Conducting thorough client assessments
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className='flaticon-tick'></i>
                                                Familiarity with various sculpting tools and devices
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className='flaticon-tick'></i>
                                                Providing post-procedure instructions to clients
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className='flaticon-tick'></i>
                                                Integrating body sculpting with other cosmetic procedures
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <i className='flaticon-tick'></i>
                                                Effective communication with clients
                                            </span>
                                        </li>
                                    </ul>
                                </div>

                                <h3>Requirements</h3>
                                <ul className="requirements-list">
                                    <li>Relevant undergraduate or healthcare degree (for advanced courses)</li>
                                    <li>Minimum age requirement, typically 18 years or older</li>
                                    <li>No serious medical conditions that could pose a risk during training.</li>
                                </ul>

                                <h3>Who this course is for:</h3>
                                <ul className="audience-list">
                                    <li>Individuals who want to start a career in body sculpting and aesthetics.</li>
                                    <li>Doctors, nurses, or medical practitioners looking to expand their skills and offer body sculpting services.</li>
                                    <li>Professionals in the beauty and skincare industry seeking to diversify their services.</li>
                                    <li>Personal trainers or fitness instructors interested in enhancing their knowledge of body contouring techniques.</li>
                                </ul>

                                <h3>Meet Your Instructors</h3>
                                <div className="courses-author">
                                    <div className="author-profile-header"></div>
                                    <div className="author-profile">
                                        <div className="author-profile-title">
                                            <img src="/images/user1.jpg" className="shadow-sm rounded-circle" alt="image" />
                                            <div className="author-profile-title-details">
                                                <div className="author-profile-details">
                                                    <h4>James Anderson</h4>
                                                    <span className="d-block">body contouring specialist.</span>
                                                </div>
                                            </div>
                                        </div>
                                        <p>James Anderson is a highly skilled and experienced Body Contouring Specialist dedicated to helping you achieve your desired aesthetic goals. With a passion for artistry and a deep understanding of human anatomy, James has honed his craft to bring out the best in your natural beauty.</p>
                                        <p>James's commitment to excellence in body sculpting shines through in every procedure he performs.</p>
                                    </div>
                                </div>

                                <div className="courses-reviews">
                                    <h3>Course Rating</h3>

                                    <div className="rating">
                                        <span className="bx bxs-star checked"></span>
                                        <span className="bx bxs-star checked"></span>
                                        <span className="bx bxs-star checked"></span>
                                        <span className="bx bxs-star checked"></span>
                                        <span className="bx bxs-star"></span>
                                    </div>

                                    <div className="rating-count">
                                        <span>4.1 average based on 4 reviews.</span>
                                    </div>

                                    <div className="row">
                                        <div className="side">
                                            <div>5 star</div>
                                        </div>
                                        <div className="middle">
                                            <div className="bar-container">
                                                <div className="bar-5"></div>
                                            </div>
                                        </div>
                                        <div className="side right">
                                            <div>02</div>
                                        </div>
                                        <div className="side">
                                            <div>4 star</div>
                                        </div>
                                        <div className="middle">
                                            <div className="bar-container">
                                                <div className="bar-4"></div>
                                            </div>
                                        </div>
                                        <div className="side right">
                                            <div>03</div>
                                        </div>
                                        <div className="side">
                                            <div>3 star</div>
                                        </div>
                                        <div className="middle">
                                            <div className="bar-container">
                                                <div className="bar-3"></div>
                                            </div>
                                        </div>
                                        <div className="side right">
                                            <div>04</div>
                                        </div>
                                        <div className="side">
                                            <div>2 star</div>
                                        </div>
                                        <div className="middle">
                                            <div className="bar-container">
                                                <div className="bar-2"></div>
                                            </div>
                                        </div>
                                        <div className="side right">
                                            <div>05</div>
                                        </div>
                                        <div className="side">
                                            <div>1 star</div>
                                        </div>
                                        <div className="middle">
                                            <div className="bar-container">
                                                <div className="bar-1"></div>
                                            </div>
                                        </div>
                                        <div className="side right">
                                            <div>00</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="courses-review-comments">
                                    <h3>3 Reviews</h3>
                                    <div className="user-review">
                                        <img src="/images/user1.jpg" alt="image" />
                                        
                                        <div className="review-rating">
                                            <div className="review-stars">
                                                <i className='bx bxs-star checked'></i>
                                                <i className='bx bxs-star checked'></i>
                                                <i className='bx bxs-star checked'></i>
                                                <i className='bx bxs-star checked'></i>
                                                <i className='bx bxs-star checked'></i>
                                            </div>

                                            <span className="d-inline-block">James Anderson</span>
                                        </div>

                                        <span className="d-block sub-comment">Excellent</span>
                                        <p>Very well built theme, couldn't be happier with it. Can't wait for future updates to see what else they add in.</p>
                                    </div>

                                    <div className="user-review">
                                        <img src="/images/user2.jpg" alt="image" />
                                        <div className="review-rating">
                                            <div className="review-stars">
                                                <i className='bx bxs-star checked'></i>
                                                <i className='bx bxs-star checked'></i>
                                                <i className='bx bxs-star checked'></i>
                                                <i className='bx bxs-star'></i>
                                                <i className='bx bxs-star'></i>
                                            </div>

                                            <span className="d-inline-block">Sarah Taylor</span>
                                        </div>
                                        <span className="d-block sub-comment">Video Quality!</span>
                                        <p>Was really easy to implement and they quickly answer my additional questions!</p>
                                    </div>

                                    <div className="user-review">
                                        <img src="/images/user3.jpg" alt="image" />
                                        <div className="review-rating">
                                            <div className="review-stars">
                                                <i className='bx bxs-star checked'></i>
                                                <i className='bx bxs-star checked'></i>
                                                <i className='bx bxs-star checked'></i>
                                                <i className='bx bxs-star checked'></i>
                                                <i className='bx bxs-star checked'></i>
                                            </div>
                                            <span className="d-inline-block">David Warner</span>
                                        </div>
                                        <span className="d-block sub-comment">Perfect Coding!</span>
                                        <p>Stunning design, very dedicated crew who welcome new ideas suggested by customers, nice support.</p>
                                    </div>

                                    <div className="user-review">
                                        <img src="/images/user4.jpg" alt="image" />
                                        <div className="review-rating">
                                            <div className="review-stars">
                                                <i className='bx bxs-star checked'></i>
                                                <i className='bx bxs-star checked'></i>
                                                <i className='bx bxs-star checked'></i>
                                                <i className='bx bxs-star checked'></i>
                                                <i className='bx bxs-star'></i>
                                            </div>
                                            <span className="d-inline-block">King Kong</span>
                                        </div>
                                        <span className="d-block sub-comment">Perfect Video!</span>
                                        <p>Stunning design, very dedicated crew who welcome new ideas suggested by customers, nice support.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <CoursesDetailsSidebar />
                        </div>
                    </div>
                </div>
            </div>
 
            <YouMightLikeTheCourses />
        </>
    )
}

export default SingleCourses;