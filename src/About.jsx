import ScrollAnimation from 'react-animate-on-scroll';

const About = ({ myAge }) => {
  return (
		<section id="about">
			<ScrollAnimation animateIn="fadeIn" delay={500}>
				<h2>About me</h2>
			</ScrollAnimation>
			<ScrollAnimation animateIn="fadeIn" delay={1000}>
				<p className="text-block">
					I am a Front-end and <strong>WordPress</strong> developer and I&#39;m {myAge}{' '}
					years old.
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
					<br />I was completely engrossed in learning the nuances of{' '}
					<strong>HTML</strong>, <strong>CSS</strong>, and{' '}
					<strong>JavaScript</strong> back then. My years of experience in
					front-end programming have given me an excellent sense of detail and
					the ability to create websites that are easy to use.
					<br />
					As my expertise evolved, so did my focus. I found myself drawn deeper
					into the dynamic world of <strong>WordPress</strong>, a platform that perfectly melds
					creativity with functionality. Over the past few years, I&#39;ve
					immersed myself in the <strong>WordPress</strong> ecosystem, seamlessly transitioning
					from crafting bespoke themes to fine-tuning existing ones, all while
					staying attuned to the ever-evolving landscape of front-end
					development and <strong>WordPress</strong> itself.
				</p>
				<p className="text-block">
					At the close of 2023, I made the bold decision to embark on a
					transformative learning journey, dedicating myself wholeheartedly to
					mastering contemporary JavaScript and its applications within
					<strong>WordPress</strong>. This intensive commitment led me to explore the
					revolutionary <strong>Gutenberg</strong> editor and its underlying
					technology, <strong>React</strong>. By harnessing the power of React,
					I&#39;ve unlocked new dimensions of <strong>WordPress</strong> customization,
					seamlessly integrating modern JavaScript functionality into the heart
					of <strong>WordPress</strong> development.
				</p>
				<p className="text-block">
					With a proven track record of elevating brands through intuitive,
					visually stunning <strong>WordPress</strong> solutions powered by cutting-edge
					technologies, I am poised to partner with forward-thinking agencies
					seeking to push the boundaries of digital creativity. Let&#39;s
					collaborate to transform your <strong>WordPress</strong> vision into reality,
					leveraging the full potential of Gutenberg blocks and modern
					JavaScript frameworks. Reach out, and let&#39;s embark on an
					extraordinary journey together.
				</p>
			</ScrollAnimation>
		</section>
	);
};

export default About;
