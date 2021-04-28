import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Record() {

    const [userData, setUserData] = useState({});

    const { user } = useParams(); // Mediante useParams() accedes al parámetro
    // de la ruta, en este caso user.

    const USERS_URL = "https://reqres.in/api/users/";

    useEffect(() => {
        fetch(`${USERS_URL}${user}`)
        .then(response => response.json())
        .then(data => setUserData(data))
    }, [user]);

    return (
        <div>
            {/* Record of {props.match.params.user} */}
            <h2>Record of user {user}</h2>
            <ul>
                <li>{userData.data?.email}</li> {/* userData.data?. Se llama encadenamiento opcional.
                Cuando tenemos propiedades dentro de otras y evitar poner if/else */}
                <li>{userData.data?.first_name}</li>
                <li>{userData.data?.last_name}</li>
                <img src={userData.data?.avatar} alt="Profile"/>
            </ul>
        </div>
    )
}
