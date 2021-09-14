import { Link } from "react-router-dom";
import "./css/navbar.css"
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { detailCreator } from "./redux/actions/detailsAction"
import { firestorea } from "../firebase";
import { themeSelect } from "./redux/actions/themeAction";
let Navbar = () => {
    let myobjx = {};
    let { uid } = useSelector(state => (state.user) ? state.user : "");
    let dispatch = useDispatch();
    let history = useHistory();
    let obj = useSelector(state => state.detail);
    let objmy = [];
    let theme = useSelector(state => state.theme);
    console.log(theme + " ye hai theme ")
    return <>
        <nav class={`navbar navbar-dark ${theme == "light" ? "nav-m" : "nav-n"}`}>
            <div class="container-fluid">
                <Link to="/" className="navbar-brand" > <div class="a-link">SMART CV
                    <img id="#imgp" src="http://localhost:3000/lo.png" ></img></div>

                </Link>

            </div>
            <img id="img" className="profileimg" src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png" onClick={() => {


                firestorea.collection("resume").get().then((doc) => {
                    let de = doc.docs;

                    de.map((ele) => {

                        if (ele.data().detail == uid) {

                            myobjx = ele.data().uid;


                            objmy.push(myobjx);

                            dispatch(detailCreator({ myobj: objmy }));

                        }
                        console.log(uid + "  ---  " + ele.data().detail)

                    })
                }).then(() => {
                    history.push("/profile")
                })

            }} ></img>
            <button id="light" onClick={() => {
                theme == "light" ? dispatch(themeSelect("dark")) : dispatch(themeSelect("light"))
            }} >CLICK </button>
        </nav>
    </>
}

export default Navbar;