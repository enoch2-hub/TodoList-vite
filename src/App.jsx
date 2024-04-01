import React, { useState } from "react";
import "./App.css";
import TodoList from "./Pages/TodoList";

function App() {
  const [todoLists, setTodoLists] = useState([<TodoList key={0} />]);

  const duplicateTodoList = () => {
    const newKey = todoLists.length;
    setTodoLists([...todoLists, <TodoList key={newKey} />]);
  };

  const deleteTodoList = (index) => {
    const updatedLists = todoLists.filter((_, i) => i !== index);
    setTodoLists(updatedLists);
  };

  return (
    <div className="App">
      {todoLists.map((todo, index) => (
        <div key={index}>
          {todo}
          <button onClick={() => deleteTodoList(index)}>Delete</button>
        </div>
      ))}
      <button onClick={duplicateTodoList}>New Section</button>
    </div>
  );
}

export default App;
