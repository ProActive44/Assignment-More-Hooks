import React, { useEffect, useRef, useState } from "react";
import MemoizedListItems from "./Listitems";

function UseReducer() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const inputFocusRef = useRef();

  const handleAddToDo = () => {
    if (input) setTodo([...todo, input]);
    setInput("");
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        if (input) setTodo((prev) => [...prev, input]);
        setInput("");
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [input, todo]);

  // console.log(todo);
  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        ref={inputFocusRef}
      />
      <button onClick={handleAddToDo}>add</button>

      {todo.map((ele, idx) => {
        return <MemoizedListItems key={idx} ele={ele} />;
      })}

      <button onClick={() => inputFocusRef.current.focus()}>
        Scroll TO Top
      </button>
    </div>
  );
}

export default UseReducer;
