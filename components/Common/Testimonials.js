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
						<h2>What People Say About Toxic Beauty Academy</h2>
						<p>
						Toxic Beauty Academy is more than just a school; it's a stepping stone to success. I couldn't have asked for a better place to nurture my beauty skills.
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
								The instructors at Toxic Beauty Academy are true experts in the beauty industry. Their guidance has been invaluable in shaping my career.
								</p>
								<h3>John Smith</h3>
								<span>Skin Care</span>

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
								I was skeptical about online learning, but Toxic Beauty Academy proved me wrong. The interactive courses and feedback are top-notch.
								</p>
								<h3>Sarah Taylor</h3>
								<span>Beauty Expert</span>

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
								Toxic Beauty Academy's commitment to excellence shines through in every aspect of their education. I'm proud to be a part of this community.
								</p>
								<h3>David Warner</h3>
								<span>Dentist</span>

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
