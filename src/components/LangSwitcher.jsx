import { useTranslation } from 'react-i18next';
import { Tooltip } from 'react-tooltip';

const LangSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'it' : 'en');
  };

  return (
    <div className='langSwitcher'>
      <Tooltip id="btn-language" />
      <button onClick={toggleLanguage}
        data-tooltip-id="btn-language"
				data-tooltip-content={i18n.language === 'en' ? 'Passa all\'italiano' : 'Switch to english'}
				data-tooltip-place="left">
               <svg width="24px" height="24px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="languageIconTitle" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="square" strokeLinejoin="miter" fill="none" color="#FFFFFF"><title id="languageIconTitle">{i18n.language === 'en' ? 'Passa all\'italiano' : 'Switch to english'}</title><circle cx="12" cy="12" r="10"/><path strokeLinecap="round" d="M12,22 C14.6666667,19.5757576 16,16.2424242 16,12 C16,7.75757576 14.6666667,4.42424242 12,2 C9.33333333,4.42424242 8,7.75757576 8,12 C8,16.2424242 9.33333333,19.5757576 12,22 Z"/> <path strokeLinecap="round" d="M2.5 9L21.5 9M2.5 15L21.5 15"/></svg>
      </button>
    </div>
  );
};

export default LangSwitcher;
