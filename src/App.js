import { BrowserRouter as Router, Switch, Route, useHistory } from "react-router-dom";
import Signup from "./components/signup";
import Navbar from "./components/navbar";
import Home from "./components/home"
import Login from "./components/login";
import { useEffect } from "react";
import { autha, firestorea } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { userCreator } from "./components/redux/actions/userAction";
import Personal from "./components/personalData";
import Qualification from "./components/qualification";
import Public from "./components/publicpreview";
import Project from "./components/projects";
import Skills from "./components/skills";
import Ach from "./components/achievements";
import Profile from "./components/profile";
import Prev from "./components/prev";
import "./components/css/APP.css";
function App() {
  //let history = useHistory();
  let dispatch = useDispatch()
  let state = useSelector(state => state);
  let theme = useSelector(state => state.theme);
  console.log(state);
  useEffect(() => {

    let unsub = autha.onAuthStateChanged(async (user) => {
      console.log("chala");
      if (user) {
        dispatch(userCreator(user));
        let { uid, email } = user;
        let docRef = firestorea.collection("users").doc(uid);
        let doc = docRef.get();

        if (!(await doc).exists) {
          docRef.set({
            email,
          })
        }

      }
     
    })

    return () => {
      unsub();
    }
  }, [])

  return (
    <>
      <Router>
        <div className={`final-page-${theme == "light" ? "light" : "dark"}`} >
          <Navbar />
          <Switch>
            <Route path="/prev/:rid" ><Prev /></Route>
            <Route path="/profile"><Profile /></Route>
            <Route path="/ach" ><Ach /></Route>
            <Route path="/skills" ><Skills /></Route>
            <Route path="/projects"> <Project /></Route>
            <Route path="/qualification" ><Qualification /> </Route>
            <Route path="/publicpreview/:rid" ><Public /> </Route>
            <Route path="/personal"> <Personal /> </Route>
            <Route path="/login"><Login /></Route>
            <Route path="/signup"><Signup /></Route>
            <Route path="/" ><Home /></Route>

          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
