import { useSelector } from "react-redux";
import "./css/preview.css"

let Preview = () => {

    let detailobj = useSelector(state => state.detail);
    let template = useSelector(state => state.template);
    let { fname, lname, email, phone, city, state } = detailobj;
    // console.log(fname + "hora");
    return <>
        <div className="preview-container" >
            <p className={`template-${template}`} >{fname}</p>
            <p className={`template-${template}`} >{lname}</p>
            <p className={`template-${template}`} >{email}</p>
            <p className={`template-${template}`} >{phone}</p>
            <p className={`template-${template}`} >{city}</p>
            <p className={`template-${template}`} >{state}</p>
        </div>
    </>
}

export default Preview;