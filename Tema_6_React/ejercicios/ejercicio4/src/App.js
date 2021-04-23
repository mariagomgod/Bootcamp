import './App.css';
import ToDos from "./components/ToDos";
import Input from "./components/Input";

function App() {

  const URL = "https://raw.githubusercontent.com/BC-FSWD/todo-list/master/todo-list.json";

  fetch(URL)
  .then(response => response.json())
  .then(data => console.log(data));
  
  return (
    <div className="App">
      <h2 className="my-4">Todo List</h2>
     <ToDos />
     <Input />
    </div>
  );
}

export default App;
