import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const FeedbackSlider = () => {
	return (
		<>
			<div className="feedback-area bg-fffaf3 ptb-100">
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
								Toxic Beauty Academy has provided invaluable knowledge about harmful beauty ingredients and clean alternatives. Their courses are informative, eye-opening, and empower us to make safer choices in our beauty routines. Highly recommended for those seeking a healthier approach to beauty.
								</p>
								<div className="client-info d-flex align-items-center">
									<img
										src="/images/user1.jpg"
										className="rounded-circle"
										alt="image"
									/>
									<div className="title">
										<h3>John Smith</h3>
										<span>Body Sculpor</span>
									</div>
								</div>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="single-feedback-box">
								<p>
								Toxic Beauty Academy provides valuable education on recognizing and avoiding harmful beauty products. Participants praise its in-depth content, expert guidance, and commitment to promoting safer, cleaner alternatives for personal care routines
								</p>
								<div className="client-info d-flex align-items-center">
									<img
										src="/images/user2.jpg"
										className="rounded-circle"
										alt="image"
									/>
									<div className="title">
										<h3>Sarah Taylor</h3>
										<span>Dentist</span>
									</div>
								</div>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="single-feedback-box">
								<p>
								Feedback about Toxic Beauty Academy is overwhelmingly positive, as it provides comprehensive education on clean and safe beauty practices. Students appreciate the informative courses, expert guidance, and empowering tools to make healthier beauty choices
								</p>
								<div className="client-info d-flex align-items-center">
									<img
										src="/images/user1.jpg"
										className="rounded-circle"
										alt="image"
									/>
									<div className="title">
										<h3>David Warner</h3>
										<span>Yoga</span>
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
