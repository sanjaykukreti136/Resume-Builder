import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import "./css/personal.css"
import Preview from "./preview";
import { detailCreator } from "./redux/actions/detailsAction"
import { Save } from "./redux/actions/saveAction";


let Ach = () => {

    let dispatch = useDispatch();
    let history = useHistory();
    let details = useSelector(state => state.detail);
    let acha = details.ach;
    let a = "";
    let { fname, llname, email, phone, city, state, deg, clg, year, ispublic } = details;
    //sconsole.log(details);
    let { id } = useSelector(state => state.saveState);
    let { uid } = useSelector(state => state.user);
    let code = useSelector(state => state.template);
    let theme = useSelector(state => state.theme);
    console.log(code + "   -  =  code ==");
    return <>
        <div className="ach-container" >
            <div className={`bahr ${theme == "dark" ? "dark" : ""}`}>
                <div className="ach-data" >

                    <div class="row m-4">
                        <h2>Achievements</h2>
                        <div >
                            <input type="text" class="form-control" placeholder="College Name"
                                onChange={(e) => {
                                    a = e.currentTarget.value;

                                }} />

                            <button className="btn btn-primary" onClick={() => {
                                acha.push(a);
                                dispatch(detailCreator({ ach: acha }))
                                history.push("/ach")
                            }} >ADD MORE</button>
                        </div>
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
                    <button className="btn btn-primary" onClick={() => {
                        history.push("/skills")
                    }} >Next</button>
                    <button className="btn btn-primary" onClick={() => {
                        history.push("/skills")
                    }} >Back</button>
                    <button className="btn btn-primary" onClick={() => {
                        dispatch(detailCreator({ temp: code }))
                        dispatch(Save(details, uid, code))
                        //  history.push("/qualification")
                    }} >SAVE</button>

                    <button className="btn btn-primary" onClick={() => {
                        alert(`localhost:3000/publicpreview/${id}`)
                    }} >GENERATE LINK</button>

                </div>
            </div>
            <div className="pre">
                <Preview />
            </div>
        </div>
    </>
}
export default Ach;