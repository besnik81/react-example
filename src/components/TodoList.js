import { useEffect, useCallback } from "react";
import Todo from "./Todo";
import { Axios } from "../api/request";

function TodoList({ todos, setTodos }) {
  const onToggleTodo = useCallback(
    (todo) => {
      const newTodos = todos.map((item) =>
        todo === item ? { ...item, done: !item.done } : item
      );
      setTodos(newTodos);
    },
    [todos, setTodos]
  );

  useEffect(() => {
    Axios.get("/todos").then((response) => {
      const todos = response.data ?? [];
      setTodos(todos);
    });
  }, [setTodos]);

  return todos.map((todo) => (
    <Todo key={todo.id} todo={todo} onToggleTodo={onToggleTodo} />
  ));
}

export default TodoList;
