import { useHistory } from "react-router-dom";

let Signup = () => {
    let history = useHistory();
    return (
        <>
            <div className="row" >
                <div className="col-4  offset-3 mt-4" >
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword2" class="form-label">Confirm  Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword2" />
                        </div>
                        <button type="button" class="btn btn-warning login">Signup</button>
                        <br />
                        <br />
                        <button onClick={() => {
                            history.push("/login")
                        }} type="button" class="btn btn-warning signup">Login</button>
                    </form>
                </div>

            </div>

        </>
    )
}

export default Signup;