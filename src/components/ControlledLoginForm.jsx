import React, { useState } from "react";

const ControlledLoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-start">
      <label htmlFor="email" className="text-base">
        Email:
      </label>
      <span className="flex items-center gap-5">
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-200 rounded-md py-1 px-4 text-base"
        />
        {email}
      </span>

      <label htmlFor="password" className="text-base mt-4">
        Password:
      </label>
      <span className="flex items-center gap-5">
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-200 rounded-md py-1 px-4 text-base"
        />
        {password}
      </span>

      <button
        type="submit"
        className="rounded-md bg-gray-500 text-white px-10 py-2 mt-10"
      >
        Submit
      </button>
    </form>
  );
};

export default ControlledLoginForm;
