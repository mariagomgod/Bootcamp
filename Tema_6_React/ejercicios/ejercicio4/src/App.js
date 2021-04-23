import './App.css';
import ToDosList from "./components/ToDosList";
import Input from "./components/Input";
import { useEffect, useState } from "react";

function App() {

  const [toDoList, setToDoList] = useState([]);

  useEffect(() => {
    const URL = "https://raw.githubusercontent.com/BC-FSWD/todo-list/master/todo-list.json";
    fetch(URL)
      .then(response => response.json())
      .then(data => setToDoList(data.slice(0, 20)));
  }, [])

  return (
    <div className="App">
      <h2 className="my-4">Todo List</h2>
      <ToDosList toDoList={toDoList} setToDoList={setToDoList}/>
      <Input />
    </div>
  );
}

export default App;
