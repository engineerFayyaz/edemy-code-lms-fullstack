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
      <div className="about-area-two pb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="about-content-box">
                <span className="sub-title">
                  Lip Fillers with Toxic Beauty Acadmey
                </span>
                <h2>Anatomy of regional facial nerve blocks</h2>
                <p>
                  Master Lips Live Patient Training Courses This Is The Most
                  Comprehensive Master Lips Training Course Available! This
                  Master Lips course is for those who have some experience with
                  botulinum toxin and dermal fillers who want to learn the
                  latest techniques in creating beautiful lips and achieve the
                  best esthetic outcomes for lower facial esthetics. Master Lip
                  treatment techniques will include the exclusive AAFE protocols
                  for Lip Volumization, Botulinum Toxin Lip Flip, Filler Lip
                  Flip, Right Angle Lips, Keyhole Pout V to M Lips, Double Plump
                  Lips, and much more!
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
                  <img src="/images/about-img6.jpg" alt="image" />
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
          videoId="SUevqzm0_5w"
          onClose={() => setIsOpen(!isOpen)}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default AboutArea;
