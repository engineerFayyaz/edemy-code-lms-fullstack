import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

const OurServices = () => {
	return (
		<>
			<div className="kindergarten-services-area bg-f7ebeb pt-100">
				<div className="container">
					<div className="section-title">
						<span className="sub-title">Our Services</span>
						<h2 className="font-weight-black">
							Best Services of lashes
						</h2>
						<p>
							Explore all of our courses and pick your suitable ones
							to enroll and start learning with us! We ensure that you
							will never regret it!
						</p>
					</div>

					<Swiper 
						spaceBetween={30}
						navigation={true} 
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
						modules={[Navigation, Autoplay]} 
						className="services-slides"
					>
						<SwiperSlide>
							<div className="single-kindergarten-services-box">
								<img src="/images/box-shape1.png" alt="image" />

								<div className="content">
									<div className="icon">
										<i className="flaticon-eyelashes"></i>
								{/* <img src="/images/eye1.png" alt="image" /> */}

										
										
									</div>
									<h3 className="font-weight-black">
									Eyelash Extensions
									</h3>
									<p>
									lash extensions to your existing lashes to create a fuller, longer, and more dramatic look. Extensions come in various styles and materials.
									</p>
								</div>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="single-kindergarten-services-box">
								<img src="/images/box-shape2.png" alt="image" />

								<div className="content">
									<div className="icon">
										{/* <i className="flaticon-experience"></i> */}
									</div>
									<h3 className="font-weight-black">
									Lash Lift
									</h3>
									<p>
									A lash lift typically lasts several weeks and is a low-maintenance option for those who want a natural look without extensions.
									</p>
								</div>
							</div>
						</SwiperSlide>

						<SwiperSlide>
							<div className="single-kindergarten-services-box">
								<img src="/images/box-shape3.png" alt="image" />

								<div className="content">
									<div className="icon">
										{/* <i className="flaticon-artist"></i> */}
									</div>
									<h3 className="font-weight-black">
									Lash Tinting
									</h3>
									<p>
									Lash tinting involves applying a semi-permanent dye to your natural lashes, making them appear darker and more defined
									</p>
								</div>
							</div>
						</SwiperSlide>
						
						<SwiperSlide>
							<div className="single-kindergarten-services-box">
								<img src="/images/box-shape2.png" alt="image" />

								<div className="content">
									<div className="icon">
										{/* <i className="flaticon-translation"></i> */}
									</div>
									<h3 className="font-weight-black">
									Lash Removal
									</h3>
									<p>
									This service ensures a smooth transition between lash styles or when extensions have reached their natural shedding cycle.
									</p>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>

					<div className="kids-kite-image">
						<img src="/images/kids-with-kite.png" alt="image" />
					</div>
				</div>

				<div className="kindergarten-shape9">
					<img
						src="/images/kindergarten-shape/k-shape9.png"
						alt="image"
					/>
				</div>
				<div className="kindergarten-shape10">
					<img
						src="/images/kindergarten-shape/k-shape10.png"
						alt="image"
					/>
				</div>
			</div>
		</>
	);
};

export default OurServices;
