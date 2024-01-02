import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ScrollAnimation from 'react-animate-on-scroll';

export default function Focus() {

	return (
		<section id="focus">
			<ScrollAnimation animateIn="fadeIn" delay={500}>
				<h2 className="mb-3">Focus and role spectrum</h2>
				<p className="lead mt-0 mb-5">
					My core competencies, preferred positions, and career aspirations
				</p>
			</ScrollAnimation>
			<ScrollAnimation animateIn="fadeIn" delay={500}>
				<Container fluid="lg">
					<Row>
						<Col xs={12} md={6}>
							<Card>
								<Card.Body>
									<Card.Title className="focus">
										<i className="devicon-react-original" title="React"></i>
										Junior React Developer
									</Card.Title>
									<Card.Body>
										Eager to apply knowledge gained in React to contribute
										effectively to dynamic web applications. Seeking a junior
										position where I can further enhance my skills in React
										development, collaborate within a team, and contribute to
										creating engaging user interfaces.
									</Card.Body>
								</Card.Body>
							</Card>
						</Col>
						<Col xs={12} md={6}>
							<Card>
								<Card.Body>
									<Card.Title className="focus">
										<i
											className="devicon-wordpress-plain"
											title="WordPress"
										></i>
										Full-stack WordPress Developer
									</Card.Title>
									<Card.Body>
										Proficient in developing dynamic websites using WordPress,
										with expertise in frontend and backend development, theme
										customization, plugin integration, and ensuring optimal
										website performance and security. Possess hands-on
										experience in creating scalable and customized solutions for
										diverse client requirements.
									</Card.Body>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
				<p className="text-block">
					<strong>Seeking Remote Opportunities:</strong> Focused on harnessing my talents in
					React and WordPress development within a remote setup, I aim to thrive
					in roles that champion remote collaboration, enabling impactful
					contributions to diverse projects.
				</p>
			</ScrollAnimation>
		</section>
	);
}