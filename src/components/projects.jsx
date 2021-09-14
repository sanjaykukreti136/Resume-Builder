import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import "./css/personal.css"
import Preview from "./preview";
import { detailCreator } from "./redux/actions/detailsAction"
import { Save } from "./redux/actions/saveAction";
import { useState } from "react";
let Project = () => {

    let dispatch = useDispatch();
    let history = useHistory();
    let details = useSelector(state => state.detail);
    let projectss = details.project
    let pob = { name: "", des: "", tech: "", github: "" }
    console.log(details);
    let theme = useSelector(state => state.theme);

    return <>
        <div className="pro-container" >
            <div className={`bahr ${theme == "dark" ? "dark" : ""}`} >
                <div className="pro-data" >

                    <div class="row m-4">
                        <h2>PROJECTS</h2>
                        <div >
                            <input type="text" class="form-control" placeholder="Project Name"
                                onChange={(e) => {
                                    pob.name = e.currentTarget.value

                                    // dispatch(detailCreator({ clg: e.currentTarget.value }))
                                }} />
                        </div>
                        <div >
                            <input type="text" class="form-control" placeholder="Description"
                                onChange={(e) => {
                                    pob.des = e.currentTarget.value;

                                    // dispatch(detailCreator({ deg: e.currentTarget.value }))
                                }}
                            />
                        </div>
                        <div >
                            <input type="text" class="form-control" placeholder="Tech Used"
                                onChange={(e) => {

                                    pob.tech = e.currentTarget.value

                                    // dispatch(detailCreator({ sem: e.currentTarget.value }))
                                }} />
                        </div>
                        <div >
                            <input type="text" class="form-control" placeholder="Github Link"
                                onChange={(e) => {
                                    pob.github = e.currentTarget.value

                                }} />
                        </div>

                    </div>

                    <button className="btn btn-primary" onClick={() => {
                        projectss.push(pob);
                        dispatch(detailCreator({ project: projectss }))

                        history.push("/projects")
                    }} >ADD MORE</button>
                    <button className="btn btn-primary" onClick={() => {
                        projectss.push(pob);
                        dispatch(detailCreator({ project: projectss }))

                        history.push("/skills")
                    }} >Next</button>
                    <button className="btn btn-primary" onClick={() => {
                        history.push("/qualification")
                    }} >Back</button>

                </div>
            </div>
            <div className="pre">
                <Preview />
            </div>
        </div>
    </>
}

export default Project;