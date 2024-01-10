import React from 'react';
import PageBanner from '@/components/Common/PageBanner';
import Link from 'next/link';

// import Quizzes from "../components/Profile/Quizzes";
import ProfileCourses from '@/components/Profile/ProfileCourses';

const MyProfile = ({ user }) => {
    return (
        <>
            <PageBanner 
                pageTitle="My Profile" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="My Profile" 
            />  

            {/* <div className="ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="user-profile">
                                <img src="/images/success-people/success-people3.jpg" />
                                <h3>Jones Taylor</h3>
                                <p>jonestaylor@gmail.com</p>
                            </div>
                        </div>

                        <div className="col-lg-8">
                            <div className="user-profile-table">
                                <div className="table-responsive">
                                    <table className="table table-bordered vertical-align-top">
                                        <tbody>
                                            <tr>
                                                <td>Jones Taylor</td>
                                                <td>jonestaylor@gmail.com</td>
                                            </tr>
                                            <tr>
                                                <td>Jones Taylor</td>
                                                <td>jonestaylor@gmail.com</td>
                                            </tr>
                                            <tr>
                                                <td>Jones Taylor</td>
                                                <td>jonestaylor@gmail.com</td>
                                            </tr>
                                            <tr>
                                                <td>Jones Taylor</td>
                                                <td>jonestaylor@gmail.com</td>
                                            </tr>
                                            <tr>
                                                <td>Jones Taylor</td>
                                                <td>jonestaylor@gmail.com</td>
                                            </tr>
                                            <tr>
                                                <td>Jones Taylor</td>
                                                <td>jonestaylor@gmail.com</td>
                                            </tr>
                                            <tr>
                                                <td>Jones Taylor</td>
                                                <td>jonestaylor@gmail.com</td>
                                            </tr>
                                            <tr>
                                                <td>Jones Taylor</td>
                                                <td>jonestaylor@gmail.com</td>
                                            </tr>
                                            <tr>
                                                <td>Jones Taylor</td>
                                                <td>jonestaylor@gmail.com</td>
                                            </tr>
                                        </tbody>
                                    </table> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            
<div className="profile-area ptb-100 d-flex justify-content-center align-items-center">
          <div className="profile-box">
            <div className="row ">
              <div className="col-lg-4 col-md-4 text-end">
                <div className="image">
                  <img
                    src="/images/man.jpg"
                    alt="image"
                    className=" bg-dark p-3" 
                    
                  />
                </div>
              </div>

              <div className="col-lg-8 col-md-8">
                <div className="content">
                  <h3>{user.name}</h3>
                  
                  <p>
                  Manage your courses, engage with students, and create dynamic content for your classes. Empower your teaching experience, track student performance, and foster a collaborative learning environment within the exciting field of beauty and wellness.
                  </p>

                  <ul className="info">
                    <li>
                      <span>Email:</span>{" "}
                      {/* <a href="mailto:hello@sarahtaylor.com">{user.email}</a> */}
                      {user.email}
                      
                    </li>
                  </ul>

                  <ul className="social-link">
                    <li>
                      <a href="#" className="d-block  rounded-circle" target="_blank">
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-block  rounded-circle" target="_blank">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-block  rounded-circle" target="_blank">
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-block rounded-circle" target="_blank">
                        <i className="bx bxl-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>


        </>
    )
}

export default MyProfile;