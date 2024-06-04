/* eslint-disable react/no-children-prop */
import LinkButtons from './components/LinkButtons';
import MouseAnimation from './components/MouseAnimation';
import Typed from 'react-typed';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

const Intro = ({ isScrolled, isScrollIconVisible, myExperienceYears }) => {
	const { t } = useTranslation();
	const [isAnimated, setIsAnimated] = useState(false);
	useEffect(() => {
		setIsAnimated(true);
	}, []);

	return (
		<>
			<section id="intro">
				<div className="videoframe">
					<video autoPlay loop muted poster="./myPic.png">
						<source src="./myPic.mp4" type="video/mp4" />
						<source src="./myPic.webm" type="video/webm" />
						<source src="./myPic.gif" type="video/gif" />
					</video>
				</div>

				<h1 className={isAnimated ? 'animated' : ''}>Filippo Tinnirello</h1>

				<h3 className="font-open">
					<Typed
						strings={[
							'Senior Front-end developer',
							'Full-stack WordPress developer',
							'Interface developer',
							'CSS and Responsive design expert',
						]}
						typeSpeed={85}
						backSpeed={20}
						loop
					/>
				</h3>

				<p
					className="text-block lead"
					dangerouslySetInnerHTML={{
						__html: t('intro_text', { years: myExperienceYears }),
					}}
				></p>

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
