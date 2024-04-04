import { HashLink } from 'react-router-hash-link';
import { GrLinkedin, GrGithub, GrDocumentPdf, GrMail } from 'react-icons/gr';
import { Tooltip } from 'react-tooltip';
import { useTranslation } from 'react-i18next';

export default function LinkButtons() {
	const { t } = useTranslation();
	return (
		<div className="buttons">
			<a
				href="https://www.linkedin.com/in/tinnirello/"
				target="_blank"
				rel="noreferrer"
				data-tooltip-id="btn-linkedin"
				data-tooltip-content={t('tooltip_linkedin')}
				data-tooltip-place="bottom"
			>
				<GrLinkedin />
			</a>
			<Tooltip id="btn-linkedin" />
			<HashLink
				to="/#contact"
				smooth={true}
				data-tooltip-id="btn-contact"
				data-tooltip-content={t('tooltip_contact')}
				data-tooltip-place="bottom"
			>
				<GrMail />
			</HashLink>
			<Tooltip id="btn-contact" />
			<a
				href="./Filippo_Tinnirello_Resume.pdf"
				target="_blank"
				download
				data-tooltip-id="btn-cv"
				data-tooltip-content={t('tooltip_download_cv')}
				data-tooltip-place="bottom"
			>
				<GrDocumentPdf />
			</a>
			<Tooltip id="btn-cv" />
			<a
				target="_blank"
				href="https://github.com/tinny77/"
				rel="noreferrer"
				data-tooltip-id="btn-github"
				data-tooltip-content={t('tooltip_github')}
				data-tooltip-place="bottom"
			>
				<GrGithub />
			</a>
			<Tooltip id="btn-github" />
		</div>
	);
}
