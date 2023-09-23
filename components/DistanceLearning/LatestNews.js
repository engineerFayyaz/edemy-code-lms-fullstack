import React from "react";
import Link from "next/link";

const LatestNews = () => {
	return (
		<>
			<div className="blog-area ptb-100">
				<div className="container">
					<div className="section-title">
						<span className="sub-title">News</span>
						<h2>Check Out Our Latest Blog</h2>
						<p>
						Unveiling the Truth About Toxic Beauty: A Deep Dive into the Cosmetics Industry.
						</p>
					</div>

					<div className="row justify-content-center">
						<div className="col-lg-4 col-md-6">
							<div className="single-blog-post-box">
								<div className="post-image">
									<Link href="/single-blog-1">
										<a className="d-block">
											<img
												src="/images/blog/blog1.jpg"
												alt="image"
												style={{borderRadius:"50px"}}
											/>
										</a>
									</Link>
								</div>
								<div className="post-content">
									<Link href="#">
										<a className="category">Education</a>
									</Link>
									<h3>
										<Link href="/single-blog-1">
											<a>
											Body Sculpting Masterclass at Toxic Beauty Academy
											</a>
										</Link>
									</h3>
									<ul className="post-content-footer d-flex justify-content-between align-items-center">
										<li>
											<div className="post-author d-flex align-items-center">
												<img
													src="/images/user1.jpg"
													className="rounded-circle"
													alt="image"
												/>
												<span>Alex Morgan</span>
											</div>
										</li>
										<li>
											<i className="flaticon-calendar"></i>{" "}
											April 30, 2020
										</li>
									</ul>
								</div>
							</div>
						</div>
						
						<div className="col-lg-4 col-md-6">
							<div className="single-blog-post-box">
								<div className="post-image">
									<Link href="/single-blog-1">
										<a className="d-block">
											<img
												src="/images/blog/blog2.jpg"
												alt="image"
												style={{borderRadius:"50px"}}
											/>
										</a>
									</Link>
								</div>
								<div className="post-content">
									<Link href="#">
										<a className="category">Online</a>
									</Link>
									<h3>
										<Link href="/single-blog-1">
											<a>
											Art of Hyaluron Pen: Training at Toxic Beauty Academy
											</a>
										</Link>
									</h3>
									<ul className="post-content-footer d-flex justify-content-between align-items-center">
										<li>
											<div className="post-author d-flex align-items-center">
												<img
													src="/images/user2.jpg"
													className="rounded-circle"
													alt="image"
												/>
												<span>Sarah Taylor</span>
											</div>
										</li>
										<li>
											<i className="flaticon-calendar"></i>{" "}
											April 29, 2020
										</li>
									</ul>
								</div>
							</div>
						</div>
						
						<div className="col-lg-4 col-md-6">
							<div className="single-blog-post-box">
								<div className="post-image">
									<Link href="/single-blog-1">
										<a className="d-block">
											<img
												src="/images/blog/blog3.jpg"
												alt="image"
												style={{borderRadius:"50px"}}
											/>
										</a>
									</Link>
								</div>
								<div className="post-content">
									<Link href="#">
										<a className="category">Learning</a>
									</Link>
									<h3>
										<Link href="/single-blog-1">
											<a>
											 Wood Therapy Training at Toxic Beauty Academy
											</a>
										</Link>
									</h3>
									<ul className="post-content-footer d-flex justify-content-between align-items-center">
										<li>
											<div className="post-author d-flex align-items-center">
												<img
													src="/images/user3.jpg"
													className="rounded-circle"
													alt="image"
												/>
												<span>David Warner</span>
											</div>
										</li>
										<li>
											<i className="flaticon-calendar"></i>{" "}
											April 28, 2020
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>

					<div className="blog-post-info">
						<p>
							Get into details now?​{" "}
							<Link href="/blog-4">
								<a>View all posts</a>
							</Link>
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default LatestNews;
