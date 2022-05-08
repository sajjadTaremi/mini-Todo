import { useState } from "react";
import "../App.css";
const TodoForm = (props) => {
  const [input, setInput] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!input) {
      alert("enter input...!");
      return;
    }

    props.addTodoHandler(input);
    setInput("");
  };

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <form className="form-box" onSubmit={submitHandler}>
      <input
        type="text"
        value={input}
        onChange={changeHandler}
        className="input-todo"
        maxLength="20"
      />
      <button className="btn-cta" type="submit">
        add
      </button>
    </form>
  );
};

export default TodoForm;
