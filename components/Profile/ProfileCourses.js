import React from 'react';
import Link from 'next/link';

const ProfileCourses = () => {
    return (
        <div className="profile-courses pb-70">
            <h3 className="title">Courses</h3>
            <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="single-courses-box">
                        <div className="courses-image">
                            <Link href="/single-courses-1">
                                <a className="d-block image">
                                    <img src="/images/blog/img16.jpg" style={{borderRadius:"50px",height:"260px",width:"100%"}} alt="image" />
                                </a>
                            </Link>
                            <a href="#" className="fav">
                                <i className="flaticon-heart"></i>
                            </a>
                            <div className="price shadow">$500</div>
                        </div>

                        <div className="courses-content">
                            <div className="course-author d-flex align-items-center">
                                <img src="/images/user1.jpg" className="rounded-circle" alt="image" />
                                <span>Alex Morgan</span>
                            </div>

                            <h3>
                                <Link href="/single-courses-1">
                                    <a>Body Sculpting Course: Complete Certified Course</a>
                                </Link>
                            </h3>
                            
                            <p> Achieve your dream physique with our comprehensive certified course, covering the latest techniques in body sculpting and contouring.</p>
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
                                    <img src="/images/about-img-new-3.jpg" style={{borderRadius:"50px",height:"260px",width:"100%"}} alt="image" />
                                </a>
                            </Link>
                            <a href="#" className="fav">
                                <i className="flaticon-heart"></i>
                            </a>
                            <div className="price shadow">$500</div>
                        </div>
                        <div className="courses-content">
                            <div className="course-author d-flex align-items-center">
                                <img src="/images/user2.jpg" className="rounded-circle" alt="image" />
                                <span>Sarah Taylor</span>
                            </div>
                            
                            <h3>
                                <Link href="/single-courses-1">
                                    <a>Wood Therapy Course: Complete Certified Course</a>
                                </Link>
                            </h3>

                            <p>Harness the power of natural materials with our certified wood therapy course, offering holistic wellness and body contouring techniques.</p>
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

                <div className="col-lg-4 col-md-6">
                    <div className="single-courses-box">
                        <div className="courses-image">
                            <Link href="/single-courses-1">
                                <a className="d-block image">
                                    <img src="/images/banner-img2.png" style={{borderRadius:"50px",height:"260px",width:"100%"}} alt="image" />
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
                                    <a>Lip Fillers Course: Complete Certified Course</a>
                                </Link>
                            </h3>

                            <p>Become a certified expert in lip enhancement with our comprehensive training, mastering the art of safe and beautiful lip injections. Start now and become a master</p>
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

                <div className="col-lg-4 col-md-6">
                    <div className="single-courses-box">
                        <div className="courses-image">
                            <Link href="/single-courses-1">
                                <a className="d-block image">
                                    <img src="/images/blog/img18.jpg" style={{borderRadius:"50px",height:"260px",width:"100%"}} alt="image" />
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
                                    <a>Eye Extension Training: Complete Cerified Course</a>
                                </Link>
                            </h3>

                            <p> Elevate your beauty skills with our certified course, specializing/mastering in eyelash extensions training to create captivating and stunning looks.</p>
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
                                    <img src="/images/courses/courses17.jpg" style={{borderRadius:"50px",height:"260px",width:"100%"}} alt="image" />
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
                                    <a>Teeth Witening Course: Complete Certified Course</a>
                                </Link>
                            </h3>

                            <p>Brighten smiles and boost confidence with our certified teeth whitening course, providing the latest in safe and effective dental aesthetics.</p>
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

                <div className="col-lg-4 col-md-6">
                    <div className="single-courses-box">
                        <div className="courses-image">
                            <Link href="/single-courses-1">
                                <a className="d-block image">
                                    <img src="/images/hair-extension-courses/hair-extension-course2.webp" style={{borderRadius:"50px",height:"260px",width:"100%"}} alt="image" />
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
                                    <a>Hair Extension Training: Complete Certified Course</a>
                                </Link>
                            </h3>

                            <p>Transform your clients' hair with our certified course, teaching advanced techniques in hair extensions for gorgeous, long-lasting results.</p>
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

                <div className="col-lg-4 col-md-6">
                    <div className="single-courses-box">
                        <div className="courses-image">
                            <Link href="/single-courses-1">
                                <a className="d-block image">
                                    <img src="/images/about-img10.png" style={{borderRadius:"50px",height:"260px",width:"100%"}} alt="image" />
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
                                    <a>Fat Dissolving Training: Complete Certified Course</a>
                                </Link>
                            </h3>

                            <p>Shape and sculpt with confidence using our certified fat dissolving course, mastering the art of non-surgical fat reduction.</p>
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
                                    <img src="/images/courses/yoga-img1.jpg" style={{borderRadius:"50px",height:"260px",width:"100%"}} alt="image" />
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
                                    <a>Advance Yoga Traing: Complete Certified Course</a>
                                </Link>
                            </h3>

                            <p>Deepen your yoga practice and knowledge with our certified course, exploring advanced poses, philosophy, and meditation</p>
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

                <div className="col-lg-4 col-md-6">
                    <div className="single-courses-box">
                        <div className="courses-image">
                            <Link href="/single-courses-1">
                                <a className="d-block image">
                                    <img src="/images/courses/health-img3.jpg" style={{borderRadius:"50px",height:"260px",width:"100%"}} alt="image" />
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
                                    <a>Complete Health Coaching: Complete Certified Course</a>
                                </Link>
                            </h3>

                            <p>Become a certified health coach, equipped with a comprehensive understanding of nutrition, fitness, and holistic wellness </p>
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
    )
}

export default ProfileCourses;