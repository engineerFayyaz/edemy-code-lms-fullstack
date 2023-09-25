import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const FeedbackSlider = () => {
  return (
    <>
      <div className="feedback-with-bg-image ptb-100 jarallax">
        <div className="container">
          <Swiper
            slidesPerView={1}
            pagination={{
              clickable: true,
            }}
						autoplay={{
							delay: 6500,
							disableOnInteraction: true,
							pauseOnMouseEnter: true,
						}}
            modules={[Pagination, Autoplay]}
            className="feedback-slides feedback-slides-style-two"
          >
            <SwiperSlide>
              <div className="single-feedback-item-box">
                <p>
                Toxic Beauty Academy's hair extension courses is outstanding. Students praise the comprehensive curriculum, expert instructors, and hands-on training, enabling them to excel in the art of hair extensions while emphasizing safety and sustainability.e.
                </p>

                <div className="client-info d-flex align-items-center">
                  <img src="/images/user1.jpg" alt="image" />
                  <div className="title">
                    <h3>John Smith</h3>
                    <span>hair extensionist</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-feedback-item-box">
                <p>
                Hair extension training at Toxic Beauty Academy is exceptional. Students praise the comprehensive curriculum, hands-on practice, and expert guidance. They note increased confidence and skills in the art of hair extensions, making it a top choice for beauty education.
                </p>

                <div className="client-info d-flex align-items-center">
                  <img src="/images/user2.jpg" alt="image" />
                  <div className="title">
                    <h3>David Warner</h3>
                    <span>hair extensionist</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-feedback-item-box">
                <p>
                Toxic Beauty Academy's hair extension courses is outstanding. Students appreciate the comprehensive training, diverse extension techniques, and emphasis on ethical sourcing. They leave with newfound expertise and an understanding of sustainable beauty practices.
                </p>

                <div className="client-info d-flex align-items-center">
                  <img src="/images/user3.jpg" alt="image" />
                  <div className="title">
                    <h3>Sarah Taylor</h3>
                    <span>hair extensionist</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default FeedbackSlider;
