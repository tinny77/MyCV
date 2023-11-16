import { useState, useEffect } from 'react';
import LinkButtons from './LinkButtons';
import Skills from './Skills';
import Contact from './Contact';
import Experience from './Experience';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';

function App() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isScrollIconVisible, setisScrollIconVisible] = useState(false);

	const getYearsDiff = (endDate, startDate) => {
		const ms = endDate.getTime() - startDate.getTime();
		const date = new Date(ms);
		return Math.abs(date.getUTCFullYear() - 1970);
	};

	const thisYear = new Date();
	const myExperienceYears = getYearsDiff(thisYear, new Date('2006-09'));
	const myAge = getYearsDiff(thisYear, new Date('1981-07-05'));

	const animateBars = () => {
		const progressBars = document.querySelectorAll('.progress-bar');
		progressBars.forEach((progressBar) => {
			setTimeout(() => {
				progressBar.classList.add('animated');
			}, 750);
		});
	};

	useEffect(() => {
		const handlescroll = () => {
			setIsScrolled(window.scrollY > 0);
			setisScrollIconVisible(false);
		};
		setTimeout(() => setisScrollIconVisible(true), 8500);
		window.addEventListener('scroll', handlescroll);
		return () => window.removeEventListener('scroll', handlescroll);
	}, []);

	return (
		<Router>
			<section id="main">
				<div className="videoframe">
					<video autoPlay loop muted poster="./myPic.png">
						<source src="./myPic.gif" type="video/gif" />
						<source src="./myPic.mp4" type="video/mp4" />
						<source src="./myPic.webm" type="video/webm" />
					</video>
				</div>

				<h1>Filippo Tinnirello</h1>

				<h3>Front-end & Wordpress developer</h3>

				<p className="text-block lead">
					With {myExperienceYears}
					{'+'} years in Frontend Development, I'm driven by a passion for web
					development and thrive on the challenges it presents. With a strong
					foundation in CSS, HTML, and JavaScript, coupled with solid expertise
					in WordPress, I'm poised to bring digital projects to life with
					precision and creativity
				</p>
				<LinkButtons />
			</section>

			<div
				className={`scroll-down ${
					!isScrolled && isScrollIconVisible ? '' : 'hidden'
				}`}
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
						I am a {myAge}-year-old front-end developer based in Verona, Italy.
					</p>
					<p className="text-block">
						My journey in web development began in 2006. Back then, I was immersed in mastering the intricacies of HTML, CSS, and JavaScript.
						All these years of front-end development equipped me with a keen eye for detail and a knack for creating seamless, user-friendly websites.
						<br />
						Over time, I transitioned my focus towards WordPress, honing my skills in front-end technologies. From customizing existing themes to developing new ones, I've been deeply involved in the WordPress ecosystem.
					</p>
					<p className="text-block">
						In 2023, I took a leap, temporarily stepping away to dedicate myself to an intensive period of learning. During this time, I immersed myself in the latest knowledge and trends, delving deep into the realm of JavaScript, particularly focusing on the nuances of React and related technologies.
						<br />
						This dedicated period of study allowed me to not only catch up but to surge ahead, gaining a comprehensive understanding of the ever-evolving landscape of web development. It was a period of full-time commitment to honing my skills and delving into the intricacies that shape the digital world.
					</p>
					<p className="text-block">
						Beyond the screen, you'll often find me hitting the gym, taking leisurely walks, and tuning into podcasts. Football and F1 are my go-to sports, and I'm always eager to dive into the latest in tech, especially within the Apple ecosystem. And when it comes to music, the iconic sounds of Oasis and Gallagher brothers solo works hold a
						special place in my heart.
					</p>
				</ScrollAnimation>
			</section>
			<section id="skills">
				<ScrollAnimation animateIn="fadeIn" delay={500}>
					<h2>My Skills</h2>
				</ScrollAnimation>
				<ScrollAnimation
					animateIn="fadeIn"
					delay={500}
					afterAnimatedIn={animateBars}
				>
					<Skills />
				</ScrollAnimation>
			</section>
			<section id="experience">
				<ScrollAnimation animateIn="fadeIn" delay={500}>
					<h2>My experience</h2>
				</ScrollAnimation>
				<Experience />
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
	);
};

export default App;
