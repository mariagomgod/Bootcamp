import './App.css';
import FirstComponent, {SecondComponent, ThirdComponent} from './components/FirstComponent';
import Counter from "./components/Counter";
import UseEffectComponent from "./components/UseEffectComponent";
import UseContextComponent from './components/UseContextComponent';
import { createContext, useState } from "react";
import Router from "./Router";

export const GlobalContext = createContext();

function App() {

  const [show, setShow] = useState(true);

  return (
    <div className="App">
      {/* {show && <UseEffectComponent />}
      <button onClick={() => setShow(!show)}>Show</button>
      <Counter />
      <FirstComponent title="Título enviado desde el padre" date="16 de agosto de 2025"/>
      <FirstComponent title="Otro Título" />
      <SecondComponent />
      <ThirdComponent />  */}
     {/*  <GlobalContext.Provider value="Soy un string guardado en un contexto">
      <UseContextComponent />
      </GlobalContext.Provider> */}

      <Router />
    </div>
  );
}

export default App;
