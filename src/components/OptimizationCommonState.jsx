import { useState } from "react";

const ChildComponent = () => {
  console.log("child component is rendering");
  return <div>This is child component.</div>;
};

const OptimizationCommonState = () => {
  const [input, setInput] = useState("");
  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border border-gray-200 rounded-md py-1 px-4 text-base"
      />
      <h3>Input text: {input}</h3>
      <ChildComponent />
    </>
  );
};

export default OptimizationCommonState;
