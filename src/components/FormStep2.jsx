import React, { useState } from "react";
import { useFormContext } from "../context/FormContext";
import ArcadeIcon from "../assets/images/icon-arcade.svg";
import AdvancedIcon from "../assets/images/icon-advanced.svg";
import ProIcon from "../assets/images/icon-pro.svg";

const FormStep2 = () => {
  const { state, dispatch } = useFormContext();
  const [isMonthly, setIsMonthly] = useState(true);
  const [plan,setPlan] =  useState('arcade')

  const handleToggleClick = (e) => {
    e.preventDefault();
    setIsMonthly((prevIsMonthly) => !prevIsMonthly);
  };

  const handlePlanChange = (selected) => {
    setPlan(selected)
  };
  const handleSubmission = async () => {
    await dispatch({
      type: "UPDATE_FORM_DATA",
      payload: { billingPlan: plan, billingCycle: isMonthly ? 'monthly' : 'yearly' },
    });
    dispatch({ type: "NEXT_STEP" });
  };

  return (
    <div className="flex flex-col my-2 gap-4">
      <div>
        <h1 className="font-extrabold text-3xl">Select your plan</h1>
        <p className="text-sm text-neutral-cool-gray leading-none">
          You have the option of monthly or yearly billing.
        </p>
      </div>
      <form className="flex flex-col gap-2 ">
        <div className="flex flex-col gap-2  md:gap-4 md:flex-row text-primary-marine-blue">
          {/* arcade */}
          <div
            className={`flex flex-row items-center p-4 gap-4 md:flex-col md:items-start md:w-1/3 border border-neutral-cool-gray md:p-4 rounded-md mb-2 cursor-pointer hover:border-primary-marine-blue  ${
              plan === "arcade" &&
              "border-primary-marine-blue border-2 bg-neutral-alabaster"
            }`}
            onClick={() => handlePlanChange("arcade")}
          >
            <img
              src={ArcadeIcon}
              alt="Arcade Icon"
              className="h-12  md:mb-8"
            />
            <div className="font-bold">
              <h6 className="font-extrabold text-xl">Arcade</h6>
              {isMonthly ? (
                <p className="text-neutral-cool-gray">$9/mo</p>
              ) : (
                <p>
                  <span className="text-neutral-cool-gray">$90/yr </span> <br /> 2 months free
                </p>
              )}
            </div>
          </div>
          {/* advanced */}
          <div
            className={`flex flex-row items-center p-4 gap-4 md:flex-col md:items-start md:w-1/3 border border-neutral-cool-gray md:p-4 rounded-md mb-2 cursor-pointer hover:border-primary-marine-blue hover:border-2${
              plan === "advanced" &&
              "border-primary-marine-blue border-2 bg-neutral-alabaster "
            }`}
            onClick={() => handlePlanChange("advanced")}
          >
            <img
              src={AdvancedIcon}
              alt="Advanced Icon"
              className="h-12  md:mb-8"
            />
            <div className="font-bold">
              <h6 className="font-extrabold text-xl">Advanced</h6>
              {isMonthly ? (
                <p className="text-neutral-cool-gray">$12/mo</p>
              ) : (
                <p>
                  <span className="text-neutral-cool-gray">$120/yr </span> <br /> 2 months free
                </p>
              )}
            </div>
          </div>
          {/* pro */}
          <div
            className={`flex flex-row items-center p-4 gap-4 md:flex-col md:items-start md:w-1/3 border border-neutral-cool-gray md:p-4 rounded-md mb-2 cursor-pointer hover:border-primary-marine-blue hover:border-2${
              plan === "pro" &&
              "border-primary-marine-blue border-2 bg-neutral-alabaster "
            }`}
            onClick={() => handlePlanChange("pro")}
          >
            <img
              src={ProIcon}
              alt="Advanced Icon"
              className="h-12  md:mb-8"
            />
            <div className="font-bold">
              <h6 className="font-extrabold text-xl">Pro</h6>
              {isMonthly ? (
                <p className="text-neutral-cool-gray">$15/mo</p>
              ) : (
                <p>
                  <span className="text-neutral-cool-gray">$150/yr </span> <br /> 2 months free
                </p>
              )}
            </div>
          </div>
        </div>

        {/* billing monthly/yearly toggle */}
        <div className="w-full flex flex-row items-center justify-center bg-neutral-alabaster text-primary-marine-blue text-lg gap-4 p-3 rounded-md">
          <p
            className={`cursor-pointer ${
              isMonthly ? "text-primary-marine-blue" : "text-neutral-cool-gray"
            }`}
            onClick={handleToggleClick}
          >
            Monthly
          </p>
          <button
            className="relative bg-primary-marine-blue w-12 h-6 rounded-full flex  flex-col justify-center"
            onClick={handleToggleClick}
          >
            <span
              className={`bg-white h-4 w-4 rounded-full absolute transition-transform transform my-auto ${
                isMonthly ? "ml-2" : " ml-6"
              }`}
            ></span>
          </button>
          <p
            className={`cursor-pointer ${
              !isMonthly ? "text-primary-marine-blue" : "text-neutral-cool-gray"
            }`}
            onClick={handleToggleClick}
          >
            Yearly
          </p>
        </div>
        {/* previous next buttons */}
        <div className="hidden md:flex justify-between mt-8">
          <button
            className=" text-xl text-neutral-cool-gray hover:cursor-pointer hover:text-black"
            onClick={() => { dispatch({ type: "PREVIOUS_STEP" }) }}
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
            onClick={() => { dispatch({ type: "PREVIOUS_STEP" })}}
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

export default FormStep2;
