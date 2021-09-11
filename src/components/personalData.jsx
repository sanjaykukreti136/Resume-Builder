import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import "./css/personal.css"
import Preview from "./preview";
import { detailCreator } from "./redux/actions/detailsAction"
let PersonalData = () => {
    let dispatch = useDispatch();
    let history = useHistory();
    let details = useSelector(state => state.detail);
    //sconsole.log(details);
    return <>
        <div className="personal-container" >

            <div className="input-data" >

                <div class="row m-4">
                    <h2>Personal Form</h2>
                    <div class="col-4">
                        <input type="text" class="form-control" placeholder="First name"
                            onChange={(e) => {
                                dispatch(detailCreator({ fname: e.currentTarget.value }))
                            }} />
                    </div>
                    <div class="col-4">
                        <input type="text" class="form-control" placeholder="Last name"
                            onChange={(e) => {
                                dispatch(detailCreator({ lname: e.currentTarget.value }))
                            }}
                        />
                    </div>
                    <div class="col-4">
                        <input type="text" class="form-control" placeholder="Email"
                            onChange={(e) => {
                                dispatch(detailCreator({ email: e.currentTarget.value }))
                            }} />
                    </div>
                    <div class="col-4">
                        <input type="text" class="form-control" placeholder="Phone No"
                            onChange={(e) => {
                                dispatch(detailCreator({ phone: e.currentTarget.value }))
                            }} />
                    </div>

                    <div class="col-4">
                        <input type="text" class="form-control" placeholder="City"
                            onChange={(e) => {
                                dispatch(detailCreator({ city: e.currentTarget.value }))
                            }} />
                    </div>
                    <div class="col-4">
                        <input type="text" class="form-control" placeholder="State"
                            onChange={(e) => {
                                dispatch(detailCreator({ state: e.currentTarget.value }))
                            }} />
                    </div>
                </div>
                <button className="btn btn-primary m-4" onClick={() => {
                    history.push("/qualification")
                }} >Next</button>

            </div>

            <Preview />

        </div>
    </>
}

export default PersonalData;