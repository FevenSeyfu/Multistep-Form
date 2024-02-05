import React from "react";
import { useFormContext } from "./context/FormContext";
import BgImage from "./assets/images/bg-sidebar-desktop.svg";
import BgSidebarMobile from "./assets/images/bg-sidebar-mobile.svg";
import FormStep1 from "./components/FormStep1";
import FormStep2 from "./components/FormStep2";
import FormStep3 from "./components/FormStep3";
import FormStep4 from "./components/FormStep4";

const MainForm = ({ step }) => {
  switch (step) {
    case 1:
      return <FormStep1 />;
    case 2:
      return <FormStep2 />;
    case 3:
      return <FormStep3 />;
    case 4:
      return <FormStep4 />;
    default:
      return null;
  }
};
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
  const { state } = useFormContext();
  return (
    <>
      {/* mobile */}
      <div className="relative md:hidden flex flex-col w-full h-screen items-center">
        <div
          className=" bg-[url('/src/assets/images/bg-sidebar-mobile.svg')] w-screen h-[10rem] bg-cover bg-no-repeat bg-center"
       >
          <ul className="flex flex-row w-full pt-8 justify-center gap-4">
            {steps.map((step, index) => (
              <li
                key={index}
                className={`border border-white  text-white text-center rounded-full w-[40px] h-[40px] text-lg pt-1 ${
                  step.id === state.step &&
                  "bg-primary-pastel-blue border-primary-pastel-blue text-gray-900  font-bold"
                }`}
              >
                {step.id}
              </li>
            ))}
          </ul>
        </div>
        <div className="absolute top-[6rem] bg-white rounded-xl w-[90%] py-[1rem] px-6 md:px-[2rem]">
          <MainForm  step={state.step} />
        </div>
      </div>
      {/* desktop */}
      <div className="hidden md:flex bg-white w-[70vw] h-[80vh] rounded-xl p-3 gap-[4rem]">
        <div
          className="w-[270px] rounded-xl h-full bg-cover bg-repeat bg-bottom bg-[url('/src/assets/images/bg-sidebar-desktop.svg')]"
        >
          <table className="table-fixed">
            <tbody className="flex flex-col text-white mt-8 mx-8 gap-4 ">
              {steps.map((step, index) => (
                <tr className="flex flex-row gap-4  items-center" key={index}>
                  <td>
                    <div
                      className={`border border-neutral-light-gray text-center rounded-full w-[30px] h-[30px] text-sm pt-1 ${
                        step.id === state.step &&
                        "bg-primary-pastel-blue text-black text-bold"
                      }`}
                    >
                      {step.id}
                    </div>
                  </td>
                  <td>
                    <p className="text-neutral-light-gray  text-sm">
                      {step.step}
                    </p>
                    <span className="font-medium">{step.title}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="w-4/6 pr-16">
          <MainForm  step={state.step}/>
        </div>
      </div>
    </>
  );
};

export default App;
