import ScrollAnimation from 'react-animate-on-scroll';
import { useTranslation } from 'react-i18next';
import Title from './components/Title';

const About = ({ myAge }) => {
	const { t } = useTranslation();
	return (
		<section id="about">
			<Title title="About me"  />
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
