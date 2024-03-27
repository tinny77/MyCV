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
				My expertise lies in developing and maintaining <strong>WordPress</strong> sites, crafting custom themes and plugins, and seamlessly migrating websites to the <strong>WordPress</strong> platform. I have a proven track record of integrating essential plugins like WPML and WooCommerce to enhance site functionality and implementing <strong>SEO</strong> and CRO best practices for maximum visibility and user engagement.
				</p>
				<p className="text-block">
In addition to my technical skills, I thrive in dynamic work environments and demonstrate proficiency in managing multiple projects concurrently, even under stringent time constraints. My dedication to delivering exceptional work with a keen eye for detail is a consistent trait across all my endeavors, ensuring the highest standards of quality in every task I undertake.
				</p>
				<p className="text-block">
				I am particularly passionate about driving design decisions and transforming intricate designs into flawless code. My deep appreciation for <strong>CSS</strong> and its role in bringing designs to life fuels my enthusiasm for creating visually stunning and responsive websites. This love for design-to-code conversion motivates me to continually hone my skills and deliver exceptional results in every project I undertake.
				</p>
			</ScrollAnimation>
		</section>
	);
};

export default About;
