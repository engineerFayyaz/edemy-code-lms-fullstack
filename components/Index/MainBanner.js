import React from "react";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const MainBanner = () => {
	const { t } = useTranslation("distance-learning");
	return (
		<div className="main-banner-area">
			
			<Carousel autoPlay infiniteLoop showArrows={true} showThumbs={false} showIndicators={false}>
        <div>
          <img src="/images/carousel-img1.jpeg" alt="Slide 1" />
        </div>
        <div>
          <img src="/images/carousel-img2.jpeg" alt="Slide 2" />
        </div>
        <div>
          <img src="/images/carousel-img3.jpeg" alt="Slide 3" />
        </div>
      </Carousel>
	  <div className="container-fluid">
		<div className="row">
			<div className="col" style={{textAlign:"center",borderRight:"2px solid pink" }}>
				<a href="#"  target="blank" >
				<img src="/images/collection1.webp"  />
				</a>
				
			</div>
			<div className="col" style={{textAlign:"center",borderRight:"2px solid pink" }}>
			<a href="#" target="blank">
				<img src="/images/collection2.webp"  />
				</a>
			</div>
		</div>

	  </div>

			{/* Carousel end */}
			
			{/* <div className="container-fluid">
				<div className="row align-items-center">
					<div className="col-lg-6 col-md-12">
						<div className="main-banner-content-style-two">
							<h1>{t("bannertitle")}</h1>
							<p>{t("bannersubtitle")}</p>
							<Link href="/authentication">
								<a className="default-btn">
									<i className="flaticon-user"></i>
									{t("button")}
									<span></span>
								</a>
							</Link>
						</div>
					</div>
					<div className="col-lg-6 col-md-12">
						<div className="about-image">
							<div className="row">
								<div className="col-lg-6 col-sm-6 col-md-6 col-6 align-self-center">
									<div className="image">
										<img src="/images/about-img12.png" className='rounded-pill' alt="image" />
									</div>
								</div>

								<div className="col-lg-6 col-sm-6 col-md-6 col-6 ">
									<div className="image">
										<img src="/images/banner-img4.png" className='rounded-5' alt="image" />
									</div>
								</div>

								<div className="col-lg-6 col-sm-6 col-md-6 col-6">
									<div className="image">
										<img src="/images/kindergarten-about-img2.png" className='rounded-5' alt="image" />
									</div>
								</div>

								<div className="col-lg-6 col-sm-6 col-md-6 col-6">
									<div className="image">
										<img src="/images/banner-img4.png" className='rounded-pill' alt="image" />
										<img src="/images/banner-img2.png" className='rounded-pill' alt="image" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="banner-shape1">
				<img src="/images/banner-shape1.png" alt="image" />
			</div>
			<div className="banner-shape2">
				<img src="/images/banner-shape2.png" alt="image" />
			</div>
			<div className="banner-shape3">
				<img src="/images/banner-shape3.png" alt="image" />
			</div>
			<div className="bulb">
				<img src="/images/bulb.png" alt="image" />
			</div> */}
		</div >
	);
};

export default MainBanner;
