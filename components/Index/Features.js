import React from "react";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

const Features = () => {
	const { t } = useTranslation("distance-learning");
	return (
		<div className="features-area  ">
			<div className="container courses-homepage">
				<h2 className="text-center title">CLIENT FAVE</h2>
				<div className="row">
					<div className="col mb-4">
						<div className="card border-0">
							<a href="/courses-1">
								<img src="/images/courses/course1-new.jpeg" className="card-img-top" alt="Product Image" />
							</a>
							<div className="position-absolute top-0 end-0 mt-2 courses-new-section">
								<button className="btn " title="Add to Cart" >
									<i className="flaticon-shopping-cart"></i>
								</button>
							</div>
							<div className="card-body" style={{ textAlign: "center" }}>
								<h5 className="card-title">VOLUME LASH COURSE</h5>
								<p className="card-text"><del> $600.00</del> $35.00</p>
							</div>
							<div className=" text-center">
								<div className="rating">
									<span className="star">&#9733;</span>
									<span className="star">&#9733;</span>
									<span className="star">&#9733;</span>
									<span className="star">&#9733;</span>
									<span className="star">&#9733;</span>
									<span className="review">4.9</span>
								</div>
							</div>
						</div>
					</div>

					<div className="col mb-4">
						<div className="card border-0">
							<a href="/courses-1">
								<img src="/images/courses/course2-new.jpeg" className="card-img-top" alt="Product Image" />
							</a>
							<div className="position-absolute top-0 end-0 mt-2 courses-new-section">
								<button className="btn " title="Add to Cart">
									<i className="flaticon-shopping-cart"></i>
								</button>
							</div>
							<div className="card-body" style={{ textAlign: "center" }}>
								<h5 className="card-title">BODY SCULPTING COURSE</h5>
								<p className="card-text"><del> $800.00</del> $35.00</p>
							</div>
							<div className=" text-center">
								<div className="rating">
									<span className="star">&#9733;</span>
									<span className="star">&#9733;</span>
									<span className="star">&#9733;</span>
									<span className="star">&#9733;</span>
									<span className="star">&#9733;</span>
									<span className="review">4.9</span>
								</div>
							</div>
						</div>
					</div>

					<div className="col mb-4">
						<div className="card border-0">
							<a href="/courses-1">
								<img src="/images/courses/course3-new.jpeg" className="card-img-top" alt="Product Image" />
							</a>
							<div className="position-absolute top-0 end-0 mt-2 courses-new-section">
								<button className="btn " title="Add to Cart">
									<i className="flaticon-shopping-cart"></i>
								</button>
							</div>
							<div className="card-body" style={{ textAlign: "center" }}>
								<h5 className="card-title">BOTTOM LASH TRAINING</h5>
								<p className="card-text"><del> $99.99</del> $15.00</p>
							</div>
							<div className=" text-center">
								<div className="rating">
									<span className="star">&#9733;</span>
									<span className="star">&#9733;</span>
									<span className="star">&#9733;</span>
									<span className="star">&#9733;</span>
									<span className="star">&#9733;</span>
									<span className="review">4.9</span>
								</div>
							</div>
						</div>
					</div>

					<div className="col mb-4">
						<div className="card border-0">
							<a href="/courses-1">
								<img src="/images/courses/course4-new.jpeg" className="card-img-top" alt="Product Image" />
							</a>
							<div className="position-absolute top-0 end-0 mt-2 courses-new-section">
								<button className="btn " title="Add to Cart">
									<i className="flaticon-shopping-cart"></i>
								</button>
							</div>
							<div className="card-body" style={{ textAlign: "center" }}>
								<h5 className="card-title">CLASSIC LASH EXTENSION COURSE</h5>
								<p className="card-text"><del> $400.00</del> $35.00</p>
							</div>
							<div className=" text-center">
								<div className="rating">
									<span className="star">&#9733;</span>
									<span className="star">&#9733;</span>
									<span className="star">&#9733;</span>
									<span className="star">&#9733;</span>
									<span className="star">&#9733;</span>
									<span className="review">4.9</span>
								</div>
							</div>
						</div>
					</div>


				</div>
			</div>
	<img src="/images/carousel-img2.jpeg" style={{width:'100%', height:"500px"}} />

			{/* products section end */}
			
			{/* <div className="container">
				<div className="section-title">
					<span className="sub-title">
						{t("education-for-everyone")}
					</span>
					<h2>{t("features-heading")}​</h2>
					<p>{t("features-description")}</p>
				</div>
				<div className="row justify-content-center">
					<div className="col-lg-4 col-sm-6 col-md-6">
						<div className="features-box">
							<div className="icon">
								<i className="flaticon-brain-process"></i>
							</div>
							<h3>{t("learn-latest-skills")}</h3>
							<p>{t("skills-description")} </p>
							<Link href="/authentication">
								<a className="link-btn">{t("start-now")}</a>
							</Link>
							<div className="back-icon">
								<i className="flaticon-brain-process"></i>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-sm-6 col-md-6">
						<div className="features-box">
							<div className="icon">
								<i className="flaticon-shield-1"></i>
							</div>
							<h3>{t("learn-industry-experts")}</h3>
							<p>{t("industry-description")} </p>
							<Link href="/authentication">
								<a className="link-btn">{t("start-now")}</a>
							</Link>
							<div className="back-icon">
								<i className="flaticon-shield-1"></i>
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-sm-6 col-md-6">
						<div className="features-box">
							<div className="icon">
								<i className="flaticon-world"></i>
							</div>
							<h3>{t("learn-anywhere")}</h3>
							<p>{t("learn-description")} </p>
							<Link href="/authentication">
								<a className="link-btn">{t("start-now")}</a>
							</Link>
							<div className="back-icon">
								<i className="flaticon-world"></i>
							</div>
						</div>
					</div>
				</div>
			</div> */}
		</div>
	);
};

export default Features;
