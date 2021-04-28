// import {useFetch} from "./hooks/useFetch";
import { createContext, useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";

import Ejercicio1 from "./pages/Ejercicio1";
import Ejercicio2 from "./pages/Ejercicio2";
import Ejercicio3 from "./pages/Ejercicio3";
import Ejercicio4 from "./pages/Ejercicio4";
import Error from "./pages/Error";

import "./style.css";

export const GlobalContext = createContext({});

function App() {

  const initialState = [
    { name: "Federica", surname: "Rica América", address: "Angustias Street, 27, 2B", city: "Málaga", zipCode: 29006, phoneNumber: 748452178 },
    { name: "Rafael", surname: "Remar Martínez", address: "Hipofeses Street, 11, 3A", city: "Málaga", zipCode: 29006, phoneNumber: 667542184 },
    { name: "José", surname: "Sanz Morales", address: "Teodosio Street, 43, 2C", city: "Málaga", zipCode: 29006, phoneNumber: 652167496 }
  ];

  const [contacts, setContacts] = useState(initialState);

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

      <BrowserRouter>
        <nav className="navbar navbar-dark bg-dark nav-fill">
          <NavLink exact to="/ejercicio1" className="nav-item nav-link" activeClassName="selected">Ejercicio 1</NavLink>
          <NavLink to="/ejercicio2" className="nav-item nav-link" activeClassName="selected">Ejercicio 2</NavLink>
          <NavLink to="/ejercicio3" className="nav-item nav-link" activeClassName="selected">Ejercicio 3</NavLink>
          <NavLink to="/ejercicio4" className="nav-item nav-link" activeClassName="selected">Ejercicio 4</NavLink>
        </nav>

        <GlobalContext.Provider value={{contacts, setContacts, toDoList, setToDoList}}>
          <Switch>
            <Route exact path="/" component={Ejercicio1} />
            <Route path="/ejercicio1" component={Ejercicio1} />
            <Route path="/ejercicio2" component={Ejercicio2} />
            <Route path="/ejercicio3" component={Ejercicio3} />
            <Route path="/ejercicio4" component={Ejercicio4} />

            <Route component={Error} />
          </Switch>
        </GlobalContext.Provider>
      </BrowserRouter>

    </div>
  );
}

export default App;
