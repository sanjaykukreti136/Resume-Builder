import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import "./css/personal.css"
import Preview from "./preview";
import { detailCreator } from "./redux/actions/detailsAction"
import { Save } from "./redux/actions/saveAction";


let Skills = () => {

    let dispatch = useDispatch();
    let history = useHistory();
    let details = useSelector(state => state.detail);
    let skill = details.skills;
    let projectss = details.exp
    let pob = { company: "", role: "", des: "" }
    let a = "";
    let theme = useSelector(state => state.theme);
    return <>
        <div className="skills-container" >
            <div className={`bahr ${theme == "dark" ? "dark" : ""}`}>
                <div className="skills-data" >

                    <div class="row m-4">
                        <h2>Skills</h2>
                        <div >
                            <input type="text" class="form-control" placeholder="College Name"
                                onChange={(e) => {
                                    a = e.currentTarget.value;

                                }} />

                            <button className="btn btn-primary" onClick={() => {
                                skill.push(a);
                                dispatch(detailCreator({ skills: skill }))
                                history.push("/skills")
                            }} >ADD MORE</button>
                        </div>
                        <h2>WORK EXPERIENCE</h2>
                        <div >
                            <input type="text" class="form-control" placeholder="Company Name"
                                onChange={(e) => {
                                    pob.company = e.currentTarget.value
                                }} />
                        </div>
                        <div >
                            <input type="text" class="form-control" placeholder="Role"
                                onChange={(e) => {
                                    pob.role = e.currentTarget.value
                                }}
                            />
                        </div>
                        <div >
                            <input type="text" class="form-control" placeholder="Description"
                                onChange={(e) => {
                                    pob.des = e.currentTarget.value
                                }} />
                        </div>

                    </div>

                    <button className="btn btn-primary" onClick={() => {

                        projectss.push(pob);
                        dispatch(detailCreator({ exp: projectss }));

                    }} >SAVE</button>
                    <button className="btn btn-primary" onClick={() => {
                        history.push("/ach")
                    }} >Next</button>
                    <button className="btn btn-primary" onClick={() => {
                        history.push("/projects")
                    }} >Back</button>

                </div>
            </div>

            <div className="pre">
                <Preview />
            </div>
        </div>
    </>
}

export default Skills;