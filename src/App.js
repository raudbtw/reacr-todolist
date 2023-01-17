import { useState, useEffect } from "react";
import { v4 } from "uuid";
import { ToDo } from "./Components/ToDo";
import { ToDoForm } from "./Components/ToDoForm";

export const App = () => {
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filterToDos, setFilterToDos] = useState([]);

  useEffect(() => {
    filterHandler();
  }, [status]);

  const filterHandler = () => {
    switch (status) {
      case "complete":
        setFilterToDos(todos.filter((todo) => (todo.completed = true)));
        break;
      case "uncomplete":
        setFilterToDos(todos.filter((todo) => (todo.completed = false)));
        break;
      default:
        setFilterToDos(todos);
        break;
    }
  };

  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: v4(),
        task: userInput,
        isDone: false,
      };
      setTodos([...todos, newItem]);
    }
  };

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const handleToggle = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : { ...todo }
      ),
    ]);
  };

  return (
    <div className="App">
      <header>
        <h1>Список задач: {todos.length}</h1>
      </header>
      <ToDoForm setStatus={setStatus} addTask={addTask} />
      {filterToDos.map((todo) => {
        return (
          <ToDo
            todo={todo}
            key={todo.id}
            toggleTask={handleToggle}
            removeTask={removeTask}
            filterToDos={filterToDos}
          />
        );
      })}
    </div>
  );
};
