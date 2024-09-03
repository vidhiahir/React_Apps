import React, { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Result from "./components/Result";

function App() {
  const [formData, setFormData] = useState({
    initial: 10000,
    annual: 1200,
    returni: 5,
    duration: 10,
  });

  function handleInputChange(name, value) {
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: +value,
      };
    });
  }

  const inputIsValid = formData.duration >= 1;

  return (
    <>
      <Header />
      <Input formData={formData} onInputChange={handleInputChange} />
      {!inputIsValid && <p className="center">Please Enter valid Duration </p>}
      {inputIsValid && <Result input={formData} />}
    </>
  );
}

export default App;
