import React from "react";
import PageBanner from "@/components/Common/PageBanner";
import Link from "@/utils/ActiveLink";

const index = () => {
  return (
    <>
      <PageBanner
        pageTitle="Teacher Dashboard"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Teacher Dashboard"
      />

      <div className="ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-lg-4">
              <div className="td-sidebar">
                <ul>
                  <li>
                    <Link href="/teacher/courses" activeClassName="active">
                      <a>My Courses</a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/teacher/course/create"
                      activeClassName="active"
                    >
                      <a>Create A Course</a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/teacher/courses/course-edit"
                      activeClassName="active"
                    >
                      <a>Edit My Course</a>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/teacher/course/upload-course-video"
                      activeClassName="active"
                    >
                      <a>Upload Course Video</a>
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/teacher/course/createQuiz"
                      activeClassName="active"
                    >
                      <a>Create Quiz</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-8 col-lg-8">
              <div className="td-text-area">
                <h4>Teacher Dashboard</h4>

                <p>
                  Toxic Beauty Academy is committed to the growth and
                  development of our teaching staff, which is why the dashboard
                  includes professional development resources and training
                  modules. This ensures that our instructors stay updated with
                  the latest trends and techniques in the beauty industry,
                  enabling them to deliver high-quality education to our
                  students.
                </p>
                <p>
                  Our teachers are passionate about their craft and are
                  committed to helping students excel in their beauty careers.
                  They go above and beyond to create a supportive and engaging
                  learning environment, where students can develop their skills
                  and unleash their creativity.
                </p>
                <p>
                  At Toxic Beauty Academy, our teachers are more than just
                  instructors; they are mentors, guiding students on their
                  journey towards becoming skilled and confident beauty
                  professionals. Their dedication and expertise make them
                  invaluable assets to our institution and to the future success
                  of our students.
                </p>

                <ul>
                  <li>
                    Real-time Progress Tracking: Stay up-to-date with student
                    progress through real-time data, allowing you to provide
                    timely feedback and support their individual learning
                    journeys.
                  </li>
                  <li>
                    Resource Sharing Made Easy: Easily upload and share
                    educational materials, videos, and resources with your
                    students, ensuring they have access to the latest industry
                    insights and knowledge.
                  </li>
                  <li>
                    Communication Hub: The integrated messaging system enables
                    seamless communication between teachers and students,
                    fostering a collaborative and supportive learning
                    environment.
                  </li>
                  <li>
                    Professional Development: Access professional development
                    resources and training modules to stay updated with the
                    ever-evolving beauty industry trends and techniques.
                  </li>
                </ul>

                <ol>
                  <li>
                    Assessment Tools: Utilize built-in assessment tools to
                    create quizzes, assignments, and exams, making it simple to
                    gauge student comprehension and progress.
                  </li>
                  <li>
                    Student Analytics: Gain insights into student performance
                    with analytics tools that help you identify areas where
                    additional support may be needed.
                  </li>
                  <li>
                    Student Feedback Repository: Store and access feedback
                    records, making it easy to track student improvement over
                    time and tailor your teaching approach accordingly.
                  </li>
                  <li>
                    Calendar Integration: Sync your class schedule with a
                    calendar feature, helping you stay organized and on top of
                    important dates and deadlines.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
