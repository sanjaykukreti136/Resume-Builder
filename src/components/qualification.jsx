import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import "./css/personal.css"
import Preview from "./preview";
import { detailCreator } from "./redux/actions/detailsAction"
import { Save } from "./redux/actions/saveAction";

let Qualification = () => {
    let dispatch = useDispatch();
    let history = useHistory();
    let details = useSelector(state => state.detail);
    let theme = useSelector(state => state.theme);
    return <>
        <div className="edu-container" >
            <div className={`bahr ${theme == "dark" ? "dark" : ""}`}>
                <div className="edu-data" >

                    <div class="row m-4"  >
                        <h2>Qualification</h2>
                        <div >
                            <input type="text" class="form-control" placeholder="College Name"
                                onChange={(e) => {
                                    dispatch(detailCreator({ clg: e.currentTarget.value }))
                                }} />
                        </div>
                        <div >
                            <input type="text" class="form-control" placeholder="Degree"
                                onChange={(e) => {
                                    dispatch(detailCreator({ deg: e.currentTarget.value }))
                                }}
                            />
                        </div>
                        <div >
                            <input type="text" class="form-control" placeholder="Semester"
                                onChange={(e) => {
                                    dispatch(detailCreator({ sem: e.currentTarget.value }))
                                }} />
                        </div>
                        <div >
                            <input type="text" class="form-control" placeholder="Passing Year"
                                onChange={(e) => {
                                    dispatch(detailCreator({ year: e.currentTarget.value }))
                                }} />
                        </div>

                        <div >
                            <input type="text" class="form-control" placeholder="CGPA"
                                onChange={(e) => {
                                    dispatch(detailCreator({ cgpa: e.currentTarget.value }))
                                }} />
                        </div>

                    </div>
                    <button className="btn btn-primary" onClick={() => {
                        history.push("/projects")
                    }} >Next</button>
                    <button className="btn btn-primary" onClick={() => {
                        history.push("/personal")
                    }} >Back</button>

                </div>
            </div>
            <div className="pre">
                <Preview />
            </div>
        </div>
    </>
}

export default Qualification;