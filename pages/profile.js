import React from 'react';
import PageBanner from '../components/Common/PageBanner';
import ProfileCourses from '../components/Profile/ProfileCourses';
import Quizzes from '../components/Profile/Quizzes';

const Profile = () => {
    return (
        <>
            <PageBanner 
                pageTitle="Profile" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Profile" 
            />  

            <div className="profile-area">
                <div className="container">
                    <div className="profile-box ptb-100">
                        <div className="row align-items-center">
                            <div className="col-lg-4 col-md-4">
                                <div className="image">
                                    <img src="/images/man2.jpg" alt="image" />
                                </div>
                            </div>

                            <div className="col-lg-8 col-md-8">
                                <div className="content">
                                    <h3>Joanna Grajeda</h3>
                                    <span className="sub-title">CEO and ounder of Toxiccbeauty LLC</span>
                                    <p>Our project management training equips learners with the knowledge and discipline required to effectively plan, manage, execute, and control projects regardless of industry. You'll learn all about the most popular project management methodologies that help organizations deliver successful projects..</p>
                                    
                                    <ul className="info">
                                        <li><span>Phone Number:</span> <a href="tel:+44254588689">+1 (602) 316-8811</a></li>
                                        <li><span>Email:</span> <a href="mailto:hello@sarahtaylor.com">Toxiccbeauty.3@gmail.con</a></li>
                                    </ul>

                                    <ul className="social-link">
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <ProfileCourses />
                    
                    <Quizzes />
                </div>
            </div>
        </>
    )
}

export default Profile;