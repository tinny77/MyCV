import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
	.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		supportedLngs: ['it', 'en'],
		fallbackLng: 'it',
		defaultNS: 'translation',

		backend: {
			loadPath: '/locale/lang_{{lng}}.json',
		},
		detection: {
			order: ['path'],
			lookupFromPathIndex: 0,
		},
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
