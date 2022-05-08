import { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const compeleteTodo = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.isCompleited = !selectedTodo.isCompleited;
    const updateTodos = [...todos];
    updateTodos[index] = selectedTodo;
    setTodos(updateTodos);
  };

  const addTodoHandler = (input) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      isCompleited: false,
    };

    setTodos([...todos, newTodo]);
  };

  const onDeletHandler = (id) => {
    const filterTodo = todos.filter((t) => t.id !== id);
    setTodos(filterTodo);
  };

  return (
    <div className="contianer">
      <TodoForm addTodoHandler={addTodoHandler} />

      <TodoList
        todos={todos}
        onCompelete={compeleteTodo}
        onDelet={onDeletHandler}
      />
    </div>
  );
};

export default TodoApp;
