import { HashLink } from 'react-router-hash-link';
import { GrLinkedin, GrGithub, GrDocumentPdf, GrMail } from 'react-icons/gr';
import { Tooltip } from 'react-tooltip';

export default function LinkButtons() {
	return (
		<div className="buttons">
			<a
				href="https://www.linkedin.com/in/tinnirello/"
				target="_blank"
				rel="noreferrer"
				data-tooltip-id="btn-linkedin"
				data-tooltip-content="Visit my LinkedIn profile"
				data-tooltip-place="bottom"
			>
				<GrLinkedin />
			</a>
			<Tooltip id="btn-linkedin" />
			<HashLink
				to="/#contact"
				smooth={true}
				data-tooltip-id="btn-contact"
				data-tooltip-content="Contact me"
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
				data-tooltip-content="Download my CV"
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
				data-tooltip-content="Visit my GitHub"
				data-tooltip-place="bottom"
			>
				<GrGithub />
			</a>
			<Tooltip id="btn-github" />
		</div>
	);
}
