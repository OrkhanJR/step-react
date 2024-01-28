import Gallery from "./components/Gallery/Gallery";
import { useState } from "react";

const App = () => {
  const [value, setValue] = useState(0);
  const [step, setStep] = useState(1);

  const increase = () => {
    setValue(value + step);
  };

  const decrease = () => {
    setValue(value - step);
  };

  const stepPlus = () => {
    setStep(step + 1);
  };

  const stepMinus = () => {
    if (step <= 1) return;
    setStep(step - 1);
  };

  return (
    <>
      <button onClick={stepMinus}>Minus step</button>
      <button onClick={stepPlus}>Plus step</button>
      <div>{step.toString()}</div>
      <br />
      <button onClick={decrease}>Minus</button>
      <button onClick={increase}>Plus</button>
      <div>{value.toString()}</div>
    </>
  );
};

export default App;
