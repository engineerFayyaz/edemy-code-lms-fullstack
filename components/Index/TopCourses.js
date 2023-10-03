import React from "react";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

const TopCourses = ({ courses }) => {
	const { t } = useTranslation("distance-learning");
	return (
		<div className="courses-area ptb-100">
			<div className="container">
				<div className="section-title">
					<span className="sub-title">{t("course-top-text")}</span>
					<h2>{t("course-heading")}</h2>
					<p>{t("course-description")}</p>
				</div>
			</div>
			<div className="categories-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-categories-box">
                                <img src="/images/categories/categorie1.jpg" alt="image" />

                                <div className="content">
                                    <h3>Body Sculpting</h3>
                                    <span>10 Courses</span>
                                </div>

                                <Link href="/courses-1">
                                    <a className="link-btn"></a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-categories-box">
                                <img src="/images/categories/categorie2.jpg" alt="image" />

                                <div className="content">
                                    <h3>Wood Therapy</h3>
                                    <span>20 Courses</span>
                                </div>

                                <Link href="/courses-1">
                                    <a className="link-btn"></a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-categories-box">
                                <img src="/images/categories/categorie3.jpg" alt="image" />

                                <div className="content">
                                    <h3>Lymphatic Drainage</h3>
                                    <span>15 Courses</span>
                                </div>
                                
                                <Link href="/courses-1">
                                    <a className="link-btn"></a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-categories-box">
                                <img src="/images/categories/categorie4.jpg" alt="image" />

                                <div className="content">
                                    <h3>Lip Fillers</h3>
                                    <span>11 Courses</span>
                                </div>
                                
                                <Link href="/courses-1">
                                    <a className="link-btn"></a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-categories-box">
                                <img src="/images/categories/categorie5.jpg" alt="image" />

                                <div className="content">
                                    <h3>Teeth Whitening</h3>
                                    <span>10 Courses</span>
                                </div>
                                
                                <Link href="/courses-1">
                                    <a className="link-btn"></a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-categories-box">
                                <img src="/images/categories/categorie6.jpg" alt="image" />

                                <div className="content">
                                    <h3>Hair Extensions</h3>
                                    <span>12 Courses</span>
                                </div>
                                
                                <Link href="/courses-1">
                                    <a className="link-btn"></a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-categories-box">
                                <img src="/images/categories/categorie7.jpg" alt="image" />

                                <div className="content">
                                    <h3>Fat Dissolving Shots</h3>
                                    <span>05 Courses</span>
                                </div>
                                
                                <Link href="/courses-1">
                                    <a className="link-btn"></a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 col-md-6">
                            <div className="single-categories-box">
                                <img src="/images/categories/categorie8.jpg" alt="image" />

                                <div className="content">
                                    <h3>Health Coaching</h3>
                                    <span>20 Courses</span>
                                </div>
                                
                                <Link href="/courses-1">
                                    <a className="link-btn"></a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		</div>
	);
};

export default TopCourses;
