import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ScrollAnimation from 'react-animate-on-scroll';

export default function Focus() {

	return (
		<section id="focus">
			<ScrollAnimation animateIn="fadeIn" delay={500}>
				<h2 className="mb-3">Desired Stack and position</h2>
			</ScrollAnimation>
			<ScrollAnimation animateIn="fadeIn" delay={650}>
				<p className="text-block lead">
					I&#39;m willing to apply my expertise in WordPress and React
					development in a remote setting. I&#39;m looking for opportunities
					that allow me to work remotely and contribute significantly to a range
					of projects. If given the chance to develop professionally, I would be
					willing to taking on a junior role in React.
				</p>
			</ScrollAnimation>
				<Container fluid="lg">
					<Row>
						<Col xs={12} md={6}>
							<ScrollAnimation animateIn="fadeIn" delay={1000}>
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
											experience in creating scalable and customized solutions
											for diverse client requirements.
										</Card.Body>
									</Card.Body>
								</Card>
							</ScrollAnimation>
						</Col>
						<Col xs={12} md={6}>
							<ScrollAnimation animateIn="fadeIn" delay={1000}>
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
							</ScrollAnimation>
						</Col>
					</Row>
				</Container>

		</section>
	);
}
