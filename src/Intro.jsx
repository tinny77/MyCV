import React from "react"
import LinkButtons from './components/LinkButtons';
import MouseAnimation from './components/MouseAnimation';

const Intro = ({ isScrolled, isScrollIconVisible, myExperienceYears }) => {


  return (
		<>
			<section id="intro">
				<div className="videoframe">
					<video autoPlay loop muted poster="./myPic.png">
						<source src="./myPic.gif" type="video/gif" />
						<source src="./myPic.mp4" type="video/mp4" />
						<source src="./myPic.webm" type="video/webm" />
					</video>
				</div>

				<h1>Filippo Tinnirello</h1>

				<h3>Front-end & Wordpress developer</h3>

				<p className="text-block lead">
					With {myExperienceYears}
					{'+'} years in Frontend Development, I'm driven by a passion for web
					development and thrive on the challenges it presents. With a strong
					foundation in CSS, HTML, and JavaScript, coupled with solid expertise
					in WordPress, I'm poised to bring digital projects to life with
					precision and creativity
				</p>
				<LinkButtons />
			</section>

			<MouseAnimation
				isScrolled={isScrolled}
				isScrollIconVisible={isScrollIconVisible}
			/>
		</>
	);
};

export default Intro;
