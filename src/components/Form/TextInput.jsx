import { TextField } from "@mui/material";
import React, { useContext } from "react";
import { FormContext } from "../../context/FormContext";

function TextInput({ id, label, type = "text" }) {
  const { formValues, setFormValues } = useContext(FormContext);
  
  const handleTextFieldChange = (event) => {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [event.target.id]: event.target.value,
    }));
  };
  return (
    <TextField
      className="w-full bg-white bg-opacity-10 rounded-lg"
      id={id}
      label={label}
      type={type}
      variant="filled"
      onChange={handleTextFieldChange}
      InputProps={{
        style: {
          borderRadius: "8px",
          color: "white",
          backgroundColor: "transparent",
        },
        disableUnderline: true,
      }}
      InputLabelProps={{
        style: {
          width: "100%",
          color: "#ffffff87",
          textAlign: "right",
        },
      }}
    />
  );
}

export default TextInput;
