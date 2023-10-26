import React from "react";
import PageBanner from "@/components/Common/PageBanner";
import Link from "next/link";

// import Quizzes from "../components/Profile/Quizzes";
import ProfileCourses from "@/components/Profile/ProfileCourses";
import Quizzes from "@/components/Profile/Quizzes";

const Profile = ({ user }) => {
  return (
    <>
      <PageBanner
        pageTitle="My Profile"
        homePageUrl="/"
        homePageText="Home"
        activePageText="My Profile"
      />
<div className="container">
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
                Access a wide range of courses, from body sculpting to hair extensions, track your progress, and engage with rich educational content. Stay connected with your educational journey and achieve your beauty aspirations with ease.
                </p>

                <ul className="info">
                  <li>
                    <span>Email:</span>{" "}
                    <a href="mailto:hello@sarahtaylor.com">{user.email}</a>
                  </li>
                </ul>

                <ul className="social-link">
                  <li>
                    <a
                      href="#"
                      className="d-block  rounded-circle"
                      target="_blank"
                    >
                      <i className="bx bxl-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="d-block  rounded-circle"
                      target="_blank"
                    >
                      <i className="bx bxl-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="d-block  rounded-circle"
                      target="_blank"
                    >
                      <i className="bx bxl-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="d-block rounded-circle"
                      target="_blank"
                    >
                      <i className="bx bxl-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
</div>
   
      <ProfileCourses />

      <Quizzes />
    </>
  );
};

export default Profile;
