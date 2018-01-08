import {
    SET_SHARES,
    SET_STOCK_DETAIL
} from "desktop/actions/stock";


const initialState = {
    stocks: [],
    stockDetail: {
        imagesPath: {}
    }
};


const stockReducer = (state=initialState, action) => {
    switch(action.type) {
        case SET_SHARES:
            return {...state, stocks: action.stocks};
        case SET_STOCK_DETAIL:
            return {...state, stockDetail: action.stock};
        default:
            return state;
    }
};


export default stockReducer;