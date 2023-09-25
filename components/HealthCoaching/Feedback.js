import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const Feedback = () => {
	return (
		<>
			<div className="health-coaching-feedback-area">
				<div className="container-fluid">
					<div className="row align-items-center">
						<div className="col-lg-6 col-md-12">
							<div className="health-coaching-feedback-image">
								<img src="/images/woman.jpg" alt="image" />
							</div>
						</div>

						<div className="col-lg-6 col-md-12">
							<div className="health-coaching-inner">
								<h2 className="playfair-display-font">
									More Than 200,000 People Agree That We are
									Different
								</h2>

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
										<div className="feedback-quote">
											<p>
											Toxic Beauty Academy stands out from others through its comprehensive curriculum and commitment to holistic beauty. Learners appreciate the emphasis on clean, safe practices, sustainable approaches, and expert guidance, setting it apart as a top choice for those seeking an eco-conscious beauty education
											</p>

											<div className="client-info">
												<div className="d-flex justify-content-center align-items-center">
													<img
														src="/images/user1.jpg"
														alt="image"
													/>
													<div className="title">
														<h3>John Smith</h3>
														<span>
															Lymphatic Drianage
														</span>
													</div>
												</div>
											</div>

											<div className="object1">
												<img
													src="/images/object1.png"
													alt="image"
												/>
											</div>
											<div className="object2">
												<img
													src="/images/object2.png"
													alt="image"
												/>
											</div>
											<div className="object3">
												<img
													src="/images/object3.png"
													alt="image"
												/>
											</div>
											<div className="object4">
												<img
													src="/images/object4.png"
													alt="image"
												/>
											</div>
										</div>
									</SwiperSlide>

									<SwiperSlide>
										<div className="feedback-quote">
											<p>
											Toxic Beauty Academy stand out due to their unmatched commitment to clean and safe beauty education. Learners consistently highlight the academy's exceptional curriculum, expert instructors, and its role in empowering individuals to make informed, toxin-free beauty choices, setting it apart from others in the industry.
											</p>

											<div className="client-info">
												<div className="d-flex justify-content-center align-items-center">
													<img
														src="/images/user1.jpg"
														alt="image"
													/>
													<div className="title">
														<h3>John Smith</h3>
														<span>
														Yoga Training
														</span>
													</div>
												</div>
											</div>

											<div className="object1">
												<img
													src="/images/object1.png"
													alt="image"
												/>
											</div>
											<div className="object2">
												<img
													src="/images/object2.png"
													alt="image"
												/>
											</div>
											<div className="object3">
												<img
													src="/images/object3.png"
													alt="image"
												/>
											</div>
											<div className="object4">
												<img
													src="/images/object4.png"
													alt="image"
												/>
											</div>
										</div>
									</SwiperSlide>

									<SwiperSlide>
										<div className="feedback-quote">
											<p>
											Toxic Beauty Academy stands out with unique feedback compared to others. Learners commend its comprehensive approach to clean beauty education, personalized guidance, and emphasis on sustainability. The academy's commitment to holistic beauty and wellness sets it apart, earning praise for its distinctiveness.
											</p>

											<div className="client-info">
												<div className="d-flex justify-content-center align-items-center">
													<img
														src="/images/user1.jpg"
														alt="image"
													/>
													<div className="title">
														<h3>John Smith</h3>
														<span>
															Lip Filler
														</span>
													</div>
												</div>
											</div>

											<div className="object1">
												<img
													src="/images/object1.png"
													alt="image"
												/>
											</div>
											<div className="object2">
												<img
													src="/images/object2.png"
													alt="image"
												/>
											</div>
											<div className="object3">
												<img
													src="/images/object3.png"
													alt="image"
												/>
											</div>
											<div className="object4">
												<img
													src="/images/object4.png"
													alt="image"
												/>
											</div>
										</div>
									</SwiperSlide>
								</Swiper>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Feedback;
