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
								<span className="sub-title">DISTANCE LEARNING</span>
								<h2>
								Tailored Learning on Your Terms, Aligned with Your Personal Goals
								</h2>
								<p>
								At the Wooden Therapy Academy, you have the freedom to study at your convenience and adapt to your unique needs. Our student community spans across 175+ countries, and we're renowned worldwide for pioneering flexible learning in the realm of wooden therapy. Our commitment to your education means that even when you're on the move or embarking on new journeys, your wooden therapy studies can seamlessly accompany you.
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
											Wood Therapy at Toxic Beauty Academy is exceptional. Students praise the hands-on training, comprehensive understanding of the technique's benefits, and the holistic approach to wellness. Graduates feel confident in offering this natural and effective beauty treatment, contributing to the academy's reputation for excellence.
											</p>

											<div className="client-info d-flex align-items-center">
												<img
													src="/images/user1.jpg"
													className="rounded-circle"
													alt="image"
												/>
												<div className="title">
													<h3>John Smith</h3>
													<span>Wood Therapist</span>
												</div>
											</div>
										</div>
									</SwiperSlide>

									<SwiperSlide>
										<div className="single-feedback-item">
											<p>
											wood therapy at Toxic Beauty Academy is excellent. Students praise the hands-on training, detailed curriculum, and skilled instructors. The course equips them with the knowledge and skills to offer natural and non-invasive beauty treatments, making it a valuable addition to their beauty education.
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
										<div className="single-feedback-item">
											<p>
											Wood therapy at Toxic Beauty Academy receives rave reviews for its effectiveness in natural beauty treatments. Students praise the hands-on learning, the use of sustainable materials, and the instructors' expertise in holistic skincare. Many note improved skills and an appreciation for eco-friendly beauty practices.
											</p>

											<div className="client-info d-flex align-items-center">
												<img
													src="/images/user1.jpg"
													className="rounded-circle"
													alt="image"
												/>
												<div className="title">
													<h3>David Warner</h3>
													<span>wood Therapist</span>
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
