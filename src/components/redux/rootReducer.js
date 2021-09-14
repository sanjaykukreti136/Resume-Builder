import { combineReducers } from "redux";
import templateReducer from "./reducers/templateReducer";
import userReducer from "./reducers/userReducer"
import detailReducer from "./reducers/detailReducer"
import { saveReducer } from "./reducers/saveReducer"
import portReducer from "./reducers/portReducer"
import themeReducer from "./reducers/themeReducer"
let rootReducer = combineReducers({
    template: templateReducer,
    detail: detailReducer,
    user: userReducer,
    saveState: saveReducer,
    port: portReducer,
    theme: themeReducer,
})

export default rootReducer;