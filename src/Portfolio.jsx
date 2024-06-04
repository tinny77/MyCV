import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ScrollAnimation from 'react-animate-on-scroll';
import portfolioItems from './data/myPortfolio.js';

import { useTranslation } from 'react-i18next';

const Portfolio = () => {
	const { i18n, t } = useTranslation();

	return (
		<section id="portfolio">
			<ScrollAnimation animateIn="fadeIn" delay={500}>
				<h2>My Works</h2>
				<p className="text-block _lead">{t('portfolio_intro')}</p>
			</ScrollAnimation>
			<ScrollAnimation animateIn="fadeIn" delay={1000}>
				<Container fluid="lg">
					<Row>
						{portfolioItems.map((item, index) => (
							<Col xs={6} lg={4} xxl={3} key={index} className="portfolio">
								<Card className="portfolio-item">
									<Card.Body>
										<Card.Title>{item.title}</Card.Title>
                                                  <a
                                                       href={`${item.url}`}
											target="_blank"
											rel="noreferrer noopener"
										>
											{item.url.replace('https://www.', '')}

										<img src={`/previews/${item.image}`} alt={item.title || 'Click to visit'} loading='lazy' /></a>

										<small>
											{i18n.language === 'it'
												? item.description_it
												: item.description_en}
										</small>
									</Card.Body>
								</Card>
							</Col>
						))}
					</Row>
				</Container>
			</ScrollAnimation>
		</section>
	);
};

export default Portfolio;
