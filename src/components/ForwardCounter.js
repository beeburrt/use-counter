import Card from "./Card";
import useCounter from "../hooks/useCounter";

const ForwardCounter = (props) => {
  const counter = useCounter();

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
