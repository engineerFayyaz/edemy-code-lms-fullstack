import React from "react";
import Link from "@/utils/ActiveLink";
import { handleLogout } from "@/utils/auth";
import SearchForm from "./SearchForm";

const StudentNavbar = ({ user }) => {
	// console.log(user)
	const [menu, setMenu] = React.useState(true);

	const toggleNavbar = () => {
		setMenu(!menu);
	};

	React.useEffect(() => {
		let elementId = document.getElementById("navbar");
		document.addEventListener("scroll", () => {
			if (window.scrollY > 170) {
				elementId.classList.add("is-sticky");
			} else {
				elementId.classList.remove("is-sticky");
			}
		});
	});

	const isAdmin = user && user.role === "admin";
	const isTeacher = user && user.role === "teacher";

	const classOne = menu
		? "collapse navbar-collapse"
		: "collapse navbar-collapse show";
	const classTwo = menu
		? "navbar-toggler navbar-toggler-right collapsed"
		: "navbar-toggler navbar-toggler-right";

	return (
		<>
			<div id="navbar" className="navbar-area">
				<div className="edemy-nav admin-nav">
					<div className="container-fluid">
						<div className="navbar navbar-expand-lg navbar-light">
							<Link href="/">
								<a
									onClick={toggleNavbar}
									className="navbar-brand"
								>
									<img src="/images/logo.png" alt="logo"  style={{width:'50%', borderRadius:'30%'}}/>
								</a>
							</Link>

							<button
								onClick={toggleNavbar}
								className={classTwo}
								type="button"
								data-toggle="collapse"
								aria-expanded="false"
								aria-label="Toggle navigation"
							>
								<span className="icon-bar top-bar"></span>
								<span className="icon-bar middle-bar"></span>
								<span className="icon-bar bottom-bar"></span>
							</button>

							<div
								className={classOne}
								id="navbarSupportedContent"
							>
								<SearchForm />

								<ul className="navbar-nav">
									<li className="nav-item">
										<Link href="/" activeClassName="active">
											<a
												onClick={(e) =>
													e.preventDefault()
												}
												className="nav-link"
											>
												Home{" "}
												<i className="bx bx-chevron-down"></i>
											</a>
										</Link>

										<ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link href="/" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                          Body Sculpting
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/woodtherapy" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                          Wood Therapy
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/lymphaticdrainage" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                          Lymphatic Drainage
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/lipfillers" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                          Lip Fillers
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/teethwhitening" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                          Teeth whitening
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/hairextensions" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                          Hair Extensions
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/yoga-training" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                          Yoga Training
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/health-coaching" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                            Health Coaching
                          </a>
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/lashes" activeClassName="active">
                          <a onClick={toggleNavbar} className="nav-link">
                          Lashes
                          </a>
                        </Link>
                      </li>
                    </ul>
									</li>

									<li className="nav-item">
										<Link
											href="/courses"
											activeClassName="active"
										>
											<a
												onClick={toggleNavbar}
												className="nav-link"
											>
												Courses
											</a>
										</Link>
									</li>

									<li className="nav-item">
										<Link href="/become-a-teacher">
											<a className="nav-link">
												Become A Teacher
											</a>
										</Link>
									</li>
								</ul>

								<div className="others-option d-flex align-items-center">
									{/* <div className="option-item">
										<div className="cart-btn">
											<Link href="/cart">
												<a>
													<i className="flaticon-shopping-cart"></i>{" "}
													<span>3</span>
												</a>
											</Link>
										</div>
									</div> */}

									<div className="option-item">
										{user ? (
											<div className="user-dropdown">
												<Link href="/">
													<a
														onClick={(e) =>
															e.preventDefault()
														}
														className="default-btn"
													>
														<i className="flaticon-user"></i>{" "}
														{user.name}{" "}
														<span></span>
													</a>
												</Link>

												<ul className="dropdown-menu">
													<li className="nav-item">
														<Link
															href="/my-courses"
															activeClassName="active"
														>
															<a
																onClick={
																	toggleNavbar
																}
																className="nav-link"
															>
																My Courses
															</a>
														</Link>
													</li>

													<li className="nav-item">
														<Link
															href="/profile"
															activeClassName="active"
														>
															<a
																onClick={
																	toggleNavbar
																}
																className="nav-link"
															>
																My Profile
															</a>
														</Link>
													</li>

													<li className="nav-item">
														<Link
															href="/user/edit-profile"
															activeClassName="active"
														>
															<a
																onClick={
																	toggleNavbar
																}
																className="nav-link"
															>
																Edit Profile
															</a>
														</Link>
													</li>

													<li className="nav-item">
														<Link
															href="/user/edit-password"
															activeClassName="active"
														>
															<a
																onClick={
																	toggleNavbar
																}
																className="nav-link"
															>
																Edit Password
															</a>
														</Link>
													</li>

													<li className="nav-item">
														<Link href="/">
															<a
																className="nav-link"
																onClick={(
																	e
																) => {
																	e.preventDefault();
																	handleLogout();
																}}
															>
																Logout
															</a>
														</Link>
													</li>
												</ul>
											</div>
										) : (
											<Link href="/authentication">
												<a className="default-btn">
													<i className="flaticon-user"></i>{" "}
													Login/Register <span></span>
												</a>
											</Link>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default StudentNavbar;
