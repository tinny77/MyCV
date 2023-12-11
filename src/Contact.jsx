import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import ScrollAnimation from 'react-animate-on-scroll';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
	const [state, handleSubmit] = useForm('mrgwojwr', {
		data: {
			subject: 'Contatto da Filippotinnirello.it',
		},
	});
	if (state.succeeded) {
		return <p>Thank you for your message!</p>;
	}
	return (
		<section id="contact">
			<ScrollAnimation animateIn="fadeIn" delay={500}>
				<h2>Contact me</h2>
			</ScrollAnimation>
			<ScrollAnimation animateIn="fadeIn" delay={1000}>

					<p className="text-block">
						Feel free to drop me a message using the form below.
						<br />
						Looking forward to connecting and discussing exciting opportunities
						together!
					</p>
					<form onSubmit={handleSubmit} className="mt-4">
						<Form.Group as={Row} className="mb-0 mb-md-4">
							<Form.Label column md="2" htmlFor="name">
								First name
							</Form.Label>
							<Col md="4">
								<Form.Control id="name" type="text" name="name" required />
							</Col>

							<Form.Label column md="2" htmlFor="surname">
								Last name
							</Form.Label>
							<Col md="4">
								<Form.Control
									id="surname"
									type="text"
									name="surname"
									required
								/>
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
								Company
							</Form.Label>
							<Col md="4">
								<Form.Control id="company" type="text" name="company" />
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
								placeholder="Your message"
							/>
						</Form.Group>
						<ValidationError
							prefix="Email"
							field="email"
							errors={state.errors}
						/>
						<ValidationError
							prefix="Message"
							field="message"
							errors={state.errors}
						/>
						<Button
							as="input"
							type="submit"
							value="Send"
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
