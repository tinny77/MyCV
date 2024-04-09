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
               {i18n.language === 'en' ? 'IT' : 'EN'}
      </button>
    </div>
  );
};

export default LangSwitcher;
