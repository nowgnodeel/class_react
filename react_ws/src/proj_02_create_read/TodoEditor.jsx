import React, {useState, useRef} from "react";
import "./TodoEditor.css"

function TodoEditor({onCreate}) {
  const [content, setContent] = useState("");
  const inputRef = useRef();

  function onChangeContent(e) {
    setContent(e.target.value);
  }

  function onSubmit() {
    if (content === "") {
      inputRef.current.focus();
    } else {
      onCreate(content);
      setContent("");
    }
  }

  function onKeyPress(e) {
    if (e.key === 'Enter') {
      onSubmit();
      e.preventDefault();
    }
  }

  return (
    <div className="TodoEditor">
      <h3>새로운 Todo 작성하기</h3>
      <div className="editor_wrapper">
        <input
          ref={inputRef}
          value = {content}
          onChange={onChangeContent}
          onKeyPress={onKeyPress}
          placeholder="새로운 Todo..."
        />
        <button onClick={onSubmit}>추가</button>
      </div>
    </div>
  )
};
export default TodoEditor;