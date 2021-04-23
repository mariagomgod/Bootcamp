import './ToDosList.css';

export default function ToDosList({ toDoList, setToDoList }) {

    const handle = index => {
        setToDoList(currentState => currentState.map((toDo, i) => {
            if (i === index) {
                const newToDo = {...toDo};
                newToDo.completed = !toDo.completed;
                return newToDo;
            }
            return toDo;
        }));
    }
    return (
        <ul className="list-group text-left">
            {toDoList.map((toDo, index) => {
                return (
                    <li key={index} className={"list-group-item px-5" + (toDo.completed ? " completed" : "")}
                        onClick={() => handle(index)}>{index}: {toDo.title}</li>
                );
            })}
        </ul>
    )
}
