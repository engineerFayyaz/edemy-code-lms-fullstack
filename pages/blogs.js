import React from 'react';
import PageBanner from '../components/Common/PageBanner';
import Link from 'next/link';

const Blog3 = () => {
    return (
        <>
            <PageBanner 
                pageTitle="Latest Blogs " 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Latest Blogs " 
            />  

            <div className="blog-area ptb-100">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-blog-post">
                                <div className="post-image">
                                    <Link href="/single-blog-1">
                                        <a className="d-block">
                                            <img src="/images/blog/blog1.jpg" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="post-content">
                                    <Link href="#">
                                        <a className="category"></a>
                                    </Link>
                                    <h3>
                                        <Link href="/single-blog-1">
                                            <a>Unlocking the Art of Body Sculpting: Transforming Your Ideal Physique</a>
                                        </Link>
                                    </h3>
                                    <ul className="post-content-footer d-flex justify-content-between align-items-center">
                                        <li>
                                            <div className="post-author d-flex align-items-center">
                                                <img src="/images/user1.jpg" className="rounded-circle" alt="image" />
                                                <span>Alex Morgan</span>
                                            </div>
                                        </li>
                                        <li>
                                            <i className='flaticon-calendar'></i> April 30, 2020
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-blog-post">
                                <div className="post-image">
                                    <Link href="/single-blog-1">
                                        <a className="d-block">
                                            <img src="/images/blog/blog2.jpg" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="post-content">
                                    <Link href="#">
                                        <a className="category"></a>
                                    </Link>
                                    <h3>
                                        <Link href="/single-blog-1">
                                            <a>Mastering the Hyaluron Pen: Training for the Perfect Pout</a>
                                        </Link>
                                    </h3>
                                    <ul className="post-content-footer d-flex justify-content-between align-items-center">
                                        <li>
                                            <div className="post-author d-flex align-items-center">
                                                <img src="/images/user2.jpg" className="rounded-circle" alt="image" />
                                                <span>Sarah Taylor</span>
                                            </div>
                                        </li>
                                        <li>
                                            <i className='flaticon-calendar'></i> April 29, 2020
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-blog-post">
                                <div className="post-image">
                                    <Link href="/single-blog-1">
                                        <a className="d-block">
                                            <img src="/images/blog/blog3.jpg" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="post-content">
                                    <Link href="#">
                                        <a className="category"></a>
                                    </Link>
                                    <h3>
                                        <Link href="/single-blog-1">
                                            <a>The Beauty of Wood Therapy: A Holistic Approach to Wellness and Aesthetics</a>
                                        </Link>
                                    </h3>
                                    <ul className="post-content-footer d-flex justify-content-between align-items-center">
                                        <li>
                                            <div className="post-author d-flex align-items-center">
                                                <img src="/images/user3.jpg" className="rounded-circle" alt="image" />
                                                <span>David Warner</span>
                                            </div>
                                        </li>
                                        <li>
                                            <i className='flaticon-calendar'></i> April 28, 2020
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-blog-post">
                                <div className="post-image">
                                    <Link href="/single-blog-1">
                                        <a className="d-block">
                                            <img src="/images/blog/blog7.jpg" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="post-content">
                                    <Link href="#">
                                        <a className="category"></a>
                                    </Link>
                                    <h3>
                                        <Link href="/single-blog-1">
                                            <a>Glowing from Within: Unveiling the Secrets of BB Glow Training</a>
                                        </Link>
                                    </h3>
                                    <ul className="post-content-footer d-flex justify-content-between align-items-center">
                                        <li>
                                            <div className="post-author d-flex align-items-center">
                                                <img src="/images/user1.jpg" className="rounded-circle" alt="image" />
                                                <span>Alex Morgan</span>
                                            </div>
                                        </li>
                                        <li>
                                            <i className='flaticon-calendar'></i> April 28, 2020
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-blog-post">
                                <div className="post-image">
                                    <Link href="/single-blog-1">
                                        <a className="d-block">
                                            <img src="/images/blog/blog8.jpg" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="post-content">
                                    <Link href="#">
                                        <a className="category"></a>
                                    </Link>
                                    <h3>
                                        <Link href="/single-blog-1">
                                            <a>Hair Extensions Unveiled: A Comprehensive Guide to Luscious Locks</a>
                                        </Link>
                                    </h3>
                                    <ul className="post-content-footer d-flex justify-content-between align-items-center">
                                        <li>
                                            <div className="post-author d-flex align-items-center">
                                                <img src="/images/user2.jpg" className="rounded-circle" alt="image" />
                                                <span>Sarah Taylor</span>
                                            </div>
                                        </li>
                                        <li>
                                            <i className='flaticon-calendar'></i> April 28, 2020
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-blog-post">
                                <div className="post-image">
                                    <Link href="/single-blog-1">
                                        <a className="d-block">
                                            <img src="/images/blog/blog9.jpg" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="post-content">
                                    <Link href="#">
                                        <a className="category"></a>
                                    </Link>
                                    <h3>
                                        <Link href="/single-blog-1">
                                            <a>Unlocking the Healing Power of Lymphatic Drainage: Your Guide to a Healthier You</a>
                                        </Link>
                                    </h3>
                                    <ul className="post-content-footer d-flex justify-content-between align-items-center">
                                        <li>
                                            <div className="post-author d-flex align-items-center">
                                                <img src="/images/user3.jpg" className="rounded-circle" alt="image" />
                                                <span>David Warner</span>
                                            </div>
                                        </li>
                                        <li>
                                            <i className='flaticon-calendar'></i> April 28, 2020
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-blog-post">
                                <div className="post-image">
                                    <Link href="/single-blog-1">
                                        <a className="d-block">
                                            <img src="/images/blog/blog10.jpg" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="post-content">
                                    <Link href="#">
                                        <a className="category"></a>
                                    </Link>
                                    <h3>
                                        <Link href="/single-blog-1">
                                            <a>Brighten Your Smile: A Comprehensive Guide to Teeth Whitening</a>
                                        </Link>
                                    </h3>
                                    <ul className="post-content-footer d-flex justify-content-between align-items-center">
                                        <li>
                                            <div className="post-author d-flex align-items-center">
                                                <img src="/images/user1.jpg" className="rounded-circle" alt="image" />
                                                <span>Alex Morgan</span>
                                            </div>
                                        </li>
                                        <li>
                                            <i className='flaticon-calendar'></i> April 28, 2020
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-blog-post">
                                <div className="post-image">
                                    <Link href="/single-blog-1">
                                        <a className="d-block">
                                            <img src="/images/blog/blog11.jpg" alt="image" />
                                        </a>
                                    </Link>
                                </div>
                                <div className="post-content">
                                    <Link href="#">
                                        <a className="category"></a>
                                    </Link>
                                    <h3>
                                        <Link href="/single-blog-1">
                                            <a>Melting Away Fat: Exploring the World of Fat Dissolving Treatments</a>
                                        </Link>
                                    </h3>
                                    <ul className="post-content-footer d-flex justify-content-between align-items-center">
                                        <li>
                                            <div className="post-author d-flex align-items-center">
                                                <img src="/images/user2.jpg" className="rounded-circle" alt="image" />
                                                <span>Sarah Taylor</span>
                                            </div>
                                        </li>
                                        <li>
                                            <i className='flaticon-calendar'></i> April 28, 2020
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
 
                        {/* Pagination */}
                        <div className="col-lg-12 col-md-12">
                            <div className="pagination-area text-center">
                                <a href="#" className="prev page-numbers">
                                    <i className='bx bx-chevrons-left'></i>
                                </a>
                                <span className="page-numbers current" aria-current="page">1</span>
                                <a href="#" className="page-numbers">2</a>
                                <a href="#" className="page-numbers">3</a>
                                <a href="#" className="page-numbers">4</a>
                                <a href="#" className="next page-numbers">
                                    <i className='bx bx-chevrons-right'></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog3;