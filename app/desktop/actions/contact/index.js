import config from "desktop/config";
import fetch from "cross-fetch";

/*
 * action types
 */

export const SET_PAGE = "SET_PAGE";



/*
 * action creators
 */

export const setPage = page => {
    return {
        type: SET_PAGE,
        page
    }
};

/*
 * fetch
 */

export const fetchPage = dispatch => {
    return async dispatch => {
        let response = await fetch(`${config.api}/page/get?alias=contact`);
        let page = await response.json();
        dispatch(setPage(page));
    }
};