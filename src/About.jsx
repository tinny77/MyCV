import ScrollAnimation from 'react-animate-on-scroll';

const About = ({ myAge }) => {
  return (
		<section id="about">
			<ScrollAnimation animateIn="fadeIn" delay={500}>
				<h2>About me</h2>
			</ScrollAnimation>
			<ScrollAnimation animateIn="fadeIn" delay={1000}>
				<p className="text-block">
					I am a front-end developer and I&#39;m {myAge} years old.
				</p>
				<p className="text-block">
					I excel in transforming designs into top-tier responsive HTML code.
					With a keen eye for detail, I ensure pixel-perfect outcomes and apply
					optimization methods for enhanced website performance. Proficient in
					leading photo editing tools, I adeptly refine visuals to elevate
					quality, aligning seamlessly with site design and brand aesthetics.
				</p>
				<p className="text-block">
					In 2006, I started my web development journey.
					<br />I was completely engrossed in learning the nuances of <strong>HTML</strong>, <strong>CSS</strong>,
					and <strong>JavaScript</strong> back then. My years of experience in front-end
					programming have given me an excellent sense of detail and the ability
					to create websites that are easy to use.
					<br />I gradually shifted my attention to WordPress while improving my
					knowledge of front-end technologies. I&#39;ve been actively involved
					in the WordPress ecosystem for the past few years, doing everything
					from creating new themes from scratch to tweaking (that is, flipping
					them upside down) already-existing themes, all the while keeping an
					eye on how CSS is changing.
				</p>
				<p className="text-block">
					At the end of 2023 I made the bold decision to fully commit to a
					period of intense learning. I dedicated all of my attention to
					learning contemporary JavaScript, especially exploring{' '}
					<strong>React</strong> and related fields.Thanks to this intense
					commitment, I&#39;ve been able to quickly understand the ever-changing
					web development scene and have greatly improved my abilities and
					knowledge in influencing the digital world.
				</p>
				<p className="text-block">
					When I&#39;m not staring at a device, I&#39;m usually at the gym or
					going on leisurely walks while listening to podcasts. My favorite
					sports are football and Formula One, and I&#39;m constantly keen to
					learn about the newest technological advancements, particularly as
					they relate to the Apple environment. And when it comes to music, I
					have a particular spot in my heart for the famous sounds of Oasis and
					the individual efforts of the Gallagher brothers.
				</p>

			</ScrollAnimation>
		</section>
	);
};

export default About;
