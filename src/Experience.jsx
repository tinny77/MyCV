import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ScrollAnimation from 'react-animate-on-scroll';

export default function Experience() {
	return (
		<>
			<Container fluid="lg">
				<Col xs={12}>
					<ScrollAnimation animateIn="fadeIn" delay={2250}>
						<Card>
							<Card.Body>
								<Card.Title>Wordpress Developer @ Creativart (2023)</Card.Title>
								<Card.Body>
									Encompassed a range of WordPress-specific tasks, including
									theme creation and customization using PHP, ACF, Elementor,
									SEO optimization, and speed enhancement. Additionally, managed
									the entire content transfer process from the development
									environment to production, handling all necessary
									configurations, including server-side setups.
								</Card.Body>
							</Card.Body>
						</Card>
					</ScrollAnimation>
				</Col>
				<Col xs={12}>
					<ScrollAnimation animateIn="fadeIn" delay={2000}>
						<Card>
							<Card.Body>
								<Card.Title>
									Front-end and Wordpress Developer @ 24 Consulting (2018-2023)
								</Card.Title>
								<Card.Body>
									Created custom themes using PHP and ACF. Demonstrated
									proficiency in developing static websites, leveraging bundlers
									and generators for seamless integration. Ensured responsive
									designs through CSS, HTML, and JavaScript, and oversaw site
									maintenance and optimization, all seamlessly managed through
									Git. Extensively worked with design layouts received from
									Adobe XD and InDesign. Frequently utilized Photoshop for
									fine-tuning and optimizing design elements, ensuring a
									pixel-perfect final product.
								</Card.Body>
							</Card.Body>
						</Card>
					</ScrollAnimation>
				</Col>
				<Col xs={12}>
					<ScrollAnimation animateIn="fadeIn" delay={1750}>
						<Card>
							<Card.Body>
								<Card.Title>
									Front-end developer @ 24 Consulting (2006-2018)
								</Card.Title>
								<Card.Body>
									Created responsive web interfaces using self taught CSS, HTML,
									and JavaScript. Managed multimedia elements for UX and
									developed back-end solutions with ASP and SQL for seamless
									data integration.
								</Card.Body>
							</Card.Body>
						</Card>
					</ScrollAnimation>
				</Col>
			</Container>
		</>
	);
}
