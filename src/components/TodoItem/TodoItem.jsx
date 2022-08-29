import "./index.css";

const TodoItem = ({ todo,onHandleDelete }) => {
  console.log("Render Component Item");
  return (
    <div className="TodoItem">
      <h3> - {todo.text}</h3>
      
    </div>
  );
};

export default TodoItem;
