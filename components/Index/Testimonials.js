import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const Testimonials = () => {
  return (
    <>
      <div className="testimonials-area ptb-100">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">Testimonials</span>
            <h2>What People Say About</h2>
            <p>
              The customer service I received was exceptional. The staff went
              above and beyond to assist me.
            </p>
          </div>

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
            className="testimonials-slides"
          >
            <SwiperSlide>
              <div className="single-testimonials-item">
                <img
                  src="/images/user1.jpg"
                  className="client-img"
                  alt="image"
                />
                <p>
                  I've been using Toxic Beauty for a while now, and I'm amazed
                  at the results. Their natural approach to beauty products is
                  refreshing and effective. I finally found products that align
                  with my values and deliver fantastic results
                </p>
                <h3>John Smith</h3>
                <span>Wood Therapy</span>

                <div className="shape-img">
                  <img
                    src="/images/shape4.png"
                    className="shape-1"
                    alt="image"
                  />
                  <img
                    src="/images/shape14.png"
                    className="shape-2"
                    alt="image"
                  />
                  <img
                    src="/images/shape7.png"
                    className="shape-3"
                    alt="image"
                  />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-testimonials-item">
                <img
                  src="/images/user2.jpg"
                  className="client-img"
                  alt="image"
                />
                <p>
                  As someone with sensitive skin, I've struggled to find
                  skincare products that don't irritate my skin. Toxic Beauty
                  has been a game-changer. Their toxin-free formulas have
                  improved my skin's texture and appearance without any adverse
                  reactions
                </p>
                <h3>Sarah Taylor</h3>
                <span>Hair Extensions</span>

                <div className="shape-img">
                  <img
                    src="/images/shape4.png"
                    className="shape-1"
                    alt="image"
                  />
                  <img
                    src="/images/shape14.png"
                    className="shape-2"
                    alt="image"
                  />
                  <img
                    src="/images/shape7.png"
                    className="shape-3"
                    alt="image"
                  />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-testimonials-item">
                <img
                  src="/images/user3.jpg"
                  className="client-img"
                  alt="image"
                />
                <p>
                  I stumbled upon Toxic Beauty and haven't looked back since.
                  Their dedication to transparency and natural ingredients is
                  evident in every product. My skin has never felt so pampered
                  and healthy
                </p>
                <h3>David Warner</h3>
                <span>Teeth Whitening</span>

                <div className="shape-img">
                  <img
                    src="/images/shape4.png"
                    className="shape-1"
                    alt="image"
                  />
                  <img
                    src="/images/shape14.png"
                    className="shape-2"
                    alt="image"
                  />
                  <img
                    src="/images/shape7.png"
                    className="shape-3"
                    alt="image"
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
