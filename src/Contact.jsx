import { useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import ScrollAnimation from 'react-animate-on-scroll';
import confetti from 'canvas-confetti';
import { useForm, ValidationError } from '@formspree/react';
import { useTranslation } from 'react-i18next';
import ServiceSelect from './components/ServiceSelect';

export default function Contact() {
	const [state, handleSubmit] = useForm('mrgwojwr', {
		data: {
			subject: 'Contatto da Filippotinnirello.it',
		},
	});
	const { t } = useTranslation();
	const actively_seeking = false;

	useEffect(() => {
		if (state.succeeded) {
			// Create a more elaborate confetti celebration
			const duration = 4000; // 3 seconds
			const end = Date.now() + duration;

			// Create a confetti animation frame
			const frame = () => {
				confetti({
					particleCount: 50,
					angle: 90,
					spread: 100,
					origin: { y: 0 },
					//colors: ['#ff0000', '#00ff00', '#0000ff'],
				});

				if (Date.now() < end) {
					requestAnimationFrame(frame);
				}
			};

			// Start the animation
			frame();

			// Add a final burst after the rain
			setTimeout(() => {
				confetti({
					particleCount: 150,
					spread: 150,
					origin: { y: 0.5 },
					gravity: 0.25,
					startVelocity: 20,
					scalar: 0.8,
				});
			}, duration);
		}
	}, [state.succeeded]);
	if (state.succeeded) {
		return (
			<section id="contact">
				<p className="text-block pt-5" style={{ fontSize: '4rem' }}>
					{t('contact_thank_you_title')}
				</p>
				<p className="text-block _text-white display-6 pb-5">
					{t('contact_thank_you_message')}
				</p>
			</section>
		);
	}
	return (
		<section id="contact">
			<ScrollAnimation animateIn="fadeIn" delay={500}>
				<h2>Contact me</h2>
			</ScrollAnimation>
			<ScrollAnimation animateIn="fadeIn" delay={1000} className="container-md">
				<p
					className="text-block mb-4"
					dangerouslySetInnerHTML={{
						__html: actively_seeking
							? t('contact_text_open')
							: t('contact_text'),
					}}
				></p>
				<hr />
				<form onSubmit={handleSubmit} className="mt-4 text-block w-100">
					<Form.Group as={Row} className="mb-0 mb-md-4">
						<Form.Label column md="2" htmlFor="name">
							{t('contact_label_first_name')}
						</Form.Label>
						<Col md="4">
							<Form.Control id="name" type="text" name="name" required />
						</Col>

						<Form.Label column md="2" htmlFor="surname">
							{t('contact_label_last_name')}
						</Form.Label>
						<Col md="4">
							<Form.Control id="surname" type="text" name="surname" required />
						</Col>
					</Form.Group>
					<Form.Group as={Row} className="mb-3 mb-md-1">
						<Form.Label column md="2" htmlFor="email">
							E-mail
						</Form.Label>
						<Col md="4">
							<Form.Control id="email" type="email" name="email" required />
						</Col>

						<Form.Label column md="2" htmlFor="company">
							{t('contact_label_company')}
						</Form.Label>
						<Col md="4">
							<Form.Control id="company" type="text" name="company" />
						</Col>
					</Form.Group>
					<Form.Group as={Row} className="mb-t mt-md-4">
						<Form.Label></Form.Label>
						<Col md="12">
							<ServiceSelect />
						</Col>
					</Form.Group>
					<Form.Group className="mb-4">
						<Form.Label></Form.Label>
						<Form.Control
							as="textarea"
							rows={4}
							id="message"
							name="message"
							required
							placeholder={t('contact_label_message')}
						/>
					</Form.Group>
					<ValidationError prefix="Email" field="email" errors={state.errors} />
					<ValidationError
						prefix="Message"
						field="message"
						errors={state.errors}
					/>
					<Button
						as="input"
						type="submit"
						value={t('contact_label_send')}
						variant="danger"
						className="mt-2"
						disabled={state.submitting}
						size="lg"
					/>{' '}
				</form>
			</ScrollAnimation>
		</section>
	);
}
