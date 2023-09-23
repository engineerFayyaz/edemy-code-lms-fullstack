import React from 'react';
import PageBanner from '../components/Common/PageBanner';
import Link from 'next/link';
import BlogSidebar from '../components/Blog/BlogSidebar';
import CommentArea from '../components/Blog/CommentForm';

const BlogDetails = () => {
    return (
        <>
            <PageBanner 
                pageTitle="Blog Details" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Blog Details" 
            />  

            <div className="blog-details-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="blog-details-desc">
                                <div className="article-image">
                                    <img src="/images/blog/blog1.jpg" alt="image" />
                                </div>

                                <div className="article-content">
                                    <div className="entry-meta">
                                        <ul>
                                            <li>
                                                <i className='bx bx-folder-open'></i>
                                                <span>Category</span>

                                                <Link href="#">
                                                    <a>Fashion</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <i className='bx bx-group'></i>
                                                <span>View</span>

                                                <Link href="#">
                                                    <a>813,454</a>
                                                </Link>
                                            </li>
                                            <li>
                                                <i className='bx bx-calendar'></i>
                                                <span>Last Updated</span>

                                                <Link href="#">
                                                    <a>25/04/2020</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>

                                    <h3>It’s Time To Think Differently About Homeschooling</h3>

                                    <p>Body sculpting, also known as body contouring, refers to a group of cosmetic procedures and non-invasive treatments designed to reshape and enhance the appearance of the body.</p>

                                    <p>The goal of body sculpting is to improve the overall contours of the body by reducing or eliminating localized areas of fat, toning and tightening loose skin, and enhancing muscle definition. This can create a more aesthetically pleasing and youthful appearance.</p>

                                    <blockquote className="wp-block-quote">
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>

                                        <cite>Tom Cruise</cite>
                                    </blockquote>

                                    <p>Body sculpting treatments are often chosen by individuals who have achieved a healthy body weight through diet and exercise but still have areas of stubborn fat or loose skin that they wish to address..</p>

                                    <ul className="wp-block-gallery columns-3">
                                        <li className="blocks-gallery-item">
                                            <figure>
                                                <img src="/images/blog/blog15.jpg" alt="image" />
                                            </figure>
                                        </li>
                                        <li className="blocks-gallery-item">
                                            <figure>
                                                <img src="/images/blog/blog14.jpg" alt="image" />
                                            </figure>
                                        </li>
                                        <li className="blocks-gallery-item">
                                            <figure>
                                                <img src="/images/blog/blog13.jpg" alt="image" />
                                            </figure>
                                        </li>
                                    </ul>

                                    <h3>Four major elements:</h3>

                                    <ul className="features-list">
                                        <li><i className='bx bx-badge-check'></i> Liposuction</li>
                                        <li><i className='bx bx-badge-check'></i> Tummy Tuck (Abdominoplasty)</li>
                                        <li><i className='bx bx-badge-check'></i> CoolSculpting</li>
                                        <li><i className='bx bx-badge-check'></i> Laser Liposuctionk</li>
                                    </ul>

                                    <h3>Setting the mood with incense</h3>
                                    <p>Embarking on a body sculpting journey is not only about physical transformation but also a profound experience for the mind and spirit. To create an environment that supports your wellness goals, consider incorporating incense into your routine. In this blog post, we'll explore how the use of incense can help set the mood, enhance relaxation, and promote a harmonious atmosphere during your body sculpting sessions..</p>

                                    <h3>The rise of marketing and why you need it</h3>
                                    <p>In the ever-evolving landscape of aesthetics and wellness, body sculpting has emerged as a highly sought-after solution for those seeking to enhance their physical appearance. However, in a competitive market, the importance of effective marketing cannot be overstated..</p>
                                </div>

                                <div className="article-footer">
                                    <div className="article-tags">
                                        <span><i className='bx bx-purchase-tag'></i></span>

                                        <a href="#">Fashion</a>
                                        <a href="#">Styles</a>
                                        <a href="#">Fitness</a>
                                    </div>

                                    <div className="article-share">
                                        <ul className="social">
                                            <li><span>Share:</span></li>
                                            <li><a href="#" className="facebook" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                            <li><a href="#" className="twitter" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                            <li><a href="#" className="linkedin" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                                            <li><a href="#" className="instagram" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="article-author">
                                    <div className="author-profile-header"></div>
                                    <div className="author-profile">
                                        <div className="author-profile-title">
                                            <img src="/images/user1.jpg" className="shadow-sm" alt="image" />

                                            <div className="author-profile-title-details">
                                                <div className="author-profile-details">
                                                    <h4>Chris Orwig</h4>
                                                    <span className="d-block">Photographer, Author, Writer</span>
                                                </div>
                                            </div>
                                        </div>
                                        <p>Chris Orwig is a celebrated photographer, author, and writer who brings passion to everything he does.</p>
                                    </div>
                                </div>

                                <div className="edemy-post-navigation">
                                    <div className="prev-link-wrapper">
                                        <div className="info-prev-link-wrapper">
                                            <a href="#">
                                                <span className="image-prev">
                                                    <img src="/images/blog/blog11.jpg" alt="image" />
                                                    <span className="post-nav-title">Prev</span>
                                                </span>

                                                <span className="prev-link-info-wrapper">
                                                    <span className="prev-title">What Is The MLB Summer Slugger Program?</span>
                                                    <span className="meta-wrapper">
                                                        <span className="date-post">January 21, 2020</span>
                                                    </span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="next-link-wrapper">
                                        <div className="info-next-link-wrapper">
                                            <a href="#">
                                                <span className="next-link-info-wrapper">
                                                    <span className="next-title">28 Student-Centered Instructional Strategies</span>
                                                    <span className="meta-wrapper">
                                                        <span className="date-post">January 19, 2020</span>
                                                    </span>
                                                </span>

                                                <span className="image-next">
                                                    <img src="/images/blog/blog12.jpg" alt="image" />
                                                    <span className="post-nav-title">Next</span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <CommentArea />
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <BlogSidebar />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogDetails;