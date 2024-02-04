import FormInput from "./FormInput/FormInput";
import styles from "./form.module.css";

const Form = ({ onSubmit, inputsData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    onSubmit(formData);
  };

  const inputs = inputsData.map((inputData) => (
    <FormInput
      labelText={inputData.label}
      name={inputData.name}
      type={inputData.type}
      key={inputData.key}
    />
  ));

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <legend>Full name</legend>
        {inputs}
        <button>Submit</button>
      </form>
    </>
  );
};

export default Form;
