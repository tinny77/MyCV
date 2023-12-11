import React from "react"
import ScrollAnimation from 'react-animate-on-scroll';

const About = ({ myAge }) => {
  return (
		<section id="about">
			<ScrollAnimation animateIn="fadeIn" delay={500}>
				<h2>About me</h2>
			</ScrollAnimation>
			<ScrollAnimation animateIn="fadeIn" delay={1000}>
				<p className="text-block">
					I am a {myAge}-year-old front-end developer based in Verona, Italy.
				</p>
				<p className="text-block">
					My journey in web development began in 2006. Back then, I was immersed
					in mastering the intricacies of HTML, CSS, and JavaScript. All these
					years of front-end development equipped me with a keen eye for detail
					and a knack for creating seamless, user-friendly websites.
					<br />
					Over time, I transitioned my focus towards WordPress, while honing my
					skills in front-end technologies. From customizing (namely, turning
					them upside-down) existing themes to developing new ones from scratch,
					I've been deeply involved in the WordPress ecosystem for the past few
					years, all while staying attuned to the evolving landscape of CSS.
				</p>
				<p className="text-block">
					In 2023, I halted all other engagements to commit fully to an
					intensive period of learning. I focused solely on mastering modern
					JavaScript, particularly delving into React and related technologies.
					This immersive dedication allowed me to swiftly grasp the dynamic
					landscape of web development, significantly advancing my skills and
					expertise in shaping the digital realm.
				</p>
				<p className="text-block">
					Beyond the screen, you'll often find me hitting the gym, or taking
					leisurely walks while tuning into podcasts. Football and F1 are my
					go-to sports, and I'm always eager to dive into the latest in tech,
					especially within the Apple ecosystem. And when it comes to music, the
					iconic sounds of Oasis and Gallagher brothers solo works hold a
					special place in my heart.
				</p>
			</ScrollAnimation>
		</section>
	);
};

export default About;
