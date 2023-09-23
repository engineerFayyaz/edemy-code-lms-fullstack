import React from 'react';

const SubscribeForm = () => {
    return (
        <div className="subscribe-area-two">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="subscribe-image">
                            <img src="/images/subscribe-img2.png" alt="image" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="subscribe-content">
                            <span className="sub-title">Go At Your Own Pace</span>
                            <h2 className="playfair-display-font">Subscribe To Our Newsletter</h2>
                            <p>Join the Toxic Beauty Academy family and receive our newsletter filled with inspiration, education, and the latest updates in the world of clean beauty.</p>
                            <form className="newsletter-form">
                                <input type="text" className="input-newsletter" placeholder="Enter your email address" name="EMAIL" required />
                                <button type="submit" className="default-btn">
                                    <i className="flaticon-user"></i>Subscribe Now<span></span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shape4">
                <img src="/images/shape4.png" alt="image" />
            </div>
            <div className="shape13">
                <img src="/images/shape12.png" alt="image" />
            </div>
        </div>
    )
}

export default SubscribeForm;