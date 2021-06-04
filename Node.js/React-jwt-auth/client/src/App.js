import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Pages from "./pages/Pages";
import AuthContextProvider from "./contexts/AuthContext";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Router>
          <Navbar />
          <Pages />
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
