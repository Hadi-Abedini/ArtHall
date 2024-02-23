import { TextField } from "@mui/material";
import React from "react";

function TextArea({ id, label, rows = 1 }) {
  return (
    <TextField
      className="col-span-2 bg-white bg-opacity-10 rounded-lg"
      id={id}
      label={label}
      variant="filled"
      multiline
      rows={rows}
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
