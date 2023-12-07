import React from "react";
import { Link } from "react-router-dom";
import "./TodoItem.css"

function TodoItem({ id, isDone, content, createdDate, onUpdate, onDelete }) {
  function onChangeCheckBox() {
    onUpdate(id)
  }
  function onClickDelete() {
    onDelete(id)
  }
  return (
    <div className="TodoItem">
      <input className="checkbox_col" checked={isDone} type="checkbox" onChange={onChangeCheckBox}/>
      <Link className="title_col" to={`/todo/${id}`}>{content}</Link>
      <div className="date_col">{new Date(createdDate).toLocaleDateString()}</div>
      <button className="btn_col" onClick={onClickDelete}>삭제</button>
    </div>
  )
};
export default TodoItem;