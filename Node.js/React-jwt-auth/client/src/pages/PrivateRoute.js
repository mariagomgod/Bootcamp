import { Route, Redirect } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

export default function PrivateRoute({children, ...rest}) {

    const {isAuthenticated} = useAuthContext();

    return (

        // Se ejecuta cada vez que se "pinta" el componente
        // volviendo a comprobar si está autenticado.

        <Route {...rest} render={() => { 
            return isAuthenticated
                ? children
                : <Redirect to="/login" />
        }}/>
    )
}
