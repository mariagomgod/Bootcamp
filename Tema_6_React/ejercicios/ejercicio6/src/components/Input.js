import { useState, useContext } from "react";
import { GlobalContext } from "../App";

export default function Input() {

    const {setToDoList} = useContext(GlobalContext);

    const [toDoTitle, setToDoTitle] = useState("");

    function submit(e) {

        e.preventDefault();

        const newToDo = {
            title: toDoTitle, // cómo se va a rellenar el texto
            completed: false // como es una tarea nueva su estado inicial es false
            // porque se acaba de crear y no puede estar completa
        }

        setToDoList(currentToDo => [newToDo, ...currentToDo]); // Hacemos un spread
        // del estado actual de la lista porque en React no se pueden mutar los 
        // estados

        e.target.reset(); // vaciamos el input

        // Otra opción para vaciar el input:
        // setToDoTitle("");
    }

    return (
        <form className="form-group" onSubmit={submit}>
           <input className="form-control mb-4 w-50 m-auto" type="text" placeholder="Introduce a new To Do" 
                  onChange={e => setToDoTitle(e.target.value)} required/> 
                {/* value={toDoTitle} se añadiría justo detrás del setToDoTitle(e.target.value)} 
                si utilizamos la opción setToDoTitle("") para vaciar el input */}
        </form>
    )
}
