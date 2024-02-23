import { FormControl, InputLabel, NativeSelect } from "@mui/material";

function CategorySelect({ id, label, options }) {
  return (
    <FormControl
      variant="filled"
      className="w-full bg-white bg-opacity-10 rounded-lg">
      <InputLabel sx={{ color: "#ffffff87" }} id="select-label">
        {label}
      </InputLabel>
      <NativeSelect
        labelId="select-label"
        id={id}
        sx={{ color: "white", label: { color: "#ffffff87" } }}
        disableUnderline>
        {options.map((option) => {
          return <option value={option.value}>{option.title}</option>;
        })}
      </NativeSelect>
    </FormControl>
  );
}

export default CategorySelect;
