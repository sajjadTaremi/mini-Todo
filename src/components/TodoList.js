import Todo from "./Todo";
import "../App.css";
const TodoList = ({ todos, onCompelete, onDelet }) => {
  const renderTodos = () => {
    if (todos.length === 0)
      return <p className="add-some-todo">add some todo...</p>;

    return todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          todo={todo}
          onCompelete={() => onCompelete(todo.id)}
          onDelet={() => onDelet(todo.id)}
        />
      );
    });
  };
  return <div>{renderTodos()}</div>;
};

export default TodoList;
