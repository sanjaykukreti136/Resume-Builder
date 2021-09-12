import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { firestorea } from "../firebase";
import "./css/publicpreview.css"
import { useSelector } from "react-redux";

let Public = () => {
    let [previewData, setPreviewData] = useState(null);
    let { rid } = useParams()
    useEffect(() => {
        firestorea.collection("resume").doc(rid).get().then((doc) => {
            let data = doc.data();
            setPreviewData(data);
        })
    }, [])
    let detailobj = useSelector(state => state.detail);
    //  let template = useSelector(state => state.template);
    //   if (previewData) 
    let { fname, lname, email, phone, city, state, clg, deg, sem, year, cgpa, project, skills, ach, exp } = (previewData) ? previewData.uid : "";

    // console.log(fname + "hora");
    // console.log(previewData.code);
    console.log(previewData)
    return <>
        {previewData ? (<>

            <div className="preview-container" >

                <p className={`template-${previewData.code}`} id="fname" >{fname + " " + lname}</p>

                <p className={`template-${previewData.code}`} id="email" >{email + "    " + phone + " " + city + " " + state}</p>
                <div className="main" >
                    <div className="left" >
                        <h3>Education</h3>
                        <hr size="8" width="25%" color="red" />
                        <h5 className={`template-${previewData.code}`} >{clg}</h5>
                        <p className={`template-${previewData.code}`} >{`${deg + " "}  Passing Out : ${year}`}</p>
                        <p className={`template-${previewData.code}`} >{`Sem :${sem + " "}`}</p>

                        <p className={`template-${previewData.code}`} >{`CGPA : ${cgpa}`}</p>
                        <h3>Projects</h3>
                        <hr size="8" width="25%" color="red" />
                        {

                            project.map((ele) => {
                                return <div className="projects" >
                                    <br />
                                    <h5>{ele.name}</h5>
                                    <p> {ele.des}</p>
                                    <p>{`TECH USED :${ele.tech}`}</p>
                                    <h6>{ele.github}</h6>
                                </div>
                            })
                        }
                    </div>
                    <div className="right">
                        <h3>Work Experience</h3>
                        <hr size="8" width="25%" color="red" />
                        {
                            exp.map((ele) => {
                                return <div className="exp" >

                                    <h5>{ele.company}</h5>
                                    <h6> {ele.role}</h6>
                                    <p>{ele.des}</p>

                                </div>
                            })
                        }

                        <h3>Skills</h3>
                        <hr size="8" width="50%" color="red" />
                        {
                            skills.map((ele) => {
                                return <p>{ele}</p>
                            })


                        }
                        <h3>Achievements</h3>
                        <hr size="8" width="50%" color="red" />
                        {
                            ach.map((ele) => {
                                return <p>{`•${ele}`}</p>
                            })
                        }
                    </div>
                </div>

            </div>
        </>) : ""}


    </>
}

export default Public;