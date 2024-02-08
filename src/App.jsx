// import Gallery from "./components/Gallery/Gallery";
import { useState } from "react";
// import Counter from "./components/Counter/Counter";
// import Slider from "./components/Slider/Slider";

import Form from "./components/Form/Form";

const App = () => {
  const showForm = true;
  const inputsData = [
    {
      type: "text",
      labelText: "Name",
      name: "name",
      pattern: "\\w{1,4}",
    },

    {
      type: "text",
      labelText: "Surname",
      name: "Surname",
      pattern: "\\w{1,5}",
    },

    {
      type: "text",
      labelText: "Middle Name",
      name: "Middle Name",
      pattern: "\\w{1,6}",
    },

    {
      type: "password",
      labelText: "password",
      name: "password",
      pattern: "\\w{1,7}",
    },
  ].map((x) => {
    x.key = crypto.randomUUID();
    return x;
  });
  const handleSubmit = (formData) => {
    console.log([...formData]);
  };

  return (
    <>{showForm && <Form onSubmit={handleSubmit} inputsData={inputsData} />}</>
  );
};

export default App;
