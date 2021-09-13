let portReducer = (state = null, action) => {
    switch (action.type) {
        case "SET_PORT":
            return action.payload;
        default:
            return state;
    }
}
export default portReducer;