import React, { useRef, useState } from "react";
import "./App.css"
import Header from "./Header";
import TodoEditor from "./TodoEditor";
import TodoList from "./TodoList";

const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "리액트 공부하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "팀 구성하기",
    createdDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "프로젝트 계획서 작성하기",
    createdDate: new Date().getTime(),
  }
]

function App() {
  const [todo, setTodo] = useState(mockTodo);
  const idRef = useRef(3);

  function onCreate(content) {
    const newItem = {
      id: idRef.current,
      isDone: false,
      content,
      createDate: new Date().getTime(),
    };
    setTodo([newItem, ...todo])
    idRef.current += 1;
  }

  return(
    <div className="App">
      <Header></Header>
      <TodoEditor onCreate={onCreate}></TodoEditor>
      <TodoList todo={todo}></TodoList>
    </div>
  );
};
export default App;