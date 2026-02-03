import useTimer from "../hooks/timer";

const About = () => {
  // const timer = useTimer();
  const timer = useTimer();
  return <div>About{timer}</div>;
};

export default About;
