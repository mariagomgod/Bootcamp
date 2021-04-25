import { useState } from "react";

export default function Input( { setToDoList }) {

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
    }

    return (
        <form className="form-group" onSubmit={submit}>
           <input className="form-control mb-4 w-50 m-auto" type="text" placeholder="Introduce a new To Do" onChange={e => setToDoTitle(e.target.value)}/> 
        </form>
    )
}
