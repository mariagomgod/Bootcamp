import './App.css';
import FirstComponent, {SecondComponent, ThirdComponent} from './components/FirstComponent';
import Counter from "./components/Counter";
import UseEffectComponent from "./components/UseEffectComponent";
import { useState } from "react";

function App() {

  const [show, setShow] = useState(true);

  return (
    <div className="App">
      {show && <UseEffectComponent />}
      <button onClick={() => setShow(!show)}>Show</button>
      {/*<Counter />
      <FirstComponent title="Título enviado desde el padre" date="16 de agosto de 2025"/>
      <FirstComponent title="Otro Título" />
      <SecondComponent />
      <ThirdComponent /> */}
    </div>
  );
}

export default App;
