const Todo = ({ todo, onCompelete, onDelet }) => {
  return (
    <div className="todo-box" key={todo.id}>
      <div>
        <div className={todo.isCompleited ? "compeleted" : "todo-continaer"}>
          {todo.text}
        </div>
      </div>
      {/* <button className="btn-edit">Edit</button> */}
      <button className="btn-comp" onClick={onCompelete}>
        Compelete
      </button>
      <button className="btn-delet" onClick={onDelet}>
        Delet
      </button>
    </div>
  );
};

export default Todo;
