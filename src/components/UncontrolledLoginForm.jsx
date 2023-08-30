import React, { useRef } from "react";

const UncontrolledLoginForm = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-start">
      <label htmlFor="email" className="text-base">
        Email:
      </label>
      <input
        ref={emailRef}
        type="email"
        id="email"
        className="border border-gray-200 rounded-md py-1 px-4 text-base"
      />

      <label htmlFor="password" className="text-base mt-4">
        Password:
      </label>
      <input
        ref={passwordRef}
        type="password"
        id="password"
        className="border border-gray-200 rounded-md py-1 px-4 text-base"
      />

      <button
        type="submit"
        className="rounded-md bg-gray-500 text-white px-10 py-2 mt-10"
      >
        Submit
      </button>
    </form>
  );
};

export default UncontrolledLoginForm;
