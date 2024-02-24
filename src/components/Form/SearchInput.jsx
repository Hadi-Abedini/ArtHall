import React, { useState } from "react";
import { Box, IconButton, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchInput({ setSearchValue }) {
  const [formValues, setFormValues] = useState("");

  const handleInputBaseChange = (event) => {
    setFormValues(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchValue(formValues);
  };
  return (
    <form
      className="w-1/2 flex items-center rounded-lg bg-white bg-opacity-10 pr-2"
      onSubmit={handleSubmit}>
      <InputBase
        sx={{
          ml: 1,
          flex: 1,
          fontFamily: "vazir-regular",
          fontSize: "10px",
          color: "white",
        }}
        placeholder="جستجو"
        name="search"
        onChange={handleInputBaseChange}
      />
      <IconButton
        type="submit"
        sx={{ p: "10px", color: "white" }}
        aria-label="search">
        <SearchIcon />
      </IconButton>
    </form>
  );
}

export default SearchInput;
