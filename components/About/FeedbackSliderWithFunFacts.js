import React from "react";
import Link from "next/link";
import FunFacts from "./FunFacts";
import IntoVideo from "./IntoVideo";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const FeedbackSliderWithFunFacts = () => {
	return (
		<>
			<div className="funfacts-and-feedback-area ptb-100">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 col-md-12">
							<div className="feedback-content">
								<span className="sub-title">Distance learning</span>
								<h2>
									Flexible Study at Your Own Pace, According to
									Your Own Needs
								</h2>
								<p>
									With the eDemy, you can study whenever and
									wherever you choose. We have students in over
									175 countries and a global reputation as a
									pioneer in the field of flexible learning. Our
									teaching also means, if you travel often or need
									to relocate, you can continue to study wherever
									you go.
								</p>

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
									className="feedback-slides"
								>
									<SwiperSlide>
										<div className="single-feedback-item">
											<p>
											This is long over due I could not have ask for a better place to go.  
											Everyone was welcoming and very helpful.  
											And I finally got my body back I would so recommend this to anyone results may very.
											</p>

											<div className="client-info d-flex align-items-center">
												<img
													src="/images/user1.jpg"
													className="rounded-circle"
													alt="image"
												/>
												<div className="title">
													<h3>John Smith</h3>
													<span></span>
												</div>
											</div>
										</div>
									</SwiperSlide>

									<SwiperSlide>
										<div className="single-feedback-item">
											<p>
											The personalized guidance and attention to 
											detail have helped me progress from a novice to a confident beauty enthusiast.
											</p>

											<div className="client-info d-flex align-items-center">
												<img
													src="/images/user2.jpg"
													className="rounded-circle"
													alt="image"
												/>
												<div className="title">
													<h3>Sarah Taylor</h3>
													<span>Doctor</span>
												</div>
											</div>
										</div>
									</SwiperSlide>

									<SwiperSlide>
										<div className="single-feedback-item">
											<p>
											Toxic Beauty Academy is a reflection of their dedication to excellence. 
											It's not just about learning; it's about growing and excelling in the world of beauty. 
											I'm grateful for the guidance and support.
											</p>

											<div className="client-info d-flex align-items-center">
												<img
													src="/images/user1.jpg"
													className="rounded-circle"
													alt="image"
												/>
												<div className="title">
													<h3>David Warner</h3>
													<span>Skin Specilist </span>
												</div>
											</div>
										</div>
									</SwiperSlide>
								</Swiper>

								<div className="feedback-info">
									<p>
										Not a member yet?​{" "}
										<Link href="/profile-authentication">
											<a>Register Now</a>
										</Link>
									</p>
								</div>
							</div>
						</div>

						<div className="col-lg-6 col-md-12">
							<FunFacts />
						</div>

						<div className="col-lg-12 col-md-12">
							<IntoVideo />
						</div>
					</div>
				</div>

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

export default FeedbackSliderWithFunFacts;
