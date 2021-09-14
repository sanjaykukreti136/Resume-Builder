import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import "./css/personal.css"
import Preview from "./preview";
import { detailCreator } from "./redux/actions/detailsAction"
import { Save } from "./redux/actions/saveAction";

let PersonalData = () => {
    let dispatch = useDispatch();
    let history = useHistory();
    let details = useSelector(state => state.detail);
    let { fname, llname, email, phone, city, state, deg, clg, year, ispublic } = details;
    //sconsole.log(details);
    let { id } = useSelector(state => state.saveState);
    let { uid } = useSelector(state => state.user);
    let code = useSelector(state => state.template);
    let theme = useSelector(state => state.theme);
    return <>
        <div className="personal-container"  >
            <div className={`bahr ${theme == "dark" ? "dark" : ""}`} >
                <div className="input-data" >

                    <div class="row m-4">
                        <h2>Personal Form</h2>
                        <div >
                            <input type="text" id="fname" class="form-control" placeholder="First name"
                                onChange={(e) => {
                                    dispatch(detailCreator({ fname: e.currentTarget.value }))
                                }} />
                        </div>
                        <div >
                            <input type="text" id="lname" class="form-control" placeholder="Last name"
                                onChange={(e) => {
                                    dispatch(detailCreator({ lname: e.currentTarget.value }))
                                }}
                            />
                        </div>
                        <div >
                            <input type="text" id="email" class="form-control" placeholder="Email"
                                onChange={(e) => {
                                    dispatch(detailCreator({ email: e.currentTarget.value }))
                                }} />
                        </div>
                        <div >
                            <input type="text" id="phone" class="form-control" placeholder="Phone No"
                                onChange={(e) => {
                                    dispatch(detailCreator({ phone: e.currentTarget.value }))
                                }} />
                        </div>

                        <div >
                            <input type="text" id="city" class="form-control" placeholder="City"
                                onChange={(e) => {
                                    dispatch(detailCreator({ city: e.currentTarget.value }))
                                }} />
                        </div>
                        <div >
                            <input type="text" id="state" class="form-control" placeholder="State"
                                onChange={(e) => {
                                    dispatch(detailCreator({ state: e.currentTarget.value }))
                                }} />
                        </div>



                    </div>
                    <button id="next" className="btn btn-primary" onClick={() => {
                        history.push("/qualification")
                    }} >Next</button>
                    <button id="back" className="btn btn-primary" onClick={() => {
                        history.push("/")
                    }} >Back</button>

                </div>
            </div>
            <div className="pre">
                <Preview />
            </div>
        </div>
    </>
}

export default PersonalData;