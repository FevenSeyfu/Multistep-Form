import React from "react";

const FormStep1 = () => {
  return (
    <div className="flex flex-col my-8 gap-4">
      <div>
        <h1 className="font-extrabold text-3xl">Personal info</h1>
        <p className="text-sm text-neutral-cool-gray leading-none">
          Please provide your name,email and phone number.
        </p>
      </div>
      <form className="flex flex-col gap-2 ">
        <label htmlFor="name" className="font-bold">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="e.g Stephen King"
          className="w-full border border-neutral-cool-gray p-2 rounded-md mb-2"
        />
        <label htmlFor="email" className="font-bold">
          Email Address
        </label>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="e.g stephenking@lorem.com"
          className="w-full border border-neutral-cool-gray p-2 rounded-md mb-2"
        />
        <label htmlFor="phone" className="font-bold">
          Phone Number
        </label>
        <input
          type="text"
          name="phone"
          id="phone"
          placeholder="e.g.+1 234 456 890"
          className="w-full border border-neutral-cool-gray p-2 rounded-md mb-4"
        />
        <div className="flex justify-end mt-8">
        <button className="bg-primary-marine-blue text-white rounded-md w-32 p-3 ">
          Next Step
        </button>
        </div>
      </form>
    </div>
  );
};

export default FormStep1;
