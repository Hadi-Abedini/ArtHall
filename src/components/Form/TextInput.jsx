import { TextField } from "@mui/material";
import React from "react";

function TextInput({ id, label, type = "text" }) {
  return (
    <TextField
      className="w-full bg-white bg-opacity-10 rounded-lg"
      id={id}
      label={label}
      type={type}
      variant="filled"
      InputProps={{
        style: {
          borderRadius: "8px",
          color: "white",
          backgroundColor:"transparent"
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
