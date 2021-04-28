import Input from "../components/Input";
import ToDosList from "../components/ToDosList";
import { createContext } from "react";

export const GlobalContext = createContext({});

function Ejercicio4() {

  return (
    <div className="App">
      <h2 className="my-4">Todo List</h2>
      <Input />
      <ToDosList />
    </div>
  );
}

export default Ejercicio4;
