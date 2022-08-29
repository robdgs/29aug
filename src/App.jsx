import { useState } from "react";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  console.log("Render Component App");
  const [list, setList] = useState([]);

  return (
    <div className="App">
      <h1>To Do List</h1>
      <TodoList list={list} setList={setList} />
    </div>
  );
}

export default App;
