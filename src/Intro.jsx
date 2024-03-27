import LinkButtons from './components/LinkButtons';
import MouseAnimation from './components/MouseAnimation';
import Typed from "react-typed";

const Intro = ({ isScrolled, isScrollIconVisible, myExperienceYears }) => {



	return (
		<>
			<section id="intro">
				<div className="videoframe">
					<video autoPlay loop muted poster="./myPic.png">
						<source src="./myPic.mp4" type="video/mp4" />
						<source src="./myPic.webm" type="video/webm" />
						<source src="./myPic.gif" type="video/gif" />
					</video>
				</div>

				<h1>Filippo Tinnirello</h1>

				<h3 className='font-open'>
					<Typed
						strings={[
							'Front-end developer',
							'Full-stack WordPress developer',
							'Interface developer',
							'CSS and Responsive design expert',
						]}
						typeSpeed={100}
						backSpeed={10}
						loop
					/>
				</h3>

				<p className="text-block lead">
					My passion is the development of websites. I&#39;ve been working on
					frontend development for more than {myExperienceYears} years.
					<br />
					{/* With a solid expertise in WordPress, PHP, HTML, CSS and JavaScript,
					I&#39;m able to execute digital projects with accuracy and uniqueness. */}
					I am proficient in developing dynamic websites using WordPress, with
					expertise in frontend and backend development, theme customization,
					plugin integration, and ensuring optimal website performance and
					security.
				</p>
				<LinkButtons />
			</section>

			<MouseAnimation
				isScrolled={isScrolled}
				isScrollIconVisible={isScrollIconVisible}
			/>
		</>
	);
};

export default Intro;
