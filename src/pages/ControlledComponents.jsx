import ControlledLoginForm from "../components/ControlledLoginForm";
import UncontrolledLoginForm from "../components/UncontrolledLoginForm";

const ControlledComponents = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold">Controlled/Uncontrolled components</h1>
      <div className="grid grid-cols-2 gap-5">
        <div className="border-r border-gray-200">
          <h2 className="text-2xl font-bold mt-10 mb-5">
            Controlled component
          </h2>
          <ControlledLoginForm />
        </div>
        <div>
          <h2 className="text-2xl font-bold mt-10 mb-5">
            Uncontrolled component
          </h2>
          <UncontrolledLoginForm />
        </div>
      </div>
    </div>
  );
};

export default ControlledComponents;
