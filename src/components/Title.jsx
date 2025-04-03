import ScrollAnimation from "react-animate-on-scroll";

const Title = ({ title, description }) => {
  return (
    <>
    <ScrollAnimation animateIn="fadeIn" delay={650} animateOnce={true}>
      <h2>{title}</h2>
      {description && <p className="text-block _lead">{description}</p>}
      </ScrollAnimation>
    </>
  );
};

export default Title;
