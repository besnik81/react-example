import { useCallback, useState } from "react";
import TodoForm from "./TodoForm";

function Todo({ todo, onToggleTodo }) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const onEditTodo = useCallback(() => {
    // axios
    //   .put(
    //     "/todos",
    //     { ...todo, text }
    //   )
    //   .then((response) => {
    //     const todo = response.data ?? [];
    //     const newTodos = [...todos, todo];
    //     setTodos(newTodos);
    //   });
    setEditing(false);
  }, []);

  if (editing) {
    return (
      <div className="flex items-center">
        <TodoForm
          text={text}
          setText={setText}
          onSubmit={onEditTodo}
          buttonText="Update"
        />
      </div>
    );
  }

  return (
    <div className="flex items-center">
      <div className="mr-3">
        <input
          type="checkbox"
          className="col-span-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          checked={todo.done}
          onChange={() => onToggleTodo(todo)}
        />
      </div>
      <div className={todo.done ? "line-through" : null}>
        {text} {todo.created_at}{" "}
        <span
          className="ml-3 cursor-pointer text-blue-500 hover:text-blue-700"
          onClick={() => setEditing(true)}
        >
          Edit
        </span>
      </div>
    </div>
  );
}

export default Todo;
