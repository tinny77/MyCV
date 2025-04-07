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

	const titles = t('titles', { returnObjects: true });

	return (
		<>
			<section id="intro">

				<img src="/myPic.png" alt="Filippo Tinnirello WordPress Developer" className='myPic' width={250} />

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

			<MouseAnimation
				isScrolled={isScrolled}
				isScrollIconVisible={isScrollIconVisible}
			/>
			</section>


		</>
	);
};

export default Intro;
