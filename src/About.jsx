import ScrollAnimation from 'react-animate-on-scroll';
import { useTranslation } from 'react-i18next';

const About = ({ myAge }) => {
	const { t } = useTranslation();
	return (
		<section id="about">
			<ScrollAnimation animateIn="fadeIn" delay={500}>
				<h2>About me</h2>
			</ScrollAnimation>
			<ScrollAnimation animateIn="fadeIn" delay={1000}>
				<p
					className="text-block"
					dangerouslySetInnerHTML={{ __html: t('about_text', { age: myAge }) }}
				></p>
			</ScrollAnimation>
		</section>
	);
};

export default About;
