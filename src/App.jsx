import React, { useState } from "react";
import BgImage from "./assets/images/bg-sidebar-desktop.svg";

const App = () => {
  const [progresStep, setProgresStep] = useState();
  return (
    <div className="bg-white w-[70vw] h-[80vh] rounded-xl p-3 flex gap-24">
      <div
        className="w-[270px] rounded-xl h-full bg-cover bg-repeat bg-bottom"
        style={{ backgroundImage: `url(${BgImage})` }}
      >
        <table class="table-fixed">
          <tbody className="flex flex-col text-white mt-8 mx-8 gap-4 ">
            <tr className="flex flex-row gap-4  items-center">
              <td>
                <div className="border border-neutral-light-gray text-center rounded-full w-[30px] h-[30px] text-sm pt-1">
                  1
                </div>
              </td>
              <td>
                <p className="text-neutral-light-gray text-sm">STEP 1</p>
                <span className="text-sm font-medium">YOUR INFO</span>
              </td>
            </tr>
            <tr className="flex flex-row gap-4 items-center">
              <td>
                <div className="border border-neutral-light-gray text-center rounded-full w-[30px] h-[30px] text-sm pt-1">
                  2
                </div>
              </td>
              <td>
                <p className="text-neutral-light-gray text-sm">STEP 2</p>
                <span className="text-sm font-medium">SELECT PLAN</span>
              </td>
            </tr>
            <tr className="flex flex-row gap-4 items-center">
              <td>
                <div className="border border-neutral-light-gray text-center rounded-full w-[30px] h-[30px] text-sm pt-1">
                  3
                </div>
              </td>
              <td>
                <p className="text-neutral-light-gray text-sm">STEP 3</p>
                <span className="text-sm font-medium">ADD-ONS</span>
              </td>
            </tr>
            <tr className="flex flex-row gap-4 items-center">
              <td>
                <div className="border border-neutral-light-gray text-center rounded-full w-[30px] h-[30px] text-sm pt-1">
                  4
                </div>
              </td>
              <td>
                <p className="text-neutral-light-gray text-sm">STEP 4</p>
                <span className="text-sm font-medium">SUMMARY</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className=""></div>
    </div>
  );
};

export default App;
