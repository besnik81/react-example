import { useCallback, useState } from "react";
import axios from "../api/api";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function Main() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const onAddTodo = useCallback(() => {
    axios.post("/todos", { done: false, text }).then((response) => {
      const todo = response.data ?? [];
      const newTodos = [...todos, todo];
      setTodos(newTodos);
    });
  }, [todos, text]);

  // if (!token) {
  //   return <LoginForm setToken={setToken} />;
  // }

  return (
    <div className="mx-auto w-3/4">
      <header />
      <div className="border p-4 my-4">
        <TodoForm
          text={text}
          setText={setText}
          onSubmit={onAddTodo}
          buttonText="Add Todo"
        />
      </div>
      <div>
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
}

export default Main;
