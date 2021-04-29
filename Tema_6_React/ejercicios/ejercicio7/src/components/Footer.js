import './UpcomingMovies.css';

export default function Footer() {
    return (
        <footer>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <ul className="navbar-nav mr-auto ul">
                    <li className="nav-item">
                        <a className="nav-link" href="#">QUIÉNES SOMOS<span class="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">AVISO LEGAL</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">PUBLICIDAD</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">GESTIONAR COOKIES Y PRIVACIDAD</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">POLÍTICA DE PRIVACIDAD</a>
                    </li>
                    <li clasNames="nav-item">
                        <a className="nav-link" href="#">POLÍTICA DE COOKIES</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">CONTACTO</a>
                    </li>
                </ul>
                <p className="copyright">&copy; Copyright 2021</p>
            </nav>
        </footer>
    )
}
