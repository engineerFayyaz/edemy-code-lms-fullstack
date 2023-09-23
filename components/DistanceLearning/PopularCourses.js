import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const PopularCourses = () => {
	return (
		<>
			<div className="courses-area ptb-100">
				<div className="container">
					<div className="section-title">
						<span className="sub-title">Go At Your Own Pace</span>
						<h2>Our Popular Courses</h2>
						<p>
						Join now for our popular courses on toxic beauty. Gain insights into safer, cleaner beauty practices while enhancing your skincare knowledge and expertise.
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
							768: {
								slidesPerView: 2,
							},
							992: {
								slidesPerView: 3,
							},
						}}
						autoplay={{
							delay: 6500,
							disableOnInteraction: true,
							pauseOnMouseEnter: true,
						}}
						modules={[Pagination, Autoplay]}
						className="courses-slides"
					>
						<SwiperSlide>
							<div className="single-courses-box">
								<div className="courses-image">
									<Link href="/single-courses-2">
										<a className="d-block image">
											<img
												src="/images/courses/courses1.jpg"
												alt="image"
											/>
										</a>
									</Link>
									<a href="#" className="fav">
										<i className="flaticon-heart"></i>
									</a>
									<div className="price shadow">$190</div>
								</div>
								<div className="courses-content">
									<div className="course-author d-flex align-items-center">
										<img
											src="/images/user1.jpg"
											className="rounded-circle"
											alt="image"
										/>
										<span>Alex Morgan</span>
									</div>
									<h3>
										<Link href="/single-courses-2">
											<a>
											Professional Teeth Whitening Certification
											</a>
										</Link>
									</h3>
									<p>
									Master the art of teeth whitening, from choosing the right products to safe and effective application techniques
									</p>
									<ul className="courses-box-footer d-flex justify-content-between align-items-center">
										<li>
											<i className="flaticon-agenda"></i> 15
											Lessons
										</li>
										<li>
											<i className="flaticon-people"></i> 145
											Students
										</li>
									</ul>
								</div>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="single-courses-box">
								<div className="courses-image">
									<Link href="/single-courses-2">
										<a className="d-block image">
											<img
												src="/images/courses/courses2.jpg"
												alt="image"
											/>
										</a>
									</Link>
									<a href="#" className="fav">
										<i className="flaticon-heart"></i>
									</a>
									<div className="price shadow">$190</div>
								</div>
								<div className="courses-content">
									<div className="course-author d-flex align-items-center">
										<img
											src="/images/user2.jpg"
											className="rounded-circle"
											alt="image"
										/>
										<span>Sarah Taylor</span>
									</div>
									<h3>
										<Link href="/single-courses-2">
											<a>
											Natural Teeth Whitening with certification
											</a>
										</Link>
									</h3>
									<p>
									Explore holistic approaches to teeth whitening, utilizing natural ingredients and methods for a brighter smile
									</p>
									<ul className="courses-box-footer d-flex justify-content-between align-items-center">
										<li>
											<i className="flaticon-agenda"></i> 20
											Lessons
										</li>
										<li>
											<i className="flaticon-people"></i> 100
											Students
										</li>
									</ul>
								</div>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="single-courses-box">
								<div className="courses-image">
									<Link href="/single-courses-2">
										<a className="d-block image">
											<img
												src="/images/courses/courses3.jpg"
												alt="image"
											/>
										</a>
									</Link>
									<a href="#" className="fav">
										<i className="flaticon-heart"></i>
									</a>
									<div className="price shadow">$190</div>
								</div>
								<div className="courses-content">
									<div className="course-author d-flex align-items-center">
										<img
											src="/images/user3.jpg"
											className="rounded-circle"
											alt="image"
										/>
										<span>David Warner</span>
									</div>
									<h3>
										<Link href="/single-courses-2">
											<a>
											Advanced Cosmetic Dentistry certification
											</a>
										</Link>
									</h3>
									<p>
									Dive deep into advanced dental techniques, including veneers and implants, to achieve comprehensive smile transformations
									</p>
									<ul className="courses-box-footer d-flex justify-content-between align-items-center">
										<li>
											<i className="flaticon-agenda"></i> 20
											Lessons
										</li>
										<li>
											<i className="flaticon-people"></i> 150
											Students
										</li>
									</ul>
								</div>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="single-courses-box">
								<div className="courses-image">
									<Link href="/single-courses-2">
										<a className="d-block image">
											<img
												src="/images/courses/courses4.jpg"
												alt="image"
											/>
										</a>
									</Link>
									<a href="#" className="fav">
										<i className="flaticon-heart"></i>
									</a>
									<div className="price shadow">$190</div>
								</div>
								<div className="courses-content">
									<div className="course-author d-flex align-items-center">
										<img
											src="/images/user4.jpg"
											className="rounded-circle"
											alt="image"
										/>
										<span>Andy Smith</span>
									</div>
									<h3>
										<Link href="/single-courses-2">
											<a>
											Teeth Whitening Business with certification
											</a>
										</Link>
									</h3>
									<p>
									Learn how to start and grow a successful teeth whitening business, from marketing strategies to client management, and profit.
									</p>
									<ul className="courses-box-footer d-flex justify-content-between align-items-center">
										<li>
											<i className="flaticon-agenda"></i> 14
											Lessons
										</li>
										<li>
											<i className="flaticon-people"></i> 211
											Students
										</li>
									</ul>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>

					<div className="courses-info">
						<p>
							Get the most dedicated consultation for your
							life-changing course. Earn a certification for your
							effort and passion{" "}
							<Link href="/profile-authentication">
								<a>Join Free Now</a>
							</Link>
							.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default PopularCourses;
