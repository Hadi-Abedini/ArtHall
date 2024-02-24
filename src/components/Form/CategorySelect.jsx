import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

function CategorySelect({ id, label, options }) {
  return (
    <FormControl
      variant="filled"
      className="w-full bg-white bg-opacity-10 rounded-lg">
      <InputLabel sx={{ color: "#ffffff87" }} id="select-label">
        {label}
      </InputLabel>
      <Select
        labelId="select-label"
        id={id}
        sx={{
          color: "white",
          backgroundColor: "transparent",
          ":hover": {
            backgroundColor: "transparent",
          },
          ":focus": { backgroundColor: "transparent" },
          ".MuiSvgIcon-root path": { fill: "white" },
          ".MuiSvgIcon-root": { backgroundColor: "transparent" },
        }}
        disableUnderline>
        {options.map((option, index) => {
          return (
            <MenuItem
              defaultValue={index === 0 ? true : ""}
              key={index}
              value={option.value}>
              {option.title}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}

export default CategorySelect;
