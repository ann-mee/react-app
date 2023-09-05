import { useState, memo } from "react";

const Greeting = memo(({ name }) => {
  console.log("Greeting was rendered at", new Date().toLocaleTimeString());
  return <p>Hello {name}!</p>;
});

const PureComponent = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold">Pure component</h1>
      <div className="grid grid-cols-2 gap-5">
        <div className="border-r border-gray-200 flex flex-col">
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
      </div>
    </div>
  );
};

export default PureComponent;
