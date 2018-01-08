import {
    SET_INFO_ALL
} from "desktop/actions/core";


const initialState = {
    infoAll: {
        address: "",
        chat: "",
        companyName: "",
        email: "",
        headerWorkTime: "",
        phone: ["", ""],
        social: {}
    }
};


const coreReducer = (state=initialState, action) => {
    switch(action.type) {
        case SET_INFO_ALL:
            return {...state, infoAll: action.info};
        default:
            return state;
    }
};


export default coreReducer;