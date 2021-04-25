import './App.css';
import Input from "./components/Input";
import ToDosList from "./components/ToDosList";
import { useEffect, useState } from "react";

function App() {

  const [toDoList, setToDoList] = useState([]);

  useEffect(() => {
    const URL = "https://raw.githubusercontent.com/BC-FSWD/todo-list/master/todo-list.json";
    fetch(URL)
      .then(response => response.json())
      .then(data => setToDoList(data.slice(0, 20))); // Actualizamos el estado de la lista 
      // con los 20 primeros elementos.
  }, [])

  return (
    <div className="App">
      <h2 className="my-4">Todo List</h2>
      <Input setToDoList={setToDoList}/>
      <ToDosList toDoList={toDoList} setToDoList={setToDoList}/>
    </div>
  );
}

export default App;
