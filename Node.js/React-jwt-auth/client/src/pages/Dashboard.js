import { useAuthContext } from "../contexts/AuthContext";

export default function Dashboard() {

    const {logOut} = useAuthContext();
    return (
        <div className="container">
            <h1>PRIVATE</h1>
            <button onClick={logOut} className="btn btn-warning">logOut</button>
        </div>
    )
}
