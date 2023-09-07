import OptimizationCommonState from "../components/OptimizationCommonState";
import OptimizationLocalState from "../components/OptimizationLocalState";
import OptimizationWithoutMemo from "../components/OptimizationWithoutMemo";
import OptimizationWithMemo from "../components/OptimizationWithMemo";
import OptimizationWithoutCallback from "../components/OptimizationWithoutCallback";
import OptimizationWithCallback from "../components/OptimizationWithCallback";

const Optimization = () => {
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold mt-10 mb-5">Common and local state</h2>

      <div className="grid grid-cols-2 gap-5 mb-16">
        <div className="border-r border-gray-200">
          <h3 className="text-xl font-bold mt-10 mb-5">
            Components with common state
          </h3>
          <OptimizationCommonState />
        </div>
        <div>
          <h3 className="text-xl font-bold mt-10 mb-5">
            Components with local state
          </h3>
          <OptimizationLocalState />
        </div>
      </div>

      <hr />

      <h2 className="text-3xl font-bold mt-10 mb-5">Memoization</h2>
      <div className="grid grid-cols-2 gap-5 mb-16">
        <div className="border-r border-gray-200">
          <h3 className="text-xl font-bold mt-10 mb-5">
            Components without memo
          </h3>
          <OptimizationWithoutMemo />
        </div>
        <div>
          <h3 className="text-xl font-bold mt-10 mb-5">Components with memo</h3>
          <OptimizationWithMemo />
        </div>
      </div>

      <hr />

      <h2 className="text-3xl font-bold mt-10 mb-5">useCallback</h2>
      <div className="grid grid-cols-2 gap-5">
        <div className="border-r border-gray-200">
          <h3 className="text-xl font-bold mt-10 mb-5">
            Components without useCallback
          </h3>
          <OptimizationWithoutCallback />
        </div>
        <div>
          <h3 className="text-xl font-bold mt-10 mb-5">
            Components with useCallback
          </h3>
          <OptimizationWithCallback />
        </div>
      </div>
    </div>
  );
};

export default Optimization;
