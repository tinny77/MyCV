import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ScrollAnimation from 'react-animate-on-scroll';
import { Badge, ListGroupItem } from 'react-bootstrap';

export default function Experience() {
	return (
		<section id="experience">
			<ScrollAnimation animateIn="fadeIn" delay={500}>
				<h2>My experience</h2>
			</ScrollAnimation>
			<ScrollAnimation animateIn="fadeIn" delay={1000}>
				<Container fluid="lg">
					<Col xs={12}>
						<Card>
							<Card.Body>
								<Card.Title>
									Wordpress Developer <span>Creativart (2023)</span>{' '}
									<h6>
										<Badge bg="secondary">Hybrid</Badge>
									</h6>
								</Card.Title>
								<Card.Body>
									<ListGroup>
										<ListGroupItem>
											Spearheaded the evolution of front-end development for
											<strong> WordPress</strong> themes, placing a strong
											emphasis on pre-built themes and visual development,
											adeptly utilizing <strong>CPT</strong>s and page builders.
										</ListGroupItem>
										<ListGroupItem>
											Specialized in the meticulous conversion of designs into
											high-quality, responsive HTML code, ensuring pixel-perfect
											results, and implementing optimization techniques for
											elevated website performance.
										</ListGroupItem>
										<ListGroupItem>
											Leveraged <strong>PHP</strong> code for direct template
											customization, streamlining the data input process for
											increased efficiency and customization.
										</ListGroupItem>
										<ListGroupItem>
											Demonstrated expertise in photo editing and graphic design
											programs, ensuring precise adjustments and edits for
											visual assets, seamlessly blending with website design and
											branding.
										</ListGroupItem>
										<ListGroupItem>
											In addition to these responsibilities, oversaw the
											complete content transfer procedure from development to
											production environments, taking care of all required
											installations, including server-side configurations.
										</ListGroupItem>
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
									<i className="devicon-wordpress-plain" title="WordPress"></i>
									<img src="/ACF-icon.png" className="squared" title="ACF" />
									<img
										src="/elementor-icon.svg"
										className="squared"
										title="Elementor"
									/>
									<i className="devicon-php-plain colored" title="PHP"></i>
									<i className="devicon-mysql-plain" title="MySQL"></i>
									<i className="devicon-git-plain colored" title="Git"></i>
									<i className="devicon-gulp-plain colored" title="Gulp"></i>
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
										<Badge bg="secondary">Hybrid</Badge>
									</h6>
								</Card.Title>
								<Card.Body>
									<ListGroup>
										<ListGroupItem>
											Demonstrated proficiency in developing a diverse range of
											projects, including static websites, landing pages,
											newsletter templates, and custom{' '}
											<strong>WordPress</strong> themes, utilizing{' '}
											<strong>PHP</strong>, <strong>CPT</strong>s, and{' '}
											<strong>ACF</strong>.
										</ListGroupItem>
										<ListGroupItem>
											Ensured the responsiveness of designs through meticulous
											implementation of <strong>(S)CSS</strong>,{' '}
											<strong>HTML</strong>, and <strong>JavaScript</strong>,
											while overseeing site maintenance and optimization
											seamlessly managed through <strong>Git</strong>.
										</ListGroupItem>
										<ListGroupItem>
											Managed end-to-end content transfer from development to
											production, expertly handling necessary configurations,
											including server-side setups.
										</ListGroupItem>
										<ListGroupItem>
											Specialized in the meticulous conversion of designs to
											code, prioritizing attention to detail and achieving
											pixel-perfect results. Implemented optimization techniques
											for enhanced performance, working extensively with design
											layouts from <strong>InDesign</strong> and{' '}
											<strong>Adobe XD</strong>. Utilized{' '}
											<strong>Photoshop</strong> regularly to optimize and
											fine-tune design aspects, ensuring a final product that
											meets the highest standards of precision.
										</ListGroupItem>
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
									<i className="devicon-wordpress-plain" title="WordPress"></i>
									<img src="/ACF-icon.png" className="squared" title="ACF" />
									<i className="devicon-php-plain colored" title="PHP"></i>
									<i className="devicon-mysql-plain" title="MySQL"></i>
									<i className="devicon-git-plain colored" title="Git"></i>
									<i className="devicon-gulp-plain colored" title="Gulp"></i>
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
										<Badge bg="secondary">On-site</Badge>
									</h6>
								</Card.Title>
								<Card.Body>
									<ListGroup>
										<ListGroupItem>
											I leveraged my self-taught expertise in{' '}
											<strong>CSS</strong>, <strong>HTML</strong>, and{' '}
											<strong>JavaScript (jQuery) </strong>
											to develop web interfaces that evolved from desktop-only
											to responsive designs. This encompassed a spectrum of
											projects, predominantly websites, where I covered frontend
											to backend development, employing <strong>
												ASP
											</strong> and <strong>Access/SQLite</strong> databases for
											seamless data integration.
										</ListGroupItem>

										<ListGroupItem>
											In this role, I not only led the creation of dynamic and
											visually appealing user interfaces but also contributed
											significantly to numerous web projects.
										</ListGroupItem>
										<ListGroupItem>
											Furthermore, my proficiency in photo editing and graphic
											design programs allowed me to make precise adjustments and
											edits to visual assets. This skill set seamlessly blended
											with website design and branding, contributing to a
											cohesive and polished user experience.
										</ListGroupItem>
									</ListGroup>
								</Card.Body>
								<Card.Footer>
									<img src="/ASP-icon.png" title="ASP" />
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
									<i className="devicon-gulp-plain colored" title="Gulp"></i>
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
				</Container>
			</ScrollAnimation>
		</section>
	);
}
