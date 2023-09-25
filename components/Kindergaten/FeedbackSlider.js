import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

const FeedbackSlider = () => {
  return (
    <>
      <div className="feedback-area bg-6dbbbd pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Testimonials</span>
            <h2 className="font-weight-black">Our Guardian Feedback</h2>
            <p>
              We always give extra care to our student's skills improvements and
              feel excited to share our latest research and learnings!
            </p>
          </div>
        </div>

        <div className="container-fluid">
          <Swiper
            spaceBetween={30}
            navigation={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
							992: {
                slidesPerView: 3,
              },
							1200: {
                slidesPerView: 4,
              },
							1550: {
                slidesPerView: 5,
              },
            }}
						autoplay={{
							delay: 6500,
							disableOnInteraction: true,
							pauseOnMouseEnter: true,
						}}
            modules={[Navigation, Autoplay]}
            className="feedback-slides-three"
          >
            <SwiperSlide>
              <div className="single-kindergarten-feedback-item">
                <div className="content">
                  <img src="/images/feedback-shape.png" alt="image" />
                  <p>
                  Toxic Beauty Academy is glowing. They appreciate the academy's dedication to educating on clean beauty, holistic wellness, and sustainable practices. The comprehensive courses and expert guidance ensure a transformative learning experience.
                  </p>
                </div>

                <div className="client-info">
                  <img src="/images/user1.jpg" alt="image" />
                  <h3 className="font-weight-black">John Smith</h3>
                  <span>Guardian</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-kindergarten-feedback-item">
                <div className="content">
                  <img src="/images/feedback-shape.png" alt="image" />
                  <p>
                  Toxic Beauty Academy is resoundingly positive. They highlight its dedication to educating on clean beauty, fostering self-confidence, and promoting eco-consciousness. The academy serves as a trustworthy guardian of healthy beauty practices
                  </p>
                </div>

                <div className="client-info">
                  <img src="/images/user2.jpg" alt="image" />
                  <h3 className="font-weight-black">Sarah Taylor</h3>
                  <span>Guardian</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-kindergarten-feedback-item">
                <div className="content">
                  <img src="/images/feedback-shape.png" alt="image" />
                  <p>
                  Toxic Beauty Academy is exceptionally positive. They appreciate the academy's commitment to educating individuals about safer beauty practices, empowering them to make informed choices while prioritizing health and well-being
                  </p>
                </div>

                <div className="client-info">
                  <img src="/images/user3.jpg" alt="image" />
                  <h3 className="font-weight-black">David Smith</h3>
                  <span>Guardian</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-kindergarten-feedback-item">
                <div className="content">
                  <img src="/images/feedback-shape.png" alt="image" />
                  <p>
                  Toxic Beauty Academy is highly positive. They laud its thorough education on clean beauty, the emphasis on safety, and the commitment to sustainability. The academy is seen as a reliable source for informed beauty choices
                  </p>
                </div>

                <div className="client-info">
                  <img src="/images/user4.jpg" alt="image" />
                  <h3 className="font-weight-black">James Andy</h3>
                  <span>Guardian</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-kindergarten-feedback-item">
                <div className="content">
                  <img src="/images/feedback-shape.png" alt="image" />
                  <p>
                  Toxic Beauty Academy is enthusiastic. They appreciate the academy's dedication to safe and sustainable beauty practices, providing valuable education that empowers healthier choices for our well-being
                  </p>
                </div>

                <div className="client-info">
                  <img src="/images/user5.jpg" alt="image" />
                  <h3 className="font-weight-black">Max Lucy</h3>
                  <span>Guardian</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-kindergarten-feedback-item">
                <div className="content">
                  <img src="/images/feedback-shape.png" alt="image" />
                  <p>
                  Toxic Beauty Academy is highly positive. They commend its educational depth, empowering individuals to make informed choices in the beauty industry. The academy's commitment to clean, sustainable practices aligns with our values.
                  </p>
                </div>

                <div className="client-info">
                  <img src="/images/user6.jpg" alt="image" />
                  <h3 className="font-weight-black">Harry Zayn</h3>
                  <span>Guardian</span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="kindergarten-shape13">
          <img src="/images/kindergarten-shape/k-shape13.png" alt="image" />
        </div>
        <div className="kindergarten-shape14">
          <img src="/images/kindergarten-shape/k-shape14.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default FeedbackSlider;
