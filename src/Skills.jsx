import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';
import MySkills from './MySkills';

const getSkillsGroups = () => {
	return (
		<>
			{Object.keys(MySkills).map((category) => (
				<Col xs={6} lg={4} key={category}>
					<Card>
						<Card.Body>
							<Card.Title>{category.replaceAll('_', ' ')}</Card.Title>
							<Card.Text>
								{MySkills[category]
									.sort((a, b) => (a.amount > b.amount ? -1 : 1))
									.map((skill) => (
										<span key={skill.id}>
											<span className="label">{skill.name}</span>
											<ProgressBar
												now={skill.amount}
												label={skill.name}
												variant={skill.class}
											/>
										</span>
									))}
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			))}
		</>
	);
};

export default function Skills() {
	return (
		<>
			<Container fluid="lg">
				<Row>{getSkillsGroups()}</Row>
			</Container>
			<p className="text-block">
				Skills in blue are referred to topics that I have thoroughly studied and
				deepened, but haven't had the opportunity to apply directly in a work
				setting yet.
			</p>
		</>
	);
}
