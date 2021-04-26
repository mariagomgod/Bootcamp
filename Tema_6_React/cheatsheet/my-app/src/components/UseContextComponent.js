import { useContext } from "react";
import { GlobalContext } from "../App";

export default function UseContextComponent() {

    const msg = useContext(GlobalContext);

    return <h1>msg: {msg}</h1>;
    
}
