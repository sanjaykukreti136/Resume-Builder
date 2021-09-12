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

                    <div class="list-group m-4">
                        <label class="list-group-item">
                            <input class="form-check-input me-1" type="checkbox"
                                onClick={(e) => {
                                    dispatch(detailCreator({ isPublic: e.currentTarget.value }))
                                }}
                                checked={ispublic} />
                            PUBLIC
                        </label>
                    </div>

                </div>
                <button className="btn btn-primary m-4" onClick={() => {
                    history.push("/qualification")
                }} >Next</button>
                <button className="btn btn-primary m-4" onClick={() => {
                    history.push("/")
                }} >Back</button>

            </div>

            <Preview />

        </div>
    </>
}

export default PersonalData;