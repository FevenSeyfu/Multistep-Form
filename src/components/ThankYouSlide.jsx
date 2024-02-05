import React from "react";
import thankYouIcon from "../assets/images/icon-thank-you.svg";

const ThankYouSlide = () => {
  return (
    <div className="flex flex-col justify-center  gap-2 text-lg items-center  px-4 my-[20%]">
      <img src={thankYouIcon} alt="thank you icon" />
      <h1 className="text-3xl font-extrabold mt-4 text-primary-marine-blue"> Thank you!</h1>
      <p className="text-center text-neutral-cool-gray">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};

export default ThankYouSlide;
