import LinkButtons from './components/LinkButtons';
import MouseAnimation from './components/MouseAnimation';
import Typed from "react-typed";
import { useTranslation } from 'react-i18next';

const Intro = ({ isScrolled, isScrollIconVisible, myExperienceYears }) => {
	const { t } = useTranslation();

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

				<h1>Filippo Tinnirello</h1>

				<h3 className='font-open'>
					<Typed
						strings={[
							'Senior Front-end developer',
							'Full-stack WordPress developer',
							'Interface developer',
							'CSS and Responsive design expert',
						]}
						typeSpeed={100}
						backSpeed={10}
						loop
					/>
				</h3>

				<p className='certificates'>
					<a href='#' target='_blank' rel='noindex nofollow'><img src='https://i0.wp.com/knowledge-pillars.com/wp-content/uploads/2022/12/WordPress-Developer.png?w=512&ssl=1' alt='Certified WordPress Developer' title='Certified WordPress Developer' /><span className='sr-only'>Certified WordPress Developer</span></a>
					<a href='#' target='_blank' rel='noindex nofollow'><img src='https://i0.wp.com/knowledge-pillars.com/wp-content/uploads/2023/02/Knowledge-Pillars-Badges-2022-12-14-PROOF_WP-WooCommerce-Specialist.png?w=2134&ssl=1' alt='Certified WooCommerce Specialist' title='Certified WooCommerce Specialist' /><span className='sr-only'>Certified WooCommerce Specialist</span></a>
				</p>

				<p className="text-block lead" dangerouslySetInnerHTML={{ __html: t('intro_text', { years: myExperienceYears }) }} ></p>
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
