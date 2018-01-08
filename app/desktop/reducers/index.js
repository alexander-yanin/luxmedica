import { combineReducers } from "redux";

import core from "./core";
import home from "./home";
import stock from "./stock";
// import modal from "./components/modal/reducers";
import contact from "./contact";


const rootReducer = combineReducers({
    core,
    home,
    stock,
    // modal,
    contact
});

export default rootReducer;