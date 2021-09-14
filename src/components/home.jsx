import { useDispatch, useSelector } from "react-redux"
import { Redirect, useHistory } from "react-router-dom";
import { autha } from "../firebase";
import { templateSelect } from "./redux/actions/templateAction";
import "./css/home.css"
import { firestorea } from "../firebase";
import { portSelect } from "./redux/actions/portAction";
import Prev from "./prev"
import { useState } from "react";
let Home = () => {
    let [count, setcount] = useState(0);
    let [hover, sethover] = useState(null);
    let [tempname, settempname] = useState("");

    let dispatch = useDispatch();
    let [blur, setblur] = useState(null);
    let user = useSelector(state => state.user);
    let history = useHistory();
    let code = useSelector(state => state.template);
    console.log(code);
    let ye = "block"
    let theme = useSelector(state => state.theme);
    return <div className={`${theme == "light" ? "xx" : "yy"}`}  >
        {/* {hover == true ? */}

        {/* <img className="hoverwali" src="https://cdn-images.zety.com/templates/zety/valera-11-classic-silver-dark-332@3x.png" ></img> : ""} */}
        < div >
            <h2>
                RESUME TEMPLATES
            </h2>
            <div className="templates" id={blur == true ? "blur" : ""}  >

                <div className="temp-box" onMouseOut={() => {
                    sethover(false);
                    settempname("");
                    setblur(false);
                }} onMouseOver={() => {
                    console.log("aaya + aaya");
                    sethover(true);
                    settempname("A");
                    setblur(true);

                }} onClick={() => {
                    dispatch(templateSelect("A"));
                    history.push("/personal");
                }}  >

                    <img id="img" src="http://localhost:3000/A.png" ></img>
                    <p class="temp-box-p" >MODERN</p>
                    <p class="temp-box-p">TWO COLOUMNS TEMPLATE</p>
                </div>

                <div className="temp-box" onMouseOut={() => {
                    sethover(false);
                    settempname("");
                    setblur(false);
                }} onMouseOver={() => {
                    console.log("aaya + aaya");
                    sethover(true);
                    settempname("A");
                    setblur(true);

                }} onClick={() => {
                    dispatch(templateSelect("B"));
                    history.push("/personal");
                }} >
                    <img id="img" src="http://localhost:3000/B.png" ></img>
                    <p class="temp-box-p" >BASIC</p>
                    <p class="temp-box-p">TWO PAGES TEMPLATE</p>
                </div>


                <div className="temp-box" onMouseOut={() => {
                    sethover(false);
                    settempname("");
                    setblur(false);
                }} onMouseOver={() => {
                    console.log("aaya + aaya");
                    sethover(true);
                    settempname("A");
                    setblur(true);

                }} onClick={() => {
                    dispatch(templateSelect("C"));
                    history.push("/personal");
                }} >
                    <img id="img" src="http://localhost:3000/C.png" ></img>
                    <p class="temp-box-p" >BASIC</p>
                    <p class="temp-box-p">SINGLE PAGE TEMPLATE</p>
                </div>

                <div className="temp-box" onMouseOut={() => {
                    sethover(false);
                    settempname("");
                    setblur(false);
                }} onMouseOver={() => {
                    console.log("aaya + aaya");
                    sethover(true);
                    settempname("A");
                    setblur(true);

                }} onClick={() => {
                    dispatch(templateSelect("D"));
                    history.push("/personal");
                }} > <img id="img" src="data:image/png;base64,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"></img>
                    <p class="temp-box-p" >CREATIVE BLUE</p>
                    <p class="temp-box-p">TWO COLOUMN TEMPLATE</p>


                </div>
                <div className="temp-box" onMouseOut={() => {
                    sethover(false);
                    settempname("");
                    setblur(false);
                }} onMouseOver={() => {
                    console.log("aaya + aaya");
                    sethover(true);
                    settempname("A");
                    setblur(true);

                }} onClick={() => {
                    dispatch(templateSelect("E"));
                    history.push("/personal");
                }} > <img id="img" src="data:image/png;base64,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"></img>
                    <p class="temp-box-p" >CREATIVE BLUE</p>
                    <p class="temp-box-p">TWO COLOUMN TEMPLATE</p>

                </div>
                <div className="temp-box" onMouseOut={() => {
                    sethover(false);
                    settempname("");
                    setblur(false);
                }} onMouseOver={() => {
                    console.log("aaya + aaya");
                    sethover(true);
                    settempname("A");
                    setblur(true);

                }} onClick={() => {
                    dispatch(templateSelect("F"));
                    history.push("/personal");
                }} > <img id="img" src="data:image/png;base64,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"></img>
                    <p class="temp-box-p" >CREATIVE BLUE</p>
                    <p class="temp-box-p">TWO COLOUMN TEMPLATE</p>

                </div>
            </div>
            <h2>
                PORTFOLIOS TEMPLATE
            </h2>
            <div className="port">

                <div className="port-box"  >
                    <button className="pp" onClick={() => {
                        setcount(count - 1 < 0 ? count - 1 + 3 : count - 1);
                    }} >🡸</button>
                    <button className="n" onClick={() => {
                        setcount(count + 1 >= 3 ? count - 3 : count + 1);
                    }} >🡺</button>
                    {count <= 0 ? <img onClick={() => {
                        dispatch(templateSelect("AA"));
                        history.push("/personal");
                    }} id="imgx" className="img" src="http://localhost:3000/PA.png" ></img> :
                        count == 1 ? <img onClick={() => {
                            dispatch(templateSelect("AA"));
                            history.push("/personal");
                        }} id="imgx" className="img" src="http://localhost:3000/PB.png" ></img> :
                            <img className="img" id="imgx" onClick={() => {
                                dispatch(templateSelect("AA"));
                                history.push("/personal");
                            }} src="http://localhost:3000/PC.png" ></img>
                    }
                    <p class="temp-box-p" >TEMPLATE - 1</p>

                </div>


            </div>

        </div>

        {user ? "" : <Redirect to="/login" />}
        <button className="btn-primary log-out" onClick={() => {
            autha.signOut().then(() => {
                history.push("/login")
            })

        }} >LOGOUT</button>
    </div >
}

export default Home