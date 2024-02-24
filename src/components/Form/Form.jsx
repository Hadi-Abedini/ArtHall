import React, { useState } from "react";
import { Button, ThemeProvider, createTheme, styled } from "@mui/material";

import TextInput from "./TextInput";
import CategorySelect from "./CategorySelect";
import TextArea from "./TextArea";
import { FormContext } from "../../context/FormContext";

const customTheme = (outerTheme) =>
  createTheme({
    direction: "rtl",
    typography: {
      fontFamily: "vazir-regular",
      fontSize: 13,
    },
  });

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

function Form() {
  const [formValues, setFormValues] = useState({});

  const handleSubmit = (e) => {
    console.log(formValues);
  };

  return (
    <>
      <ThemeProvider theme={customTheme()}>
        <form
          onSubmit={handleSubmit}
          className="w-[65%] grid grid-cols-2 gap-3">
          <FormContext.Provider value={{ formValues, setFormValues }}>
            <TextInput id={"short-description"} label={"عنوان"} />
            <TextInput id={"task-title"} label={"توضیح کوتاه"} />
            <TextInput id={"date"} type={"date"} />
            <CategorySelect
              id={"category"}
              label={"دسته بندی"}
              options={[{ title: "پیشفرض", value: "defult" }]}
            />
            <TextArea id={"description"} label={"شرح"} rows={4} />
            <div className="w-full col-span-2 flex justify-end">
              <SubmitButton type="submit">ذخیره</SubmitButton>
            </div>
          </FormContext.Provider>
        </form>
      </ThemeProvider>
    </>
  );
}

export default Form;
