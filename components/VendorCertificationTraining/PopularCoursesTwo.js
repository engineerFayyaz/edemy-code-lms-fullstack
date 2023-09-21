import React from 'react';
import Link from 'next/link';

const PopularCoursesTwo = () => {
    return (
        <div className="courses-area pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">Go at your own pace</span>
                    <h2>Project lymphatic drainage Program</h2>
                    <p>Explore all of our courses and pick your suitable ones to enroll and start learning with us! We ensure that you will never regret it!</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-courses-box bg-color">
                            <div className="courses-image">
                                <Link href="/single-courses-2">
                                    <a className="d-block image">
                                        <img src="/images/courses/courses6.jpg" alt="image" />
                                    </a>
                                </Link>
                                <Link href="#">
                                    <a className="fav"><i className="flaticon-heart"></i></a>
                                </Link>
                                <div className="price shadow">$500</div>
                            </div>
                            <div className="courses-content">
                                <h3>
                                    <Link href="/single-courses-2">
                                        <a>Massage Therapist</a>
                                    </Link>
                                </h3>
                                <p>If just the mention of a massage can conjure the aura of tranquillity and well-being, then one can imagine the world of good an entire session with an accomplished Massage Therapist can do to an individua.</p>
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
                        <div className="single-courses-box bg-color">
                            <div className="courses-image">
                                <Link href="/single-courses-2">
                                    <a className="d-block image">
                                        <img src="/images/courses/courses7.jpg" alt="image" />
                                    </a>
                                </Link>
                                <Link href="#">
                                    <a className="fav"><i className="flaticon-heart"></i></a>
                                </Link>
                                <div className="price shadow">$500</div>
                            </div>
                            <div className="courses-content">
                                <h3>
                                    <Link href="/single-courses-2">
                                        <a>Aromatherapists</a>
                                    </Link>
                                </h3>
                                <p>When Vladimir Nabokov wrote, “nothing revives the past so completely as a smell that was once associated with it”, he was onto something. Our sense of smell is deeply tied to our memories and emotions.</p>
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
                        <div className="single-courses-box bg-color">
                            <div className="courses-image">
                                <Link href="/single-courses-2">
                                    <a className="d-block image">
                                        <img src="/images/courses/courses8.jpg" alt="image" />
                                    </a>
                                </Link>
                                <Link href="#">
                                    <a className="fav"><i className="flaticon-heart"></i></a>
                                </Link>
                                <div className="price shadow">$500</div>
                            </div>
                            <div className="courses-content">
                                <h3>
                                    <Link href="/single-courses-2">
                                        <a>Yoga Therapist</a>
                                    </Link>
                                </h3>
                                <p> Yoga, which aims at a mind free from all disturbances, teaches one how to listen to one’s body. Yoga Therapists work with clients to help improve their relationship with their body and their environment</p>
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

            <div className="shape16">
                <img src="/images/shape15.png" alt="image" />
            </div>
        </div>
    )
}

export default PopularCoursesTwo;