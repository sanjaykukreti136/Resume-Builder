import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { firestorea } from "../firebase";
import "./css/prev.css"
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
    let template = (previewData ? previewData.code : "");

    return <>
        {(template == "D") ? <div className={`ttemplate-${template}-preview-container`} >

            <p className={`template-${template}-fname`} id="fname" >{fname + " " + lname}</p>

            <p className={`template-${template}-email`} id="email" >{email + "    " + phone + " " + city + " " + state}</p>

            <div className={`template-${template}-main`} >
                {(template == "C") ? <hr width="100%" ></hr> : ""}
                <div className={`template-${template}-left`}>
                    <h3>Education</h3>

                    {(template == "C") ? "" : <hr size="8" width="25%" color="red" />}
                    <h5 className={`template-${template}`} >{clg}</h5>
                    <p className={`template-${template}`} >{`${deg + " "}  Passing Out : ${year}`}</p>
                    <p className={`template-${template}`} >{`Sem :${sem + " "}`}</p>

                    <p className={`template-${template}`} >{`CGPA : ${cgpa}`}</p>
                    {template == "B" ? <hr /> : ""}
                    <h3>Work Experience</h3>
                    {(template == "C") ? "" : <hr size="8" width="100%" color="red" />}
                    {
                        exp.map((ele) => {
                            return <div className="exp" >

                                <h5>{ele.company}</h5>
                                <h6> {ele.role}</h6>
                                <p>{ele.des}</p>

                            </div>
                        })
                    }
                    {template == "B" ? <hr /> : ""}
                    <h3>Skills</h3>
                    {(template == "C") ? "" : <hr size="8" width="80px" color="red" />}
                    {
                        skills.map((ele) => {
                            return <p id="skills" >{ele}</p>
                        })


                    }

                </div>
                <div className={`template-${template}-right`}>
                    {template == "B" ? <hr /> : ""}
                    <h3>Projects</h3>

                    {(template == "C") ? "" : <hr size="8" width="25%" color="red" />}
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
                    {template == "B" ? <hr /> : ""}
                    <h3>Achievements</h3>
                    {(template == "C") ? "" : <hr size="8" width="180px" color="red" />}
                    {
                        ach.map((ele) => {
                            return <p>{`•${ele}`}</p>
                        })
                    }
                </div>
            </div>

        </div> : template == "AA" ? <div class="maina">

            <nav class="navbar navbar-expand-lg ">
                <div class="container-fluid">
                    <div id="first-a">
                        <a class="navbar-brand" id="first-a" href="#">{fname + " " + lname}</a>
                        <hr />
                    </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Education</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Skills</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Projects</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Achievements</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div class="rest">
                <div class="upper">
                    <img src="https://c.tenor.com/NOYF3f82b_gAAAAM/programmer.gif" />
                    <div class="upper-inner">
                        <h1></h1>
                        <h4>  </h4>

                    </div>

                </div>
                <div class="intro">
                    <h3>PERSONAL DETAILS</h3>
                    <p>EMAIL: {email}</p>
                    <p >PHONE: {phone}</p>
                    <p>ADDRESS: {city + " " + state}</p>
                </div>
            </div>

            <div class="education">
                <h3>EDUCATION</h3>
                <h4>{clg}</h4>
                <p>{deg}</p>
                <p>{`Batch : ${year - 4}  -  ${year}`}</p>
                <p>{`SEM - ${sem}`}</p>
                <p>{`CGPA  -  ${cgpa}`}</p>
            </div>

            <div class="skills">
                <h3>SKILLS</h3>
                <div class="sk">

                    {
                        skills.map((ele) => {
                            return <p  >{ele}</p>
                        })
                    }

                </div>
            </div>

            <div class="projects">
                <h3>PROJECTS</h3>
                <div class="px">

                    {
                        project.map((ele) => {
                            return <div class="pro">
                                <h4>{ele.name}</h4>
                                <p>{ele.des}</p>
                                <h5>{`TECH USED : ${ele.tech}`}</h5>
                                <a href="">{ele.github}</a>
                            </div>
                        })
                    }

                </div>
            </div>
            <div class="work">
                <h3>WORK EXPERIENCE</h3>
                <div class="px">

                    {
                        exp.map((ele) => {
                            return <div class="pro">
                                <h4>{ele.company}</h4>
                                <p>{ele.des}</p>
                                <h5>{ele.role}</h5>

                            </div>
                        })
                    }

                </div>
            </div>

            <div class="ach">
                <h3>ACHEIVEMENTS</h3>
                <div class="ac">
                    {
                        ach.map((ele) => {
                            return <h6>{`• ${ele}`}</h6>
                        })
                    }
                </div>
            </div>


        </div> :


            <div className={`ttemplate-${template}-preview-container`} >

                <p className={`template-${template}-fname`} id="fname" >{fname + " " + lname}</p>

                <p className={`template-${template}-email`} id="email" >{email + "    " + phone + " " + city + " " + state}</p>

                <div className={`template-${template}-main`} >
                    {(template == "C") ? <hr width="100%" ></hr> : ""}
                    <div className={`template-${template}-left`}>
                        <h3>Education</h3>

                        {(template == "C") ? "" : <hr size="8" width="25%" color="red" />}
                        <h5 className={`template-${template}`} >{clg}</h5>
                        <p className={`template-${template}`} >{`${deg + " "}  Passing Out : ${year}`}</p>
                        <p className={`template-${template}`} >{`Sem :${sem + " "}`}</p>

                        <p className={`template-${template}`} >{`CGPA : ${cgpa}`}</p>
                        {template == "B" ? <hr /> : ""}
                        <h3>Projects</h3>

                        {(template == "C") ? "" : <hr size="8" width="25%" color="red" />}
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
                    <div className={`template-${template}-right`}>
                        {template == "B" ? <hr /> : ""}
                        <h3>Work Experience</h3>
                        {(template == "C") ? "" : <hr size="8" width="100%" color="red" />}
                        {
                            exp.map((ele) => {
                                return <div className="exp" >

                                    <h5>{ele.company}</h5>
                                    <h6> {ele.role}</h6>
                                    <p>{ele.des}</p>

                                </div>
                            })
                        }
                        {template == "B" ? <hr /> : ""}
                        <h3>Skills</h3>
                        {(template == "C") ? "" : <hr size="8" width="80px" color="red" />}
                        {
                            skills.map((ele) => {
                                return <p id="skills" >{ele}</p>
                            })


                        }
                        {template == "B" ? <hr /> : ""}
                        <h3>Achievements</h3>
                        {(template == "C") ? "" : <hr size="8" width="180px" color="red" />}
                        {
                            ach.map((ele) => {
                                return <p>{`•${ele}`}</p>
                            })
                        }
                    </div>
                </div>

            </div>}

    </>
}

export default Public;