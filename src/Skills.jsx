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
				delay={500}
				afterAnimatedIn={animateBars}
			>
				<Container fluid="lg">
					<Row>{getSkillsGroups()}</Row>
					<Row>
						<Col xs={12} md={6}>
							<Card>
								<Card.Body>
									<Card.Title className='mb-0'>PSD to HTML Conversion Specialist</Card.Title>
									<Card.Body className="pt-1 small">
										Proficient in converting PSD designs or layouts to
										high-quality, responsive HTML code. Expertise includes
										meticulous attention to detail, ensuring pixel-perfect
										results, and implementing various optimization techniques to
										enhance website performance.
									</Card.Body>
								</Card.Body>
							</Card>
						</Col>
						<Col xs={12} md={6}>
							<Card>
								<Card.Body>
									<Card.Title className='mb-0'>
										Photo Editing & Graphic Design Proficiency
									</Card.Title>
									<Card.Body className="pt-1 small">
										Strong understanding of major photo editing and
										graphic design software. Capable of making precise
										adjustments and edits to visual assets to enhance their
										quality and aesthetics, ensuring they align seamlessly with
										the overall website design and branding.
									</Card.Body>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
				<p className="text-block">
					Skills in blue are referred to topics that I have thoroughly studied
					and deepened, but haven&#39;t had the opportunity to apply directly in
					a work setting yet.
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
											<span className="label">
												{skill.name}
												{skill.sub && <small>{skill.sub}</small>}
											</span>
											{skill?.current===true ? (
												<ProgressBar
													now={skill.amount}
													label={skill.name}
													variant='success'
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
