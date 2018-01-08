import {
    SET_PAGE
} from "desktop/actions/contact";


const initialState = {
    page: {
        title: "",
        content: ""
    }
};


const contactReducer = (state=initialState, action) => {
    switch(action.type) {
        case SET_PAGE:
            return {...state, page: action.page};
        default:
            return state;
    }
};


export default contactReducer;