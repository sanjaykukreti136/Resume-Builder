import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import "./css/profile.css"
import { detailCreator } from "./redux/actions/detailsAction"
import { Save } from "./redux/actions/saveAction";

import { firestorea } from "../firebase";

import { Redirect } from "react-router-dom";
let Profile = () => {
    let detail = useSelector(state => state.detail);
    console.log("aa gya")
    console.log(detail.myobj);
    let history = useHistory();
    let user = useSelector(state => state => state.user);
    let dispatch = useDispatch();
    let theme = useSelector(state => state.theme);
    return <>

        {user == null ? <Redirect to="/login" /> : ""}
        <div className="main-profile">

            <h3 id={`${theme == "dark" ? "change" : ""}`}  >YOUR RESUME'S</h3>
            <div className="resumes">
                {detail.myobj.map((ele) => {

                    return <div className="resume-box" id={ele.temp} onClick={() => {
                        dispatch(detailCreator({ tempobj: ele }));
                        console.log(ele);
                        history.push(`/prev/${ele.temp}`);
                    }} >
                        {ele.temp == "A" ? <img src="http://localhost:3000/A.png" ></img> :
                            ele.temp == "B" ? <img src="http://localhost:3000/B.png"></img> :
                                ele.temp == "C" ? <img src="http://localhost:3000/C.png"></img> :
                                    ele.temp == "D" ? <img src="http://localhost:3000/A.png"></img> :
                                        <img src="http://localhost:3000/PA.png"></img>
                        }
                    </div>


                })}
            </div>

        </div>
    </>
}

export default Profile;