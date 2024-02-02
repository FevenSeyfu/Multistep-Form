import React, { useState } from "react";
import { useFormContext } from "../context/FormContext";

const FormStep2 = () => {
  const { state, dispatch } = useFormContext();
  const handleChange = (fieldName, e) => {
    dispatch({
      type: "UPDATE_FORM_DATA",
      payload: { [fieldName]: e.target.value },
    });
  };

  const isFormValid = () => {
    const { billingCycle , billingPlan, } = state.formData;
    return true
  };
  return (
    <div className="flex flex-col my-8 gap-4">
    <div>
      <h1 className="font-extrabold text-3xl">Personal info</h1>
      <p className="text-sm text-neutral-cool-gray leading-none">
        Please provide your name, email, and phone number.
      </p>
    </div>
    <form className="flex flex-col gap-2 ">

      <div className="flex justify-between mt-8">
      <button
          className=" text-xl text-neutral-cool-gray hover:cursor-pointer hover:text-black"
          onClick={() => {
            if (isFormValid()) {
              dispatch({ type: "PREVIOUS_STEP" });
            }
          }}
          disabled={!isFormValid()}
        >
          Go Back
        </button>

        <button
          className="bg-primary-marine-blue text-white rounded-md w-32 p-3 disabled:opacity-50"
          onClick={() => {
            if (isFormValid()) {
              dispatch({ type: "NEXT_STEP" });
            }
          }}
          disabled={!isFormValid()}
        >
          Next Step
        </button>
      </div>
    </form>
  </div>
  )
}

export default FormStep2