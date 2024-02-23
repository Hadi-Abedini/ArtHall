import React from "react";
import Form from "../../components/Form/Form";

function AddTask() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-3/5 flex flex-col gap-14">
        <h1 className="text-3xl text-white">افزودن</h1>
        <div className="w-full justify-center items-center flex">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default AddTask;
