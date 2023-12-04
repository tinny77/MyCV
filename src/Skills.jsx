import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';
import skills from './data/mySkills.js';
import ScrollAnimation from 'react-animate-on-scroll';

export default function Skills() {


	const animateBars = () => {
		const progressBars = document.querySelectorAll('.progress-bar');
		progressBars.forEach((progressBar) => {
			setTimeout(() => {
				progressBar.classList.add('animated');
			}, 750);
		});
	};

	return (
			<section id="skills">
				<ScrollAnimation animateIn="fadeIn" delay={500}>
					<h2>My Skills</h2>
				</ScrollAnimation>
				<ScrollAnimation
					animateIn="fadeIn"
					delay={500}
					afterAnimatedIn={animateBars}
				>
					<Container fluid="lg">
						<Row>{getSkillsGroups()}</Row>
					</Container>
					<p className="text-block">
						Skills in blue are referred to topics that I have thoroughly studied
						and deepened, but haven't had the opportunity to apply directly in a
						work setting yet.
					</p>
				</ScrollAnimation>
			</section>
	);
}


const getSkillsGroups = () => {
	return (
		<>
			{Object.keys(skills).map((category) => (
				<Col xs={6} lg={4} key={category}>
					<Card>
						<Card.Body>
							<Card.Title>{category.replaceAll('_', ' ')}</Card.Title>
							<Card.Body>
								{skills[category]
									.sort((a, b) => (a.amount > b.amount ? -1 : 1))
									.map((skill) => (
										<span key={skill.id}>
											<span className="label">{skill.name}</span>
											<ProgressBar
												now={skill.amount}
												label={skill.name}
												variant={skill.class}
											/>
										</span>
									))}
							</Card.Body>
						</Card.Body>
					</Card>
				</Col>
			))}
		</>
	);
};
