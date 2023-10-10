import { useState, useEffect } from 'react';
import LinkButtons from './LinkButtons';
import Skills from './Skills';
import Contact from './Contact';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

function App() {
	const [isScrolled, setIsScrolled] = useState(true);
	const [isScrolledVisible, setIsScrolledVisible] = useState(true);

	const getYearDiffWithMonth = (endDate, startDate) => {
		const ms = endDate.getTime() - startDate.getTime();
		const date = new Date(ms);
		return Math.abs(date.getUTCFullYear() - 1970);
	};

	const thisYear = new Date();
	const myExperienceYears = getYearDiffWithMonth(
		thisYear,
		new Date('2006-10-01')
	);
	const myAge = getYearDiffWithMonth(thisYear, new Date('1981-07-05'));

	useEffect(() => {
		const handlescroll = () => {
			setIsScrolled(window.scrollY > 0);
			setIsScrolledVisible(false);
		};
		setTimeout(() => setIsScrolled(false), 8000);
		window.addEventListener('scroll', handlescroll);
		return () => window.removeEventListener('scroll', handlescroll);
	}, []);

	return (
		<>
			<Router>
				<section id="main">
					<video autoPlay loop>
						<source src="./myPic.mp4" type="video/mp4" />
					</video>
					<h1>Filippo Tinnirello</h1>

					<h3>Frontend & Wordpress developer</h3>

					<p className="text-block lead">
						I'm an experienced Frontend Developer with over {myExperienceYears}{' '}
						years of expertise in CSS, HTML, and JavaScript, known for my
						mastery in responsive design and precise coding to transform designs
						into dynamic, user-friendly websites for seamless experiences across
						all devices.
					</p>
					<p className="text-block lead">
						I'm specialized in WordPress theme development, and I'm currently
						focusing on React integration within the new Gutenberg block editor.
					</p>

					<LinkButtons />
				</section>
				<div
					className={
						'scroll-down' + !isScrolled && isScrolledVisible ? '' : ' hidden'
					}
				>
					<div className="mousey">
						<div className="scroller"></div>
					</div>
				</div>
				<section id="about">
					<ScrollAnimation animateIn="fadeIn" delay={500}>
						<h2>About me</h2>
					</ScrollAnimation>
					<ScrollAnimation animateIn="fadeIn" delay={1000}>
						<p className="text-block">
							I am a {myAge} year old front-end developer living in Verona,
							Italy.
						</p>
						<p className="text-block">
							Throughout my extensive experience as a web developer, I have
							honed my skills in critical front-end technologies such as HTML,
							CSS, and JavaScript. My journey commenced with mastering these
							languages, focusing on crafting engaging user interfaces. As
							technologies evolved, I shifted my focus towards the WordPress
							ecosystem, gaining expertise in PHP and essential modern tools and
							frameworks, including package managers, module bundlers, CSS
							preprocessors.
						</p>
						<p className="text-block">
							With a passion for CSS that traces back to the era of table-based
							layouts, I excel at transforming wireframes and designs into
							functional interfaces, generating well-structured and efficient
							code. I relish the process of crafting functional digital
							interfaces from wireframes or mockups, employing well-organized
							and practical code. Proficient in debugging and performance
							monitoring tools like Lighthouse, I specialize in testing for
							responsive behavior across various resolutions and mobile devices,
							ensuring an optimal experience for all users.
						</p>
						<p className="text-block">
							Additionally, I am well-versed in SEO strategies and best
							practices for website optimization. I have a particular affinity
							for Bootstrap and find joy in customizing it for specific
							projects. However, I am equally comfortable starting with a
							reset.css and a blank stylesheet, tailoring solutions to each
							unique project's needs.
						</p>
						<p className="text-block">
							I am deeply passionate about staying at the forefront of web
							development trends and technologies.
						</p>
						<p className="text-block">
							Outside of coding, my interests include sports like football and
							F1. I avidly follow technology news, with a particular focus on
							the Apple ecosystem. I also have a deep appreciation for English
							music, especially the iconic sounds of Oasis and the solo work of
							Liam Gallagher.
						</p>
					</ScrollAnimation>
				</section>
				<section id="experience">
					<ScrollAnimation animateIn="fadeIn" delay={500}>
						<h2>My experience</h2>
					</ScrollAnimation>
					<ScrollAnimation animateIn="fadeIn" delay={1000}>
						BLA BLA BLA
						<br />
						BLA BLA BLA
						<br />
						<br />
					</ScrollAnimation>
				</section>
				<section id="skills">
					<ScrollAnimation animateIn="fadeIn" delay={500}>
						<h2>My Skills</h2>
					</ScrollAnimation>
					<ScrollAnimation animateIn="fadeIn" delay={1000}>
						<Skills />
					</ScrollAnimation>
				</section>
				<section id="portfolio">
					<ScrollAnimation animateIn="fadeIn" delay={500}>
						<h2>Portfolio</h2>
					</ScrollAnimation>
					<ScrollAnimation animateIn="fadeIn" delay={1000}>
						BLA BLA BLA
						<br />
						BLA BLA BLA
						<br />
						<br />
					</ScrollAnimation>
				</section>
				<section id="contact">
					<ScrollAnimation animateIn="fadeIn" delay={500}>
						<h2>Contact me</h2>
					</ScrollAnimation>
					<ScrollAnimation animateIn="fadeIn" delay={1000}>
						<Contact />
					</ScrollAnimation>
				</section>
			</Router>
		</>
	);
};

export default App;
