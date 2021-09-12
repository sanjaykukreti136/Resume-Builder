import { Link } from "react-router-dom";
import "./css/navbar.css"
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { detailCreator } from "./redux/actions/detailsAction"
import { firestorea } from "../firebase";
let Navbar = () => {
    let myobjx = {};
    let { uid } = useSelector(state => (state.user) ? state.user : "");
    let dispatch = useDispatch();
    let history = useHistory();
    let obj = useSelector(state => state.detail);
    let objmy = [];
    return <>
        <nav class="navbar navbar-dark bg-dark">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/">Resume Builder</Link>
                <img src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png" onClick={() => {


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
            </div>
        </nav>
    </>
}

export default Navbar;