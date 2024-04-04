import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ScrollAnimation from 'react-animate-on-scroll';
import { useTranslation } from 'react-i18next';

export default function Skills() {

	const { t } = useTranslation();
	const skills = t('skills', { returnObjects: true });

	return (
		<section id="skills">
			<ScrollAnimation animateIn="fadeIn" delay={500}>
				<h2>My Skills</h2>
			</ScrollAnimation>
			<ScrollAnimation
				animateIn="fadeIn"
				delay={1000}
			>
				<Container fluid="lg">
					<Row>
						<Col xs={12}>
							<Card>
								<Card.Body>
									<Row>
										<Col xs={12} lg={6}>
											<ul className="list-group text-left">
											{skills.slice(0,10).map((skill, index) => (
												<li key={index} className="list-group-item">
												{skill}
												</li>
											))}
											</ul>
										</Col>

										<Col xs={12} lg={6}>
											<ul className="list-group">
											{skills.slice(10).map((skill, index) => (
												<li key={index} className="list-group-item">
												{skill}
												</li>
											))}
											</ul>
										</Col>
									</Row>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</ScrollAnimation>
		</section>
	);
}
