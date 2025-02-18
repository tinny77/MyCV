import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { I18nextProvider, useTranslation } from 'react-i18next';
import CustomCursor from 'custom-cursor-react';
import i18n from './data/i18n';
import LangSwitcher from './components/LangSwitcher';
import Intro from './Intro';
const About = React.lazy(() => import('./About'));
const Skills = React.lazy(() => import('./Skills'));
//const Experience = React.lazy(() => import('./Experience'));
const Portfolio = React.lazy(() => import('./Portfolio'));
const Contact = React.lazy(() => import('./Contact'));

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
		const handleScroll = () => {
			const scrolled = window.scrollY;
			const intro = document.getElementById('intro');
			setIsScrolled(window.scrollY > 0);
			setisScrollIconVisible(false);
			if (intro) {
				const opacity = Math.max(1 - (scrolled / window.innerHeight) * 1.5, 0.1);
				intro.style.opacity = opacity;
				intro.style.filter = 'blur(' + (scrolled / 100) * 0.5 + 'px)';
				intro.style.pointerEvents = scrolled > 100 ? 'none' : 'auto';
			}
		};

		window.addEventListener('scroll', handleScroll);
		setTimeout(() => setisScrollIconVisible(true), 5000);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const { t } = useTranslation();

	return (
		<>
			<CustomCursor
				targets={['a', 'input', 'textarea', 'select']}
				customClass="custom-cursor"
				dimensions={50}
				fill="#a43b5a"
				smoothness={{
					movement: 0.4,
					scale: 0.2,
					opacity: 0.65,
				}}
				targetOpacity={0.25}
				targetScale={1.65}
			/>
			<I18nextProvider i18n={i18n}>
				<Helmet>
					<html lang={i18n.language} />
					<meta name="description" content={t('description')} />
				</Helmet>
				<Router>
					<LangSwitcher />
					<Intro
						isScrolled={isScrolled}
						isScrollIconVisible={isScrollIconVisible}
						myExperienceYears={myExperienceYears}
					/>
					<About myAge={myAge} />
					<Skills />
					{
						/* <Experience myExperienceYears={myExperienceYears} /> */
					}
					<Routes>
						<Route path="/portfolio" element={<Portfolio />} />
						<Route path="*" element={<></>} />
					</Routes>
					<Contact />
					<div className="mac-bg" />
				</Router>
			</I18nextProvider>
		</>
	);
}

export default App;
