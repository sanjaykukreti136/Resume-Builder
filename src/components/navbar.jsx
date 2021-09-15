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
                    {/* <img id="#imgp" src="https://w7.pngwing.com/pngs/285/419/png-transparent-computer-icons-contract-document-symbol-miscellaneous-text-sign.png" ></img></div> */}
                </div>
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
            }} > <img id="ios" src={theme == "dark" ? "data:image/png;base64,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" :
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY0lhaWMEXS5Jx3MnE0vPntsl0T4Y4heGcKA&usqp=CAU"
            }></img> </button>
        </nav>
    </>
}

export default Navbar;