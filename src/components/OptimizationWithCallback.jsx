import { useState, memo, useCallback } from "react";

const Todos = memo(({ todos, addTodo }) => {
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button
        onClick={addTodo}
        className="bg-gray-500 text-white px-2 py-1 rounded-md"
      >
        Add Todo
      </button>
    </>
  );
});

const OptimizationWithoutCallback = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, []);

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr className="mt-5" />
      <div className="mt-5">
        Count: {count}
        <button
          onClick={increment}
          className="bg-gray-500 text-white px-2 py-0.5 rounded-md ml-2"
        >
          +
        </button>
      </div>
    </>
  );
};

export default OptimizationWithoutCallback;
