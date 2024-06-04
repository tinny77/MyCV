import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import skills from './data/mySkills.js';
import ScrollAnimation from 'react-animate-on-scroll';
import { IconContext } from 'react-icons';
import { FaHtml5, FaCss3, FaJs, FaPhp, FaDatabase, FaWordpress, FaCode, FaGitAlt, FaFigma,  FaPalette, FaServer, FaBug, FaShieldAlt, FaTachometerAlt, FaPuzzlePiece } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';


export default function Skills() {

	const animateIcons = () => {
return;
	}

	return (
		<section id="skills">
			<ScrollAnimation animateIn="fadeIn" delay={500}>
				<h2>My Skills</h2>
			</ScrollAnimation>
			<ScrollAnimation
				animateIn="fadeIn"
				delay={1000}
				afterAnimatedIn={animateIcons}
			>
				<Container fluid="lg">
					<Row>
					{skills.map((skill) => (
						<SkillsDetail
						key={skill.id}
						id={skill.id}
						title={skill.title}
						iconName={skill.iconName}
						description_it={skill.description_it}
						description_en={skill.description_en}
						/>
						))}
					</Row>
				</Container>
			</ScrollAnimation>
		</section>
	);
}

const SkillsDetail = ({ id, title, iconName, description_en, description_it}) => {

	const { i18n } = useTranslation();
	const description = i18n.language === 'it' ? description_it : description_en;

	const iconComponents = {
		html: FaHtml5,
		css: FaCss3,
		javascript: FaJs,
		php: FaPhp,
		database: FaDatabase,
		wordpress: FaWordpress,
		code: FaCode,
		git: FaGitAlt,
		figma: FaFigma,
		plugin: FaPuzzlePiece,
		theme: FaPalette,
		hosting: FaServer,
		debug: FaBug,
		security: FaShieldAlt,
		performance: FaTachometerAlt,
	};
	const IconComponent = iconComponents[iconName];

	return (
		<>

			<Col xs={6} lg={4} xxl={3} key={id}>
			<IconContext.Provider value={{ className: 'skills-icon' }}>
						<Card>
							<Card.Body>
								<Card.Title data-icon={iconName}>{IconComponent && <IconComponent />}{title}</Card.Title>
						<Card.Body>
									<small>{description}</small>
								</Card.Body>
							</Card.Body>
					</Card>
					</IconContext.Provider>
				</Col>

		</>
	);
};
