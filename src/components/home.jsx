import { useDispatch, useSelector } from "react-redux"
import { Redirect, useHistory } from "react-router-dom";
import { autha } from "../firebase";
import { templateSelect } from "./redux/actions/templateAction";
import "./css/home.css"
let Home = () => {
    let dispatch = useDispatch();
    let user = useSelector(state => state.user);
    let history = useHistory();
    let code = useSelector(state => state.template);
    console.log(code);
    return <>

        <div className="templates" >
            <div className="temp-box" onClick={() => {
                dispatch(templateSelect("A"));
                history.push("/personal");
            }}  ><img src="http://localhost:3000/skin1.svg"></img>  </div>
            <div className="temp-box" onClick={() => {
                dispatch(templateSelect("B"));
                history.push("/personal");
            }} > <img src="http://localhost:3000/skin2.svg"></img> </div>
            <div className="temp-box" onClick={() => {
                dispatch(templateSelect("C"));
                history.push("/personal");
            }} > <img src="http://localhost:3000/skin1.svg"></img> </div>
            <div className="temp-box" onClick={() => {
                dispatch(templateSelect("D"));
                history.push("/personal");
            }} > <img src="http://localhost:3000/skin1.svg"></img> </div>
            <div className="temp-box" onClick={() => {
                dispatch(templateSelect("E"));
                history.push("/personal");
            }} > <img src="http://localhost:3000/skin1.svg"></img> </div>
            <div className="temp-box" onClick={() => {
                dispatch(templateSelect("F"));
                history.push("/personal");
            }} > <img src="http://localhost:3000/skin1.svg"></img> </div>
        </div>

        {user ? "" : <Redirect to="/login" />}
        <button className="btn-primary log-out" onClick={() => {
            autha.signOut();

        }} >LOGOUT</button>
    </>
}

export default Home