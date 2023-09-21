import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const CourseAdvisor = () => {
	return (
		<>
			<div className="advisor-area bg-f9f9f9 ptb-100">
				<div className="container">
					<div className="section-title">
						<span className="sub-title">Instructor</span>
						<h2>Reyna Queen </h2>
						<p>
						Toxic Beauty Academy: Where CEO Reyna Queen Reigns Over Excellence in Beauty Education
						</p>
					</div>

					<Swiper
						spaceBetween={30}
						pagination={{
							clickable: true,
						}}
						autoplay={{
							delay: 6500,
							disableOnInteraction: true,
							pauseOnMouseEnter: true,
						}}
						breakpoints={{
							0: {
								slidesPerView: 1,
							},
							992: {
								slidesPerView: 2,
							},
						}}
						modules={[Pagination, Autoplay]}
						className="advisor-slides"
					> 
						<SwiperSlide>
							<div className="single-advisor-box">
								<div className="row align-items-center">
									<div className="col-lg-4 col-md-4">
										<div className="advisor-image">
											<img
												src="/images/advisor/advisor1.jpg"
												alt="image"
											/>
										</div>
									</div>

									<div className="col-lg-8 col-md-8">
										<div className="advisor-content">
											<h3>
												<a href="profile.html">
													William James
												</a>
											</h3>
											<span className="sub-title">
											Makeup Artistry
											</span>
											<p>
											We, makeup artists, are a unique bunch of people; 
											we don’t have the classic brain, the classic training, but we’re creative, so we figure it out.
											</p>

											<ul className="social-link">
												<li>
													<a
														href="#"
														className="d-block"
														target="_blank"
													>
														<i className="bx bxl-facebook"></i>
													</a>
												</li>
												<li>
													<a
														href="#"
														className="d-block"
														target="_blank"
													>
														<i className="bx bxl-twitter"></i>
													</a>
												</li>
												<li>
													<a
														href="#"
														className="d-block"
														target="_blank"
													>
														<i className="bx bxl-instagram"></i>
													</a>
												</li>
												<li>
													<a
														href="#"
														className="d-block"
														target="_blank"
													>
														<i className="bx bxl-linkedin"></i>
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="single-advisor-box">
								<div className="row align-items-center">
									<div className="col-lg-4 col-md-4">
										<div className="advisor-image">
											<img
												src="/images/advisor/advisor2.jpg"
												alt="image"
											/>
										</div>
									</div>

									<div className="col-lg-8 col-md-8">
										<div className="advisor-content">
											<h3>
												<a href="profile.html">
													Sarah Taylor
												</a>
											</h3>
											<span className="sub-title">
											Skincare
											</span>
											<p>
											Your skin is 90% of your selfie.
											</p>
											<ul className="social-link">
												<li>
													<a
														href="#"
														className="d-block"
														target="_blank"
													>
														<i className="bx bxl-facebook"></i>
													</a>
												</li>
												<li>
													<a
														href="#"
														className="d-block"
														target="_blank"
													>
														<i className="bx bxl-twitter"></i>
													</a>
												</li>
												<li>
													<a
														href="#"
														className="d-block"
														target="_blank"
													>
														<i className="bx bxl-instagram"></i>
													</a>
												</li>
												<li>
													<a
														href="#"
														className="d-block"
														target="_blank"
													>
														<i className="bx bxl-linkedin"></i>
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="single-advisor-box">
								<div className="row align-items-center">
									<div className="col-lg-4 col-md-4">
										<div className="advisor-image">
											<img
												src="/images/advisor/advisor3.jpg"
												alt="image"
											/>
										</div>
									</div>

									<div className="col-lg-8 col-md-8">
										<div className="advisor-content">
											<h3>
												<a href="profile.html">
													James Andy
												</a>
											</h3>
											<span className="sub-title">
												Cryolipolysis
											</span>
											<p>
											Become an expert in cryolipolysis fat 
											freezing and be in high demand!
											 How many times have you been asked 
											 if you do Coolsculpting?.
											</p>
											<ul className="social-link">
												<li>
													<a
														href="#"
														className="d-block"
														target="_blank"
													>
														<i className="bx bxl-facebook"></i>
													</a>
												</li>
												<li>
													<a
														href="#"
														className="d-block"
														target="_blank"
													>
														<i className="bx bxl-twitter"></i>
													</a>
												</li>
												<li>
													<a
														href="#"
														className="d-block"
														target="_blank"
													>
														<i className="bx bxl-instagram"></i>
													</a>
												</li>
												<li>
													<a
														href="#"
														className="d-block"
														target="_blank"
													>
														<i className="bx bxl-linkedin"></i>
													</a>
												</li>
											</ul>
										</div>
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

export default CourseAdvisor;
