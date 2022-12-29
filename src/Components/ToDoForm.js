import { useState } from "react";

export const ToDoForm = ({ addTask, setStatus }) => {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={userInput}
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder="Введите значение..."
      />
      <button>Save Task</button>
      <select onChange={statusHandler}>
        <option>all</option>
        <option>complete</option>
        <option>uncomplete</option>
      </select>
    </form>
  );
};
