import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import baseUrl from "@/utils/baseUrl";
import catchErrors from "@/utils/catchErrors";
import PageBanner from "@/components/Common/PageBanner";
import Link from "@/utils/ActiveLink";

const CreateQuiz = () => {
  const router = useRouter();
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [quizQuestions, setQuizQuestions] = useState(["", "", "", "", ""]);
  const [quizEndDate, setQuizEndDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    // Fetch the list of courses created by the teacher
    const fetchCourses = async () => {
      try {
        const url = `${baseUrl}/api/v1/courses/teacher-courses`; // Replace with the actual API endpoint
        const response = await axios.get(url);
        setCourses(response.data.courses);
      } catch (err) {
        catchErrors(err, setError);
      }
    };

    fetchCourses();
  }, []);

  const handleQuizSubmit = async (e) => {
    e.preventDefault();
    try {
      // Construct the quiz object with selected course, questions, and end date
      const quizData = {
        course: selectedCourse,
        questions: quizQuestions,
        endDate: quizEndDate,
      };

      // Send the quiz data to the API for creating the quiz
      const url = `${baseUrl}/api/v1/quizzes/create`; // Replace with the actual API endpoint
      const response = await axios.post(url, quizData);

      toast.success(response.data);
      router.push("/path-to-render-quiz-component"); // Replace with the path where you want to render the quiz component
    } catch (err) {
      catchErrors(err, setError);
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageBanner
        pageTitle="Create Quiz"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Create Quiz"
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
                    <Link href="/teacher/course/create" activeClassName="active">
                      <a>Create A Course</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/teacher/courses/course-edit" activeClassName="active">
                      <a>Edit My Course</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/teacher/course/upload-course-video" activeClassName="active">
                      <a>Upload Course Video</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/teacher/course/createQuiz" activeClassName="active">
                      <a>Create Quiz</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-8 col-lg-8">
              <div className="border-box">
                {loading && (
                  <h3 className="loading-spinner">
                    <div className="d-table">
                      <div className="d-table-cell">Loading...</div>
                    </div>
                  </h3>
                )}

                <form onSubmit={handleQuizSubmit}>
                  <div className="form-group">
                    <label>Select a Course</label>
                    <select
                      name="selectedCourse"
                      value={selectedCourse}
                      onChange={(e) => setSelectedCourse(e.target.value)}
                    >
                      <option value="">Select a course</option>
                      {courses.map((course) => (
                        <option key={course.id} value={course.id}>
                          {course.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Quiz Questions</label>
                    {quizQuestions.map((question, index) => (
                      <input
                        key={index}
                        type="text"
                        placeholder={`Question ${index + 1}`}
                        value={question}
                        onChange={(e) => {
                          const newQuestions = [...quizQuestions];
                          newQuestions[index] = e.target.value;
                          setQuizQuestions(newQuestions);
                        }}
                      />
                    ))}
                  </div>

                  <div className="form-group">
                    <label>Quiz End Date</label>
                    <input
                      type="date"
                      value={quizEndDate}
                      onChange={(e) => setQuizEndDate(e.target.value)}
                    />
                  </div>

                  <button className="default-btn" disabled={loading} type="submit">
                    Create Quiz
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateQuiz;
