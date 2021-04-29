import { BrowserRouter, Route, Switch } from "react-router-dom";

import UpcomingMovies from "../components/UpcomingMovies";
import MovieDetails from "../components/MovieDetails";
import Error from "../pages/Error";

export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={UpcomingMovies} />
                    <Route path="/movie/:id" component={MovieDetails} />

                    <Route component={Error} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}