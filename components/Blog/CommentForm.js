import React from 'react';
import Link from 'next/link';

const CommentArea = () => {
    return (
        <div className="comments-area">
            <h3 className="comments-title">2 Comments:</h3>

            <ol className="comment-list">
                <li className="comment">
                    <div className="comment-body">
                        <div className="comment-meta">
                            <div className="comment-author vcard">
                                <img src="/images/user1.jpg" className="avatar" alt="image" />
                                <b className="fn">John Jones</b>
                                <span className="says">says:</span>
                            </div>

                            <div className="comment-metadata">
                                <span>April 24, 2019 at 10:59 am</span>
                            </div>
                        </div>

                        <div className="comment-content">
                            <p>Toxic Beauty Academy has exceeded my expectations. Their courses are not just educational but also inspiring. I'm inspired to pursue a career I'm truly passionate about, thanks to their guidance.</p>
                        </div>

                        <div className="reply">
                            <Link href="#">
                                <a className="comment-reply-link">Reply</a>
                            </Link>
                        </div>
                    </div>

                    <ol className="children">
                        <li className="comment">
                            <div className="comment-body">
                                <div className="comment-meta">
                                    <div className="comment-author vcard">
                                        <img src="/images/user2.jpg" className="avatar" alt="image" />
                                        <b className="fn">Steven Smith</b>
                                        <span className="says">says:</span>
                                    </div>

                                    <div className="comment-metadata">
                                        <span>April 24, 2019 at 10:59 am</span>
                                    </div>
                                </div>

                                <div className="comment-content">
                                    <p>Toxic Beauty Academy has made learning accessible, engaging, and fun. It's the perfect platform for anyone wanting to explore or advance their skills in the beauty industry. I'm thoroughly enjoying the journey.</p>
                                </div>

                                <div className="reply">
                                    <Link href="#">
                                        <a className="comment-reply-link">Reply</a>
                                    </Link>
                                </div>
                            </div>

                            <ol className="children">
                                <li className="comment">
                                    <div className="comment-body">
                                        <div className="comment-meta">
                                            <div className="comment-author vcard">
                                                <img src="/images/user3.jpg" className="avatar" alt="image" />
                                                <b className="fn">Sarah Taylor</b>
                                                <span className="says">says:</span>
                                            </div>

                                            <div className="comment-metadata">
                                                <span>April 24, 2019 at 10:59 am</span>
                                            </div>
                                        </div>

                                        <div className="comment-content">
                                            <p>Toxic Beauty Academy's courses are like a treasure chest of beauty secrets. I've learned so much that I can't wait to apply to my future as a makeup artist. The future looks beautiful!.</p>
                                        </div>

                                        <div className="reply">
                                            <Link href="#">
                                                <a className="comment-reply-link">Reply</a>
                                            </Link>
                                        </div>
                                    </div>
                                </li>
                            </ol>
                        </li>
                    </ol>
                </li>

                <li className="comment">
                    <div className="comment-body">
                        <div className="comment-meta">
                            <div className="comment-author vcard">
                                <img src="/images/user4.jpg" className="avatar" alt="image" />
                                <b className="fn">John Doe</b>
                                <span className="says">says:</span>
                            </div>

                            <div className="comment-metadata">
                                <span>April 24, 2019 at 10:59 am</span>
                            </div>
                        </div>

                        <div className="comment-content">
                            <p>I can't thank Toxic Beauty Academy enough for helping me kickstart my beauty career. The instructors are patient and knowledgeable, and the hands-on training is superb. I feel well-prepared for the beauty industry.</p>
                        </div>

                        <div className="reply">
                            <Link href="#">
                                <a className="comment-reply-link">Reply</a>
                            </Link>
                        </div>
                    </div>

                    <ol className="children">
                        <li className="comment">
                            <div className="comment-body">
                                <div className="comment-meta">
                                    <div className="comment-author vcard">
                                        <img src="/images/user1.jpg" className="avatar" alt="image" />
                                        <b className="fn">James Anderson</b>
                                        <span className="says">says:</span>
                                    </div>

                                    <div className="comment-metadata">
                                        <span>April 24, 2019 at 10:59 am</span>
                                    </div>
                                </div>

                                <div className="comment-content">
                                    <p>it's been a rewarding experience that's opened doors to new opportunities.</p>
                                </div>

                                <div className="reply">
                                    <Link href="#">
                                        <a className="comment-reply-link">Reply</a>
                                    </Link>
                                </div>
                            </div>
                        </li>
                    </ol>
                </li>
            </ol>

            <div className="comment-respond">
                <h3 className="comment-reply-title">Leave a Reply</h3>

                <form className="comment-form">
                    <p className="comment-notes">
                        <span id="email-notes">Your email address will not be published.</span>
                        Required fields are marked 
                        <span className="required">*</span>
                    </p>
                    <p className="comment-form-author">
                        <label>Name <span className="required">*</span></label>
                        <input type="text" id="author" placeholder="Your Name*" name="author" required="required" />
                    </p>
                    <p className="comment-form-email">
                        <label>Email <span className="required">*</span></label>
                        <input type="email" id="email" placeholder="Your Email*" name="email" required="required" />
                    </p>
                    <p className="comment-form-url">
                        <label>Website</label>
                        <input type="url" id="url" placeholder="Website" name="url" />
                    </p>
                    <p className="comment-form-comment">
                        <label>Comment</label>
                        <textarea name="comment" id="comment" cols="45" placeholder="Your Comment..." rows="5" maxLength="65525" required="required"></textarea>
                    </p>
                    <p className="comment-form-cookies-consent">
                        <input type="checkbox" value="yes" name="wp-comment-cookies-consent" id="wp-comment-cookies-consent" />
                        <label>Save my name, email, and website in this browser for the next time I comment.</label>
                    </p>
                    <p className="form-submit">
                        <input type="submit" name="submit" id="submit" className="submit" value="Post A Comment" />
                    </p>
                </form>
            </div>
        </div>
    )
}

export default CommentArea;