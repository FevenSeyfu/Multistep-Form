import React from 'react';
import { useFormContext } from './context/FormContext';
import BgImage from './assets/images/bg-sidebar-desktop.svg';
import FormStep1 from './components/FormStep1';
import FormStep2 from './components/FormStep2';
import FormStep3 from './components/FormStep3';
import FormStep4 from './components/FormStep4';

const App = () => {
  const steps = [
    {
      id: 1,
      step: 'STEP 1',
      title: 'YOUR INFO',
    },
    {
      id: 2,
      step: 'STEP 2',
      title: 'SELECT PLAN',
    },
    {
      id: 3,
      step: 'STEP 3',
      title: 'ADD-ONS',
    },
    {
      id: 4,
      step: 'STEP 4',
      title: 'SUMMARY',
    },
  ];
  const { state } = useFormContext();
  return (
    <div className="bg-white w-[70vw] h-[80vh] rounded-xl p-3 flex gap-24">
      <div
        className="w-[270px] rounded-xl h-full bg-cover bg-repeat bg-bottom"
        style={{ backgroundImage: `url(${BgImage})` }}
      >
        <table className="table-fixed">
          <tbody className="flex flex-col text-white mt-8 mx-8 gap-4 ">
            {steps.map((step, index) => (
              <tr className="flex flex-row gap-4  items-center" key={index}>
                <td>
                  <div
                    className={`border border-neutral-light-gray text-center rounded-full w-[30px] h-[30px] text-sm pt-1 ${
                      step.id === state.step && 'bg-primary-pastel-blue text-black text-bold'
                    }`}
                  >
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
      <div className="">
        {(() => {
          switch (state.step) {
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
        })()}
      </div>
    </div>
  );
};

export default App;