import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const FeedbackSlider = () => {
  return (
		<>
			<div className="feedback-area bg-6ba292 ptb-100">
				<div className="container">
					<Swiper
						spaceBetween={30}
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
						autoplay={{
							delay: 6500,
							disableOnInteraction: true,
							pauseOnMouseEnter: true,
						}}
						modules={[Pagination, Autoplay]}
						className="feedback-slides-two"
					>
						<SwiperSlide>
							<div className="single-feedback-box">
								<p>
								Yoga training at Toxic Beauty Academy is exceptional. Instructors are knowledgeable, fostering a holistic approach to wellness. Highly recommended for those seeking a toxin-free, balanced lifestyle.
								</p>

								<div className="client-info d-flex align-items-center">
									<img
										src="/images/user1.jpg"
										className="rounded-circle"
										alt="image"
									/>
									<div className="title">
										<h3>John Smith</h3>
										<span>Yoga Trainee</span>
									</div>
								</div>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="single-feedback-box">
								<p>
								"Yoga training at Toxic Academy exceeded my expectations. Knowledgeable instructors, holistic approach, and a nurturing environment. A transformative experience for mind and body. Highly recommended!"
								</p>

								<div className="client-info d-flex align-items-center">
									<img
										src="/images/user2.jpg"
										className="rounded-circle"
										alt="image"
									/>
									<div className="title">
										<h3>Sarah Taylor</h3>
										<span>Yoga Trainee</span>
									</div>
								</div>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="single-feedback-box">
								<p>
								"Toxic Beauty Academy's yoga training received outstanding feedback. Students praised the expert instructors, comprehensive curriculum, and transformative experience. Join our holistic journey to well-being and vitality!"
								</p>

								<div className="client-info d-flex align-items-center">
									<img
										src="/images/user1.jpg"
										className="rounded-circle"
										alt="image"
									/>
									<div className="title">
										<h3>David Warner</h3>
										<span>Yoga Trainee</span>
									</div>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>

				<div className="divider2"></div>
				<div className="divider3"></div>
				<div className="tree-shape">
					<img src="/images/tree-shape.png" alt="image" />
				</div>
			</div>
		</>
  );
};

export default FeedbackSlider;
