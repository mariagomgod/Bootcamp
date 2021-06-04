import { useHistory } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { LOGIN_URL } from "../config/config";
import { useAuthContext } from "../contexts/AuthContext";

export default function Login() {

    const {logIn} = useAuthContext();
    const history = useHistory();

    const formInitialState = {email: "email@gmail.com", password: "1234"};
    const [form, handleChange] = useForm(formInitialState);

    const handleSubmit = async e => {
        e.preventDefault();

        const options = {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(form)
        }

        const response = await fetch(LOGIN_URL, options); // Se puede utilizar fetch().then().then()
        const data = await response.json();

        if (response.status === 200) {
            logIn(data.token, data.user);
            history.push("/dashboard");
        } else {
            alert("Credenciales incorrectas")
        }
        

        /* fetch('http://localhost:4000/login',
            {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: '{ "email": "mgg@gmail.com", "password": "1234"}'
            })
            .then(response => response.json())
            .then(data => console.log(data)); */
    }

    return (
        <div className="d-flex justify-content-center pt-5">
            <form onSubmit={handleSubmit} className="form-group w-50 bg-dark p-5 rounded">
                <h3 className="text-light">Log in!</h3>
                <input onChange={handleChange} value={form.email} name="email" type="email" className="form-control mb-3" placeholder="Introduce tu email" />
                <input onChange={handleChange} value={form.password} name="password" type="password" className="form-control mb-3" placeholder="********" />
                <input type="submit" className="btn btn-success" value="Iniciar sesión" />
            </form>
        </div>
    )
}