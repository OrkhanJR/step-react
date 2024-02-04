// import Gallery from "./components/Gallery/Gallery";
// import { useState } from "react";
// import Counter from "./components/Counter/Counter";
// import Slider from "./components/Slider/Slider";

import Form from "./components/Form/Form";

const App = () => {
  const inputsData = [
    {
      type: "text",
      label: "Name",
      name: "name",
    },

    {
      type: "text",
      label: "Surname",
      name: "Surname",
    },

    {
      type: "text",
      label: "Middle Name",
      name: "Middle Name",
    },

    {
      type: "password",
      label: "password",
      name: "password",
    },
  ].map((x) => {
    x.key = crypto.randomUUID();
    return x;
  });
  const handleSubmit = (formData) => {
    console.log([...formData]);
  };
  return (
    <>
      <Form onSubmit={handleSubmit} inputsData={inputsData} />
    </>
  );
};

export default App;
