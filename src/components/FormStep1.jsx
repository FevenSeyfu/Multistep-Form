import React, { useState } from "react";
import { useFormContext } from "../context/FormContext";

const FormStep1 = () => {
  const { state, dispatch } = useFormContext();
  const [touchedFields, setTouchedFields] = useState({
    name: false,
    email: false,
    phone: false,
  });

  const handleChange = (fieldName, e) => {
    dispatch({
      type: "UPDATE_FORM_DATA",
      payload: { [fieldName]: e.target.value },
    });
  };

  const handleBlur = (fieldName) => {
    setTouchedFields((prevTouched) => ({ ...prevTouched, [fieldName]: true }));
  };

  const isRequiredFieldValid = (fieldValue) => {
    return fieldValue.trim() !== "";
  };

  const displayError = (fieldName, error) => {
    return touchedFields[fieldName] && !isRequiredFieldValid(state.formData[fieldName]) && (
      <p className="text-red-500 text-left text-sm">{error}</p>
    );
  };

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const isValidPhone = (phone) => {
    return /^\+?[0-9]\d{9,14}$/.test(phone);
  };

  const isFormValid = () => {
    const { name, email, phone } = state.formData;
    return (
      name.trim() !== "" &&
      email.trim() !== "" &&
      isValidEmail(email) &&
      isValidPhone(phone)
    );
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
        <label
          htmlFor="name"
          className="font-bold flex flex-row items-center justify-between"
        >
          Name
          {displayError("name", "This field is required")}
        </label>
        <input
          type="text"
          name="name"
          id="nameInput"
          placeholder="e.g Stephen King"
          className={`w-full border ${
            touchedFields.name && !isRequiredFieldValid(state.formData.name)
              ? "border-red-500  focus:outline-red-500"
              : "border-neutral-cool-gray"
          } p-2 rounded-md mb-2`}
          value={state.formData.name}
          onChange={(e) => handleChange("name", e)}
          onBlur={() => handleBlur("name")}
        />

        <label htmlFor="email" className="font-bold flex flex-row items-center justify-between">
          Email Address
          {displayError("email", "This field is required")}
          {touchedFields.email && state.formData.email.trim() !== "" && !isValidEmail(state.formData.email) && (
            <p className="text-red-500 text-left text-sm">
              Please insert a valid email.
            </p>
          )}
        </label>
        <input
          type="email"
          name="email"
          id="emailInput"
          placeholder="e.g stephenking@lorem.com"
          className={`w-full border ${
            (touchedFields.email && state.formData.email.trim() === "") || (touchedFields.email && !isValidEmail(state.formData.email)) 
              ? "border-red-500  focus:outline-red-500"
              : "border-neutral-cool-gray focus:outline-black" 
          } p-2 rounded-md mb-2`}
          value={state.formData.email}
          onChange={(e) => handleChange("email", e)}
          onBlur={() => handleBlur("email")}
        />

        <label htmlFor="phone" className="font-bold flex flex-row items-center justify-between text-nowrap">
          Phone Number
          {displayError("phone", "This field is required")}
          {touchedFields.phone && state.formData.phone.trim() !== "" && !isValidPhone(state.formData.phone) && (
            <p className="text-red-500 text-left text-sm">
              Please insert a valid Number
            </p>
          )}
        </label>
        <input
          type="tel"
          name="phone"
          id="phoneNumber"
          placeholder="e.g.+1 234 456 890"
          className={`w-full border ${
            (touchedFields.phone && state.formData.phone.trim() === "") || (touchedFields.phone && !isValidPhone(state.formData.phone)) 
              ? "border-red-500  focus:outline-red-500"
              : "border-neutral-cool-gray"
          } p-2 rounded-md mb-4`}
          value={state.formData.phone}
          onChange={(e) => handleChange("phone", e)}
          onBlur={() => handleBlur("phone")}
        />
        <div className="hidden md:flex justify-end mt-8">
          <button
            className="bg-primary-marine-blue text-white rounded-md w-32 p-3 disabled:opacity-90"
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
        {/* mobile */}
        <div className="md:hidden flex flex-row bg-white fixed w-screen  bottom-0 left-0 p-4 justify-end">
          <button
            className="bg-primary-marine-blue text-white rounded-md w-32 p-3 disabled:opacity-90"
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
  );
};

export default FormStep1;
