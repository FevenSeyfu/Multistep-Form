import React, { useState } from "react";
import BgImage from "./assets/images/bg-sidebar-desktop.svg";

const App = () => {
  const steps = [
    {
      id: 1,
      step: "STEP 1",
      title: "YOUR INFO",
    },
    {
      id: 2,
      step: "STEP 2",
      title: "SELECT PLAN",
    },
    {
      id: 3,
      step: "STEP 3",
      title: "ADD-ONS",
    },
    {
      id: 4,
      step: "STEP 4",
      title: "SUMMARY",
    },
  ];
  const [currentStep, setCurrentStep] = useState(0);
  const nextStep = () => {
    setCurrentStep((prevStep) => (prevStep + 1) % steps.length);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => (prevStep - 1 + steps.length) % steps.length);
  };

  return (
    <div className="bg-white w-[70vw] h-[80vh] rounded-xl p-3 flex gap-24">
      <div
        className="w-[270px] rounded-xl h-full bg-cover bg-repeat bg-bottom"
        style={{ backgroundImage: `url(${BgImage})` }}
      >
        <table class="table-fixed">
          <tbody className="flex flex-col text-white mt-8 mx-8 gap-4 ">
            {steps.map((step, index) => (
              <tr className="flex flex-row gap-4  items-center" key={index}>
                <td>
                  <div className={`border border-neutral-light-gray text-center rounded-full w-[30px] h-[30px] text-sm pt-1 ${
              index === currentStep && ("bg-primary-pastel-blue text-black text-bold") }`}>
                    {step.id}
                  </div>
                </td>
                <td>
                  <p className="text-neutral-light-gray  text-sm">{step.step}</p>
                  <span className="font-medium">{step.title}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className=""></div>
    </div>
  );
};

export default App;
