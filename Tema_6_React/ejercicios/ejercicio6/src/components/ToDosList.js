import './ToDosList.css';
import { useContext } from "react";
import { GlobalContext } from "../App";

export default function ToDosList() {

    const {toDoList, setToDoList} = useContext(GlobalContext);

    const toggleCompleted = index => {
        setToDoList(currentState => currentState.map((toDo, i) => {
            if (i === index) {
                const newToDo = {...toDo}; // tenemos que hacer una copia porque no podemos mutar directamente
                // un estado en React, pues sino el evento onClick se dispara dos veces, es decir, la 
                // primera vez se completa la tarea y la segunda no, con lo que el estado de la tarea se 
                // queda igual que al principio (sin completar)
                newToDo.completed = !toDo.completed; // hacemos un toggle
                return newToDo;
            }
            return toDo; // se devuelve el objeto tal cual

            // Opción con un ternario:
            //return i === index ? {...toDo, completed : !toDo.completed} : toDo;
        }));
    }

    /* Otra opción del toggle planteada por el profesor.
    const toggleCompleted = index => {
        if (e.target.tagName !== "BUTTON") {
        const newTodos = [...toDoList];
        newTodos[index].completed = !newTodos[index].completed;
        setToDoList(newTodos);
        }
    } */

    const removeToDo = (e, index) => {

        e.stopPropagation(); // para evitar que el evento de click se dispare en el botón y en el li

        setToDoList(currentState => currentState.filter((toDo, i) => i !== index));
    };

    return (
        <ul className="list-group text-left">
            {toDoList.map((toDo, index) => {
                return (
                    <li key={index} className={"list-group-item px-5" + (toDo.completed ? " completed" : "")}
                    //Para darle el efecto tachado y cambiar el color estamos concatenando la lista de
                    //clases que ya tuviera el li con la nueva clase que hemos creado en un css aparte
                    //cuando la tarea esté ya completa y si no, le concatenamos cadena vacía, por lo que la
                    //lista de clases se quedará igual (no tiene efecto).
                        onClick={() => toggleCompleted(index)}>{index}: {toDo.title}
                        <button type="button" className="float-right justify-content-space-between btn btn-danger" 
                        onClick={(e) => removeToDo(e, index)}>x</button>
                    </li>
                );
            })}
        </ul>
    )
}
