import React, { useState } from "react";
import { useFormContext } from "../context/FormContext";
import { IoMdCheckmark } from "react-icons/io";
const FormStep3 = () => {
  const { state, dispatch } = useFormContext();
  const [addOn, setAddOn] = useState([]);
  const billingCycle = state.formData.billingCycle;

  const handleAddOnChange = (selected) => {
    setAddOn((prevAddOn) => {
      if (prevAddOn.includes(selected)) {
        return prevAddOn.filter((item) => item !== selected);
      } else {
        return [...prevAddOn, selected];
      }
    });
  };

  const handleSubmission = async () => {
    await dispatch({
      type: "UPDATE_FORM_DATA",
      payload: { addon: addOn },
    });
    dispatch({ type: "NEXT_STEP" });
  };

  return (
    <div className="flex flex-col my-2 gap-4">
      <div>
        <h1 className="font-extrabold text-3xl">Pick add-ons</h1>
        <p className="text-sm text-neutral-cool-gray leading-none">
          Add-ons help enhance your gaming experience.
        </p>
      </div>
      <form className="flex flex-col gap-2 md:gap-4 text-sm md:text-md text-primary-marine-blue">
        {/* Add-on Online */}
        <div
          className={`flex flex-row items-center justify-between h-1/3 p-2  border border-neutral-cool-gray rounded-md  cursor-pointer hover:border-primary-marine-blue ${
            addOn.includes("online-service") &&
            "border-primary-marine-blue border-2 bg-neutral-alabaster"
          }`}
          onClick={() => handleAddOnChange("online-service")}
        >
          <div className="flex flex-row items-center gap-2">
          <label
            htmlFor="addonOnline"
            className={`h-6 w-6  flex items-center justify-center border border-neutral-cool-gray rounded-md ${
              addOn.includes("online-service") ? "bg-primary-marine-blue" : ""
            }`}
          >
            {addOn.includes("online-service") && (
              <IoMdCheckmark className="text-white md:text-2xl" />
            )}
          </label>
          <div className="font-bold">
            <h6 className="font-extrabold text-lg md:text-xl">Online service</h6>
            <p className="text-neutral-cool-gray ">
              Access to multiplayer games
            </p>
          </div>
          </div>
          <div>
            <p className="text-neutral-cool-gray">
              {billingCycle === "monthly" ? "+$1/mo" : "+$10/yr"}
            </p>
          </div>
        </div>
         {/* Add-on storage */}
         <div
          className={`flex flex-row items-center justify-between h-1/3 p-2  border border-neutral-cool-gray rounded-md  cursor-pointer hover:border-primary-marine-blue ${
            addOn.includes("large-storage") &&
            "border-primary-marine-blue border-2 bg-neutral-alabaster"
          }`}
          onClick={() => handleAddOnChange("large-storage")}
        >
          <div className="flex flex-row items-center gap-2">
          <label
            htmlFor="addonStorage"
            className={`h-6 w-6  flex items-center justify-center border border-neutral-cool-gray rounded-md ${
              addOn.includes("large-storage") ? "bg-primary-marine-blue" : ""
            }`}
          >
            {addOn.includes("large-storage") && (
              <IoMdCheckmark className="text-white md:text-2xl" />
            )}
          </label>
          <div className="font-bold">
            <h6 className="font-extrabold text-lg md:text-xl">Large storage</h6>
            <p className="text-neutral-cool-gray ">
              Extra 1TB of cloud save
            </p>
          </div>
          </div>
          <div>
            <p className="text-neutral-cool-gray">
              {billingCycle === "monthly" ? "+$2/mo" : "+$20/yr"}
            </p>
          </div>
        </div>
         {/* Add-on profile */}
         <div
          className={`flex flex-row items-center justify-between h-1/3 p-2  border border-neutral-cool-gray rounded-md  cursor-pointer hover:border-primary-marine-blue ${
            addOn.includes("customizable-profile") &&
            "border-primary-marine-blue border-2 bg-neutral-alabaster"
          }`}
          onClick={() => handleAddOnChange("customizable-profile")}
        >
          <div className="flex flex-row items-center gap-2">
          <label
            htmlFor="addonProfile"
            className={`h-6 w-6  flex items-center justify-center border border-neutral-cool-gray rounded-md ${
              addOn.includes("customizable-profile") ? "bg-primary-marine-blue" : ""
            }`}
          >
            {addOn.includes("customizable-profile") && (
              <IoMdCheckmark className="text-white md:text-2xl" />
            )}
          </label>
          <div className="font-bold">
            <h6 className="font-extrabold text-lg md:text-xl">Customizable profile</h6>
            <p className="text-neutral-cool-gray ">
              Custom theme on your profile
            </p>
          </div>
          </div>
          <div>
            <p className="text-neutral-cool-gray">
              {billingCycle === "monthly" ? "+$2/mo" : "+$20/yr"}
            </p>
          </div>
        </div>

        {/* previous next buttons */}
        <div className="hidden md:flex justify-between mt-8">
          <button
            className=" text-xl text-neutral-cool-gray hover:cursor-pointer hover:text-black"
            onClick={() => {
              dispatch({ type: "PREVIOUS_STEP" });
            }}
          >
            Go Back
          </button>

          <button
            className="bg-primary-marine-blue text-white rounded-md w-32 p-3 disabled:opacity-50"
            onClick={handleSubmission}
          >
            Next Step
          </button>
        </div>

        {/* mobile button */}
        <div className="md:hidden flex flex-row bg-white fixed w-screen  bottom-0 left-0 p-4 justify-between">
          <button
            className=" text-xl text-neutral-cool-gray hover:cursor-pointer hover:text-black"
            onClick={() => {
              dispatch({ type: "PREVIOUS_STEP" });
            }}
          >
            Go Back
          </button>

          <button
            className="bg-primary-marine-blue text-white rounded-md w-32 p-3 disabled:opacity-50"
            onClick={handleSubmission}
          >
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormStep3;
