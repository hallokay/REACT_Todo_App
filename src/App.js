import React, { useState, useRef, useCallback } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";




function createBulkTool () {
  const array = [];

  for(let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text : `할일 ${i}`,
      checked: false,
    })
  }
  return array;
}

function App() {
  const [todos, setTodos] = useState(createBulkTool);

  // 고유값으로 사용될 id  ref를 사용하여 변수 담기
  // useRef로 변수를 만드는 이유는 id는 렌더링 안해도 되니까
  const nextId = useRef(4);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };

      setTodos(todos => todos.concat(todo));
      nextId.current += 1;
      // 다음ID 1씩 더하기
    },
    [todos]
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos => todos.filter(todo => todo.id !== id));
    },
    [todos]
  );

  const onToggle = useCallback(
    (id) => {
      setTodos( todos =>
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
        )
      );
    },
    [todos]
  );

  return (
    <div className="App">
      <TodoTemplate>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
    </div>
  );
}

export default App;
