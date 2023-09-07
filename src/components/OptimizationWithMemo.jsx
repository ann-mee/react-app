import { useState, memo } from "react";

const Greeting = memo(({ name }) => {
  console.log("Greeting is rendering");
  return <p>Hello {name}!</p>;
});

const OptimizationWithMemo = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  return (
    <div className="flex flex-col">
      <label>
        Name{": "}
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-200 rounded-md py-1 px-4 text-base"
        />
      </label>
      <label>
        Address{": "}
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="border border-gray-200 rounded-md py-1 px-4 text-base"
        />
      </label>
      <Greeting name={name} />
    </div>
  );
};

export default OptimizationWithMemo;
