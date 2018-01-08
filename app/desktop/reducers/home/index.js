import {
    HOME_PAGE
} from "desktop/actions/home";


const initialState = {
    slides: [],
    stocks: [],
    doctors: []
};


const homeReducer = (state=initialState, action) => {
    switch(action.type) {
        case HOME_PAGE:
            return {...state, slides: action.payload.slides, stocks: action.payload.stocks, doctors: action.payload.doctors};
        default:
            return state;
    }
};


export default homeReducer;