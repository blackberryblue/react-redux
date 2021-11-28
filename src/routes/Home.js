import React, { useState } from "react";
import { connect } from "react-redux";

const Home = (props) => {
  console.log(props);
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    setText("");
  }
  {
    console.log(text);
  }
  return (
    <div>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>{props.toDos}</ul>
    </div>
  );
};

function getCurrentState(state) {
  console.log("state", state);
  return { toDos: state };
}

export default connect(getCurrentState)(Home);
