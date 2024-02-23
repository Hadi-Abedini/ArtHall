import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import {
  Button,
  ThemeProvider,
  createTheme,
  styled,
  useTheme,
} from "@mui/material";
import "../../index.css";
import TextInput from "./TextInput";
import CategorySelect from "./CategorySelect";
import TextArea from "./TextArea";

const customTheme = (outerTheme) =>
  createTheme({
    direction: "rtl",
    typography: {
      fontFamily: "vazir-regular",
      fontSize: 13,
    },
  });

function Form() {
  const SubmitButton = styled(Button)(() => ({
    color: "#fff",
    fontFamily: "vazir-bold",
    fontSize: 13,
    maxWidth: "70px",
    backgroundColor: "#F1C400",
    "&:hover": {
      backgroundColor: "#c19e06",
    },
  }));

  const outerTheme = useTheme();
  return (
    <>
      <ThemeProvider theme={customTheme(outerTheme)}>
        <form className="w-[65%] grid grid-cols-2 gap-3">
          <TextInput id={"short-description"} label={"عنوان"} />
          <TextInput id={"task-title"} label={"توضیح کوتاه"} />
          <TextInput id={"date"} type={"date"} />
          <CategorySelect
            id={"category"}
            label={"دسته بندی"}
            options={[{ title: "پیشفرض", value: "defult" }]}
          />
          <TextArea id={"description"} label={"توضیحات"} rows={4} />
          <div className="w-full col-span-2 flex justify-end">
            <SubmitButton>ذخیره</SubmitButton>
          </div>
        </form>
      </ThemeProvider>
    </>
  );
}

export default Form;
