import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const ModalVideo = dynamic(import("react-modal-video"));

const AboutArea = () => {
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);

  // Popup Video
  const [isOpen, setIsOpen] = React.useState(true);
  const openModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="about-area-two bg-fffaf3 pt-70 pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="about-content-box">
                <span className="sub-title">lymphaticdrainage</span>
                <h2>Build Your lymphaticdrainage Skills Online, Anytime</h2>
                <p>
                Lymphatic drainage massage, also known as manual lymphatic drainage, is a gentle form of massage used to relieve painful swelling in your arms and legs caused by lymphedema. 
                Lymphedema often affects people recovering from breast cancer surgery.
                </p>
                <p>
                  <strong>
                    Grow your knowledge and your opportunities with thought
                    leadership, training and tools.
                  </strong>
                </p>

                <Link href="/contact">
                  <a className="link-btn">Explore Learning</a>
                </Link>
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <div className="about-video-box">
                <div className="image">
                  <img src="/images/about-img5.jpg" alt="image" />
                </div>

                <div onClick={() => openModal()} className="video-btn">
                  <i className="flaticon-play"></i>
                </div>

                <div className="shape10">
                  <img src="/images/shape9.png" alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>
        <div className="shape3">
          <img src="/images/shape3.png" alt="image" />
        </div>
        <div className="shape4">
          <img src="/images/shape4.png" alt="image" />
        </div>
        <div className="shape2">
          <img src="/images/shape2.png" alt="image" />
        </div>
      </div>

      {/* If you want to change the video need to update videoID */}
      {display ? (
        <ModalVideo
          channel="youtube"
          isOpen={!isOpen}
          videoId="-30hudsIXXE"
          onClose={() => setIsOpen(!isOpen)}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default AboutArea;
