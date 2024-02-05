import React, { useState } from "react";
import { useFormContext } from "../context/FormContext";

const FormStep4 = () => {
  const { state, dispatch } = useFormContext();
  const formData = state.formData;
  const isMonthly = formData.billingCycle === "monthly" ? true : false;
  const time = isMonthly ? "mo" : "yr";
  let billingPlan = formData.billingPlan;
  let totalAmount = 0;
  let packageAmount = 0;

  switch (formData.billingPlan) {
    case "arcade":
      packageAmount = isMonthly ? 9 : 90;
      break;
    case "advanced":
      packageAmount = isMonthly ? 12 : 120;
      break;
    case "pro":
      packageAmount = isMonthly ? 15 : 150;
      break;
    default:
      packageAmount = 0;
  }
  totalAmount += parseInt(packageAmount);
  function findAddOnAmount(addOn) {
    let addOnAmount;
    switch (addOn) {
      case "online-service":
        addOnAmount = isMonthly ? 1 : 10;
        break;
      case "large-storage":
      case "customizable-profile":
        addOnAmount = isMonthly ? 2 : 20;
        break;
      default:
        addOnAmount = 0;
    }
    totalAmount += addOnAmount;
    return addOnAmount;
  }
  let plan = billingPlan.charAt(0).toUpperCase() + billingPlan.slice(1);
  function formatAddOnName(addon) {
    const formattedName = addon
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    return formattedName;
  }
  return (
    <div className="flex flex-col my-8 gap-4">
      <div>
        <h1 className="font-extrabold text-3xl">Finish Up</h1>
        <p className=" text-neutral-cool-gray leading-none">
          Double-check everything looks OK before confirming.
        </p>
      </div>
      <div className="flex flex-col gap-2 bg-neutral-magnolia text-primary-marine-blue p-4 rounded-md">
        <ul>
          <li className="flex flex-row justify-between items-center font-extrabold">
            <span className="flex flex-col">
              <h4 className="">{plan}</h4>
              <a
                href="#"
                className="text-sm font-normal underline text-neutral-cool-gray hover:text-primary-purplish-blue"
              >
                Change
              </a>
            </span>
            <p>${packageAmount + "/" + time}</p>
          </li>
          <hr className="w-full my-4" />
          {formData.addon.length > 0 &&
            formData.addon.map((addon) => (
              <li
                className="flex flex-row justify-between items-center text-sm"
                key={addon}
              >
                <p className="text-neutral-cool-gray ">
                  {formatAddOnName(addon)}
                </p>
                <p>+${findAddOnAmount(addon) + "/" + time}</p>
              </li>
            ))}
        </ul>
      </div>
      <div
        className="flex flex-row justify-between items-center text-sm"
      >
        <p className="text-neutral-cool-gray ">
          Total(per {isMonthly ? "month" : "year"})
        </p>
        <p className="text-lg text-primary-purplish-blue font-bold">+${totalAmount + "/" + time}</p>
      </div>
      <div className="flex flex-col gap-2 ">
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
            className="bg-primary-purplish-blue text-white rounded-md w-32 p-3 hover:opacity-80 cursor-pointer"
            onClick={() => {
              dispatch({ type: "NEXT_STEP" });
            }}
          >
            Confirm
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
            className="bg-primary-purplish-blue text-white rounded-md w-32 p-3 hover:opacity-80 cursor-pointer"
            onClick={() => {
              dispatch({ type: "NEXT_STEP" });
            }}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormStep4;
