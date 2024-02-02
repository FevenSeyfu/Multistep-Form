import React, { useState } from "react";
import { useFormContext } from "../context/FormContext";

const FormStep4 = () => {
  const { state, dispatch } = useFormContext();
  const handleChange = (fieldName, e) => {
    dispatch({
      type: "UPDATE_FORM_DATA",
      payload: { [fieldName]: e.target.value },
    });
  };
  const isFormValid = () => {
    return true;
  };
  return (
    <div className="flex flex-col my-8 gap-4">
      <div>
        <h1 className="font-extrabold text-3xl">Select your plan</h1>
        <p className="text-sm text-neutral-cool-gray leading-none">
          You have the option of monthly or yearly billing.
        </p>
      </div>
      <form className="flex flex-col gap-2 ">
        
        <div className="hidden md:flex justify-between mt-8">
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
            className="bg-primary-purplish-blue text-white rounded-md w-32 p-3 disabled:opacity-50"
            onClick={() => {
              if (isFormValid()) {
                dispatch({ type: "NEXT_STEP" });
              }
            }}
            disabled={!isFormValid()}
          >
            Confirm
          </button>
        </div>

        {/* mobile button */}
        <div className="md:hidden flex flex-row bg-white fixed w-screen  bottom-0 left-0 p-4 justify-between">
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
            className="bg-primary-purplish-blue text-white rounded-md w-32 p-3 disabled:opacity-50"
            onClick={() => {
              if (isFormValid()) {
                dispatch({ type: "NEXT_STEP" });
              }
            }}
            disabled={!isFormValid()}
          >
            Confirm
          </button>
        </div>
      </form>
    </div>
  )
}

export default FormStep4