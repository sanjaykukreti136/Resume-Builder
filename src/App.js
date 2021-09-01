import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "./components/signup";
import Navbar from "./components/navbar";
import Home from "./components/home"
import Login from "./components/login";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/login"><Login /></Route>
          <Route path="/signup"><Signup /></Route>
          <Route path="/" ><Home /></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
