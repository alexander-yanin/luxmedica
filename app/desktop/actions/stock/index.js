import config from "desktop/config";
import fetch from "cross-fetch";

/*
 * action types
 */

export const SET_SHARES = "SET_SHARES";
export const SET_STOCK_DETAIL = "SET_STOCK_DETAIL";



/*
 * action creators
 */

export const setShares = stocks => {
    return {
        type: SET_SHARES,
        stocks
    }
};

export const setStockDetail = stock => {
    return {
        type: SET_STOCK_DETAIL,
        stock
    }
};

/*
 * fetch
 */

export const fetchShares = () => {
    return async dispatch => {
        let response = await fetch(`${config.api}/stock`);
        let stocks = await response.json();
        dispatch(setShares(stocks));
    }
};

export const fetchStockDetail = id => {
    return async dispatch => {
        let response = await fetch(`${config.api}/stock/get?id=${id}`);
        let stock = await response.json();
        dispatch(setStockDetail(stock));
    }
};