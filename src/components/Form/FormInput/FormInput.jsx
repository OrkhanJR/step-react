import { useId, useState } from "react";

const FormInput = ({ labelText, type = "text", name, pattern, inputsData }) => {
  const id = useId();

  const [isValid, setIsValid] = useState(false);
  const handleInput = (e) => {
    const regexp = new RegExp("^" + pattern + "$", "ig");
    const test = regexp.test(e.target.value);
    const inputs = inputsData;

    if (test) {
      setIsValid(test);
    }
  };
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <input
        id={id}
        type={type}
        name={name}
        pattern={pattern}
        data-is-valid={isValid}
        onInput={handleInput}
      />
    </>
  );
};

export default FormInput;

// setIsValid(regexp.test(e.target.value))
