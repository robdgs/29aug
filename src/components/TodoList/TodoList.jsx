import { useState } from "react";
import { memo } from "react";
import TodoItem from "../TodoItem";
import "./index.css";

const TodoList = ({ list, setList }) => {
  const [todoInput, setTodoInput] = useState("");
  console.log("Render Component TodoList");
  const onHandleClick = () => {
    setList([...list, { id: list.length + 1, text: todoInput }]);
    setTodoInput("");
  };

  const removeTask = (i) => {
    const newItem = [...list];
    newItem.splice(i);
    setList(newItem);
  };

  const cancelTask = () => removeTask();

  return (
    <div className="TodoList">
      <input
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        placeholder="Cosa vuoi ricordarti oggi?"
      />
      <button className="TodoList__Add" onClick={onHandleClick}>Add</button>
      <button className="TodoList__Clear" onClick={cancelTask}>
        Clear List
      </button>
      <div className="toDoItem">
        {list.length ? (
          list.map((todo) => <TodoItem todo={todo} key={todo.id} />)
        ) : (
          <p>Crea la tua prima nota</p>
        )}
      </div>
    </div>
  );
};

export default memo(TodoList);
