import { TextField } from "@mui/material";
import React, { useContext } from "react";
import { FormContext } from "../../context/FormContext";

function TextArea({ id, label, rows = 1 }) {
  const { formValues, setFormValues } = useContext(FormContext);

  const handleTextFieldChange = (event) => {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [event.target.id]: event.target.value,
    }));
  };
  return (
    <TextField
      className="col-span-2 bg-white bg-opacity-10 rounded-lg"
      id={id}
      label={label}
      variant="filled"
      multiline
      rows={rows}
      onchange={handleTextFieldChange}
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

export default TextArea;
