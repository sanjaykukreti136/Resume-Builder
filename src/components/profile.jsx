import { useEffect, useState } from "react";
import { useParams } from "react-router";

import "./css/preview.css"
import { useSelector } from "react-redux";
import { firestorea } from "../firebase";
let Profile = () => {
    let myobj = {};
    let { uid } = useSelector(state => state.user);

    firestorea.collection("resume").get().then((doc) => {
        let de = doc.docs;

        de.map((ele) => {

            if (ele.data().detail == uid) {

                myobj = ele.data().uid;

            }
            console.log(ele.data().uid);
        })
    }).then(() => {
        console.log(myobj);
        return <> <p>{myobj.lname}</p></>
    }).catch(() => {
        return "";
    })
    console.log(myobj + "kaisa hai ");


}

export default Profile;