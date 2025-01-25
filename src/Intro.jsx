/* eslint-disable react/no-children-prop */
import LinkButtons from './components/LinkButtons';
import MouseAnimation from './components/MouseAnimation';
import Typed from 'react-typed';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

const Intro = ({ isScrolled, isScrollIconVisible, myExperienceYears }) => {
	const { t } = useTranslation();
	const [isAnimated, setIsAnimated] = useState(false);
	const [isClient, setIsClient] = useState(false);
	useEffect(() => {
		setIsAnimated(true);
		setIsClient(true);
	}, []);

	const titles = [
		'Senior Front-end developer a Verona',
		'Sviluppatore WordPress Full-stack',
		'Interface developer',
		'Esperto CSS e Responsive design',
	];

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

				{!isClient && <h2 className="seo-text">{titles.join(' • ')}</h2>}

				{isClient && (
					<h3 className="font-open">
						<Typed strings={titles} typeSpeed={85} backSpeed={20} loop />
					</h3>
				)}

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
