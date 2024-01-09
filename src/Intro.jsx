import LinkButtons from './components/LinkButtons';
import MouseAnimation from './components/MouseAnimation';

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

				<h3>CSS expert, front-end and WordPress developer</h3>

				<p className="text-block lead">
					I&#39;ve been working on frontend development for more than{' '}
					{myExperienceYears} years, and I love all of the challenges that come
					with it. My passion is the development of websites. With a solid
					background in WordPress, CSS, HTML, and JavaScript, I&#39;m able to
					execute digital projects with accuracy and uniqueness.
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
