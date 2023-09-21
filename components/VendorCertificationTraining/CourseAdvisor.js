import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const CourseAdvisor = () => {
	return (
		<>
		<div className="advisor-area bg-f9f9f9 pt-100">
			<div className="container">
				<div className="section-title">
					<span className="sub-title">Instructor</span>
					<h2>Course Advisor</h2>
					<p>
					Learn how to do manual lymphatic drainage massage (MLD) from best-selling massage course instructor
					</p>
				</div>

				<Swiper
					spaceBetween={30}
					pagination={{
						clickable: true,
					}}
					breakpoints={{
						0: {
							slidesPerView: 1,
						},
						992: {
							slidesPerView: 2,
						}
					}}
					autoplay={{
						delay: 6500,
						disableOnInteraction: true,
						pauseOnMouseEnter: true,
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
											Michael Eric Everson
											</a>
										</h3>
										<span className="sub-title">
											Message Therapist
										</span>
										<p>
										Michael is a world-renowned Manual Osteopath, Registered Massage Therapist, and Yoga Teacher  that draws from a diverse background and lifelong pursuit of knowledge in the health and wellness space.
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
										Aromatherapists
										</span>
										<p>
										Sarah Taylor holds a Diploma in Holistic Aromatherapy, Holistic Massage, Anatomy, and Physiology, and Reflexology from the Raworth College of Natural Medicine in Dorking, the UK.
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
										 Yoga Therapist
										</span>
										<p>
										Maxine has been practising yoga since 2008, when she initially came to yoga as a pro-active approach to injury prevention while engaging in other activities such as cycling and long distance running.
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
