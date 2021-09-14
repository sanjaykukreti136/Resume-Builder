import { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { autha } from "../firebase"
import { Redirect } from "react-router-dom";
import "./css/signup.css"
let Signup = () => {
    let history = useHistory();
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("");
    let [confirmpassword, setConfirmPassword] = useState("");
    let user = useSelector(state => state.user);
    return (
        <>

            {user ? <Redirect to="/" /> : ""}
            <div className="row rowc" >
                <div className="col-4  offset-3 log" >
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input value={email} onChange={(e) => {
                                setEmail(e.currentTarget.value);
                            }} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input value={password} onChange={(e) => {
                                setPassword(e.currentTarget.value);
                            }} type="password" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword2" class="form-label">Confirm  Password</label>
                            <input value={confirmpassword} onChange={(e) => {
                                setConfirmPassword(e.currentTarget.value);
                            }} type="password" class="form-control" id="exampleInputPassword2" />
                        </div>
                        <span>
                            <button onClick={(e) => {
                                e.preventDefault();
                                if (password === confirmpassword) {

                                    autha.createUserWithEmailAndPassword(email, password);

                                }
                                else {
                                    alert("PASSWORD DOESNOT MATCH")
                                }


                            }} type="button" class="btn btn-warning login">Signup</button>
                            <br />
                            <br />
                            <button onClick={() => {
                                history.push("/login")
                            }} type="button" class="btn btn-warning signup">Login</button>
                        </span>
                    </form>
                </div>
                <div className="logo">
                    <img src="https://cdn.dribbble.com/users/36126/screenshots/2228873/rb-logo.png"></img>

                </div>

            </div>

        </>
    )
}

export default Signup;