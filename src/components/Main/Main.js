import { useState } from "react";
import Box from "../Box/Box";
import Point from "../Point/Point";

export default function Main() {

  const [points, setPoints] = useState([]);
  const [inputText, setInputText] = useState("");

  const addTodo = () => {
    if (inputText !== "") {
      setPoints([...points, inputText]);
      setInputText("");
    }
  };

  const deleteTodo = (text) => {
    const newTodos = points.filter((inputText) => {
      return inputText !== text;
    });
    setPoints(newTodos);
  };

  return (
    <>
      <main className="main">        
        <Box
          inputText={inputText}
          setInputText={setInputText}
          addTodo={addTodo}
        />
        <Point 
          list={points} 
          remove={deleteTodo} />
      </main>
    </>
  );
}
