import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { I18nextProvider, useTranslation } from 'react-i18next';
import CustomCursor from 'custom-cursor-react';
import i18n from './data/i18n';
import LangSwitcher from './components/LangSwitcher';
import Intro from './Intro';
import About from './About';
const Skills = React.lazy(() => import('./Skills'));
const Experience = React.lazy(() => import('./Experience'));
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
		const handlescroll = () => {
			setIsScrolled(window.scrollY > 0);
			setisScrollIconVisible(false);
		};
		setTimeout(() => setisScrollIconVisible(true), 5000);
		window.addEventListener('scroll', handlescroll);
		return () => window.removeEventListener('scroll', handlescroll);
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
					<Experience />
					<Contact />
					<div className="mac-bg" />
				</Router>
			</I18nextProvider>
		</>
	);
}

export default App;
