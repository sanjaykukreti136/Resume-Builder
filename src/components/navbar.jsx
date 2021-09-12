import { Link } from "react-router-dom";
import "./css/navbar.css"
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
let Navbar = () => {
    let history = useHistory();
    return <>
        <nav class="navbar navbar-dark bg-dark">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/">Resume Builder</Link>
                <img src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png" onClick={() => {
                    history.push("/")
                }} ></img>
            </div>
        </nav>
    </>
}

export default Navbar;