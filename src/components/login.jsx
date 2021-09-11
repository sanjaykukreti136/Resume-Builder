import { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { autha } from "../firebase";

let Login = () => {

    let history = useHistory();
    let user = useSelector(state => state.user);
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    return (
        <>
            {user ? <Redirect to="/" /> : ""}
            <div className="row" >
                <div className="col-4  offset-3 mt-4" >
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input value={email} onChange={(e) => {
                                setEmail(e.currentTarget.value)
                            }} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input value={password} onChange={(e) => {
                                setPassword(e.currentTarget.value)
                            }} type="password" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <button onClick={(e) => {
                            e.preventDefault();
                            autha.signInWithEmailAndPassword(email, password);
                        }} type="button" class="btn btn-warning login">Login</button>
                        <br />
                        <br />
                        <button onClick={() => {
                            history.push("/signup")
                        }} type="button" class="btn btn-warning signup">Signup</button>
                    </form>
                </div>

            </div>

        </>
    )

}
export default Login;