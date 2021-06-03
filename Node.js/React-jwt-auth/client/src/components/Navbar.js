import { NavLink, Route, Switch } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Public from "../pages/Public";

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand navbar-light bg-light">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to="/login" className="nav-link">Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/public" className="nav-link">Public</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/dashboard" className="nav-link">Dashboard</NavLink>
                    </li>
                </ul>
            </nav>

            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/login" component={Login} />
                <Route path="/public" component={Public} />
                <Route path="/dashboard" component={Dashboard} />
            </Switch>
        </>
    )
}