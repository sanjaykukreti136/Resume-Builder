let initialState = {
    fname: "",
    lname: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    clg: "",
    deg: "",
    year: "",
    sem: "",
    cgpa: "",
    project: [],
    skills: [],
    ach: [],
    exp: [],
    myobj: [],
    temp: "",
    tempobj: {},
    isPublic: false,
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