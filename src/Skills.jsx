import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
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
						<Col xs={12}>
							<Card>
								<Card.Body>
									<Row>
										<Col xs={12} lg={6}>
											<ul className="list-group text-left">
												<li className="list-group-item">
													Strong understanding of HTML and CSS, including
													cross-browser compatibility, responsivity and performance
												</li>
												<li className="list-group-item">
													Transform complex PSD layouts into pixel-perfect
													presentation layer HTML5/CSS3 templates
												</li>
												<li className="list-group-item">
													Develop custom themes and plugins
												</li>
												<li className="list-group-item">
													Develop and provide maintenance support for WordPress
													sites
												</li>

												<li className="list-group-item">
													Migrate websites from other platforms to WordPress
												</li>
												<li className="list-group-item">
													Integrate and set up plugins like WPML, WooCommerce,
													Yoast SEO, etc.
												</li>
												<li className="list-group-item">
													Experience with WordPress and Gutenberg, including
													building custom blocks
												</li>
												<li className="list-group-item">
													Optimize page speed of WordPress sites
												</li>
												<li className="list-group-item">
													Implement SEO/CRO best practices in WordPress sites
												</li>
												<li className="list-group-item">
													Familiar with design tools such as Sketch, Figma and
													Adobe XD
												</li>

											</ul>
										</Col>

										<Col xs={12} lg={6}>
											<ul className="list-group">
												<li className="list-group-item">
													Solid understanding of good UX and UI practices
													for websites
												</li>

												<li className="list-group-item">
													Work with version control systems such as Git / GitHub
												</li>
												<li className="list-group-item">
													Writing modern and performant JavaScript using the
													latest technologies
												</li>
												<li className="list-group-item">
													Familiar with interpreting designs and/or
													specifications and adapting them to code
												</li>

												<li className="list-group-item">
													Experience with front-end building tools (such as
													Webpack)
												</li>
												<li className="list-group-item">
													Experience working remotely
												</li>

												<li className="list-group-item">
													Work under tight deadlines and handle multiple
													projects simultaneously
												</li>
												<li className="list-group-item">
													Produce high-quality work with a strong focus on
													detail
												</li>

												<li className="list-group-item">
													Experience working with component systems
												</li>
												<li className="list-group-item">
													Able to estimate work for a project and turn specs
													into clearly defined, executable tasks
												</li>
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
