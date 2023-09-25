import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const FeedbackSlider = () => {
  return (
    <>
      <div className="feedback-area bg-fffaf3 ptb-100">
        <div className="container">
          <Swiper
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
            }}
            modules={[Pagination]}
            className="feedback-slides-two"
          >
            <SwiperSlide>
              <div className="single-feedback-box">
                <p>
                Toxic Beauty Academy has been overwhelmingly positive, with students praising its comprehensive courses, expert instructors, and commitment to safe and ethical beauty practices
                </p>
                <div className="client-info d-flex align-items-center">
                  <img
                    src="/images/user1.jpg"
                    className="rounded-circle"
                    alt="image"
                  />
                  <div className="title">
                    <h3>John Smith</h3>
                    <span>Health Care</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-feedback-box">
                <p>
                Toxic Beauty Academy: Empowering, insightful, and valuable. Instructors are knowledgeable, resources are extensive, and courses are transformative..
                </p>
                <div className="client-info d-flex align-items-center">
                  <img
                    src="/images/user2.jpg"
                    className="rounded-circle"
                    alt="image"
                  />
                  <div className="title">
                    <h3>Sarah Taylor</h3>
                    <span>Wood Therapist</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-feedback-box">
                <p>
                Toxic Beauty Academy has been overwhelmingly positive. Students praise the informative courses, expert instructors, and commitment to safety and sustainability
                </p>
                <div className="client-info d-flex align-items-center">
                  <img
                    src="/images/user1.jpg"
                    className="rounded-circle"
                    alt="image"
                  />
                  <div className="title">
                    <h3>David Warner</h3>
                    <span>Yoga Training</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="divider2"></div>
        <div className="divider3"></div>
        <div className="shape2">
          <img src="/images/shape2.png" alt="image" />
        </div>
        <div className="shape3">
          <img src="/images/shape3.png" alt="image" />
        </div>
        <div className="shape4">
          <img src="/images/shape4.png" alt="image" />
        </div>
        <div className="shape9">
          <img src="/images/shape8.svg" alt="image" />
        </div>
      </div>
    </>
  );
};

export default FeedbackSlider;
