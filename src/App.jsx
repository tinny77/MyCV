import { useState, useEffect } from 'react';
import Intro from './Intro';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import Experience from './Experience';
import { BrowserRouter as Router } from 'react-router-dom';


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

	useEffect(() => {
		const handlescroll = () => {
			setIsScrolled(window.scrollY > 0);
			setisScrollIconVisible(false);
		};
		setTimeout(() => setisScrollIconVisible(true), 6500);
		window.addEventListener('scroll', handlescroll);
		return () => window.removeEventListener('scroll', handlescroll);
	}, []);

	return (
		<Router>
			<Intro
				isScrolled={isScrolled}
				isScrollIconVisible={isScrollIconVisible}
				myExperienceYears={myExperienceYears}
			/>
			<About myAge={myAge} />
			<Skills />
			<Experience />
			<Contact/>
		</Router>
	);
}

export default App;
