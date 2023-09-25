import React from 'react';
import Link from 'next/link';

const MainBanner = () => {
    return (
        <div className="banner-wrapper-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="banner-wrapper-content">
                            <h1>Build Skills With Experts Any Time, Anywhere</h1>
                            <p>Master lip filler techniques with experts, anytime, anywhere. Enhance your skills and offer stunning results in the field of cosmetic enhancements.</p>

                            <form>
                                <label><i className="flaticon-search"></i></label>
                                <input type="text" className="input-search" placeholder="What do you want to learn?" />
                                <button type="submit">Search Now</button>
                            </form>

                            <ul className="popular-search-list">
                                <li><span>Popular:</span></li>
                                <li><Link href="#"><a>Basic Filler Areas</a></Link></li>
                                <li><Link href="#"><a>Advanced filler Areas</a></Link></li>
                                <li><Link href="#"><a>Marionette</a></Link></li>
                                <li><Link href="#"><a>lips</a></Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="banner-wrapper-image">
                            <img src="/images/banner-img2.png" alt="image" style={{borderRadius:"150px"}} />

                            <div className="banner-shape8">
                                <img src="/images/banner-shape8.png" alt="image" />
                            </div>
                            <div className="banner-shape9">
                                <img src="/images/banner-shape9.png" alt="image" />
                            </div>
                            <div className="banner-shape10">
                                <img src="/images/banner-shape10.png" alt="image" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="banner-inner-area">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-banner-box">
                                <div className="icon">
                                    <i className="flaticon-brain-process"></i>
                                </div>
                                <h3>10,000 Online Courses</h3>
                                <p>Toxic Beauty Academy offers a wide range of online courses.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-banner-box">
                                <div className="icon">
                                    <i className="flaticon-people"></i>
                                </div>
                                <h3>Experts Teachers</h3>
                                <p>Toxic Beauty Academy is proud to have a team of expert teachers.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                            <div className="single-banner-box">
                                <div className="icon">
                                    <i className="flaticon-world"></i>
                                </div>
                                <h3>Lifetime Ascces</h3>
                                <p>Toxic Beauty Academy offers lifetime access to their courses or materials.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="divider"></div>
        </div>
    )
}

export default MainBanner;