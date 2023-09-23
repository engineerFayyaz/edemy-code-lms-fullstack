import React from 'react';
import Link from 'next/link';

const TopCategories = () => {
    return (
        <div className="categories-area ptb-100">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">Categories</span>
                    <h2>Top Categories</h2>
                    <p>Explore Toxic Beauty Academy's Top Categories and Dive into Clean Beauty Excellence!</p>
                </div>

                <div className="row">
                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-categories-box">
                            <img src="/images/categories/categorie1.jpg" alt="image" style={{borderRadius:"30px"}}/>

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
                            <img src="/images/categories/categorie2.jpg" alt="image" style={{borderRadius:"30px"}} />

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
                            <img src="/images/categories/categorie3.jpg" alt="image" style={{borderRadius:"30px"}} />

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
                            <img src="/images/categories/categorie4.jpg" alt="image" style={{borderRadius:"30px"}} />

                            <div className="content">
                                <h3>Lip Filler</h3>
                                <span>11 Courses</span>
                            </div>
                            
                            <Link href="/courses-1">
                                <a className="link-btn"></a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-categories-box">
                            <img src="/images/categories/categorie5.jpg" alt="image" style={{borderRadius:"30px"}}/>

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
                            <img src="/images/categories/categorie6.jpg" alt="image" style={{borderRadius:"30px"}} />

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
                            <img src="/images/categories/categorie7.jpg" alt="image" style={{borderRadius:"30px"}} />

                            <div className="content">
                                <h3>Fat Dissolving</h3>
                                <span>05 Courses</span>
                            </div>
                            
                            <Link href="/courses-1">
                                <a className="link-btn"></a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-categories-box">
                            <img src="/images/categories/categorie8.jpg" alt="image" style={{borderRadius:"30px"}} />

                            <div className="content">
                                <h3>Health Care</h3>
                                <span>20 Courses</span>
                            </div>
                            
                            <Link href="/courses-1">
                                <a className="link-btn"></a>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-12 col-sm-12 col-md-12">
                        <div className="categories-btn-box">
                            <Link href="/categories">
                                <a className="default-btn">
                                    <i className="flaticon-user"></i> View All Categories <span></span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopCategories;