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

    return <>
        <div className="edu-container" >

            <div className="edu-data" >

                <div class="row m-4">
                    <h2>Achievements</h2>
                    <div class="col-4">
                        <input type="text" class="form-control" placeholder="College Name"
                            onChange={(e) => {
                                a = e.currentTarget.value;

                            }} />

                        <button className="btn btn-primary m-4" onClick={() => {
                            acha.push(a);
                            dispatch(detailCreator({ ach: acha }))
                            history.push("/ach")
                        }} >ADD MORE</button>
                    </div>
                </div>
                <button className="btn btn-primary m-4" onClick={() => {
                    history.push("/skills")
                }} >Next</button>
                <button className="btn btn-primary m-4" onClick={() => {
                    history.push("/skills")
                }} >Back</button>
                <button className="btn btn-primary m-4" onClick={() => {
                    dispatch(Save(details, uid, code))
                    //  history.push("/qualification")
                }} >Save to database</button>

                <button className="btn btn-primary m-4" onClick={() => {
                    alert(`localhost:3000/publicpreview/${id}`)
                }} >GENERATE LINK</button>

            </div>

            <Preview />

        </div>
    </>
}
export default Ach;