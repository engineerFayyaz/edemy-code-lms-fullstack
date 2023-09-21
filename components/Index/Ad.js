import React from "react";
import dynamic from "next/dynamic";
const ModalVideo = dynamic(import("react-modal-video"));

const Ad = () => {
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
			<div className="video-area">
				<div className="container">
					<div className="video-box mt-0">
						<div className="image">
							<img
								src="/images/video-img2.jpg"
								className="shadow"
								alt="image"
							/>
						</div>
			 
						<div
							onClick={()=> openModal()}
							className="video-btn"
						>
							<i className="flaticon-play"></i>
						</div>
					</div>
				</div>
			</div>

			{display ? (
				<ModalVideo
					channel="youtube"
					isOpen={!isOpen}
					videoId="IT94xC35u6k"
					onClose={() => setIsOpen(!isOpen)}
				/>
			) : (
				""
			)}
		</>
	);
};

export default Ad;
