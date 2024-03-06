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
			}, 250);
		});
	};

	return (
		<section id="skills">
			<ScrollAnimation animateIn="fadeIn" delay={500}>
				<h2>My Skills</h2>
			</ScrollAnimation>
			<ScrollAnimation
				animateIn="fadeIn"
				delay={1000}
				afterAnimatedIn={animateBars}
			>
				<Container fluid="lg">
					<Row>
						<SkillsDetail />
					</Row>
					<Row>
						<Col xs={12} md={6}>
							<Card>
								<Card.Body>
									<Card.Title className="mb-0">
										Specialist in converting design to code
									</Card.Title>
									<Card.Body className="pt-1 small">
										I specialise in converting designs or layouts into
										high-quality, responsive HTML code. My expertise includes
										meticulous attention to detail, pixel-perfect results and
										the implementation of various optimisation techniques to
										improve website performance.
									</Card.Body>
								</Card.Body>
							</Card>
						</Col>
						<Col xs={12} md={6}>
							<Card>
								<Card.Body>
									<Card.Title className="mb-0">
										Photo editing & graphic design skills
									</Card.Title>
									<Card.Body className="pt-1 small">
										I am well versed in the major photo editing and graphic
										design programmes. I am able to make precise adjustments and
										edits to visual assets to improve their quality and
										aesthetics, ensuring they blend seamlessly with the overall
										website design and branding.
									</Card.Body>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
				<p className="text-block">
					Skills with a lighter bar represent topics that I have extensively
					studied and delved into, yet not directly applied in a work setting.
				</p>
			</ScrollAnimation>
		</section>
	);
}

const SkillsDetail = () => {
	return (
		<>
			{Object.keys(skills).map((category) => (
				<Col xs={6} lg={6} xxl={3} key={category}>
						<Card>
							<Card.Body>
								<Card.Title>{category.replaceAll('_', ' ')}</Card.Title>
								<Card.Body>
									{skills[category]
										.sort((a, b) => (a.amount > b.amount ? -1 : 1))
										.map((skill) => (
											<span key={skill.id}>
												<span className="label">
													{skill.name}
													{skill.sub && <small>{skill.sub}</small>}
												</span>
												{skill?.current === true ? (
													<ProgressBar
														now={skill.amount}
														label={skill.name}
														variant="success"
														animated
													/>
												) : (
													<ProgressBar
														now={skill.amount}
														label={skill.name}
														variant={skill.class}
													/>
												)}
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
