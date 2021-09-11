let initialState = {
    fname: "",
    lname: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    degree: "",
    clg: "",
    year: ""
}

let detailReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_DETAIL":
            return { ...state, ...action.payload }
        default:
            return state;
    }
}
export default detailReducer