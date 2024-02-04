import {useId} from "react";

const FormInput = ({ labelText, type = "text", name }) => {
  const id = useId();
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <input id={id} type={type} name={name} />
    </>
  );
};

export default FormInput;
