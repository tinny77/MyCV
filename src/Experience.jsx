import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ScrollAnimation from 'react-animate-on-scroll';
import { Badge, ListGroupItem } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';
import { useTranslation } from 'react-i18next';

export default function Experience() {
	const { t } = useTranslation();
	const exp_3 = t('exp_3', { returnObjects: true });
	const exp_2 = t('exp_2', { returnObjects: true });
	const exp_1 = t('exp_1', { returnObjects: true });
	return (
		<section id="experience">
			<ScrollAnimation animateIn="fadeIn" delay={500}>
				<h2>My experience</h2>
			</ScrollAnimation>

				<Container fluid="lg"><ScrollAnimation animateIn="fadeIn" delay={1000}>
					<Carousel showThumbs={false} showStatus={false}>

							<Col xs={12}>
								<Card>
									<Card.Body>
										<Card.Title>
											Wordpress Developer <span>Creativart (2023)</span>{' '}
											<h6>
												<Badge bg="secondary">{t('label_hybrid')}</Badge>
											</h6>
										</Card.Title>
										<Card.Body>
											<ListGroup>
												{exp_3.map((exp, index) => (
													<ListGroupItem
														key={index}
														dangerouslySetInnerHTML={{ __html: exp }}
													/>
												))}
											</ListGroup>
										</Card.Body>
										<Card.Footer>
											<img
												src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
												title="HTML"
											/>
											<img
												src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
												title="CSS"
											/>
											<i className="devicon-sass-original colored"></i>
											<img
												src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
												title="Bootstrap"
											/>
											<img
												src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
												className="squared"
												title="JavaScript"
											/>
											<i
												className="devicon-wordpress-plain"
												title="WordPress"
											></i>
											<img
												src="/ACF-icon.png"
												className="squared"
												title="ACF"
												alt="ACF"
											/>
											<img
												src="/elementor-icon.svg"
												className="squared"
												title="Elementor"
											/>
											<i className="devicon-php-plain colored" title="PHP"></i>
											<i className="devicon-mysql-plain" title="MySQL"></i>
											<i className="devicon-git-plain colored" title="Git"></i>
											<i
												className="devicon-gulp-plain colored"
												title="Gulp"
											></i>
											<i
												className="devicon-docker-plain colored"
												title="Docker"
											></i>
											<img
												src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg"
												className="squared"
												title="Photoshop"
											/>
											<i
												className="devicon-xd-plain colored squared"
												title="XD"
											></i>
										</Card.Footer>
									</Card.Body>
								</Card>
							</Col>

							<Col xs={12}>
								<Card>
									<Card.Body>
										<Card.Title>
											Front-end and Wordpress Developer{' '}
											<span>24 Consulting (2018-2023)</span>{' '}
											<h6>
												<Badge bg="secondary">{t('label_hybrid')}</Badge>
											</h6>
										</Card.Title>
										<Card.Body>
											<ListGroup>
												{exp_2.map((exp, index) => (
													<ListGroupItem
														key={index}
														dangerouslySetInnerHTML={{ __html: exp }}
													/>
												))}
											</ListGroup>
										</Card.Body>
										<Card.Footer>
											<img
												src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
												title="HTML"
											/>
											<img
												src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
												title="CSS"
											/>
											<i
												className="devicon-sass-original colored colored"
												title="SCSS"
											></i>
											<img
												src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
												title="Bootstrap"
											/>
											<img
												src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
												className="squared"
												title="JavaScript"
											/>
											<i
												className="devicon-wordpress-plain"
												title="WordPress"
											></i>
											<img
												src="/ACF-icon.png"
												className="squared"
												title="ACF"
												alt="ACF"
											/>
											<i className="devicon-php-plain colored" title="PHP"></i>
											<i className="devicon-mysql-plain" title="MySQL"></i>
											<i className="devicon-git-plain colored" title="Git"></i>
											<i
												className="devicon-gulp-plain colored"
												title="Gulp"
											></i>
											<i
												className="devicon-npm-original-wordmark colored"
												title="Npm"
											></i>
											<img
												src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg"
												title="Webpack"
											/>
											<img
												src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg"
												className="squared"
												title="Photoshop"
											/>
											<i
												className="devicon-xd-plain colored squared"
												title="XD"
											></i>
											<img
												src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
												className="squared"
												title="Figma"
											/>
										</Card.Footer>
									</Card.Body>
								</Card>
							</Col>

							<Col xs={12}>
								<Card>
									<Card.Body>
										<Card.Title>
											Front-end developer <span>24 Consulting (2006-2018)</span>{' '}
											<h6>
												<Badge bg="secondary">{t('label_onsite')}</Badge>
											</h6>
										</Card.Title>
										<Card.Body>
											<ListGroup>
												{exp_1.map((exp, index) => (
													<ListGroupItem
														key={index}
														dangerouslySetInnerHTML={{ __html: exp }}
													/>
												))}
											</ListGroup>
										</Card.Body>
										<Card.Footer>
											<img src="/ASP-icon.png" title="ASP" alt="ASP" />
											<i
												className="devicon-ie10-original colored"
												title="Internet Explorer"
											></i>
											<img
												src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
												title="HTML"
											/>
											<img
												src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
												title="CSS"
											/>
											<img
												src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
												title="Bootstrap"
											/>
											<img
												src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
												className="squared"
												title="JavaScript"
											/>
											<i
												className="devicon-jquery-plain-wordmark"
												title="jQuery"
											></i>
											<i
												className="devicon-gulp-plain colored"
												title="Gulp"
											></i>
											<i
												className="devicon-grunt-line-wordmark colored"
												title="Grunt"
											></i>
											<img
												src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg"
												className="squared"
												title="Photoshop"
											/>
											<i
												className="devicon-sqlite-plain-wordmark"
												title="SQLite"
											></i>
										</Card.Footer>
									</Card.Body>
								</Card>
							</Col>

					</Carousel></ScrollAnimation>
				</Container>

		</section>
	);
}
