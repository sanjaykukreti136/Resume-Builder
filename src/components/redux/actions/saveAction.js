import firestore from "firebase/firestore"
import { firestorea } from "../../../firebase"

export const saveResume = () => {
    return {
        type: "SAVE_RESUME",
    }
}

export const saveError = (err) => {
    return {
        type: "SAVE_ERROR",
        payload: err
    }
}

export const saveCompleted = (id) => {
    return {
        type: "SAVE_COMPLETED",
        payload: id
    }
}

export const Save = (uid, detail, code) => {
    return (dispatch) => {
        dispatch(saveResume());
        // saveResume(dispatch)
        firestorea.collection("resume").add({
            uid,
            detail,
            code
        }).then((docref) => {
            return docref.get();
        }).then((doc) => {
            dispatch(saveCompleted(doc.id))
        }).catch((err) => {
            dispatch(saveError(err))
        })
    }
}
