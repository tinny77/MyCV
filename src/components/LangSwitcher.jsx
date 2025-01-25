import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Tooltip } from 'react-tooltip';

const LangSwitcher = () => {
	const { i18n } = useTranslation();
	const navigate = useNavigate();
	const location = useLocation();

	const switchLanguage = (newLang) => {
		const currentPath = location.pathname;

		if (newLang === 'en') {
			// Convert Italian routes to English
			const englishPath = currentPath
				.replace('/progetti', '/en/projects')
				.replace('/contatti', '/en/contact');

			if (currentPath === '/') {
				navigate('/en');
			} else {
				navigate(englishPath);
			}
		} else {
			// Convert English routes to Italian
			const italianPath = currentPath
				.replace('/en/projects', '/progetti')
				.replace('/en/contact', '/contatti')
				.replace('/en', '');

			navigate(italianPath);
		}

		i18n.changeLanguage(newLang);
	};

	return (
		<div className="langSwitcher">
			<Tooltip id="btn-language" />
			<button
				onClick={() => switchLanguage(i18n.language === 'en' ? 'it' : 'en')}
				data-tooltip-id="btn-language"
				data-tooltip-content={
					i18n.language === 'en' ? "Passa all'italiano" : 'Switch to english'
				}
				data-tooltip-place="left"
			>
				{i18n.language === 'en' ? 'IT' : 'EN'}
			</button>
		</div>
	);
};

export default LangSwitcher;
