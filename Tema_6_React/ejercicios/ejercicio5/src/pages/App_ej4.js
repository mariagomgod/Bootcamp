import './App.css';
// import {useFetch} from "./hooks/useFetch";
import Input from "../components/Input";
import ToDosList from "../components/ToDosList";
import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext({});

function App() {

  const [toDoList, setToDoList] = useState([]);

  useEffect(() => {
    const URL = "https://raw.githubusercontent.com/BC-FSWD/todo-list/master/todo-list.json";
    fetch(URL)
      .then(response => response.json())
      .then(data => setToDoList(data.slice(0, 20))); // Actualizamos el estado de la lista 
    // con los 20 primeros elementos.
  }, [])

  // useFetch(URL, setToDoList); // es lo mismo que lo de arriba pero con nuestro
  // estado que nos hemos creado personalizado (mezcla de useState y useEffect)

  return (
    <div className="App">
      <h2 className="my-4">Todo List</h2>
      {/* <Input setToDoList={setToDoList}/>
      <ToDosList toDoList={toDoList} setToDoList={setToDoList}/> */}
      <GlobalContext.Provider value={[toDoList, setToDoList]}>
        <Input />
        <ToDosList />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
