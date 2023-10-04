import React from 'react';
import Link from 'next/link';
import MyCourses from 'pages/my-courses';

const ProfileCourses = () => {
    return (
        <div className="profile-courses pb-70">
            <h3 className="title">Courses</h3>
            <div className="row">
                <MyCourses/>
            </div>
        </div>
    )
}

export default ProfileCourses;