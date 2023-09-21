import React from 'react';
import Link from 'next/link';

const CoursesSidebar = () => {
    return (
        <div className="widget-area">
            <div className="widget widget_search">
                <h3 className="widget-title">Search</h3>

                <form className="search-form">
                    <label>
                        <span className="screen-reader-text">Search for:</span>
                        <input type="search" className="search-field" placeholder="Search..." />
                    </label>
                    <button type="submit">
                        <i className="bx bx-search-alt"></i>
                    </button>
                </form>
            </div>
 
            <div className="widget widget_recent_courses">
                <h3 className="widget-title">Recent Courses</h3>

                <div className="item">
                    <Link href="#">
                        <a className="thumb">
                            <span className="fullimage cover bg1" role="img"></span>
                        </a>
                    </Link>
                    <div className="info">
                        <span>$180.00</span>
                        <h4 className="title usmall">
                            <Link href="#">
                                <a>Body Contouring 6-in-1 Masterclass</a>
                            </Link>
                        </h4>
                    </div>
                    <div className="clear"></div>
                </div>

                <div className="item">
                    <Link href="#">
                        <a className="thumb">
                            <span className="fullimage cover bg2" role="img"></span>
                        </a>
                    </Link>
                    <div className="info">
                        <span>$180.00</span>
                        <h4 className="title usmall">
                            <Link href="#">
                                <a>The Booty (and Body) Sculpting Masterclass</a>
                            </Link>
                        </h4>
                    </div>
                    <div className="clear"></div>
                </div>

                <div className="item">
                    <Link href="#">
                        <a className="thumb">
                            <span className="fullimage cover bg3" role="img"></span>
                        </a>
                    </Link>
                    <div className="info">
                        <span>$180.00</span>
                        <h4 className="title usmall">
                            <Link href="#">
                                <a>Cryolipolysis (Fat Freezing) Certification Course</a>
                            </Link>
                        </h4>
                    </div>
                    <div className="clear"></div>
                </div>
            </div>

            <div className="widget widget_tag_cloud">
                <h3 className="widget-title">Popular Tags</h3>

                <div className="tagcloud">
                    <Link href="#">
                        <a> Makeup Artistry<span className="tag-link-count">(3)</span></a>
                    </Link>
                    <Link href="#">
                        <a>Skincare<span className="tag-link-count">(3)</span></a>
                    </Link>
                    <Link href="#">
                        <a>Hair Styling <span className="tag-link-count">(2)</span></a>
                    </Link>
                    <Link href="#">
                        <a>Nail Artistry <span className="tag-link-count">(2)</span></a>
                    </Link>
                    <Link href="#">
                        <a>Lash and Brow Services<span className="tag-link-count">(2)</span></a>
                    </Link>
                    <Link href="#">
                        <a>Body Sculpting <span className="tag-link-count">(2)</span></a>
                    </Link>
                    <Link href="#">
                        <a>Beauty Business <span className="tag-link-count">(2)</span></a>
                    </Link>
                    <Link href="#">
                        <a>Health and Safety<span className="tag-link-count">(1)</span></a>
                    </Link>
                    <Link href="#">
                        <a>Trends and Innovations <span className="tag-link-count">(1)</span></a>
                    </Link>
                    <Link href="#">
                        <a>Professional Development <span className="tag-link-count">(1)</span></a>
                    </Link>
                    <Link href="#">
                        <a>Self-Care and Wellness <span className="tag-link-count">(2)</span></a>
                    </Link>
                    <Link href="#">
                        <a>Beauty Industry Insights<span className="tag-link-count">(2)</span></a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CoursesSidebar;